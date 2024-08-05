import { FC, ChangeEvent } from 'react'
import classNames from 'classnames'

interface InputProps {
    type?: 'text' | 'password' | 'email'
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    className?: string
}

const Input: FC<InputProps> = ({
    type = 'text',
    value,
    onChange,
    placeholder,
    className,
}) => {
    return (
        <div className="mb-5">
            <label
                htmlFor={type}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                {placeholder}
            </label>
            <input
                id={type}
                className={classNames(
                    className,
                    'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                )}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    )
}

export default Input
