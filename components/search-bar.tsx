import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { useState } from 'react'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  className?: string
}

export function SearchBar({ value, onChange, className }: SearchBarProps) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className={cn('relative', className)}>
      <div className={cn(
        'absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 transition-all duration-200',
        isFocused && 'text-gray-600'
      )}>
        <Search className="h-5 w-5" />
      </div>
      <Input
        type="text"
        placeholder="Search OSINT tools..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={cn(
          'pl-10 pr-4 h-12 text-lg transition-colors duration-200',
          'border-2 hover:border-gray-400',
          isFocused && 'border-gray-600 shadow-lg',
          'placeholder:text-gray-400 placeholder:transition-all',
          isFocused && 'placeholder:text-gray-500'
        )}
      />
    </div>
  )
}