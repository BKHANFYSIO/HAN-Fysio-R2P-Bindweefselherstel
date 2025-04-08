import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Link href="/" className="text-[#e6007e] font-bold text-2xl">
              HAN
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#e6007e]">
              Home
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-[#e6007e] inline-flex items-center">
                Thema's
                <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link href="/topics/bindweefselherstel" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Bindweefselherstel
                </Link>
                <span className="block px-4 py-2 text-gray-400 cursor-not-allowed">
                  Trainingsleer Principes
                </span>
                <span className="block px-4 py-2 text-gray-400 cursor-not-allowed">
                  Anatomie & Fysiologie
                </span>
              </div>
            </div>
            <Link href="/hoe-leren-werkt" className="text-gray-700 hover:text-[#e6007e]">
              Hoe leren werkt
            </Link>
          </div>

          {/* Language Selection */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-[#e6007e] font-medium">NL</button>
            <button className="text-gray-400 hover:text-[#e6007e]">EN</button>
            <button className="text-gray-400 hover:text-[#e6007e]">DE</button>
          </div>
        </div>
      </div>
    </nav>
  );
} 