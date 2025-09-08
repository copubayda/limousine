import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Coins as HandCoins } from 'lucide-react';

const PaymentOption = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.7, delay }}
    className="bg-[#1C1C1C] p-8 rounded-xl border border-gray-800 hover:border-[var(--color-gold)] transition-colors duration-300 flex flex-col sm:flex-row items-center gap-6 shadow-lg"
  >
    <div className="w-16 h-16 bg-black border-2 border-[var(--color-gold)] rounded-full flex items-center justify-center flex-shrink-0">
      <Icon className="w-8 h-8 text-[var(--color-gold)]" />
    </div>
    <div className="text-center sm:text-left">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  </motion.div>
);


const Pricing = () => {
  return (
    <section id="pricing" className="section-padding bg-[#181818]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tarifs & <span className="gold-gradient-text">Paiement</span></h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">Nous proposons des tarifs compétitifs et des options de paiement flexibles pour votre commodité. Pour un devis détaillé, veuillez nous contacter.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
            <PaymentOption 
                icon={CreditCard}
                title="Paiement par carte"
                description="Tous nos véhicules sont équipés d’un terminal pour le paiement par carte bancaire."
                delay={0.2}
            />
            <PaymentOption 
                icon={HandCoins}
                title="Paiement comptant"
                description="Nous acceptons également le paiement en espèces, à régler directement auprès du chauffeur."
                delay={0.4}
            />
        </div>
      </div>
    </section>
  );
};

export default Pricing;