
import React from 'react';
import { Users, Target, Eye } from 'lucide-react';
import AnimatedText from '../ui/AnimatedText';
import ScrollReveal from '../ui/ScrollReveal';

const About: React.FC = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-center text-charcoal">
            About Feastale Private Limited
          </h1>
          <div className="w-24 h-1 bg-vibrant-gold mx-auto mt-4 mb-12"></div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto space-y-12">
          <ScrollReveal>
            <div className="text-lg text-charcoal/80 leading-relaxed text-center">
              <p>Feastale Private Limited, incorporated in June 2025, is a vibrant startup rooted in the rich culinary landscape of Kerala. Headquartered at the Lead-BI Foundation in Palakkad, we are on a passionate journey to celebrate and share the authentic tastes of our homeland with the world.</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="bg-off-white/80 p-8 rounded-lg shadow-sm">
                <div className="flex items-center text-dark-green mb-4">
                  <Target size={32} className="mr-4" />
                  <h2 className="text-3xl font-serif font-bold">Our Mission</h2>
                </div>
                <p className="text-charcoal/80">
                  To preserve Kerala’s culinary heritage by creating high-quality, authentic food products, while modernizing their presentation and accessibility for a global audience.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="bg-off-white/80 p-8 rounded-lg shadow-sm">
                <div className="flex items-center text-dark-green mb-4">
                  <Eye size={32} className="mr-4" />
                  <h2 className="text-3xl font-serif font-bold">Our Vision</h2>
                </div>
                <p className="text-charcoal/80">
                  To become a trusted and beloved name in authentic Kerala food experiences worldwide, synonymous with quality, tradition, and innovation.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="bg-fiery-orange text-white p-8 rounded-lg text-center shadow-lg transform hover:scale-105 transition-transform duration-300">
                <AnimatedText
                    text="Started by 3 young entrepreneurs from LEAD College of Management."
                    className="text-2xl md:text-3xl font-serif font-bold justify-center"
                    stagger={0.03}
                />
            </div>
          </ScrollReveal>
          
          <ScrollReveal>
            <div className="flex flex-col items-center text-center">
                <Users size={48} className="text-dark-green mb-4" />
                <h2 className="text-3xl font-serif font-bold text-charcoal">The Founders</h2>
                <p className="mt-2 max-w-2xl text-charcoal/80">
                    Our team is a trio of passionate innovators, blending business acumen with a deep love for Kerala's culture. We are driven by the desire to build a brand that not only delivers exceptional products but also tells the story of our heritage.
                </p>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </div>
  );
};

export default About;
