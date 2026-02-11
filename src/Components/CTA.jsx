import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="relative py-20 bg-green-900 overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-800/50 border border-green-700 text-green-100 text-sm font-medium mb-6 backdrop-blur-sm">
            <MessageSquare size={16} />
            <span>Let's discuss your project</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Accelerate Your <br />
            <span className="text-green-400">Digital Transformation?</span>
          </h2>

          <p className="text-lg text-green-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join hands with AVITOR PRIVATE LIMITED to build scalable, AI-driven solutions tailored for your industry. Let's turn your operational challenges into competitive advantages.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-green-900 bg-white rounded-full shadow-lg hover:bg-green-50 hover:shadow-green-900/50 transition-all duration-300 group"
            >
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;