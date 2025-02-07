"use client"; // ← Ajoutez cette ligne tout en haut du fichier

import { useState, useEffect } from "react";
import Layout from "@/app/components/layout";

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-16 px-6 sm:px-8 lg:px-12">
        {/* Animation du titre */}
        <h1
          className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-8 text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(-20px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
          }}
        >
          À propos de Maison Gabonaise
        </h1>

        <div className="space-y-12 prose prose-lg max-w-none mx-auto">
          <AnimatedParagraph delay={0.2}>
            Maison Gabonaise est votre partenaire de confiance pour la location et la vente de biens immobiliers au Gabon. Fondée en 2023, notre mission est de simplifier le processus de recherche et d'acquisition de propriétés pour nos clients, qu'il s'agisse de résidences privées ou de locaux professionnels.
          </AnimatedParagraph>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedImage src="/block1.jpg" alt="Propriété" delay={0.4} />
            <AnimatedImage src="/block2.jpg" alt="Bureau" delay={0.8} />
          </div>

          <AnimatedParagraph delay={1.0}>
            Notre équipe d'experts en immobilier possède une connaissance approfondie du marché gabonais et s'engage à fournir un service personnalisé et de haute qualité à chacun de nos clients. Que vous cherchiez à acheter, vendre ou louer, nous sommes là pour vous guider à chaque étape du processus.
          </AnimatedParagraph>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedImage src="/block4.jpg" alt="Service" delay={1.2} />
            <AnimatedImage src="/bureau4.jpg" alt="Service" delay={1.4} />
          </div>

          <AnimatedParagraph delay={1.4}>
            Chez Maison Gabonaise, nous croyons en la transparence, l'intégrité et l'excellence du service. Notre plateforme en ligne offre une expérience utilisateur intuitive, permettant à nos clients de trouver facilement la propriété de leurs rêves.
          </AnimatedParagraph>

          <AnimatedParagraph delay={1.6}>
            Nous sommes fiers de contribuer au développement du secteur immobilier au Gabon et nous nous efforçons continuellement d'améliorer nos services pour répondre aux besoins changeants de notre clientèle.
          </AnimatedParagraph>
        </div>
      </div>
    </Layout>
  );
}

/* ---------- Composant d'animation pour les paragraphes ---------- */
function AnimatedParagraph({ children, delay }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <p
      className="text-lg text-gray-700 leading-relaxed"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateX(0)" : "translateX(-50px)",
        transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
      }}
    >
      {children}
    </p>
  );
}

/* ---------- Composant d'animation pour les images ---------- */
function AnimatedImage({ src, alt, delay }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className="bg-gray-200 rounded-lg overflow-hidden shadow-lg"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateX(0)" : "translateX(-50px)",
        transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
      }}
    >
      <img
        src={src}
        alt={alt}
        className="object-cover w-full h-full rounded-lg"
      />
    </div>
  );
}
