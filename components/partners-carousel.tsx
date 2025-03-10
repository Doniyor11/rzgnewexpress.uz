"use client"
import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

interface Partner {
  name: string
  logo: string
  link: string
}

interface PartnersCarouselProps {
  partners: Partner[]
}

export function PartnersCarousel({ partners }: PartnersCarouselProps) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-5xl mx-auto"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {partners.map((partner, index) => (
          <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/4">
            <div className="p-1">
              <Card className="p-4 h-32 flex items-center justify-center">
                <Link href={partner.link} target="_blank" rel="noopener noreferrer" className="relative w-full h-full">
                  <Image src={partner.logo || "/placeholder.svg"} alt={partner.name} fill className="object-contain" />
                </Link>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

