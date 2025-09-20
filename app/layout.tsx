import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Suspense } from "react"
import { LanguageProvider } from "@/hooks/use-language"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "篠島体験 - Shinojima Experience",
  description:
    "愛知県篠島の伝統的な漁業と神饌文化を体験 | Traditional fishing and sacred food culture experiences in Shinojima Island, Aichi",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`font-sans ${inter.className}`}>
        <LanguageProvider>
          <Suspense fallback={null}>{children}</Suspense>
        </LanguageProvider>
      </body>
    </html>
  )
}
