
import React, { useRef } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
// Fix: Import Transition type from framer-motion to resolve type incompatibility.
import { AnimatePresence, motion, Transition, useInView } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Product from './components/pages/Product';
import Corporate from './components/pages/Corporate';
import Gallery from './components/pages/Gallery';
import Contact from './components/pages/Contact';
import Order from './components/pages/Order';
import ScrollToTop from './components/ScrollToTop';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  in: {
    opacity: 1,
    y: 0
  },
  out: {
    opacity: 0,
    y: -20
  }
};

// Fix: Explicitly type pageTransition with the Transition type from framer-motion.
const pageTransition: Transition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

const AnimatedRoutes: React.FC = () => {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
                <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
                <Route path="/palaharappetti" element={<PageWrapper><Product /></PageWrapper>} />
                <Route path="/corporate-gifting" element={<PageWrapper><Corporate /></PageWrapper>} />
                <Route path="/gallery" element={<PageWrapper><Gallery /></PageWrapper>} />
                <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
                <Route path="/order" element={<PageWrapper><Order /></PageWrapper>} />
            </Routes>
        </AnimatePresence>
    );
}

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
    >
        {children}
    </motion.div>
);

const App: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const isFooterInView = useInView(footerRef, { margin: "0px 0px -50px 0px" });

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-off-white/20">
        <Navbar isHidden={isFooterInView} />
        <main className="flex-grow">
            <AnimatedRoutes />
        </main>
        <Footer ref={footerRef} />
      </div>
    </HashRouter>
  );
};

export default App;