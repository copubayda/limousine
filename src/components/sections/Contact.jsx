import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button.jsx';
import { MapPin, Phone, Clock, Calendar } from 'lucide-react';
const ContactInfoItem = ({
  icon: Icon,
  title,
  children
}) => <div className="flex items-start space-x-4">
    <div className="w-12 h-12 bg-black border-2 border-[var(--color-gold)] rounded-full flex items-center justify-center flex-shrink-0">
      <Icon className="w-6 h-6 text-[var(--color-gold)]" />
    </div>
    <div>
      <h4 className="font-bold text-lg text-white mb-1">{title}</h4>
      <div className="text-gray-400">{children}</div>
    </div>
  </div>;
const Contact = ({
  handleCall,
  handleQuote,
  handleReservation
}) => {
  return (
    <section id="contact" className="section-padding bg-[#181818]">
      <div className="container-custom">
        <motion.div initial={{
        opacity: 0,
        y: -30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        amount: 0.8
      }} transition={{
        duration: 0.7
      }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contactez-<span className="gold-gradient-text">Nous</span></h2>
          <p className="text-lg text-gray-400">Pour une réservation ou toute demande d'information.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto bg-[#1C1C1C] p-8 sm:p-12 rounded-xl border border-gray-800">
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.7
          }} className="space-y-8">
              <ContactInfoItem icon={MapPin} title="Adresse">
                <p>Chemin des Brandards 21<br />2000 Neuchâtel, Suisse</p>
              </ContactInfoItem>
              <ContactInfoItem icon={Phone} title="Téléphone">
                <p>+41 76 212 11 29</p>
                <p className="text-sm text-gray-500">Disponible 24h/24</p>
              </ContactInfoItem>
              <ContactInfoItem icon={Clock} title="Horaires">
                <p>Service 24h/24, 7j/7</p>
                <p className="text-sm text-gray-500">Sur réservation</p>
              </ContactInfoItem>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.7,
            delay: 0.2
          }} className="flex flex-col justify-center space-y-6">
              <p className="text-gray-300">
                Contactez-nous directement pour une réservation immédiate. 
              </p>
              <Button onClick={handleCall} size="lg" className="w-full bg-[var(--color-gold)] text-black hover:bg-[var(--color-gold-dark)] font-bold py-3.5 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <Phone className="w-5 h-5 mr-3" />
                Appeler pour Réserver
              </Button>
              <Button onClick={handleReservation} size="lg" className="w-full bg-white text-black hover:bg-gray-100 font-bold py-3.5 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <Calendar className="w-5 h-5 mr-3" />
                Réserver en ligne
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
