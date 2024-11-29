'use client'

import { useState } from 'react'
import Link from 'next/link'
import { tools } from '@/app/data/tools'
import ToolCard from '@/components/tool-card'
import { ToolCategory, allCategories } from '@/app/types/tool'
import { SearchBar } from '@/components/search-bar'
import { CategoryFilters } from '@/components/category-filters'

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<ToolCategory[]>([])

  const filteredTools = tools.filter(tool => 
    (tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     tool.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedCategories.length === 0 || selectedCategories.some(cat => tool.categories.includes(cat)))
  ).sort((a, b) => a.name.localeCompare(b.name))

  const toggleCategory = (category: ToolCategory) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

  return (
    <div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-14">
        <div className="text-4xl font-bold mb-6 text-center">       
          <h1 className='mb-[-12px]'>OSINT Tools Directory</h1>    
          <Link href="/">
            <span className="text-sm font-medium font-mono text-gray-600 hover:text-gray-500">
              osint.broker
            </span> 
          </Link>
        </div>
        <div className="max-w-2xl mx-auto">
          <SearchBar
            value={searchTerm}
            onChange={setSearchTerm}
          />
        </div>
      </div>
      
      <CategoryFilters
        categories={[...allCategories]}
        selectedCategories={selectedCategories}
        onToggleCategory={toggleCategory}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map(tool => (
            <ToolCard key={tool.name} tool={tool} />
          ))}
        </div>
      </div>
    </div>
  )
}