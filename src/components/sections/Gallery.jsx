import React from 'react';
import { motion } from 'framer-motion';


const Gallery = ({ }) => {
  const galleryImages = [
    { id: 1, alt: "Intérieur luxueux de la Mercedes V-Class", description: "Intérieur en cuir de la V-Class" },
    { id: 2, alt: "Mercedes V-Class noire brillante devant un paysage de montagne", description: "V-Class en montagne" },
    { id: 3, alt: "Vue de face de la Mercedes V-Class", description: "Face avant de la V-Class" },
    { id: 4, alt: "Détail de la roue en alliage de la Mercedes V-Class", description: "Roue en alliage" },
  ];

  return (
    <>
    <section id="gallery" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre Flotte en <span className="gold-gradient-text">Images</span></h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Aperçu de l'élégance et du confort qui vous attendent.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer col-span-1 sm:col-span-2 lg:col-span-2 row-span-1 lg:row-span-2"
          >
            <img  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={galleryImages[0].alt} src="src/components/img/vo-limokeysair.png" />
            <div className="absolute inset-0 bg-black/40"></div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
          >
            <img  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={galleryImages[1].alt} src="src/components/img/voiture-limokeysair.png" />
            <div className="absolute inset-0 bg-black/40"></div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
          >
            <img  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={galleryImages[2].alt} src="src/components/img/devant-limokeysair.png" />
            <div className="absolute inset-0 bg-black/40"></div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer col-span-1 sm:col-span-2 lg:col-span-2"
          >
            <img  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={galleryImages[3].alt} src="src/components/img/face-limokeysair.png" />
            <div className="absolute inset-0 bg-black/40"></div>
          </motion.div>
        </div>
      </div>
    </section>
    
    </>
  );
};

export default Gallery;