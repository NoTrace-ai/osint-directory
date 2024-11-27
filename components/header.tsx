import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FaGithub } from 'react-icons/fa'

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-gray-700">
            OSINT Tools
          </Link>
          <nav>
            <ul className="flex items-center space-x-4">
              <li>
                <a
                  href="https://github.com/braindead-dev/osint-list"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-gray-700"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
              </li>
              <li>
                <Button variant="outline">Contact</Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}