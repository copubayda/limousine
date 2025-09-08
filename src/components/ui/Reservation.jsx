import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './button.jsx';
import { useToast } from './use-toast.js';
import { Calendar, Clock, MapPin, User, Mail, Phone, MessageSquare } from 'lucide-react';

const Reservation = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    pickup: '',
    dropoff: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare JSON payload for Node.js backend
      const response = await fetch('http://localhost:3001/api/send-reservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Réservation envoyée",
          description: "Votre demande de réservation a été envoyée avec succès. Nous vous contacterons bientôt."
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          pickup: '',
          dropoff: '',
          message: ''
        });
      } else {
        throw new Error(result.data || 'Erreur lors de l\'envoi');
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: error.message || "Une erreur s'est produite lors de l'envoi de votre réservation.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-padding bg-[#111111] min-h-screen">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Réserver votre <span className="gold-gradient-text">Transport</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Remplissez le formulaire ci-dessous pour réserver votre service de transport de luxe.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="bg-[#1C1C1C] p-8 rounded-xl border border-gray-800">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  Nom complet *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#2A2A2A] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[var(--color-gold)] focus:outline-none transition-colors"
                  placeholder="Votre nom complet"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#2A2A2A] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[var(--color-gold)] focus:outline-none transition-colors"
                  placeholder="votre@email.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  Téléphone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#2A2A2A] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[var(--color-gold)] focus:outline-none transition-colors"
                  placeholder="+41 XX XXX XX XX"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Date *
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#2A2A2A] border border-gray-700 rounded-lg text-white focus:border-[var(--color-gold)] focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  Heure *
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#2A2A2A] border border-gray-700 rounded-lg text-white focus:border-[var(--color-gold)] focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2 mb-6">
              <label className="text-sm font-medium text-gray-300 flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                Lieu de prise en charge *
              </label>
              <input
                type="text"
                name="pickup"
                value={formData.pickup}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-[#2A2A2A] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[var(--color-gold)] focus:outline-none transition-colors"
                placeholder="Adresse de départ"
              />
            </div>

            <div className="space-y-2 mb-6">
              <label className="text-sm font-medium text-gray-300 flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                Lieu de dépose *
              </label>
              <input
                type="text"
                name="dropoff"
                value={formData.dropoff}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-[#2A2A2A] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[var(--color-gold)] focus:outline-none transition-colors"
                placeholder="Adresse d'arrivée"
              />
            </div>

            <div className="space-y-2 mb-8">
              <label className="text-sm font-medium text-gray-300 flex items-center">
                <MessageSquare className="w-4 h-4 mr-2" />
                Message (optionnel)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 bg-[#2A2A2A] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[var(--color-gold)] focus:outline-none transition-colors resize-none"
                placeholder="Informations supplémentaires, nombre de passagers, etc."
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[var(--color-gold)] text-black hover:bg-[var(--color-gold-dark)] font-bold py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer la réservation'}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Reservation;
