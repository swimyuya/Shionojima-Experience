"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
            篠島体験
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/experiences" className="text-foreground hover:text-primary transition-colors">
              体験一覧
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              篠島について
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              お問い合わせ
            </Link>
            <LanguageSwitcher />
          </nav>

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              <Link href="/experiences" className="text-foreground hover:text-primary transition-colors">
                体験一覧
              </Link>
              <Link href="/about" className="text-foreground hover:text-primary transition-colors">
                篠島について
              </Link>
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
                お問い合わせ
              </Link>
              <LanguageSwitcher />
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
