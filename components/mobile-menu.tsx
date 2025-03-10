"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface MobileMenuProps {
  onSectionClick: (sectionId: string) => void
}

export default function MobileMenu({ onSectionClick }: MobileMenuProps) {
  const [open, setOpen] = useState(false)

  const handleClick = (sectionId: string) => {
    setOpen(false)
    onSectionClick(sectionId)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4 mt-8">
          <button
            onClick={() => handleClick("tracking")}
            className="text-lg font-medium py-2 hover:text-blue-600 transition-colors text-left"
          >
            Отслеживать посылку
          </button>
          <button
            onClick={() => handleClick("services")}
            className="text-lg font-medium py-2 hover:text-blue-600 transition-colors text-left"
          >
            Наши услуги
          </button>
          <button
            onClick={() => handleClick("about")}
            className="text-lg font-medium py-2 hover:text-blue-600 transition-colors text-left"
          >
            О нас
          </button>
          <button
            onClick={() => handleClick("partners")}
            className="text-lg font-medium py-2 hover:text-blue-600 transition-colors text-left"
          >
            Наши партнеры
          </button>
          <Button onClick={() => handleClick("contact")} className="mt-4">
            Связаться с нами
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

