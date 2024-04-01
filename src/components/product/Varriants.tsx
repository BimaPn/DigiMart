'use client'
import {useState} from 'react'

const Varriants = ({variants, onChange}:{variants:Variant[], onChange:(pickedValue:PickedVariant) => void}) => {
  const [pickedValues, setPickedValues] = useState<Map<number, string>>(new Map())

  const buttonClick = (pickedValue:PickedVariant, option:Map<number,string>) => {
    setPickedValues(option)
    onChange(pickedValue)
  }
  return (
    <div className='border-t py-4 mt-4 text-sm'>
      {variants.map((item, index) => (
        <div key={index} className={`${index > 0 && 'mt-5'}`}>
          <h1 className='font-bold text-lg'>{item.label}</h1>
          <div className='flex flex-wrap gap-3 mt-2'>
            {item.options.map((option,optionIndex) => (
              <button
              key={optionIndex}
              onClick={() => buttonClick({label:item.label,value:option},new Map().set(index, option))}
              className={`w-fit px-4 py-2 border rounded-lg ${pickedValues.get(index) === option ? ' border-gray-800  text-gray-800' : 'text-gray-400'}`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Varriants

