import { FC, ReactNode } from 'react'
import classNames from 'classnames'

interface ButtonProps {
    type?: 'button' | 'submit' | 'reset'
    onClick?: () => void
    disabled?: boolean
    children: ReactNode
    className?: string
}

const Button: FC<ButtonProps> = ({
    type = 'button',
    onClick,
    disabled,
    children,
    className,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={classNames(
                'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
                className
            )}
        >
            {children}
        </button>
    )
}

export default Button
