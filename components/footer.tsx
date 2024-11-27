import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mt-8 pt-8">
          <p className="text-base text-gray-400 text-center">
            Made with ❤️ by <a href="https://henr.ee" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">henry</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

