import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useTransform, useScroll } from 'framer-motion';
import { ASSETS } from '../../constants';
import AnimatedText from '../ui/AnimatedText';
import ScrollReveal from '../ui/ScrollReveal';
import WhatsappIcon from '../ui/WhatsappIcon';
import WhatsappPopup from '../ui/WhatsappPopup';

const HeroSection: React.FC = () => {
    return (
        <section id="hero-section" className="relative w-full min-h-screen flex flex-col items-center overflow-hidden">
             <div 
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{
                    backgroundImage: "url('https://files.catbox.moe/lh36fl.jpg')",
                    filter: 'blur(2px)',
                    transform: 'scale(1.1)', // Prevents blurred edges from showing
                }}
             />
             <div className="absolute inset-0 bg-white/20"></div>

            <div className="text-center z-10 flex flex-col items-center px-4 pt-20 md:pt-28 flex-grow">
                <AnimatedText text="Palaharappetti for every occasion" className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 justify-center [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]" />

                <img src={ASSETS.palaharappettiLogoYellow} alt="Palaharappetti Logo" className="w-40 md:w-56 mt-8 mb-2" />
                <Link to="/order">
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(255, 195, 0, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-6 bg-vibrant-gold text-charcoal font-bold py-3 px-10 rounded-full text-lg transition-shadow"
                    >
                        Order Now
                    </motion.button>
                </Link>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="z-10 w-full flex justify-center"
            >
              <img
                src="https://files.catbox.moe/9nwg44.png"
                alt="Palaharappetti product box"
                className="w-[700%] max-w-none md:w-[600%] lg:w-[200%]"
              />
            </motion.div>
        </section>
    );
};

const InsideSection: React.FC = () => {
    const items = [
        { icon: 'https://i.postimg.cc/3NqmQLSL/banana-chips-icon.png', name: 'Banana Chips', desc: 'Crispy, golden, and perfectly salted.' },
        { icon: 'https://i.postimg.cc/gkw3HWj1/sharkaravaratti-icon.png', name: 'Sharkaravaratti', desc: 'Jaggery coated chips, a sweet delight.' },
        { icon: 'https://i.postimg.cc/GpRYRTK1/arimurukk-icon.png', name: 'Baby Murukku', desc: 'Crunchy, savory spirals of goodness.' },
    ];
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 text-center">
                <ScrollReveal>
                    <h2 className="text-4xl font-serif font-bold text-charcoal">🎁 What’s inside Palaharappetti?</h2>
                </ScrollReveal>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                        <ScrollReveal key={item.name} delay={index * 0.2}>
                            <motion.div
                                whileHover={{ y: -10, boxShadow: "0px 20px 30px rgba(58, 89, 73, 0.1)" }}
                                className="bg-off-white p-8 rounded-lg shadow-md transition-all duration-300 transform"
                            >
                                <img src={item.icon} alt={`${item.name} icon`} className="mx-auto h-16 w-16 object-contain mb-4" />
                                <h3 className="text-2xl font-serif font-semibold text-dark-green">{item.name}</h3>
                                <p className="mt-2 text-charcoal/70">{item.desc}</p>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

const CorporateHighlight: React.FC = () => {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0.5, 1], [0.8, 1.2]);

    return (
        <section className="py-24 bg-charcoal text-off-white overflow-hidden">
             <motion.div style={{scale}} className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/inspiration-geometry.png')] opacity-10"></motion.div>
            <div className="container mx-auto px-4 text-center relative">
                <ScrollReveal>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-vibrant-gold">Perfect for Clients, Employees, Festivals, and Events.</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-off-white/80">Make your connections feel special with the authentic warmth of Kerala.</p>
                    <Link to="/corporate-gifting">
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: '#3A5949' }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-8 border-2 border-vibrant-gold text-vibrant-gold font-bold py-3 px-10 rounded-full text-lg transition-colors"
                        >
                            Learn About Corporate Gifting
                        </motion.button>
                    </Link>
                </ScrollReveal>
            </div>
        </section>
    );
};

const FloatingCta: React.FC = () => {
    const [showWhatsappPopup, setShowWhatsappPopup] = useState(false);
    return (
        <>
            <div className="sticky bottom-0 z-40 py-4 bg-dark-green text-white shadow-2xl">
                <div className="container mx-auto px-4 flex justify-center items-center">
                    <button onClick={() => setShowWhatsappPopup(true)} className="flex items-center bg-white text-dark-green font-bold py-2 px-6 rounded-full hover:bg-off-white transition-colors">
                        <WhatsappIcon className="w-6 h-6 mr-2" />
                        Chat with Us
                    </button>
                </div>
            </div>
            <WhatsappPopup isOpen={showWhatsappPopup} onClose={() => setShowWhatsappPopup(false)} />
        </>
    );
};

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <InsideSection />
      <CorporateHighlight />
      <FloatingCta />
    </>
  );
};

export default Home;