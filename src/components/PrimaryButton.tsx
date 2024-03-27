import type { ButtonHTMLAttributes} from 'react';
interface ButtonGroupProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children : React.ReactNode,
    className ?: string,
    disabled ?: boolean
}

const PrimaryButton = ({className,disabled,children,...props}:ButtonGroupProps) => {
  return (
    <button
    {...props}
    className={
        `w-full text-center text-light text-lg py-2 mt-8 ${disabled ? 'bg-semiLight' : 'bg-dark'} ${className}`
    }
    disabled={disabled}
>
    {children}
</button>
  )
}

export default PrimaryButton