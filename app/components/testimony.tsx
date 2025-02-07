import React from 'react';
import Image from 'next/image';
import { Star, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Marie Laurent',
    image: '/homme2.jpg',
    text: 'Un service exceptionnel qui a dépassé toutes mes attentes. Je recommande vivement leurs prestations immobilières.',
    rating: 5,
  },
  {
    name: 'Jean Pierre',
    image: '/homme3.jpg',
    text: "Équipe professionnelle et très réactive. La transaction s'est déroulée parfaitement.",
    rating: 5,
  },
  {
    name: 'Sophie Martin',
    image: '/homme2.jpg',
    text: 'Excellent accompagnement dans notre recherche de maison. Service personnalisé et de qualité.',
    rating: 4,
  },
  {
    name: 'Pierre Bobie',
    image: '/homme1.jpg',
    text: 'Une expertise remarquable du marché immobilier local. Très satisfait de leur service.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <div className="w-full bg-blue-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-blue-400">Témoignages</h2>
          <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
            <span>Voir Tous</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center"
            >
              {/* Author Info */}
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={64}
                height={64}
                className="rounded-full object-cover mb-4 border-2 border-blue-400"
              />
              <h3 className="font-semibold text-lg text-gray-800">{testimonial.name}</h3>
              
              {/* Stars */}
              <div className="flex justify-center gap-1 my-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 text-sm leading-relaxed mt-2">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
