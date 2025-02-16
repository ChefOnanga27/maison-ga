"use client";
import { useState, useEffect } from "react";
import Footer from "@/app/components/footer";
import { Navigation } from "@/app/components/navigation";
import { Button } from "@/app/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const API_URL = "http://localhost:5000/api/properties"; // Remplace avec ton API réelle

const fetchProperties = async (page: number, limit: number) => {
  try {
    const response = await fetch(`${API_URL}?page=${page}&limit=${limit}`);
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des données.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur API :", error);
    return { properties: [], total: 0 };
  }
};

export default function PropertyListPage() {
  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 6;
  const [totalProperties, setTotalProperties] = useState(0);

  useEffect(() => {
    const loadProperties = async () => {
      setLoading(true);
      setError(null);
      try {
        const { properties, total } = await fetchProperties(currentPage, propertiesPerPage);
        setProperties(properties);
        setTotalProperties(total);
      } catch (err) {
        setError("Impossible de charger les propriétés.");
      } finally {
        setLoading(false);
      }
    };

    loadProperties();
  }, [currentPage]);

  // Changer de page
  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);
  const totalPages = Math.ceil(totalProperties / propertiesPerPage);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-lg text-black">Chargement des propriétés...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-lg text-black">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <main className="max-w-6xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-black mb-6">Liste des propriétés</h1>

        {properties.length === 0 ? (
          <p className="text-lg text-black">Aucune propriété disponible.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <div key={property.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <Image
                  src={property.imageUrl || "/placeholder.svg"}
                  alt={property.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800">{property.title}</h2>
                  <p className="text-blue-600 text-lg font-bold">{property.price.toLocaleString()} FCFA</p>
                  <p className="text-gray-600 text-sm">{property.location}</p>
                  <div className="mt-2 text-sm text-gray-500">{property.description}</div>
                  <div className="flex justify-between mt-4 text-sm">
                    <p>🛏 {property.rooms} Chambres</p>
                    <p>🚿 {property.bathrooms} Salles de bain</p>
                    <p>📏 {property.surface} m²</p>
                  </div>
                  <Link href={`/property/${property.id}`}>
                    <Button className="w-full mt-4">Voir les détails</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="flex justify-center mt-6 space-x-4">
          <Button variant="outline" onClick={prevPage} disabled={currentPage === 1}>
            ← Précédent
          </Button>
          <span className="text-black font-semibold text-lg">
            Page {currentPage} / {totalPages}
          </span>
          <Button variant="outline" onClick={nextPage} disabled={currentPage >= totalPages}>
            Suivant →
          </Button>
        </div>
      </main>
    </div>
  );
}
