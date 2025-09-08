import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="section-padding bg-[#181818]">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              À Propos de <span className="gold-gradient-text">LimoKeyser</span>
            </h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Fondée sur une passion pour le service d'excellence, LimoKeyser est votre partenaire de confiance pour tous vos besoins de transport de luxe à Neuchâtel et au-delà. Nous nous engageons à offrir une expérience alliant ponctualité, sécurité et confort suprême.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Notre flotte, centrée autour de la prestigieuse Mercedes V-Class, est méticuleusement entretenue pour garantir un trajet impeccable. Que ce soit pour un transfert d'aéroport, un événement spécial ou un déplacement professionnel, notre équipe de chauffeurs expérimentés est à votre disposition pour faire de votre voyage un moment d'exception.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="rounded-lg overflow-hidden shadow-2xl"
          >
            <img  class="w-full h-full object-cover" alt="" src="src/components/img/interieur-limokeysair.png" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;