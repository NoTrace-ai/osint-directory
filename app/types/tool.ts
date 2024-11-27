export type ToolCategory = 'Email' | 'Name' | 'Username' | 'Password' | 'Phone' | 'Address' | 'Social Media' | 'Domain' | 'IP' | 'API' | 'Free'

export interface Tool {
  id: string;
  name: string;
  description: string;
  url: string;
  categories: ToolCategory[];
}
