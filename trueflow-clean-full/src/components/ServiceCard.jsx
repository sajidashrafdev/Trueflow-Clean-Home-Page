import { useState } from 'react';

export default function ServiceCard({ service }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-2xl cursor-pointer h-96 shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
      </div>

      <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
        <div
          className={`transform transition-all duration-500 ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <div className="text-orange-500 mb-4">{service.icon}</div>
        </div>
        <h3 className="text-3xl font-bold mb-3">{service.title}</h3>
        <p
          className={`text-slate-200 text-lg transition-all duration-500 ${
            isHovered ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          {service.description}
        </p>
      </div>

      {/* Squeegee reveal effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent transform transition-transform duration-700 ${
          isHovered ? 'translate-x-0' : '-translate-x-full'
        }`}
      ></div>
    </div>
  );
}
