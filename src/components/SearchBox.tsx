import { useRef } from 'react'

interface SearchBoxProps {
  value: string
  onChange: (value: string) => void
}

const label = 'Поиск экспонатов / 搜索展品'

function SearchBox({ value, onChange }: SearchBoxProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  const clear = () => {
    onChange('')
    inputRef.current?.focus()
  }

  return (
    <div className="search-box" role="search">
      <svg
        className="search-box-icon"
        viewBox="0 0 24 24"
        width="20"
        height="20"
        aria-hidden="true"
      >
        <circle cx="10.5" cy="10.5" r="6.5" />
        <line x1="15.5" y1="15.5" x2="21" y2="21" />
      </svg>
      <input
        ref={inputRef}
        className="search-box-input"
        type="search"
        aria-label={label}
        placeholder={label}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Escape' && value) {
            event.preventDefault()
            clear()
          }
        }}
      />
      {value && (
        <button
          type="button"
          className="search-box-clear"
          aria-label="Очистить поиск / 清除搜索"
          onClick={clear}
        >
          ×
        </button>
      )}
    </div>
  )
}

export default SearchBox
