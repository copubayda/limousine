import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Car, Crown, Phone } from 'lucide-react';

const ServiceCard = ({ icon, title, description, features, onCall, delay }) => {
  const IconComponent = icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, delay }}
      className="bg-[#1C1C1C] p-8 rounded-xl border border-gray-800 hover:border-white transition-colors duration-300 flex flex-col shadow-lg"
    >
      <div className="flex items-center mb-5">
        <div className="w-14 h-14 bg-black border-2 border-white rounded-full flex items-center justify-center mr-5">
          <IconComponent className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-400 mb-6 flex-grow">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center">
            <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        onClick={onCall}
        className="w-full mt-auto bg-white text-black font-bold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <Phone className="w-4 h-4 mr-2" />
        Réserver ce service
      </Button>
    </motion.div>
  );
};

const Services = ({ handleCall }) => {
  const services = [
    {
      icon: Car,
      title: "Service VTC",
      description: "Pour vos déplacements quotidiens, rendez-vous professionnels ou transferts aéroport, notre service VTC vous assure ponctualité et confort.",
      features: ["Disponible 24h/24, 7j/7", "Chauffeurs discrets et professionnels", "Tarification claire et sans surprise"],
      delay: 0.2,
    },
    {
      icon: Crown,
      title: "Limousine V-Class",
      description: "Offrez-vous le summum du luxe avec notre Mercedes V-Class pour vos événements, mariages, ou soirées exclusives. Une expérience mémorable garantie.",
      features: ["Véhicule haut de gamme", "Capacité jusqu'à 7 passagers", "Prestations sur-mesure"],
      delay: 0.4,
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Prestations de <span className="gold-gradient-text">Luxe</span></h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Des solutions de transport exclusives conçues pour répondre à vos plus hautes exigences.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} onCall={handleCall} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
