import { Phone, Send } from "lucide-react"

export default function HeaderTop() {
  return (
    <div className="bg-gray-100 py-2">
      <div className="container flex justify-end items-center space-x-4 text-sm">
        <a href="tel:+998977575747" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
          <Phone className="w-4 h-4 mr-2" />
          <span>+998 97 757 57 47</span>
        </a>
        <a
          href="https://t.me/jakhonshokh"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
        >
          <Send className="w-4 h-4 mr-2" />
          <span>@jakhonshokh</span>
        </a>
      </div>
    </div>
  )
}

