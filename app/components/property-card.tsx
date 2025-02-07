import Image from "next/image"
import Link from "next/link"
import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card"

interface PropertyCardProps {
  id: string
  title: string
  type: string
  price: number
  location: string
  description: string
  imageUrl: string
}

export function PropertyCard({ id, title, type, price, location, description, imageUrl }: PropertyCardProps) {
  return (
    <Card className="w-full max-w-sm shadow-lg rounded-lg overflow-hidden">
      <CardHeader className="relative">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          width={300}
          height={200}
          className="w-full h-48 object-cover"
        />
      </CardHeader>
      <CardContent>
        <CardTitle className="text-xl font-semibold text-gray-800 mb-2">{title}</CardTitle>
        <p className="text-sm text-black opacity-100 mb-1">{type}</p>
        <p className="font-bold text-lg text-gray-800 mb-1">{price.toLocaleString()} FCFA</p>
        <p className="text-sm font-medium text-gray-700 mb-2">{location}</p>
        <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center mt-4">
        <Link href={`/property/${id}`} passHref>
          <Button variant="outline" className="border-black text-black hover:bg-blue-100">Voir détails</Button>
        </Link>
        <Link href={`/property/${id}/book`} passHref>
          <Button className="bg-blue-400 text-white hover:bg-black">Prendre RDV</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
