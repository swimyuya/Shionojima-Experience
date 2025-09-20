"use client"

import { useLanguage } from "@/hooks/use-language"
import { LanguageSwitcher } from "@/components/language-switcher"
import { SimpleLanguageSwitcher } from "@/components/simple-language-switcher"

export default function DebugPage() {
  const { language, setLanguage, t } = useLanguage()

  const handleDirectChange = (newLang: "ja" | "en") => {
    console.log(`Changing language from ${language} to ${newLang}`)
    setLanguage(newLang)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Language Debug Page</h1>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Current Language Info</h2>
          <p>Current Language: {language}</p>
          <p>Home Text: {t.home}</p>
          <p>Experiences Text: {t.experiences}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Language Switcher Components</h2>
          <div className="space-y-2">
            <div>
              <p className="text-sm text-gray-600 mb-1">Original Dropdown Switcher:</p>
              <LanguageSwitcher />
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Simple Toggle Switcher:</p>
              <SimpleLanguageSwitcher />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Direct Change Buttons</h2>
          <div className="space-x-4">
            <button
              onClick={() => handleDirectChange("ja")}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Switch to Japanese
            </button>
            <button
              onClick={() => handleDirectChange("en")}
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              Switch to English
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">LocalStorage Debug</h2>
          <button
            onClick={() => {
              const stored = localStorage.getItem("language")
              console.log("Stored language:", stored)
              alert(`Stored language: ${stored}`)
            }}
            className="px-4 py-2 bg-purple-500 text-white rounded"
          >
            Check LocalStorage
          </button>
        </div>
      </div>
    </div>
  )
}