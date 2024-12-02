export const allCategories = [
'Email',
'Name',
'Username',
'Password',
'Phone',
'Address',
'Social Media',
'Domain',
'IP',
'Network Analysis',
'Metadata',
'Images',
'Videos',
'Documents',
'Geolocation',
'People',
'Company',
'Data Breaches',
'Threat Intelligence',
'Dark Web',
'Github',
'Monitoring',
'API',
'Free',
'Paid',
'Miscellaneous'
] as const


export type ToolCategory = typeof allCategories[number]

export interface Tool {
  name: string;
  description: string;
  url: string;
  categories: ToolCategory[];
}
