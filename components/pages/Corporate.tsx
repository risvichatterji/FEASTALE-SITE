import React, { useState } from 'react';
import { ASSETS } from '../../constants';
import ScrollReveal from '../ui/ScrollReveal';
import WhatsappIcon from '../ui/WhatsappIcon';
import WhatsappPopup from '../ui/WhatsappPopup';

const Corporate: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', company: '', email: '', phone: '', quantity: '' });
    const [submitted, setSubmitted] = useState(false);
    const [showWhatsappPopup, setShowWhatsappPopup] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        if (formData.name && formData.company && formData.email && formData.phone && Number(formData.quantity) > 0) {
            const formResponseUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeyVqJDd4ahftBCBd3sjK40MwWdEZMbByZJNFikeVecrrSmAw/formResponse';
            
            const body = new FormData();
            body.append('entry.587762291', formData.name);
            body.append('entry.1639917589', formData.company);
            body.append('entry.2100350121', formData.email);
            body.append('entry.590070186', formData.phone);
            body.append('entry.1968326637', formData.quantity);

            try {
                await fetch(formResponseUrl, {
                    method: 'POST',
                    body: body,
                    mode: 'no-cors'
                });
                setSubmitted(true);
            } catch (error) {
                console.error('Error submitting form:', error);
                alert('There was an error submitting your inquiry. Please try again or contact us directly.');
            }
        } else {
            alert('Please fill out all required fields.');
        }
    };

  return (
    <div>
        {/* Hero Section */}
        <section className="relative h-[60vh] bg-fixed bg-cover bg-center" style={{ backgroundImage: `url('https://files.catbox.moe/wodkos.jpg')` }}>
            <div className="absolute inset-0 bg-charcoal/60"></div>
            <div className="relative h-full flex flex-col justify-center items-center text-white text-center px-4">
                <ScrollReveal>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold">Corporate Gifting with Authentic Taste</h1>
                    <p className="mt-4 text-xl max-w-2xl mx-auto">Elevate your corporate relationships with a gift that tells a story of tradition and quality.</p>
                </ScrollReveal>
            </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-12 gap-16 items-center">
                    <ScrollReveal className="md:col-span-2 lg:col-span-5">
                        <img src="https://files.catbox.moe/stfu4n.JPG" alt="Corporate Gifting Mockup" className="rounded-lg shadow-xl w-full"/>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2} className="md:col-span-3 lg:col-span-7">
                        <h2 className="text-4xl font-serif font-bold text-charcoal">A Lasting Impression</h2>
                        <p className="mt-4 text-lg text-charcoal/80">Palaharappetti is the perfect way to express gratitude, celebrate milestones, and foster strong connections.</p>
                        <ul className="mt-6 space-y-4">
                            <li className="flex items-start">
                                <span className="text-fiery-orange font-bold text-2xl mr-3 mt-1">✓</span>
                                <div>
                                    <h3 className="font-bold text-dark-green">Customizable Greeting Cards</h3>
                                    <p className="text-charcoal/70">Add a personal touch with your company logo and a custom message.</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-fiery-orange font-bold text-2xl mr-3 mt-1">✓</span>
                                <div>
                                    <h3 className="font-bold text-dark-green">Tailored to Your Needs</h3>
                                    <p className="text-charcoal/70">We accommodate bulk orders and can tailor packages to your preferences.</p>
                                </div>
                            </li>
                             <li className="flex items-start">
                                <span className="text-fiery-orange font-bold text-2xl mr-3 mt-1">✓</span>
                                <div>
                                    <h3 className="font-bold text-dark-green">Hassle-Free Delivery</h3>
                                    <p className="text-charcoal/70">We manage the logistics to ensure your gifts arrive on time.</p>
                                </div>
                            </li>
                        </ul>
                    </ScrollReveal>
                </div>
            </div>
        </section>
        
        {/* Inquiry Form Section */}
        <section className="py-20 bg-off-white">
            <div className="container mx-auto px-4">
                <ScrollReveal className="text-center">
                    <h2 className="text-4xl font-serif font-bold text-charcoal">Bulk Order Inquiry</h2>
                    <p className="mt-2 text-lg text-charcoal/70">Let's discuss how we can meet your corporate gifting needs.</p>
                </ScrollReveal>

                <div className="mt-12 max-w-2xl mx-auto">
                    {submitted ? (
                        <ScrollReveal>
                            <div className="bg-dark-green text-white p-8 rounded-lg text-center">
                                <h3 className="text-2xl font-bold">Thank You!</h3>
                                <p>Your inquiry has been received. We will get back to you shortly.</p>
                            </div>
                        </ScrollReveal>
                    ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 bg-charcoal/80 text-white placeholder-off-white/50 border border-charcoal/40 rounded-md focus:ring-2 focus:ring-vibrant-gold focus:border-vibrant-gold" value={formData.name} onChange={handleChange} />
                            <input type="text" name="company" placeholder="Company Name" required className="w-full p-3 bg-charcoal/80 text-white placeholder-off-white/50 border border-charcoal/40 rounded-md focus:ring-2 focus:ring-vibrant-gold focus:border-vibrant-gold" value={formData.company} onChange={handleChange} />
                        </div>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input type="email" name="email" placeholder="Email Address" required className="w-full p-3 bg-charcoal/80 text-white placeholder-off-white/50 border border-charcoal/40 rounded-md focus:ring-2 focus:ring-vibrant-gold focus:border-vibrant-gold" value={formData.email} onChange={handleChange} />
                            <input type="tel" name="phone" placeholder="Phone Number" required className="w-full p-3 bg-charcoal/80 text-white placeholder-off-white/50 border border-charcoal/40 rounded-md focus:ring-2 focus:ring-vibrant-gold focus:border-vibrant-gold" value={formData.phone} onChange={handleChange} />
                        </div>
                        <div>
                             <input type="text" inputMode="numeric" name="quantity" placeholder="Estimated Quantity" required className="w-full p-3 bg-charcoal/80 text-white placeholder-off-white/50 border border-charcoal/40 rounded-md focus:ring-2 focus:ring-vibrant-gold focus:border-vibrant-gold" value={formData.quantity} onChange={handleChange} />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="bg-fiery-orange text-white font-bold py-3 px-12 rounded-full hover:bg-fiery-orange/90 transition-all">Submit Inquiry</button>
                        </div>
                    </form>
                    )}
                </div>
            </div>
        </section>

        {/* Sticky CTA */}
        <div className="sticky bottom-0 z-40 p-4 bg-charcoal text-white shadow-lg">
            <div className="container mx-auto px-4 flex justify-center items-center text-center">
                <p className="mr-4 font-semibold">Ready to place a bulk order?</p>
                <button onClick={() => setShowWhatsappPopup(true)} className="flex items-center bg-vibrant-gold text-charcoal font-bold py-2 px-6 rounded-full hover:bg-off-white transition-colors">
                    <WhatsappIcon className="w-6 h-6 mr-2" />
                    Message Us Here
                </button>
            </div>
        </div>
        <WhatsappPopup isOpen={showWhatsappPopup} onClose={() => setShowWhatsappPopup(false)} />
    </div>
  );
};

export default Corporate;