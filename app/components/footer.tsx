import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer: FC = () => {
  return (
    <footer className="bg-blue-500/45 opacity-100 text-black py-8 w-full px-4">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et Description */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Maison Gabonaise Logo"
                width={40}
                height={40}
                className="invert"
              />
              <h2 className="text-xl font-semibold">Maison Gabonaise</h2>
            </div>
            <p className="text-black/90 text-sm leading-relaxed">
              Ceci est un texte de remplissage servant d'exemple pour la future mise en page du contenu réel.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-black transition">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-black transition">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-black transition">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Nos Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Nos Services</h3>
            <ul className="space-y-2 text-sm">
              {["Estimations", "Achats", "Locations", "Ventes"].map((service) => (
                <li key={service}>
                  <Link href="#" className="text-black hover:text-yellow-400 transition">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ressources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Ressources</h3>
            <ul className="space-y-2 text-sm">
              {["FAQ", "À Propos", "Actualités", "Politique de Confidentialité"].map((resource) => (
                <li key={resource}>
                  <Link href="#" className="text-black hover:text-yellow-400 transition">
                    {resource}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2 text-sm">
              {["Email", "Contactez-nous", "Centre d'Aide", "Conditions d'Utilisation"].map((support) => (
                <li key={support}>
                  <Link href="#" className="text-black hover:text-yellow-400 transition">
                    {support}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-700 text-center">
          <p className="text-black text-sm">© 2024 Maison Gabonaise. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
