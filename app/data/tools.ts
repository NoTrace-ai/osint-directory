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
    categories: ['Username', 'Social Media', 'Free', 'Github']
  },
  {
    name: 'Have I Been Pwned',
    description: 'Check if your email or password is in a data breach.',
    url: 'https://haveibeenpwned.com/',
    categories: ['Email', 'Password', 'Data Breaches', 'API', 'Free']
  },
  {
    name: 'Maltego',
    description: 'Interactive data mining tool that renders directed graphs for link analysis.',
    url: 'https://www.maltego.com/',
    categories: ['Email', 'Domain', 'IP', 'Social Media', 'API', 'Metadata', 'People']
  },
  {
    name: 'Shodan',
    description: 'Search engine for Internet-connected devices.',
    url: 'https://www.shodan.io/',
    categories: ['IP', 'Domain', 'Network Analysis', 'API']
  },
  {
    name: 'Pipl',
    description: 'The world\'s largest people search engine.',
    url: 'https://pipl.com/',
    categories: ['Name', 'Email', 'Phone', 'Address', 'Username', 'People', 'API']
  },
  {
    name: 'Spyse',
    description: 'Internet assets registry: networks, domains, websites, SSL/TLS certificates, etc.',
    url: 'https://spyse.com/',
    categories: ['Domain', 'IP', 'Network Analysis', 'API']
  },
  {
    name: 'theHarvester',
    description: 'Gather emails, subdomains, hosts, employee names, open ports and banners from different public sources.',
    url: 'https://github.com/laramies/theHarvester',
    categories: ['Email', 'Domain', 'IP', 'Free', 'Github']
  },
  {
    name: 'Recon-ng',
    description: 'Full-featured Web Reconnaissance framework written in Python.',
    url: 'https://github.com/lanmaster53/recon-ng',
    categories: ['Name', 'Email', 'Domain', 'IP', 'Network Analysis', 'Free', 'Github']
  },
  {
    name: 'Metagoofil',
    description: 'Extracts metadata of public documents (pdf, doc, xls, ppt, etc) from websites.',
    url: 'https://github.com/laramies/metagoofil',
    categories: ['Domain', 'Free', 'Metadata', 'Documents', 'Github']
  },
  {
    name: 'ExifTool',
    description: 'A platform-independent Perl library plus a command-line application for reading, writing, and editing metadata in a wide variety of file types, including images.',
    url: 'https://exiftool.org/',
    categories: ['Metadata', 'Images', 'Free', 'Documents']
  },
  {
    name: 'Yandex Reverse Image Search',
    description: 'A reverse image search engine that helps find visually similar images or identify the source of an image.',
    url: 'https://yandex.com/images/',
    categories: ['Images', 'Free']
  }
]
