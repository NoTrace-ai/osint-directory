'use client'

import { useState } from 'react'
import { tools } from '@/app/data/tools'
import ToolCard from '@/components/tool-card'
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ToolCategory } from '@/app/types/tool'

const allCategories: ToolCategory[] = ['Email', 'Name', 'Username', 'Password', 'Phone', 'Address', 'Social Media', 'Domain', 'IP', 'API', 'Free']

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<ToolCategory[]>([])

  const filteredTools = tools.filter(tool => 
    (tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     tool.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedCategories.length === 0 || selectedCategories.some(cat => tool.categories.includes(cat)))
  )

  const toggleCategory = (category: ToolCategory) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-4xl font-bold mb-6 text-center">       
        <h1 className='mb-[-12px]'>OSINT Tools Directory</h1>     
        <span className="text-sm font-medium font-mono text-gray-600 hover:text-gray-500">
          osint.henr.ee
        </span> 
      </div>
      <div className="mb-8">
        <Input
          type="text"
          placeholder="Search tools..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-4"
        />
        <div className="flex flex-wrap gap-2 mb-4">
          {allCategories.map(category => (
            <Badge
              key={category}
              variant={selectedCategories.includes(category) ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => toggleCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTools.map(tool => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  )
}

