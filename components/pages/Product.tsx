
import React from 'react';
import { ASSETS } from '../../constants';
import ScrollReveal from '../ui/ScrollReveal';
import { CheckCircle, Gift, Briefcase, Heart, Building } from 'lucide-react';

const Product: React.FC = () => {
  const benefits = [
    "Authentic Kerala taste",
    "Premium, handcrafted quality",
    "Elegant and eco-friendly packaging",
    "Perfect for all ages and occasions",
    "A unique and memorable gift",
  ];

  const useCases = [
    { icon: Gift, title: "Festival Gifting", desc: "Share the joy of Onam, Vishu, and other celebrations.", motif: "🌺" },
    { icon: Heart, title: "Employee Appreciation", desc: "A thoughtful gesture to recognize hard work.", motif: "🌟" },
    { icon: Briefcase, title: "Client Relationships", desc: "Strengthen business ties with a taste of tradition.", motif: "🤝" },
    { icon: Building, title: "Corporate Events", desc: "A unique and welcome addition to any gathering.", motif: "🎉" },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 bg-gradient-to-b from-off-white to-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <img src={ASSETS.palaharappettiLogoYellow} alt="Palaharappetti Logo" className="h-20 md:h-28 mx-auto mb-4"/>
            <p className="text-lg text-charcoal/80">The Authentic Taste of Kerala, Beautifully Boxed.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="relative mt-8 max-w-2xl mx-auto">
              <div className="absolute inset-0 bg-vibrant-gold/20 rounded-full blur-3xl"></div>
              <img src={ASSETS.palaharappettiRender} alt="Palaharappetti Box" className="relative w-full max-w-lg mx-auto" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-4xl font-serif font-bold text-charcoal">A Box Full of Tradition</h2>
                <div className="w-20 h-1 bg-fiery-orange mt-3 mb-6"></div>
                <p className="text-lg text-charcoal/80 mb-6">
                  Palaharappetti is more than just a snack box; it's an experience. Each box is carefully curated with <strong>500g</strong> of Kerala's most cherished snacks, made with traditional recipes and the finest local ingredients. It's a journey through the flavors that define our culture.
                </p>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-6 w-6 text-dark-green mr-3 flex-shrink-0" />
                      <span className="text-charcoal">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="grid grid-cols-1 gap-6">
                 <div className="bg-off-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-serif text-xl font-bold text-dark-green">Banana Chips</h3>
                    <p className="text-charcoal/70 mt-1">Thinly sliced, fried to golden perfection in pure coconut oil.</p>
                 </div>
                 <div className="bg-off-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-serif text-xl font-bold text-dark-green">Sharkaravaratti</h3>
                    <p className="text-charcoal/70 mt-1">Banana chips coated in a rich, spicy jaggery glaze.</p>
                 </div>
                 <div className="bg-off-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-serif text-xl font-bold text-dark-green">Baby Murukku</h3>
                    <p className="text-charcoal/70 mt-1">Crispy, savory rice flour snacks with a hint of spice.</p>
                 </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-off-white">
        <div className="container mx-auto px-4 text-center">
            <ScrollReveal>
                <h2 className="text-4xl font-serif font-bold text-charcoal">For Every Moment of Joy</h2>
                <p className="mt-2 text-lg text-charcoal/70">Palaharappetti is designed to fit seamlessly into every occasion.</p>
            </ScrollReveal>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {useCases.map((useCase, index) => (
                    <ScrollReveal key={useCase.title} delay={index * 0.15}>
                        <div className="group relative overflow-hidden bg-white p-8 rounded-lg shadow-md h-full text-left transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                            <div className="absolute -top-4 -right-4 text-4xl opacity-10 group-hover:opacity-30 group-hover:scale-125 transition-all duration-300">
                                {useCase.motif}
                            </div>
                            <useCase.icon className="h-12 w-12 text-fiery-orange mb-4"/>
                            <h3 className="text-xl font-serif font-semibold text-dark-green">{useCase.title}</h3>
                            <p className="mt-2 text-charcoal/70">{useCase.desc}</p>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
