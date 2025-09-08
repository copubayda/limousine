import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Menu, X, Home, Image, Calendar, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button.jsx';

const Header = ({ handleCall, handleReservation }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
      <div className="container-custom py-3">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-3"
          >
            <div className="w-20 h-20 rounded-full flex items-center justify-center">
  <img className="w-17 h-17" src='src/components/img/lk-white.png' />
</div>
            <span className="text-xl font-bold tracking-wider" style={{ fontFamily: 'Playfair Display, serif' }}>
            LimoKeyser
            </span>
          </motion.div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-[var(--color-gold)] transition-colors">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="flex items-center space-x-1 text-gray-300 hover:text-[var(--color-gold)] transition-colors">
              <Home className="w-4 h-4" />
              <span>Accueil</span>
            </Link>
            <Link to="/fleet" className="flex items-center space-x-1 text-gray-300 hover:text-[var(--color-gold)] transition-colors">
              <Image className="w-4 h-4" />
              <span>Notre Flotte</span>
            </Link>
            <Link to="/transferts-aeroport" className="flex items-center space-x-1 text-gray-300 hover:text-[var(--color-gold)] transition-colors">
              <Plane className="w-4 h-4" />
              <span>Transferts Aéroport</span>
            </Link>
            <button onClick={handleReservation} className="flex items-center space-x-1 text-gray-300 hover:text-[var(--color-gold)] transition-colors bg-transparent border-none cursor-pointer">
              <Calendar className="w-4 h-4" />
              <span>Réservation</span>
            </button>
          </nav>

          {isOpen && (
            <nav className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-lg border-b border-white/10 py-4">
              <div className="container-custom flex flex-col space-y-4">
                <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center space-x-1 text-gray-300 hover:text-[var(--color-gold)] transition-colors">
                  <Home className="w-4 h-4" />
                  <span>Accueil</span>
                </Link>

                <Link to="/fleet" onClick={() => setIsOpen(false)} className="flex items-center space-x-1 text-gray-300 hover:text-[var(--color-gold)] transition-colors">
                  <Image className="w-4 h-4" />
                  <span>Notre Flotte</span>
                </Link>
                <Link to="/transferts-aeroport" onClick={() => setIsOpen(false)} className="flex items-center space-x-1 text-gray-300 hover:text-[var(--color-gold)] transition-colors">
                  <Plane className="w-4 h-4" />
                  <span>Transferts Aéroport</span>
                </Link>
                <button onClick={() => { handleReservation(); setIsOpen(false); }} className="flex items-center space-x-1 text-gray-300 hover:text-[var(--color-gold)] transition-colors bg-transparent border-none cursor-pointer">
                  <Calendar className="w-4 h-4" />
                  <span>Réservation</span>
                </button>
              </div>
            </nav>
          )}

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              onClick={handleCall}
              className="bg-[var(--color-gold)] text-black hover:bg-[var(--color-gold-dark)] font-bold px-5 py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="w-4 h-4 mr-2" />
              Appeler Maintenant
            </Button>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;