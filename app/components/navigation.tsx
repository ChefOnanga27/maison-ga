"use client"; // Ajoutez cette ligne pour indiquer que ce fichier utilise des hooks React

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { Menu, X } from "lucide-react"; // Icônes de menu et de fermeture

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false); // Utilisation de useState ici

  return (
    <nav className="bg-blue-400/45 opacity-100 shadow-lg">
      <div className="max-w-6xl text-lg mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center py-4 px-2">
          <span className="font-semibold text-black text-lg">Maison Gabonaise</span>
        </Link>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-600 font-medium hover:text-black transition">
            Accueil
          </Link>
          <Link href="/proprietes" className="text-gray-600 font-medium hover:text-black transition">
            Propriétés
          </Link>
          <Link href="/a-propos" className="text-gray-600 font-medium hover:text-black transition">
            À propos
          </Link>
          <Link href="/contact" className="text-gray-600 font-medium hover:text-black transition">
            Contact
          </Link>
        </div>

        {/* Auth Buttons for Desktop */}
        <div className="hidden md:flex items-center space-x-3">
          <Button variant="outline" className="border-black text-black-400/90">
            Connexion
          </Button>
          <Button className="bg-black opacity-80 text-white">Inscription</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-3 p-4 bg-blue-400/45 shadow-lg">
          <Link href="/" className="text-gray-600 font-medium hover:text-black transition" onClick={() => setIsOpen(false)}>
            Accueil
          </Link>
          <Link href="/proprietes" className="text-gray-600 font-medium hover:text-black transition" onClick={() => setIsOpen(false)}>
            Propriétés
          </Link>
          <Link href="/a-propos" className="text-gray-600 font-medium hover:text-black transition" onClick={() => setIsOpen(false)}>
            À propos
          </Link>
          <Link href="/contact" className="text-gray-600 font-medium hover:text-black transition" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <div className="flex flex-col space-y-2">
            <Button variant="outline" className="w-full">
              Connexion
            </Button>
            <Button className="w-full bg-black opacity-80 text-white">Inscription</Button>
          </div>
        </div>
      )}
    </nav>
  );
}
