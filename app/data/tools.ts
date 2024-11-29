import { Tool } from '@/app/types/tool'

export const tools: Tool[] = [
  {
    name: 'Hunter.io',
    description: 'Find email addresses in seconds and connect with the people that matter for your business.',
    url: 'https://hunter.io/',
    categories: ['Email', 'Domain', 'API']
  },
  {
    name: 'Sherlock',
    description: 'Hunt down social media accounts by username across social networks.',
    url: 'https://github.com/sherlock-project/sherlock',
    categories: ['Username', 'Social Media', 'Free']
  },
  {
    name: 'Have I Been Pwned',
    description: 'Check if your email or password is in a data breach.',
    url: 'https://haveibeenpwned.com/',
    categories: ['Email', 'Password', 'API', 'Free']
  },
  {
    name: 'Maltego',
    description: 'Interactive data mining tool that renders directed graphs for link analysis.',
    url: 'https://www.maltego.com/',
    categories: ['Email', 'Domain', 'IP', 'Social Media', 'API']
  },
  {
    name: 'Shodan',
    description: 'Search engine for Internet-connected devices.',
    url: 'https://www.shodan.io/',
    categories: ['IP', 'Domain', 'API']
  },
  {
    name: 'Pipl',
    description: 'The world\'s largest people search engine.',
    url: 'https://pipl.com/',
    categories: ['Name', 'Email', 'Phone', 'Address', 'Username', 'API']
  },
  {
    name: 'Spyse',
    description: 'Internet assets registry: networks, domains, websites, SSL/TLS certificates, etc.',
    url: 'https://spyse.com/',
    categories: ['Domain', 'IP', 'API']
  },
  {
    name: 'theHarvester',
    description: 'Gather emails, subdomains, hosts, employee names, open ports and banners from different public sources.',
    url: 'https://github.com/laramies/theHarvester',
    categories: ['Email', 'Domain', 'IP', 'Free']
  },
  {
    name: 'Recon-ng',
    description: 'Full-featured Web Reconnaissance framework written in Python.',
    url: 'https://github.com/lanmaster53/recon-ng',
    categories: ['Name', 'Email', 'Domain', 'IP', 'Free']
  },
  {
    name: 'Metagoofil',
    description: 'Extracts metadata of public documents (pdf, doc, xls, ppt, etc) from websites.',
    url: 'https://github.com/laramies/metagoofil',
    categories: ['Domain', 'Free']
  }
]
