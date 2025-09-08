import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Star, Shield, Clock } from 'lucide-react';
import { Button } from '../ui/button.jsx';

const Hero = ({
  handleReservation, handleCall
}) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="voi-limokeyser.mp4"
        ></video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-20 container-custom py-20">
        <div className="max-w-5xl mx-auto">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 gold-gradient-text leading-tight">
              LimoKeyser
            </h1>
            <div className="w-24 h-1 bg-[var(--color-gold)] mx-auto mb-6"></div>
            
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-gray-300 leading-relaxed"
          >
           Service de transport de luxe avec chauffeur professionnel. Mercedes V-Class pour vos déplacements en Suisse.
          </motion.p>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            <div className="flex items-center space-x-2 text-gray-300">
              <Star className="w-5 h-5 text-[var(--color-gold)]" />
              <span className="text-sm font-medium">Service 5 étoiles</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Shield className="w-5 h-5 text-[var(--color-gold)]" />
              <span className="text-sm font-medium">Fiabilité garantie</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Clock className="w-5 h-5 text-[var(--color-gold)]" />
              <span className="text-sm font-medium">Disponible 24h/24</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={handleReservation}
              className="bg-[var(--color-gold)] text-black hover:bg-[var(--color-gold-dark)] font-bold px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg"
            >
              Réserver Maintenant
            </Button>
            <Button
              onClick={handleCall}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-bold px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              +41 76 212 11 29
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
