import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              About
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-base text-gray-600 hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-base text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-base text-gray-600 hover:text-gray-900">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-base text-gray-600 hover:text-gray-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-base text-gray-600 hover:text-gray-900">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-base text-gray-600 hover:text-gray-900">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/disclaimer" className="text-base text-gray-600 hover:text-gray-900">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/copyright" className="text-base text-gray-600 hover:text-gray-900">
                  Copyright
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Connect
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-base text-gray-600 hover:text-gray-900">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-base text-gray-600 hover:text-gray-900">
                  GitHub
                </a>
              </li>
              <li>
                <a href="mailto:contact@osinttools.com" className="text-base text-gray-600 hover:text-gray-900">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">
            Made with ❤️ by <a href="https://henrywa.ng" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">henry</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

