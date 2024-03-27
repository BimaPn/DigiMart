'use client'
import React,{useState} from 'react'
import varriants from '@/assets/varriants'

const Varriants = () => {
    const [color,setColor] = useState<number>(0)
  return (
    <div className='border-t py-4 mt-4 text-sm'>
      {varriants.map((item, index) => (
        <div key={index} className={`${index > 0 && 'mt-5'}`}>
          <h1 className='font-bold text-lg'>{item.name}</h1>
          <div className='flex flex-wrap gap-3 mt-2'>
            {index !== 0
              ? item.types.map((type, typeIndex) => (
                  <div
                    key={typeIndex}
                    className={`w-fit px-4 py-2 border ${
                      typeIndex === 1 ? ' border-gray-800  text-gray-800' : 'text-gray-400'
                    } rounded-lg`}
                  >
                    {type.name}
                  </div>
                ))
              : item.types.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    onClick={() => setColor(itemIndex)}
                    className={`w-8 aspect-square rounded-full ${itemIndex === color && 'p-[2px] border border-dark'}`}
                  >
                    <div className='w-full aspect-square rounded-full' style={{ backgroundColor: item.hexa_code }}></div>
                  </div>
                ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Varriants