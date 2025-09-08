import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Shield, Star, Users, Briefcase, Map } from 'lucide-react';

const FeatureItem = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5, delay }}
    className="text-center p-6 bg-[#1C1C1C] rounded-lg border border-gray-800"
  >
    <div className="w-16 h-16 bg-black border-2 border-[var(--color-gold)] rounded-full flex items-center justify-center mx-auto mb-5">
      <Icon className="w-8 h-8 text-[var(--color-gold)]" />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

const Features = () => {
  const features = [
    { icon: Clock, title: "Ponctualité Absolue", description: "Nous comprenons la valeur de votre temps. Nos chauffeurs sont toujours en avance." },
    { icon: Shield, title: "Sécurité & Discrétion", description: "Voyagez en toute sérénité avec nos chauffeurs formés et nos véhicules sécurisés." },
    { icon: Star, title: "Qualité Premium", description: "De la propreté du véhicule au service à bord, chaque détail compte." },
    { icon: Users, title: "Service Personnalisé", description: "Vos préférences sont notre priorité. Nous nous adaptons à vos besoins spécifiques." },
    { icon: Briefcase, title: "Solutions Affaires", description: "Transport fiable et élégant pour vos clients et collaborateurs importants." },
    { icon: Map, title: "Toutes Distances", description: "Transferts locaux, régionaux ou nationaux, nous couvrons tous vos itinéraires." },
  ];

  return (
    <section className="section-padding bg-[#181818]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Votre Satisfaction, Notre <span className="gold-gradient-text">Engagement</span></h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Découvrez les garanties qui font de Limousine Keyse le choix de l'excellence.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureItem key={index} {...feature} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;