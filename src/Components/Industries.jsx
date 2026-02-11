import React from 'react';
import { motion } from 'framer-motion';
import { Truck, HeartPulse, Landmark, GraduationCap, Factory, ShoppingBag, Zap, ShoppingCart } from 'lucide-react';

const Industries = () => {
  const industries = [
    { name: "Logistics", icon: <Truck /> },
    { name: "Healthcare", icon: <HeartPulse /> },
    { name: "Financial Services", icon: <Landmark /> },
    { name: "Education", icon: <GraduationCap /> },
    { name: "Manufacturing", icon: <Factory /> },
    { name: "Retail", icon: <ShoppingBag /> },
    { name: "Energy", icon: <Zap /> },
    { name: "E-Commerce", icon: <ShoppingCart /> },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Industries We <span className="text-green-600">Support</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our platforms are adaptable across industries that rely heavily on data, documents, and operational efficiency.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {industries.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 hover:border-green-200 transition-all cursor-default group"
            >
              <div className="text-gray-400 group-hover:text-green-600 transition-colors mb-3 transform group-hover:scale-110 duration-300">
                {React.cloneElement(item.icon, { size: 32 })}
              </div>
              <span className="font-semibold text-gray-800 group-hover:text-green-700 text-center">
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;