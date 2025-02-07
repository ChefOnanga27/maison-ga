import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="w-full relative flex items-center justify-center h-screen bg-black/100 text-white">
      {/* Image de fond */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/block1.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>

      {/* Contenu central */}
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Titre avec animation */}
        <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl opacity-0 animate-fadeInUp delay-100">
          Bienvenue sur notre <span>plateforme</span>
        </h1>

        {/* Description avec animation */}
        <p className="mt-4 text-lg md:text-xl opacity-0 animate-fadeInUp delay-200">
          Découvrez une expérience unique avec notre solution innovante.
        </p>

        {/* Bouton avec animation de survol */}
        <button className="mt-6 px-6 py-3 bg-blue-600/100 text-white opacity-100 font-semibold rounded-lg shadow-md hover:bg-black transition-all transform hover:scale-105 duration-300">
          Commencer
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
