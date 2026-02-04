import clsx from 'clsx'

export interface RadialProgressProps {
  percentage: number
  size?: 'sm' | 'md' | 'lg'
  isDark?: boolean
  className?: string
}

export function RadialProgress({
  percentage,
  size = 'md',
  isDark = false,
  className,
}: RadialProgressProps) {
  const sizeStyles = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-20 h-20',
  }

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  }


  const radius = 36
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div className={clsx('relative inline-flex', sizeStyles[size], className)}>
      <svg
        className="transform -rotate-90"
        width="100%"
        height="100%"
        viewBox="0 0 80 80"
      >
        {}
        <circle
          cx="40"
          cy="40"
          r={radius}
          stroke={isDark ? '#374151' : '#E5E7EB'}
          strokeWidth="6"
          fill="none"
        />
        {}
        <circle
          cx="40"
          cy="40"
          r={radius}
          stroke="#6627C7"
          strokeWidth="6"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-500 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className={clsx(
            'font-bold',
            textSizes[size],
            isDark ? 'text-white' : 'text-black-500',
          )}
        >
          {percentage}%
        </span>
      </div>
    </div>
  )
}
