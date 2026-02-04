import clsx from 'clsx'
import { X } from 'lucide-react'
import {
  type InputHTMLAttributes,
  type ReactNode,
  forwardRef,
  useState,
} from 'react'

export type TextFieldSize = 'sm' | 'md' | 'lg'
export type TextFieldVariant = 'outlined' | 'filled' | 'underlined' | 'boxed'
export type TextFieldState = 'default' | 'error'

export interface TextFieldProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size'
> {
  label?: string
  size?: TextFieldSize
  variant?: TextFieldVariant
  state?: TextFieldState
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  clearable?: boolean
  onClear?: () => void
  helperText?: string
  containerClassName?: string
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      size = 'md',
      variant = 'outlined',
      state = 'default',
      leftIcon,
      rightIcon,
      clearable = false,
      onClear,
      helperText,
      containerClassName,
      disabled,
      className,
      value,
      ...props
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false)
    const hasError = state === 'error'
    const hasValue = value !== undefined && value !== ''


    const baseStyles = clsx(
      'w-full',
      'font-sans',
      'transition-all duration-200',
      'placeholder:text-gray-400',
      'focus:outline-none',
      disabled && 'cursor-not-allowed opacity-50',
    )


    const hasFloatingLabel = variant === 'outlined' || variant === 'filled'
    const sizeStyles: Record<TextFieldSize, string> = {
      sm: clsx(
        'h-[38px] text-sm',
        label && hasFloatingLabel ? 'pt-2 pb-1' : 'py-2',
        leftIcon ? 'pl-9' : 'pl-3',
        rightIcon || clearable ? 'pr-9' : 'pr-3',
      ),
      md: clsx(
        'h-[48px] text-base',
        label && hasFloatingLabel ? 'pt-2.5 pb-1' : 'py-3',
        leftIcon ? 'pl-11' : 'pl-4',
        rightIcon || clearable ? 'pr-11' : 'pr-4',
      ),
      lg: clsx(
        'h-[56px] text-lg',
        label && hasFloatingLabel ? 'pt-3 pb-2 ' : 'py-4',
        leftIcon ? 'pl-14' : 'pl-5',
        rightIcon || clearable ? 'pr-14' : 'pr-5',
      ),
    }


    const iconSizes: Record<TextFieldSize, number> = {
      sm: 16,
      md: 18,
      lg: 20,
    }


    const leftIconPosition: Record<TextFieldSize, string> = {
      sm: 'left-3',
      md: 'left-4',
      lg: 'left-5',
    }

    const rightIconPosition: Record<TextFieldSize, string> = {
      sm: 'right-3',
      md: 'right-4',
      lg: 'right-5',
    }


    const variantStyles: Record<TextFieldVariant, string> = {
      outlined: clsx(
        'border  bg-transparent rounded-lg ',
        hasError
          ? 'border-error-500 focus:border-error-500 focus:ring-2 focus:ring-error-200 text-error-500'
          : disabled
            ? 'border-gray-200'
            : isFocused
              ? 'border-primary-500 ring-2 ring-primary-200 text-primary-700'
              : 'border-gray-300 hover:border-primary-400 text-primary-700 border-primary-700',
      ),
      filled: clsx(
        'border-0 border-b-2 rounded-t-lg',
        hasError
          ? 'bg-error-50 border-error-500 focus:bg-error-50 text-error-500'
          : disabled
            ? 'border-gray-200 bg-gray-100/50'
            : isFocused
              ? 'bg-primary-50 border-primary-500 hover:bg-primary-50/90 text-primary-700'
              : 'bg-primary-50/50 border-primary-300 hover:bg-primary-50/90 text-primary-700',
      ),
      underlined: clsx(
        'border-0 border-b-2 bg-transparent rounded-none px-1',
        hasError
          ? 'border-error-500 text-error-500 '
          : disabled
            ? 'border-gray-200'
            : isFocused
              ? 'border-primary-500 text-primary-700 hover:border-primary-400'
              : ' hover:border-primary-400 text-primary-700 border-primary-300',
      ),
      boxed: clsx(
        'border bg-transparent rounded-lg',
        hasError
          ? 'border-error-500 focus:border-error-500 focus:ring-2 focus:ring-error-200 text-error-500'
          : disabled
            ? 'border-gray-200'
            : isFocused
              ? 'border-primary-500 ring-2 ring-primary-200 text-primary-700'
              : 'border-gray-300 hover:border-primary-400 text-primary-700 border-primary-700',
      ),
    }


    const labelSizeMap: Record<TextFieldSize, string> = {
      sm: 'text-sm -top-2 left-3',
      md: 'text-base -top-2.5 left-3',
      lg: 'text-lg -top-3 left-3',
    }

    const floatingLabelStyles = clsx(
      'absolute px-1 pointer-events-none transition-all duration-200 ',
      labelSizeMap[size],
      variant === 'outlined' && 'bg-white',
      variant === 'filled' &&
        (isFocused ? '' : hasError ? 'text-error-500' : ''),
      hasError
        ? 'text-error-500 font-semibold'
        : disabled
          ? 'text-gray-400 font-semibold'
          : isFocused
            ? 'text-primary-600 font-semibold'
            : 'text-primary-600 font-semibold',
    )

    const traditionalLabelStyles = clsx(
      'block mb-1.5 text-sm font-semibold',
      hasError
        ? 'text-error-500'
        : disabled
          ? 'text-gray-400'
          : 'text-primary-600',
    )

    const labelStyles = hasFloatingLabel
      ? floatingLabelStyles
      : traditionalLabelStyles


    const helperTextStyles = clsx(
      'mt-1.5 text-xs',
      hasError ? 'text-error-500' : 'text-gray-500',
    )

    return (
      <div className={clsx('w-full', containerClassName)}>
        {}
        {label && !hasFloatingLabel && (
          <label className={labelStyles}>{label}</label>
        )}

        <div className="relative">
          {}
          {label && hasFloatingLabel && (
            <label className={labelStyles}>{label}</label>
          )}

          {}
          {leftIcon && (
            <div
              className={clsx(
                'absolute top-1/2 -translate-y-1/2 pointer-events-none',
                leftIconPosition[size],
                hasError
                  ? 'text-error-500'
                  : disabled
                    ? 'text-gray-400'
                    : isFocused
                      ? 'text-primary-500'
                      : 'text-primary-500',
              )}
            >
              {leftIcon}
            </div>
          )}

          {}
          <input
            ref={ref}
            disabled={disabled}
            value={value}
            className={clsx(
              baseStyles,
              sizeStyles[size],
              variantStyles[variant],
              className,
              '',
            )}
            onFocus={(e) => {
              setIsFocused(true)
              props.onFocus?.(e)
            }}
            onBlur={(e) => {
              setIsFocused(false)
              props.onBlur?.(e)
            }}
            {...props}
          />

          {}
          {(rightIcon || (clearable && hasValue && !disabled)) && (
            <div
              className={clsx(
                'absolute top-1/2 -translate-y-1/2',
                rightIconPosition[size],
              )}
            >
              {clearable && hasValue && !disabled ? (
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault()
                    onClear?.()
                  }}
                  className={clsx(
                    'p-0.5 rounded-full transition-colors duration-200',
                    'hover:bg-gray-200',
                    hasError
                      ? 'text-error-500'
                      : isFocused
                        ? 'text-primary-500'
                        : 'text-gray-400',
                  )}
                  aria-label="Limpar campo"
                >
                  <X size={iconSizes[size]} strokeWidth={2} />
                </button>
              ) : (
                <div
                  className={clsx(
                    hasError
                      ? 'text-error-500'
                      : disabled
                        ? 'text-gray-400'
                        : isFocused
                          ? 'text-primary-500'
                          : 'text-primary-500'
                  )}
                >
                  {rightIcon}
                </div>
              )}
            </div>
          )}
        </div>

        {helperText && <p className={helperTextStyles}>{helperText}</p>}
      </div>
    )
  },
)

TextField.displayName = 'TextField'
