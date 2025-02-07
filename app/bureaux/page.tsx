import  Layout  from "@/app/components/layout"
import { PropertyCard } from "@/app/components/property-card"
import { SearchBar } from "@/app/components/search-bar"

const mockOffices = [
    {
      id: "1",
      title: "Bureau moderne au centre-ville",
      type: "Bureau",
      price: 500000,
      location: "Libreville",
      imageUrl: "/bureau1.jpg",
      description: "Un bureau moderne situé en plein centre-ville de Libreville, idéal pour les entreprises en quête de visibilité et d'accessibilité."
    },
    {
      id: "2",
      title: "Espace de coworking à Oyem",
      type: "Bureau",
      price: 300000,
      location: "Oyem",
      imageUrl: "/bureau2.jpg",
      description: "Un espace de coworking à Oyem, conçu pour les freelances et les petites entreprises. Ambiance collaborative et équipements modernes."
    },
    {
      id: "3",
      title: "Local commercial à Port-Gentil",
      type: "Bureau",
      price: 700000,
      location: "Port-Gentil",
      imageUrl: "/bureau3.jpg",
      description: "Local commercial bien situé à Port-Gentil, parfait pour les commerces et les entreprises recherchant un emplacement stratégique."
    },
  ]
  
export default function BureauxPage() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Titre principal */}
        <h1 className="text-3xl font-bold text-blue-900 mb-6">Bureaux à louer</h1>
        
        {/* Barre de recherche */}
        <SearchBar onSearch={(query, type) => console.log(query, type)} />
        
        {/* Liste des bureaux */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockOffices.map((office) => (
            <PropertyCard key={office.id} {...office} />
          ))}
        </div>
      </div>
    </Layout>
  )
}
