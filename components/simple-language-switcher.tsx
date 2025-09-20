"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/use-language"

export function SimpleLanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    const newLanguage = language === "ja" ? "en" : "ja"
    console.log(`Switching language from ${language} to ${newLanguage}`)
    setLanguage(newLanguage)
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="gap-2 hover:bg-accent"
    >
      {language === "ja" ? "🇯🇵 日本語" : "🇺🇸 English"}
    </Button>
  )
}