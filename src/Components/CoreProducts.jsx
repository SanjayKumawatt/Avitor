import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Cpu, GitMerge, Smartphone } from 'lucide-react';

const CoreProducts = () => {
  const products = [
    {
      id: "documind",
      name: "DocuMind AI",
      desc: "Intelligent document understanding and analysis platform.",
      icon: <FileText className="w-10 h-10 text-white" />,
      color: "bg-blue-600"
    },
    {
      id: "novamind",
      name: "NovaMind AI",
      desc: "Automation engine for data-driven workflows.",
      icon: <Cpu className="w-10 h-10 text-white" />,
      color: "bg-purple-600"
    },
    {
      id: "flowpilot",
      name: "FlowPilot",
      desc: "Process orchestration and task automation system.",
      icon: <GitMerge className="w-10 h-10 text-white" />,
      color: "bg-orange-500"
    },
    {
      id: "appforge",
      name: "AppForge",
      desc: "Custom web and mobile application framework.",
      icon: <Smartphone className="w-10 h-10 text-white" />,
      color: "bg-green-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white"> {/* Dark Background for contrast */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Products & Platforms</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Powerful tools designed to accelerate digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-green-500 transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className={`${product.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                {product.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{product.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {product.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreProducts;