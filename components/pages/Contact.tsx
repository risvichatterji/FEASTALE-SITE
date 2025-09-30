import React, { useState } from 'react';
import { ASSETS } from '../../constants';
import ScrollReveal from '../ui/ScrollReveal';
import { Phone, Mail, Instagram, MessageCircle } from 'lucide-react';
import WhatsappIcon from '../ui/WhatsappIcon';
import WhatsappPopup from '../ui/WhatsappPopup';

const Contact: React.FC = () => {
  const [showWhatsappPopup, setShowWhatsappPopup] = useState(false);

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center">
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal">
                Get in Touch
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-charcoal/70">
                We'd love to hear from you! Whether it's for an order, a query, or just to say hello.
            </p>
            <div className="w-24 h-1 bg-vibrant-gold mx-auto mt-4 mb-16"></div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column: Contact Details */}
            <ScrollReveal>
                <div className="space-y-6">
                    <div className="flex items-start p-6 bg-fiery-orange/10 rounded-lg">
                        <Phone size={28} className="text-fiery-orange mr-5 mt-1" />
                        <div>
                            <h3 className="text-xl font-bold text-charcoal">Phone</h3>
                            <p className="text-charcoal/80">Talk to us directly for quick assistance.</p>
                            <a href="tel:+918590980096" className="text-fiery-orange font-semibold hover:underline">+91 85909 80096</a>
                        </div>
                    </div>
                    <div className="flex items-start p-6 bg-fiery-orange/10 rounded-lg">
                        <Mail size={28} className="text-fiery-orange mr-5 mt-1" />
                        <div>
                            <h3 className="text-xl font-bold text-charcoal">Email</h3>
                            <p className="text-charcoal/80">For inquiries and support, drop us an email.</p>
                            <a href="mailto:sales.team@feastale.com" className="text-fiery-orange font-semibold hover:underline">sales.team@feastale.com</a>
                        </div>
                    </div>
                     <div className="flex items-start p-6 bg-fiery-orange/10 rounded-lg">
                        <Instagram size={28} className="text-fiery-orange mr-5 mt-1" />
                        <div>
                            <h3 className="text-xl font-bold text-charcoal">Instagram</h3>
                            <p className="text-charcoal/80">Follow our journey and see what's new.</p>
                            <a href="https://www.instagram.com/feastale/" target="_blank" rel="noopener noreferrer" className="text-fiery-orange font-semibold hover:underline">@feastale</a>
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            {/* Right Column: WhatsApp and Map */}
            <ScrollReveal delay={0.2}>
                <div className="bg-dark-green p-8 rounded-lg text-white text-center flex flex-col items-center justify-center h-full">
                    <MessageCircle size={48} className="mb-4 text-vibrant-gold"/>
                    <h3 className="text-3xl font-serif font-bold">Order on WhatsApp</h3>
                    <p className="mt-2 mb-6 text-off-white/80">The quickest way to place your order. Tap the button below to start a chat.</p>
                    <button onClick={() => setShowWhatsappPopup(true)} className="inline-flex items-center bg-vibrant-gold text-charcoal font-bold py-3 px-8 rounded-full text-lg hover:bg-off-white transition-colors">
                        <WhatsappIcon className="w-6 h-6 mr-3" />
                        Chat Now
                    </button>
                </div>
            </ScrollReveal>
        </div>
        
        {/* Map Section */}
        <ScrollReveal className="mt-20">
            <h2 className="text-3xl font-serif font-bold text-center text-charcoal mb-8">Our Location</h2>
            <div className="rounded-lg overflow-hidden shadow-xl border-4 border-off-white">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.487854612349!2d76.62549667586208!3d10.840966958189878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba86c65d6c5b965%3A0x1d47152a58402444!2sLEAD%20College%20of%20Management!5e0!3m2!1sen!2sin!4v1718890288881!5m2!1sen!2sin" 
                    width="100%" 
                    height="450" 
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Feastale Location Map"
                ></iframe>
                 <div className="bg-charcoal text-white p-4 text-center font-semibold">
                    Lead Business Incubator, Dhoni, Palakkad - 678009
                </div>
            </div>
        </ScrollReveal>
      </div>
      <WhatsappPopup isOpen={showWhatsappPopup} onClose={() => setShowWhatsappPopup(false)} />
    </div>
  );
};

export default Contact;