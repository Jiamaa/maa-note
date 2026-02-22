'use client'

export interface BadgeOption {
  value: string
  label: string
  color: string      // bg color, e.g. "bg-red-400"
  textColor: string  // text color, e.g. "text-white"
  dotColor?: string  // optional dot untuk status
}

interface BadgePickerProps {
  label: string
  value: string
  options: BadgeOption[]
  onChange: (value: string) => void
  error?: string
  withDot?: boolean
}

export default function BadgePicker({
  label,
  value,
  options,
  onChange,
  error,
  withDot = false,
}: BadgePickerProps) {
  const handleClick = (optValue: string) => {
    // Klik badge yg sudah selected → deselect (clear)
    onChange(value === optValue ? '' : optValue)
  }

  return (
    <div>
      <label className="block text-l font-bold mb-1">{label}</label>

      {/* Container badge inline */}
      <div
        className={`w-full border rounded p-2 flex flex-row flex-wrap gap-2 min-h-[42px]
          ${error ? 'border-red-400' : 'border-[#D9D9D9]'}
        `}
      >
        {options.map((opt) => {
          const isSelected = value === opt.value
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => handleClick(opt.value)}
              className={`
                inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium
                transition-all cursor-pointer select-none
                ${opt.color} ${opt.textColor}
                ${isSelected
                  ? 'ring-2 ring-offset-1 scale-105'
                  : 'opacity-50 hover:opacity-80'
                }
              `}
            >
              {withDot && (
                <span className={`w-2 h-2 rounded-full ${opt.dotColor}`} />
              )}
              {opt.label}
            </button>
          )
        })}
      </div>

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  )
}