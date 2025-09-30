import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import WhatsappIcon from './WhatsappIcon';

interface WhatsappPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const WhatsappPopup: React.FC<WhatsappPopupProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      alert('Please fill out all fields.');
      return;
    }

    // 1. Submit to Google Form in the background
    const formResponseUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScAhgrCZaOonqAvFzP78uvRF4z0VznGp8kzRvLYaeEbI1ia7Q/formResponse';
    const body = new FormData();
    body.append('entry.2109850765', formData.name);
    body.append('entry.3385384', formData.phone);
    body.append('entry.1354589224', formData.email);

    try {
      await fetch(formResponseUrl, {
        method: 'POST',
        body: body,
        mode: 'no-cors'
      });
    } catch (error) {
      console.error('Error submitting to Google Form:', error);
      // Decide not to block the user even if this fails, they can still contact via WhatsApp
    }

    // 2. Open WhatsApp with pre-filled message
    const message = `Hi, My Name is ${formData.name} and I am interested to know more about Palaharappetti.`;
    const whatsappUrl = `https://wa.me/918590980096?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    
    // 3. Close the popup and reset form
    onClose();
    setFormData({ name: '', phone: '', email: '' });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="bg-white rounded-lg shadow-xl w-full max-w-md relative font-sans"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors">
              <X size={24} />
            </button>
            <div className="p-8">
              <h2 className="text-2xl font-serif font-bold text-charcoal mb-2">Chat with us!</h2>
              <p className="text-charcoal/70 mb-6">Please fill in your details before we connect you on WhatsApp.</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-vibrant-gold focus:border-vibrant-gold"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-vibrant-gold focus:border-vibrant-gold"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email ID"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-vibrant-gold focus:border-vibrant-gold"
                  value={formData.email}
                  onChange={handleChange}
                />
                <button
                  type="submit"
                  className="w-full flex items-center justify-center bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition-colors"
                >
                  <WhatsappIcon className="w-6 h-6 mr-3" />
                  Chat on WhatsApp
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WhatsappPopup;
