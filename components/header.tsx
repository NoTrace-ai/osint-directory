import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            OSINT Tools
          </Link>
          <nav>
            <ul className="flex space-x-4">
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

