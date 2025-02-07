import { MapPin, Users, CheckCircle } from 'lucide-react';

const ContentSection = () => {
  return (
    <div className="w-full flex justify-center bg-gray-100 py-12 px-4">
      <div className="flex flex-col md:flex-row w-full max-w-7xl gap-12 items-center">
        {/* Left side with image */}
        <div className="relative w-full md:w-1/2">
          <div className="relative h-[500px] w-full overflow-hidden rounded-2xl shadow-xl">
            <img
              src="/block4.jpg"
              alt="maison"
              className="object-cover w-full h-full"
            />
            
            {/* Overlay cards */}
            <div className="absolute bottom-8 left-4 space-y-4">
              <div className="bg-white rounded-xl p-4 shadow-lg flex items-center gap-3 max-w-xs">
                <Users className="text-blue-400 w-6 h-6" />
                <span className="text-sm font-medium text-gray-700">
                  Une équipe dynamique et passionnée
                </span>
              </div>
              
              <div className="bg-white rounded-xl p-4 shadow-lg flex items-center gap-3 max-w-xs">
                <MapPin className="text-blue-400 w-6 h-6" />
                <span className="text-sm font-medium text-gray-700">
                  Implantés au cœur de la ville pour mieux vous servir
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right side content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold text-white bg-blue-400 p-6 rounded-xl shadow-lg">
            Une Nouvelle Vision de l’Immobilier
          </h1>
          
          <p className="text-gray-700 leading-relaxed">
            Notre agence est née d’une ambition simple : offrir un accompagnement personnalisé et innovant 
            à nos clients. Nous mettons notre expertise au service de vos projets immobiliers, qu’il s’agisse 
            d’achats, de ventes ou de locations.
          </p>
          
          <div className="space-y-4">
            {["Un service client réactif et à l’écoute", "Des solutions adaptées à tous vos besoins", "Une transparence totale à chaque étape"].map((text, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="text-blue-400 w-6 h-6" />
                <span className="text-gray-700">{text}</span>
              </div>
            ))}
          </div>
          
          <button className="bg-blue-400 text-white px-8 py-3 rounded-xl shadow-md hover:bg-blue-500 transition-transform transform hover:scale-105">
            En Savoir Plus
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
