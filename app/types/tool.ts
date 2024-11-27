export type ToolCategory = 'Email' | 'Name' | 'Username' | 'Password' | 'Phone' | 'Address' | 'Social Media' | 'Domain' | 'IP'

export interface Tool {
  id: string;
  name: string;
  description: string;
  url: string;
  categories: ToolCategory[];
}

