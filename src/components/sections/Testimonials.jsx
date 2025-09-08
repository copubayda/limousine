import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Button } from '../ui/button';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marie Dubois",
      role: "",
      content: "Service exceptionnel ! Le chauffeur était ponctuel, professionnel et la limousine impeccable. Une expérience inoubliable pour notre mariage.",
      rating: 5
    },
    {
      name: "Pierre Martin",
      role: "",
      content: "LimoKeyser a rendu mes déplacements professionnels très confortables. Service fiable et discret, je recommande vivement.",
      rating: 5
    },
    {
      name: "Sophie Laurent",
      role: "",
      content: "Pour nos événements corporatifs, LimoKeyser est notre partenaire de choix. Toujours à l'heure et service de qualité supérieure.",
      rating: 5
    }
  ];

  return (
    <section className="section-padding bg-[#0A0A0A]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ce que disent nos <span className="gold-gradient-text">Clients</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Découvrez les témoignages de nos clients satisfaits qui ont choisi LimoKeyser pour leurs déplacements.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#1C1C1C] p-6 rounded-xl border border-gray-800 hover:border-[var(--color-gold)] transition-colors"
            >
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-[var(--color-gold)] mr-2" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[var(--color-gold)] text-[var(--color-gold)]" />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
