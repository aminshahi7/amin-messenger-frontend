'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 shadow-sm backdrop-blur-md rounded-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 ">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight text-blue-600">
          Amin<span className="text-gray-900">Messenger</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="font-medium text-gray-700 transition hover:text-blue-600">
            Home
          </Link>

          <Link href="/features" className="font-medium text-gray-700 transition hover:text-blue-600">
            Features
          </Link>

          <Link href="/about" className="font-medium text-gray-700 transition hover:text-blue-600">
            About
          </Link>
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Link
            href="/login"
            className="rounded-xl bg-blue-600 px-5 py-2.5 font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Navigation öffnen"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-gray-700 transition hover:bg-gray-100 md:hidden"
        >
          {menuOpen ? (
            <span className="text-2xl">✕</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="space-y-2 border-t border-gray-100 bg-white px-6 py-4 md:hidden">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="block rounded-lg px-3 py-2 font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            href="/features"
            onClick={() => setMenuOpen(false)}
            className="block rounded-lg px-3 py-2 font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600"
          >
            Features
          </Link>

          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="block rounded-lg px-3 py-2 font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600"
          >
            About
          </Link>

          <Link
            href="/login"
            onClick={() => setMenuOpen(false)}
            className="block rounded-xl bg-blue-600 px-4 py-3 text-center font-semibold text-white hover:bg-blue-700"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  )
}