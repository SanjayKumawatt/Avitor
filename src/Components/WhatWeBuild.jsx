import React from 'react';
import { motion } from 'framer-motion';
import { FileScan, Workflow, ShieldCheck, AppWindow, Zap } from 'lucide-react';

const WhatWeBuilding = () => {
  // Data configuration for the cards
  const features = [
    {
      title: "AI-powered Document Understanding",
      icon: <FileScan className="w-8 h-8 text-green-600" />,
      description: "Transforming unstructured documents into actionable data using advanced machine learning models."
    },
    {
      title: "Intelligent Workflow Automation",
      icon: <Workflow className="w-8 h-8 text-blue-600" />,
      description: "Streamlining complex business processes with smart, self-correcting automation flows."
    },
    {
      title: "Secure Data Processing Platforms",
      icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
      description: "Enterprise-grade security infrastructure ensuring data integrity and compliance at scale."
    },
    {
      title: "Custom-built Digital Applications",
      icon: <AppWindow className="w-8 h-8 text-blue-600" />,
      description: "Tailor-made software solutions designed specifically to meet unique operational needs."
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
              <Zap size={16} />
              Core Competencies
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What We Are <span className="text-green-600">Building</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At AVITOR, we focus on creating software products that solve real operational challenges faced by modern businesses. Our solutions combine artificial intelligence, data processing, and scalable system design to deliver long-term value.
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
            >
              <div className="mb-4 p-3 bg-gray-50 rounded-lg w-fit group-hover:bg-green-50 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default WhatWeBuilding;