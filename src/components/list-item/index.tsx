import { ChevronRight } from 'lucide-react'
import { type ReactNode } from 'react'

export interface ListItemProps {
  title: string
  description?: string
  actions?: ReactNode
  onClick?: () => void
  showChevron?: boolean
}

export function ListItem({
  title,
  description,
  actions,
  onClick,
  showChevron = true,
}: ListItemProps) {
  return (
    <div className="bg-neutral-50 rounded-2xl p-5 shadow-card-default border border-gray-100 hover:shadow-card-hover transition-shadow duration-200">
      {}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-primary-600">{title}</h3>
        </div>
        {showChevron && (
          <button
            onClick={onClick}
            className="ml-4 text-gray-400 hover:text-primary-500 transition-colors cursor-pointer"
            aria-label="Expandir"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>

      {}
      {description && (
        <p className="text-sm text-gray-500 mb-4">{description}</p>
      )}

      {}
      {actions && <div className="border-t border-gray-100 mb-4" />}

      {}
      {actions && (
        <div className="flex items-center justify-end gap-3 flex-wrap">
          {actions}
        </div>
      )}
    </div>
  )
}
