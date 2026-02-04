import clsx from 'clsx'
import { ChevronRight } from 'lucide-react'
import { type ReactNode } from 'react'

export type NavigationRowCardDensity = 'default' | 'compact'

export interface NavigationRowCardProps {
  title: string
  subhead: string
  image?: ReactNode | string
  density?: NavigationRowCardDensity
  isLast?: boolean
  onClick?: () => void
  className?: string
}

export function NavigationRowCard({
  title,
  subhead,
  image,
  density = 'default',
  isLast = false,
  onClick,
  className,
}: NavigationRowCardProps) {
  const isCompact = density === 'compact'


  const renderMedia = () => {
    if (typeof image === 'string') {
      return (
        <img src={image} alt={title} className="w-full h-full object-cover" />
      )
    }
    if (image) {
      return image
    }
    return null
  }

  return (
    <button
      onClick={onClick}
      className={clsx(
        'w-full flex items-center',
        'transition-all duration-200',
        'cursor-pointer',
        'hover:bg-primary-50/30',
        !isLast && 'border-b border-gray-100',
        isCompact ? 'py-3 px-4 gap-3' : 'py-4 px-6 gap-4',
        className,
      )}
    >
      {}
      <div
        className={clsx(
          'flex-shrink-0 rounded-lg bg-gray-100 overflow-hidden',
          isCompact ? 'w-12 h-12' : 'w-16 h-16',
        )}
      >
        {renderMedia()}
      </div>

      {}
      <div className="flex-shrink-0">
        <ChevronRight
          size={isCompact ? 20 : 24}
          strokeWidth={1.5}
          className="text-gray-300"
        />
      </div>

      {}
      <div className="flex-1 text-left min-w-0">
        <h3
          className={clsx(
            'font-semibold text-black-500 mb-0.5 truncate',
            isCompact ? 'text-sm' : 'text-base',
          )}
        >
          {title}
        </h3>
        <p
          className={clsx(
            'text-primary-500 truncate',
            isCompact ? 'text-xs' : 'text-sm',
          )}
        >
          {subhead}
        </p>
      </div>

      {}
      <div className="flex-shrink-0">
        <ChevronRight
          size={isCompact ? 18 : 20}
          strokeWidth={2}
          className="text-gray-400 transition-transform duration-200 group-hover:translate-x-1"
        />
      </div>
    </button>
  )
}
