import  Layout  from "@/app/components/layout"
import { PropertyCard } from "@/app/components/property-card"
import { SearchBar } from "@/app/components/search-bar"

const mockRooms = [
  {
    id: "1",
    title: "Chambre étudiante à Libreville",
    type: "Chambre",
    price: 150000,
    location: "Libreville",
    imageUrl: "/chambre2.jpg",
    description: "Chambre étudiante située à Libreville, idéale pour les étudiants cherchant un logement abordable et bien situé."
  },
  {
    id: "2",
    title: "Chambre en colocation à Owendo",
    type: "Chambre",
    price: 200000,
    location: "Owendo",
    imageUrl: "/chambre3.jpg",
    description: "Chambre en colocation à Owendo, parfaite pour les jeunes professionnels ou étudiants souhaitant partager un espace moderne."
  },
  {
    id: "3",
    title: "Studio meublé à Port-Gentil",
    type: "Chambre",
    price: 300000,
    location: "Port-Gentil",
    imageUrl: "/chambre4.jpg",
    description: "Studio meublé à Port-Gentil, offrant un confort optimal avec des équipements modernes, idéal pour les travailleurs ou étudiants."
  },
]

export default function ChambresPage() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">Chambres à louer</h1>
        <SearchBar onSearch={(query, type) => console.log(query, type)} />
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockRooms.map((room) => (
            <PropertyCard
              key={room.id}
              {...room}
              description={room.description}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}
