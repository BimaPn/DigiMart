'use client'

const Varriants = (
{
  pickedVariants, 
  variants, 
  onChange
}:
{
  pickedVariants:PickedVariant[],
  variants:Variant[],
  onChange:(pickedValue:PickedVariant) => void
}
) => {
  const buttonClick = (pickedValue:PickedVariant) => {
    onChange(pickedValue)
  }
  return (
    <div className='border-t py-4 mt-4 text-sm'>
      {variants.map((item, index) => (
        <div key={index} className={`${index > 0 && 'mt-5'}`}>
          <h1 className='font-medium text-lg'>{item.label}</h1>
          <div className='flex flex-wrap gap-3 mt-2'>
            {item.options.map((option,optionIndex) => (
              <button
              key={optionIndex}
              onClick={() => buttonClick({label:item.label,value:option})}
              className={`w-fit px-4 py-2 border rounded-lg
              ${pickedVariants[index].value.includes(option) ? ' border-gray-800  text-gray-800' : 'text-gray-400'}`}
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

