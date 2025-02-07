export default function ContactSection() {
    return (
      <div className="relative min-h-[700px] w-full overflow-hidden flex items-center justify-center bg-gray-900">
        {/* Background Overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center brightness-75"
          style={{ backgroundImage: 'url("/bg.jpg")' }}
        />
  
        {/* Content */}
        <div className="relative z-10 max-w-3xl text-center text-white px-6 py-16 md:py-24">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg">
            Contactez-nous
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 font-light">
            Une équipe à votre écoute pour répondre à vos besoins avec excellence.
          </p>
  
          {/* Call to Action */}
          <a
            href="#contact-form"
            className="inline-block bg-blue-400 px-10 py-4 rounded-full text-lg md:text-xl font-semibold tracking-wide shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Envoyer un message
          </a>
        </div>
      </div>
    );
  }
  