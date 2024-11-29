export const allCategories = ['Email', 'Name', 'Username', 'Password', 'Phone', 'Address', 'Social Media', 'Domain', 'Metadata', 'Images', 'IP', 'API', 'Free'] as const

export type ToolCategory = typeof allCategories[number]

export interface Tool {
  name: string;
  description: string;
  url: string;
  categories: ToolCategory[];
}
