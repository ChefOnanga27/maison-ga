"use client"; // Assure-toi que ce composant est rendu côté client

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  // Gestion de l'image actuelle
  const [currentImage, setCurrentImage] = useState(1);

  // Changer l'image toutes les 5 secondes
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === 3 ? 1 : prevImage + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full relative flex items-center justify-center h-screen bg-black text-white overflow-hidden">
      {/* Animation de l'image de fond */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeInOut" }}
      >
        {/* Choisir l'image en fonction de l'état */}
        {currentImage === 1 && (
          <Image
            src="/block1.jpg"
            alt="Image 1"
            fill
            style={{ objectFit: "cover" }} // Remplacer objectFit
            className="opacity-50"
            priority={true}
          />
        )}
        {currentImage === 2 && (
          <Image
            src="/block2.jpg"
            alt="Image 2"
            fill
            style={{ objectFit: "cover" }} // Remplacer objectFit
            className="opacity-50"
            priority={true}
          />
        )}
        {currentImage === 3 && (
          <Image
            src="/block4.jpg"
            alt="Image 3"
            fill
            style={{ objectFit: "cover" }} // Remplacer objectFit
            className="opacity-50"
            priority={true}
          />
        )}
      </motion.div>

      {/* Contenu central */}
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Animation du titre */}
        <motion.h1
          className="text-5xl font-bold md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Bienvenue sur notre <span className="text-blue-500">plateforme</span>
        </motion.h1>

        {/* Animation de la description */}
        <motion.p
          className="mt-4 text-lg md:text-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          {currentImage === 1 && "Découvrez une expérience unique avec notre solution innovante."}
          {currentImage === 2 && "Nous vous offrons une technologie de pointe pour optimiser votre travail."}
          {currentImage === 3 && "Plongez dans un univers où innovation et simplicité se rencontrent."}
        </motion.p>

        {/* Animation du bouton */}
        <motion.button
          className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-black transition-all transform hover:scale-105 duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Commencer
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
