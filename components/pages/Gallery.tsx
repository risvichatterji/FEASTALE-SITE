
import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../ui/ScrollReveal';

const galleryItems = [
    { id: 1, src: 'https://i.postimg.cc/V61wsmrT/AJD07529.jpg', alt: 'Palaharappetti product shot', caption: 'Authentic Delights', span: 'row-span-2' },
    { id: 2, src: 'https://i.postimg.cc/1zDPZftw/AJD07538.jpg', alt: 'Palaharappetti product shot', caption: 'Handcrafted Perfection' },
    { id: 3, src: 'https://i.postimg.cc/0QfsbF7N/AJD07550.jpg', alt: 'Palaharappetti product shot', caption: 'Taste of Tradition' },
    { id: 4, src: 'https://i.postimg.cc/XqY0FLgk/AJD07553.jpg', alt: 'Palaharappetti product shot', caption: 'Gift of Kerala' },
    { id: 5, src: 'https://i.postimg.cc/mZm4RxbX/AJD07562.jpg', alt: 'Palaharappetti product shot', caption: 'Premium Quality', span: 'row-span-2' },
    { id: 6, src: 'https://i.postimg.cc/T27zFr9B/AJD07564.jpg', alt: 'Palaharappetti product shot', caption: 'Festive Flavors' },
    { id: 7, src: 'https://i.postimg.cc/xTBWTnBR/AJD07565.jpg', alt: 'Palaharappetti product shot', caption: 'A Culinary Journey' },
    { id: 8, src: 'https://i.postimg.cc/SKh3CVSY/AJD07575.jpg', alt: 'Palaharappetti product shot', caption: 'Curated with Care' },
    { id: 9, src: 'https://i.postimg.cc/BvBygDbY/AJD07578.jpg', alt: 'Palaharappetti product shot', caption: 'Joy in a Box' },
    { id: 10, src: 'https://i.postimg.cc/yd6GrdSV/AJD07592.jpg', alt: 'Palaharappetti product shot', caption: 'Cherished Moments', span: 'row-span-2' },
    { id: 11, src: 'https://i.postimg.cc/63HPsXdC/AJD07594.jpg', alt: 'Palaharappetti product shot', caption: 'Unforgettable Taste' },
    { id: 12, src: 'https://i.postimg.cc/SR3tsf1s/AJD07600.jpg', alt: 'Palaharappetti product shot', caption: 'Pure Ingredients' },
    { id: 13, src: 'https://i.postimg.cc/hvf5c5r6/AJD07602.jpg', alt: 'Palaharappetti product shot', caption: 'Simply Delicious' },
    { id: 14, src: 'https://i.postimg.cc/t4wCjKzQ/AJD07609.jpg', alt: 'Palaharappetti product shot', caption: 'Heritage in Every Bite' },
    { id: 15, src: 'https://i.postimg.cc/BQwJTrkL/AJD07611.jpg', alt: 'Palaharappetti product shot', caption: 'Elegantly Packaged', span: 'row-span-2' },
    { id: 16, src: 'https://i.postimg.cc/N0XGfdNy/C0004T01.jpg', alt: 'Palaharappetti product shot', caption: 'Snack Perfection' },
    { id: 17, src: 'https://i.postimg.cc/9MtWyrHC/C0028T01.jpg', alt: 'Palaharappetti product shot', caption: 'A Treat for All' },
    { id: 18, src: 'https://i.postimg.cc/C1VhZbtc/C0031T01.jpg', alt: 'Palaharappetti product shot', caption: 'Golden Crisps' },
    { id: 19, src: 'https://i.postimg.cc/Znw4D2qQ/C0044T01.jpg', alt: 'Palaharappetti product shot', caption: 'Sharing Happiness' },
    { id: 20, src: 'https://i.postimg.cc/BQvq1SYf/C0055T01.jpg', alt: 'Palaharappetti product shot', caption: 'Exquisite Flavors' },
    { id: 21, src: 'https://i.postimg.cc/fWCzLtvv/C0056T01.jpg', alt: 'Palaharappetti product shot', caption: 'The Final Touch' },
];

const Gallery: React.FC = () => {
    return (
        <div className="bg-white py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal className="text-center">
                    <h1 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal">
                        Our Gallery
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-charcoal/70">
                        A glimpse into the world of Palaharappetti and the rich culture that inspires it.
                    </p>
                    <div className="w-24 h-1 bg-vibrant-gold mx-auto mt-4 mb-12"></div>
                </ScrollReveal>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 [grid-auto-rows:250px]">
                    {galleryItems.map((item, index) => (
                         <ScrollReveal key={item.id} delay={index * 0.05} className={`group relative overflow-hidden rounded-lg shadow-lg ${item.span || ''}`}>
                            <motion.img 
                                src={item.src} 
                                alt={item.alt} 
                                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                whileHover={{ filter: 'brightness(1.1)' }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 p-4 translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                <p className="text-white font-semibold">{item.caption}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
