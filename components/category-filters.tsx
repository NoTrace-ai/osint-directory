import { Badge } from "@/components/ui/badge"
import { ToolCategory } from '@/app/types/tool'

interface CategoryFiltersProps {
  categories: ToolCategory[]
  selectedCategories: ToolCategory[]
  onToggleCategory: (category: ToolCategory) => void
}

export function CategoryFilters({ 
  categories, 
  selectedCategories, 
  onToggleCategory 
}: CategoryFiltersProps) {
  return (
    <div className="w-full py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <Badge
              key={category}
              variant={selectedCategories.includes(category) ? "default" : "outline"}
              className="cursor-pointer transition-colors duration-200"
              onClick={() => onToggleCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}