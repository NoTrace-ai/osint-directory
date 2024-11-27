"use client"

import { useScrollDirection } from '@/hooks/useScrollDirection'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { Logo } from '@/components/icons/logo'
import { ThemeToggle } from './theme-toggle'

export default function Header() {
  const isVisible = useScrollDirection()

  return (
    <header 
      className={`
        fixed top-0 z-50 w-full 
        bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 
        transition-all duration-300 ease-in-out
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}
      `}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-foreground hover:text-foreground/90 flex items-center">
            <span className="mr-[-1.5px] relative -top-[0.5px]"><Logo /></span> SINT Tools
          </Link>
          <nav>
            <ul className="flex items-center space-x-2">
              <li>
                <ThemeToggle />
              </li>
              <li>
                <a
                  href="https://github.com/braindead-dev/osint-list"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-foreground transition-colors p-2 rounded-md"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}