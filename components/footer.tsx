import { Logo } from '@/components/icons/logo'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-neutral-900 border-t dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link
              href="/"
              className="text-2xl font-bold text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300 flex items-baseline mb-2"
            >
              <span className="mr-[-1.5px] relative -top-[-2px]"> <Logo /> </span> SINT Tools
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 ml-2">
                by henr.ee
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400">
              A curated directory of Open Source Intelligence (OSINT) tools.
            </p>
          </div>
          <div />
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Contact</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Want to add a tool to directory or found a bug? Please open an issue on <Link href="https://github.com/braindead-dev/osint-list/issues" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">GitHub.</Link>
            </p>
          </div>
        </div>
        <div className="mt-4 pt-8">
          <p className="text-center text-gray-600 dark:text-gray-400">
            made with ❤️ by{' '}
            <a
              href="https://henr.ee"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 font-medium"
            >
              henry
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}