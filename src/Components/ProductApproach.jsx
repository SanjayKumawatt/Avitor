import React from 'react';
import { motion } from 'framer-motion';
import { Layers, BrainCircuit, ShieldCheck, UserCheck, ArrowRight } from 'lucide-react';

const ProductApproach = () => {
  const points = [
    { title: "Modular System Architecture", icon: <Layers className="w-6 h-6" /> },
    { title: "AI-Driven Logic & Automation", icon: <BrainCircuit className="w-6 h-6" /> },
    { title: "Secure & Scalable Foundations", icon: <ShieldCheck className="w-6 h-6" /> },
    { title: "User-Centric Design Principles", icon: <UserCheck className="w-6 h-6" /> },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-green-600">Product-First</span> Approach
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Every solution at AVITOR is built as a product with growth in mind. We prioritize clarity, extensibility, and performance so that systems evolve naturally as business requirements expand.
            </p>
            <div className="h-1 w-20 bg-green-600 rounded-full mb-8"></div>
            
            {/* Visual Decorative List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {points.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-green-200 transition-colors">
                  <div className="text-green-600 bg-white p-2 rounded-full shadow-sm">
                    {item.icon}
                  </div>
                  <span className="font-semibold text-gray-800 text-sm">{item.title}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Image/Graphic */}
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="relative"
          >
            {/* Abstract Tech Visual */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                  alt="Product Development" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <p className="text-white font-medium text-lg">"Scalability is built into our DNA."</p>
                </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ProductApproach;