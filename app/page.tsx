import type { Metadata } from "next"
import HomeContent from "@/components/home-content"

export const metadata: Metadata = {
  title: "RZG NEW EXPRESS",
  description: "RZG NEW EXPRESS - Ваш надежный курьерский партнер",
}

export default function Home() {
  return <HomeContent />
}

