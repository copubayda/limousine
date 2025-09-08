import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Star, Shield, Clock, Plane, MapPin, Users } from 'lucide-react';
import { Button } from '../components/ui/button.jsx';

const AirportTransferPage = ({ handleCall, handleReservation }) => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            src="src/components/img/genève.png"
            alt="Limousine"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-20 container-custom py-20">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 gold-gradient-text leading-tight">
                Transferts Aéroport
              </h1>
              <div className="w-24 h-1 bg-[var(--color-gold)] mx-auto mb-6"></div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-gray-300 leading-relaxed"
            >
              Service de transfert personnalisé depuis et vers Genève-aéroport. Confort, ponctualité et sécurité garantis pour tous vos voyages.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-8 mb-12"
            >
              <div className="flex items-center space-x-2 text-gray-300">
                <Plane className="w-5 h-5 text-[var(--color-gold)]" />
                <span className="text-sm font-medium">Aéroport Genève</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Shield className="w-5 h-5 text-[var(--color-gold)]" />
                <span className="text-sm font-medium">Service 24h/24</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Clock className="w-5 h-5 text-[var(--color-gold)]" />
                <span className="text-sm font-medium">Ponctualité garantie</span>
              </div>
            </motion.div>

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
                Réserver Transfert
              </Button>
              <Button
                onClick={handleCall}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-bold px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                +41 76 212 11 29
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
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
                Transfert <span className="gold-gradient-text">Aéroport Genève</span> sur-mesure
              </h2>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Notre service de transfert aéroport est conçu pour rendre vos voyages aussi fluides et agréables que possible. Que vous arriviez à Genève ou que vous partiez, notre équipe s'occupe de tout.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Avec nos véhicules Mercedes V-Class haut de gamme et nos chauffeurs professionnels, vous bénéficiez d'un confort exceptionnel et d'une ponctualité irréprochable. Disponible 24h/24 et 7j/7 pour s'adapter à vos horaires.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
              className="rounded-lg overflow-hidden shadow-2xl"
            >
              <img className="w-full h-full object-cover" alt="Intérieur limousine" src="src/components/img/genèvea.png" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-[#111111]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi Choisir Nos <span className="gold-gradient-text">Transferts Aéroport</span></h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">Découvrez les avantages qui font de notre service le choix idéal pour vos déplacements aéroportuaires.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center p-6 bg-[#1C1C1C] rounded-lg border border-gray-800"
            >
              <div className="w-16 h-16 bg-black border-2 border-[var(--color-gold)] rounded-full flex items-center justify-center mx-auto mb-5">
                <Clock className="w-8 h-8 text-[var(--color-gold)]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Ponctualité Garantie</h3>
              <p className="text-gray-400">Arrivée à l'heure, toujours. Nous surveillons les vols en temps réel.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center p-6 bg-[#1C1C1C] rounded-lg border border-gray-800"
            >
              <div className="w-16 h-16 bg-black border-2 border-[var(--color-gold)] rounded-full flex items-center justify-center mx-auto mb-5">
                <Shield className="w-8 h-8 text-[var(--color-gold)]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sécurité Maximale</h3>
              <p className="text-gray-400">Chauffeurs certifiés et véhicules régulièrement contrôlés.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center p-6 bg-[#1C1C1C] rounded-lg border border-gray-800"
            >
              <div className="w-16 h-16 bg-black border-2 border-[var(--color-gold)] rounded-full flex items-center justify-center mx-auto mb-5">
                <Star className="w-8 h-8 text-[var(--color-gold)]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Confort Premium</h3>
              <p className="text-gray-400">Sièges en cuir, climatisation, WiFi et rafraîchissements à bord.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center p-6 bg-[#1C1C1C] rounded-lg border border-gray-800"
            >
              <div className="w-16 h-16 bg-black border-2 border-[var(--color-gold)] rounded-full flex items-center justify-center mx-auto mb-5">
                <Users className="w-8 h-8 text-[var(--color-gold)]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Service Personnalisé</h3>
              <p className="text-gray-400">Adapté à vos besoins spécifiques et préférences.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center p-6 bg-[#1C1C1C] rounded-lg border border-gray-800"
            >
              <div className="w-16 h-16 bg-black border-2 border-[var(--color-gold)] rounded-full flex items-center justify-center mx-auto mb-5">
                <MapPin className="w-8 h-8 text-[var(--color-gold)]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Toutes Destinations</h3>
              <p className="text-gray-400">De Genève à Neuchâtel, Lausanne ou partout en Suisse.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-center p-6 bg-[#1C1C1C] rounded-lg border border-gray-800"
            >
              <div className="w-16 h-16 bg-black border-2 border-[var(--color-gold)] rounded-full flex items-center justify-center mx-auto mb-5">
                <Plane className="w-8 h-8 text-[var(--color-gold)]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Suivi des Vols</h3>
              <p className="text-gray-400">Nous ajustons nos horaires selon les retards ou avances.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#181818]">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt pour un <span className="gold-gradient-text">Transfert Exceptionnel</span>?</h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Réservez dès maintenant votre transfert aéroport et profitez d'un service de qualité supérieure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleReservation}
                className="bg-[var(--color-gold)] text-black hover:bg-[var(--color-gold-dark)] font-bold px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg"
              >
                Réserver Maintenant
              </Button>
              <Button
                onClick={handleCall}
                className="bg-transparent border-2 border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-black font-bold px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Nous Contacter
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AirportTransferPage;
