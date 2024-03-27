import type { InputHTMLAttributes} from 'react';
interface InputGroupProps extends InputHTMLAttributes<HTMLInputElement> {
    className ?: string,
    type ?: string,
    isFocused ?: boolean
}
const TextInput = ({className,type = 'text',isFocused,...props}:InputGroupProps) => {
  return (
    <input
    {...props}
    type={type}
    className={
        `w-full border-0 border-b border-gray-400 focus:outline-none focus:border-semiDark focus:ring-0 text-lg py-2 ${className}`
    }
    />  
  )
}

export default TextInput