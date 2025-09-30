
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ASSETS } from '../../constants';
import ScrollReveal from '../ui/ScrollReveal';
import { X, Info } from 'lucide-react';

const Order: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        promo: '',
        address: '',
        pincode: '',
        quantity: '1',
    });
    const [submitted, setSubmitted] = useState(false);
    const [popupMessage, setPopupMessage] = useState<string | null>(null);

    useEffect(() => {
        const quantity = Number(formData.quantity);
        if (quantity > 49) {
            setPopupMessage('You may place a bulk order with customized greeting cards, customized stickers, and exclusive discounts.');
        } else if (quantity > 9) {
            setPopupMessage('You may place a bulk order with customized greeting cards and avail special discounts.');
        } else {
            setPopupMessage(null);
        }
    }, [formData.quantity]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name === 'quantity') {
            const numValue = value.replace(/[^0-9]/g, '');
            setFormData({ ...formData, [name]: numValue });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.name && formData.phone && formData.email && formData.address && formData.pincode && Number(formData.quantity) > 0) {
            const formResponseUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSd80L16MsgSDRcwOcdWaCmSfd9_y8rclT5g540UguaHGj4Vgg/formResponse';
            
            const body = new FormData();
            body.append('entry.1676834569', formData.name);
            body.append('entry.1383392843', formData.phone);
            body.append('entry.1411261443', formData.email);
            body.append('entry.702808619', formData.promo);
            body.append('entry.1003377718', formData.address);
            body.append('entry.505025186', formData.pincode);
            body.append('entry.2109335995', formData.quantity);

            try {
                await fetch(formResponseUrl, {
                    method: 'POST',
                    body: body,
                    mode: 'no-cors' // Bypasses CORS issues; we don't need the response
                });
                setSubmitted(true);
            } catch (error) {
                console.error('Error submitting form:', error);
                alert('There was an error submitting your order. Please try again or contact us directly.');
            }
        } else {
            alert('Please fill out all required fields.');
        }
    };

    return (
        <div className="bg-white py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                 <ScrollReveal className="mb-12 max-w-4xl mx-auto">
                    <div className="bg-off-white/80 p-6 rounded-lg text-left sm:flex sm:items-center sm:justify-between">
                        <div>
                            <h3 className="font-bold text-lg text-charcoal">Looking for a larger order?</h3>
                            <p className="text-charcoal/80 mt-2">For bulk purchases of 10 or more boxes, you're eligible for special discounts and customization options.</p>
                        </div>
                        <Link to="/corporate-gifting" className="block mt-4 sm:mt-0 sm:ml-6 flex-shrink-0">
                            <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full sm:w-auto bg-dark-green text-white font-bold py-3 px-6 rounded-lg hover:bg-dark-green/90 transition-colors">
                                Bulk Order Inquiry
                            </motion.button>
                        </Link>
                    </div>
                </ScrollReveal>

                <ScrollReveal className="text-center">
                    <h1 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal">
                        Order Palaharappetti
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-charcoal/70">
                        Experience the authentic taste of Kerala, delivered to your doorstep.
                    </p>
                    <div className="w-24 h-1 bg-vibrant-gold mx-auto mt-4 mb-12"></div>
                </ScrollReveal>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Product Info */}
                    <ScrollReveal>
                        <div className="lg:sticky top-28">
                            <div className="max-w-md mx-auto">
                                <img src={ASSETS.palaharappettiProductShot} alt="Palaharappetti Box" className="w-full rounded-lg shadow-xl mb-6" />
                            </div>
                            <div className="text-center">
                                <h2 className="text-3xl font-serif font-bold text-dark-green">Palaharappetti Gift Box</h2>
                                <div className="flex justify-center items-baseline gap-4 my-4">
                                    <span className="text-2xl text-charcoal/50 line-through">₹499</span>
                                    <span className="text-4xl font-bold text-fiery-orange">₹449</span>
                                </div>
                                <p className="text-charcoal/70">(exclusive of delivery charges)</p>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Order Form */}
                    <ScrollReveal delay={0.2}>
                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-dark-green text-white p-8 rounded-lg text-center h-full flex flex-col justify-center"
                            >
                                <h3 className="text-2xl font-bold text-vibrant-gold">Thank You!</h3>
                                <p className="mt-4">Your order has been placed successfully. We will contact you shortly to confirm the details and proceed with payment.</p>
                                <p className="mt-2 text-sm text-off-white/70">For any queries, feel free to contact us on WhatsApp.</p>
                            </motion.div>
                        ) : (
                            <div className="bg-off-white p-8 rounded-lg shadow-md">
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 bg-charcoal/80 text-white placeholder-off-white/50 border border-charcoal/40 rounded-md focus:ring-2 focus:ring-vibrant-gold focus:border-vibrant-gold" value={formData.name} onChange={handleChange} />
                                    <input type="tel" name="phone" placeholder="Your Phone Number" required className="w-full p-3 bg-charcoal/80 text-white placeholder-off-white/50 border border-charcoal/40 rounded-md focus:ring-2 focus:ring-vibrant-gold focus:border-vibrant-gold" value={formData.phone} onChange={handleChange} />
                                    <input type="email" name="email" placeholder="Your Email ID" required className="w-full p-3 bg-charcoal/80 text-white placeholder-off-white/50 border border-charcoal/40 rounded-md focus:ring-2 focus:ring-vibrant-gold focus:border-vibrant-gold" value={formData.email} onChange={handleChange} />
                                    <input type="text" name="promo" placeholder="Enter PROMO CODE (if applicable)" className="w-full p-3 bg-charcoal/80 text-white placeholder-off-white/50 border border-charcoal/40 rounded-md focus:ring-2 focus:ring-vibrant-gold focus:border-vibrant-gold" value={formData.promo} onChange={handleChange} />
                                    <textarea name="address" placeholder="Delivery Address" required rows={3} className="w-full p-3 bg-charcoal/80 text-white placeholder-off-white/50 border border-charcoal/40 rounded-md focus:ring-2 focus:ring-vibrant-gold focus:border-vibrant-gold" value={formData.address} onChange={handleChange}></textarea>
                                    <div className="grid grid-cols-2 gap-4">
                                        <input type="text" name="pincode" placeholder="Pincode" required className="w-full p-3 bg-charcoal/80 text-white placeholder-off-white/50 border border-charcoal/40 rounded-md focus:ring-2 focus:ring-vibrant-gold focus:border-vibrant-gold" value={formData.pincode} onChange={handleChange} />
                                        <input type="text" inputMode="numeric" name="quantity" placeholder="Number of Boxes" required className="w-full p-3 bg-charcoal/80 text-white placeholder-off-white/50 border border-charcoal/40 rounded-md focus:ring-2 focus:ring-vibrant-gold focus:border-vibrant-gold" value={formData.quantity} onChange={handleChange} />
                                    </div>
                                    <AnimatePresence>
                                    {popupMessage && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            className="relative bg-royal-blue/10 text-royal-blue p-4 rounded-lg flex items-start"
                                        >
                                            <Info className="w-5 h-5 mr-3 flex-shrink-0 mt-1" />
                                            <p className="flex-grow text-sm">{popupMessage}</p>
                                            <button onClick={() => setPopupMessage(null)} className="absolute top-2 right-2 text-royal-blue/50 hover:text-royal-blue">
                                                <X size={18} />
                                            </button>
                                        </motion.div>
                                    )}
                                    </AnimatePresence>
                                    <button type="submit" className="w-full bg-fiery-orange text-white font-bold py-4 px-12 rounded-lg hover:bg-fiery-orange/90 transition-all text-lg transform hover:scale-105">Place Order</button>
                                </form>
                            </div>
                        )}
                    </ScrollReveal>
                </div>
            </div>
        </div>
    );
};

export default Order;
