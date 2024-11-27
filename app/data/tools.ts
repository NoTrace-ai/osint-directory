import { Tool } from '@/app/types/tool'

export const tools: Tool[] = [
  {
    id: '1',
    name: 'Hunter.io',
    description: 'Find email addresses in seconds and connect with the people that matter for your business.',
    url: 'https://hunter.io/',
    categories: ['Email', 'Domain']
  },
  {
    id: '2',
    name: 'Sherlock',
    description: 'Hunt down social media accounts by username across social networks.',
    url: 'https://github.com/sherlock-project/sherlock',
    categories: ['Username', 'Social Media']
  },
  {
    id: '3',
    name: 'Have I Been Pwned',
    description: 'Check if your email or phone is in a data breach.',
    url: 'https://haveibeenpwned.com/',
    categories: ['Email', 'Password', 'Phone']
  },
  {
    id: '4',
    name: 'Maltego',
    description: 'Interactive data mining tool that renders directed graphs for link analysis.',
    url: 'https://www.maltego.com/',
    categories: ['Email', 'Domain', 'IP', 'Social Media']
  },
  {
    id: '5',
    name: 'Shodan',
    description: 'Search engine for Internet-connected devices.',
    url: 'https://www.shodan.io/',
    categories: ['IP', 'Domain']
  },
  {
    id: '6',
    name: 'Pipl',
    description: 'The world\'s largest people search engine.',
    url: 'https://pipl.com/',
    categories: ['Name', 'Email', 'Phone', 'Address', 'Username']
  },
  {
    id: '7',
    name: 'Spyse',
    description: 'Internet assets registry: networks, domains, websites, SSL/TLS certificates, etc.',
    url: 'https://spyse.com/',
    categories: ['Domain', 'IP']
  },
  {
    id: '8',
    name: 'theHarvester',
    description: 'Gather emails, subdomains, hosts, employee names, open ports and banners from different public sources.',
    url: 'https://github.com/laramies/theHarvester',
    categories: ['Email', 'Domain', 'IP']
  },
  {
    id: '9',
    name: 'Recon-ng',
    description: 'Full-featured Web Reconnaissance framework written in Python.',
    url: 'https://github.com/lanmaster53/recon-ng',
    categories: ['Name', 'Email', 'Domain', 'IP']
  },
  {
    id: '10',
    name: 'Metagoofil',
    description: 'Extracts metadata of public documents (pdf, doc, xls, ppt, etc) from websites.',
    url: 'https://github.com/laramies/metagoofil',
    categories: ['Domain']
  }
]

