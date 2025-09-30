import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Instagram, Linkedin, Facebook } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { ASSETS, NAV_LINKS } from '../constants';
import ComingSoonPopup from './ui/ComingSoonPopup';
import WhatsappIcon from './ui/WhatsappIcon';
import WhatsappPopup from './ui/WhatsappPopup';

const Footer = React.forwardRef<HTMLElement>((_props, ref) => {
  const [showComingSoonPopup, setShowComingSoonPopup] = useState(false);
  const [showWhatsappPopup, setShowWhatsappPopup] = useState(false);

  const handleComingSoonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowComingSoonPopup(true);
    setTimeout(() => {
      setShowComingSoonPopup(false);
    }, 2000); // Popup will disappear after 2 seconds
  };

  return (
    <>
    <footer ref={ref} className="bg-gradient-to-r from-dark-green to-charcoal text-off-white/80 pt-12 bg-[length:200%_200%] animate-animated-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-1">
            <img src={ASSETS.feastaleLogoWhite} alt="Feastale Logo" className="h-auto w-36 mb-4" />
            <p className="text-sm">Preserving Kerala’s culinary heritage while modernizing it for a global audience.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <NavLink to={link.path} className="hover:text-vibrant-gold transition-colors">
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
                <li>
                  <button onClick={() => setShowWhatsappPopup(true)} className="flex items-center hover:text-vibrant-gold transition-colors text-left">
                    <WhatsappIcon className="w-5 h-5 mr-2" />
                    +91 85909 80096
                  </button>
                </li>
                <li><a href="mailto:sales.team@feastale.com" className="hover:text-vibrant-gold transition-colors">sales.team@feastale.com</a></li>
                <li className="pt-2">Lead Business Incubator,</li>
                <li>Dhoni, Palakkad - 678009</li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
            <h3 className="font-serif text-lg font-bold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
                <a href="https://www.instagram.com/feastale/" target="_blank" rel="noopener noreferrer" className="text-off-white/80 hover:text-vibrant-gold transition-colors"><Instagram size={24} /></a>
                <a href="#" onClick={handleComingSoonClick} className="text-off-white/80 hover:text-vibrant-gold transition-colors cursor-pointer"><Linkedin size={24} /></a>
                <a href="#" onClick={handleComingSoonClick} className="text-off-white/80 hover:text-vibrant-gold transition-colors cursor-pointer"><Facebook size={24} /></a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 py-4 border-t border-off-white/20 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Feastale Private Limited. All Rights Reserved. #Feastale #Palaharappetti</p>
        </div>
      </div>
    </footer>
    <AnimatePresence>
        {showComingSoonPopup && <ComingSoonPopup />}
    </AnimatePresence>
    <WhatsappPopup isOpen={showWhatsappPopup} onClose={() => setShowWhatsappPopup(false)} />
    </>
  );
});

export default Footer;