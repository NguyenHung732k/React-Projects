import React from 'react';

const LabelInput = ({
    id,
    label,
    type = 'text',
    value,
    onChange,
    placeholder = ' ',
    helperText = '',
    error = '',
    required = false,
    disabled = false,
    icon = null,
}) => {
    return (
        <div className="relative w-full">
            {icon && (
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    {icon}
                </div>
            )}

            <input
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                disabled={disabled}
                className={`
          peer w-full appearance-none bg-white dark:bg-gray-800 border rounded-md
          ${icon ? 'pl-10 pr-3' : 'px-3'} pt-5 pb-2 text-sm
           placeholder-transparent
          transition-all duration-200
          focus:outline-none focus:ring-2
          ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'}
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        `}
            />

            <label
                htmlFor={id}
                className={`
          absolute left-3 ${icon ? 'left-10' : 'left-3'} top-2 text-sm text-gray-500 dark:text-gray-400
          transition-all duration-200
          peer-placeholder-shown:top-3.5
          peer-placeholder-shown:text-base
          peer-placeholder-shown:text-gray-400
          peer-focus:top-2
          peer-focus:text-sm
          ${error ? 'text-red-500 peer-focus:text-red-500' : 'peer-focus:text-blue-500'}
        `}
            >
                {label}
            </label>

            {(helperText || error) && (
                <p className={`mt-1 text-xs ${error ? 'text-red-500' : 'text-gray-500 dark:text-gray-400'}`}>
                    {error || helperText}
                </p>
            )}
        </div>
    )
}

export default LabelInput