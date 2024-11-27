import { Logo } from '@/components/icons/logo'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link
              href="/"
              className="text-2xl font-bold text-gray-900 hover:text-gray-700 flex items-baseline mb-2"
            >
              <span className="mr-[-1.5px] relative -top-[-2px]"> <Logo /> </span> SINT Tools
              <span className="text-xs font-medium text-gray-600 hover:text-gray-500 ml-2">
                by henr.ee
              </span>
            </Link>
            <p className="text-gray-600">
              A curated directory of Open Source Intelligence (OSINT) tools.
            </p>
          </div>
          <div />
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact</h3>
            <p className="text-gray-600">
              Want to add a tool to directory or found a bug? Please open an issue on <Link href="https://github.com/braindead-dev/osint-list/issues" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-900">GitHub.</Link>
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            made with ❤️ by{' '}
            <a
              href="https://henr.ee"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-700 font-medium"
            >
              henry
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}