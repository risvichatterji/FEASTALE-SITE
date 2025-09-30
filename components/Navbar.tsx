

import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
// Fix: Import Variants from framer-motion to correctly type animation variants.
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ASSETS, NAV_LINKS } from '../constants';

interface NavbarProps {
  isHidden?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isHidden }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeLinkStyle = {
    color: '#FFC300',
    textDecoration: 'underline',
    textUnderlineOffset: '8px'
  };

  const navLinkClass = "relative font-medium text-white transition-colors hover:text-vibrant-gold after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-vibrant-gold after:transition-all after:duration-300 hover:after:w-full";

  // Fix: Explicitly type mobileMenuVariants with the Variants type.
  const mobileMenuVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  // Fix: Explicitly type navVariants with the Variants type to resolve type incompatibility.
  const navVariants: Variants = {
    visible: { 
        y: 0,
        transition: { duration: 0.3, ease: 'easeInOut' }
    },
    hidden: { 
        y: '-100%',
        transition: { duration: 0.3, ease: 'easeInOut' }
    },
  };

  return (
    <AnimatePresence>
      {!isHidden && (
        <motion.nav
          variants={navVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className={`sticky top-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-dark-green/95 shadow-lg backdrop-blur-sm' : 'bg-dark-green'}`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex-shrink-0">
                <NavLink to="/">
                  <img className="h-12 w-auto" src={ASSETS.feastaleLogoWhite} alt="Feastale Logo" />
                </NavLink>
              </div>
              <div className="hidden lg:block">
                <div className="ml-10 flex items-center space-x-8">
                  {NAV_LINKS.map((link) => (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      className={navLinkClass}
                      style={({ isActive }) => (isActive ? activeLinkStyle : {})}
                    >
                      {link.name}
                    </NavLink>
                  ))}
                   <NavLink to="/order">
                      <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-vibrant-gold text-charcoal font-bold py-2 px-5 rounded-full text-sm transition-shadow shadow-md hover:shadow-lg"
                      >
                          Order Now
                      </motion.div>
                  </NavLink>
                </div>
              </div>
              <div className="lg:hidden flex items-center">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-vibrant-gold focus:outline-none"
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={mobileMenuVariants}
                className="lg:hidden bg-dark-green"
              >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {NAV_LINKS.map((link) => (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-dark-green/50 hover:text-vibrant-gold"
                      style={({ isActive }) => (isActive ? activeLinkStyle : {})}
                    >
                      {link.name}
                    </NavLink>
                  ))}
                  <div className="pt-2">
                    <NavLink
                      to="/order"
                      onClick={() => setIsOpen(false)}
                      className="block text-center px-3 py-3 rounded-md text-base font-bold text-charcoal bg-vibrant-gold hover:bg-vibrant-gold/90"
                    >
                      Order Now
                    </NavLink>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;