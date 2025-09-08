import React from 'react';
import { Phone, MapPin, Clock, Mail, Car } from 'lucide-react';

const Footer = ({ isReservationOpen, setIsReservationOpen }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] border-t border-white/10">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[var(--color-gold)]/10">
                <img className="w-12 h-12" src='src/components/img/lk-white.png' alt="LimoKeyser Logo" />
              </div>
              <div>
                <span className="text-xl font-bold text-white" style={{
                  fontFamily: 'Playfair Display, serif'
                }}>
                  LimoKeyser
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Service de transport de luxe avec chauffeur professionnel. Mercedes V-Class pour vos déplacements en Suisse.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-[var(--color-gold)] transition-colors text-sm">
                  Accueil
                </a>
              </li>
              <li>
                <a href="/reservation" className="text-gray-400 hover:text-[var(--color-gold)] transition-colors text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="/fleet" className="text-gray-400 hover:text-[var(--color-gold)] transition-colors text-sm">
                Notre Flotte
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-[var(--color-gold)] transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-[var(--color-gold)] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">+41 76 212 11 29</p>
                  <p className="text-gray-500 text-xs">Disponible 24h/24</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[var(--color-gold)] mt-0.5 flex-shrink-0" />
                <p className="text-gray-400 text-sm">
                  Chemin des Brandards 21<br />
                  2000 Neuchâtel, Suisse
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-[var(--color-gold)] mt-0.5 flex-shrink-0" />
                <p className="text-gray-400 text-sm">
                  Service 24h/24<br />
                  7j/7 sur réservation
                </p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Car className="w-4 h-4 text-[var(--color-gold)]" />
                <span className="text-gray-400 text-sm">Transport VIP</span>
              </div>
              <div className="flex items-center space-x-2">
                <Car className="w-4 h-4 text-[var(--color-gold)]" />
                <span className="text-gray-400 text-sm">Chauffeur privé</span>
              </div>
              <div className="flex items-center space-x-2">
                <Car className="w-4 h-4 text-[var(--color-gold)]" />
                <span className="text-gray-400 text-sm">Événements spéciaux</span>
              </div>
              <div className="flex items-center space-x-2">
                <Car className="w-4 h-4 text-[var(--color-gold)]" />
                <span className="text-gray-400 text-sm">Transferts aéroport</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-500 text-sm">
              © {currentYear} LimoKeyser. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
