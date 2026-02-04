import clsx from 'clsx'

export interface AvatarGroupProps {
  avatars: string[]
  max?: number
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function AvatarGroup({
  avatars,
  max = 4,
  size = 'md',
  className,
}: AvatarGroupProps) {
  const visibleAvatars = avatars.slice(0, max)
  const remainingCount = Math.max(0, avatars.length - max)

  const sizeStyles = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  }

  const textSizes = {
    sm: 'text-[10px]',
    md: 'text-xs',
    lg: 'text-sm',
  }

  return (
    <div className={clsx('flex items-center', className)}>
      <div className="flex -space-x-2">
        {visibleAvatars.map((avatar, index) => (
          <div
            key={index}
            className={clsx(
              sizeStyles[size],
              'rounded-full border-2 border-white bg-gray-200 overflow-hidden',
              'ring-2 ring-white',
            )}
          >
            <img
              src={avatar}
              alt={`Avatar ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {remainingCount > 0 && (
          <div
            className={clsx(
              sizeStyles[size],
              'rounded-full border-2 border-white bg-primary-500',
              'ring-2 ring-white',
              'flex items-center justify-center',
              'font-semibold text-white',
              textSizes[size],
            )}
          >
            +{remainingCount}
          </div>
        )}
      </div>
    </div>
  )
}
