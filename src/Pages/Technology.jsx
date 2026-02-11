import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Cpu, BrainCircuit, Network, ScanFace, FileText, 
  Server, ShieldCheck, Layers, Zap, ArrowRight 
} from 'lucide-react';

const Technology = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
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
    <div className="bg-white">
      
      {/* 1. Page Header */}
      <section className="bg-gray-900 text-white py-24 relative overflow-hidden">
        {/* Background Tech Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#22c55e 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 border border-gray-700 text-green-400 text-sm font-bold tracking-wide uppercase mb-6"
          >
            <Cpu size={16} /> Technology & AI
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Intelligence at the <span className="text-green-500">Core</span> of Every System
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            AVITOR integrates artificial intelligence into its products to enable automation, understanding, and insight generation rather than simple data storage.
          </motion.p>
        </div>
      </section>


      {/* 2. How AI Is Applied (Split Layout) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Content */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                How AI Is <span className="text-green-600">Applied</span>
              </h2>
              
              <div className="space-y-6">
                <TechListItem 
                  icon={<FileText className="text-blue-600" />} 
                  title="Natural Language Processing"
                  desc="Advanced algorithms for deep document understanding and semantic analysis."
                />
                <TechListItem 
                  icon={<BrainCircuit className="text-purple-600" />} 
                  title="Machine Learning"
                  desc="Pattern recognition models that improve accuracy over time."
                />
                <TechListItem 
                  icon={<ScanFace className="text-orange-500" />} 
                  title="Automated Classification"
                  desc="Intelligent tagging and categorization of unstructured data."
                />
                <TechListItem 
                  icon={<Network className="text-green-600" />} 
                  title="Context-Aware Summarization"
                  desc="Extracting key insights while retaining the original context."
                />
              </div>
            </motion.div>

            {/* Right: Abstract Tech Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gray-100"
            >
              <img 
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2065&auto=format&fit=crop" 
                alt="AI Neural Network Visualization" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <p className="font-mono text-sm text-green-400 mb-1"> System Status: Active</p>
                <p className="font-bold text-xl">Processing Data...</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* 3. Technology Principles (Grid) */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technology <span className="text-green-600">Principles</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We don't just write code; we engineer robust systems designed for the future.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <PrincipleCard 
              icon={<Server size={32} className="text-blue-500" />}
              title="Scalable Architecture"
              desc="Systems built to handle growing data loads without performance degradation."
            />
            <PrincipleCard 
              icon={<ShieldCheck size={32} className="text-green-600" />}
              title="Secure Data Handling"
              desc="Enterprise-grade security protocols to ensure data integrity and privacy."
            />
            <PrincipleCard 
              icon={<Layers size={32} className="text-purple-500" />}
              title="Modular Design"
              desc="Extensible components that allow for easy updates and feature additions."
            />
            <PrincipleCard 
              icon={<Zap size={32} className="text-yellow-500" />}
              title="Performance Focused"
              desc="Optimized code execution for lightning-fast processing speeds."
            />
          </motion.div>
        </div>
      </section>


      {/* 4. Bottom CTA Section */}
      <section className="py-20 bg-green-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Leverage AI for Your Business?
          </h2>
          <p className="text-lg text-green-100 mb-8 leading-relaxed">
            Experience the power of intelligent automation with AVITOR's cutting-edge technology stack.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-900 font-bold rounded-full hover:bg-green-50 transition-all shadow-lg hover:shadow-green-900/50"
            >
              Start Your Transformation <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/products"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-green-400 text-green-100 font-bold rounded-full hover:bg-green-800/50 transition-all"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

// --- Helper Components ---

const TechListItem = ({ icon, title, desc }) => (
  <motion.div 
    variants={{ hidden: { x: -20, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
    className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:shadow-md transition-shadow"
  >
    <div className="mt-1 bg-gray-50 p-2 rounded-lg">{icon}</div>
    <div>
      <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      <p className="text-gray-600 text-sm mt-1">{desc}</p>
    </div>
  </motion.div>
);

const PrincipleCard = ({ icon, title, desc }) => (
  <motion.div 
    variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-green-300 transition-all hover:-translate-y-1 group"
  >
    <div className="mb-6 bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed text-sm">
      {desc}
    </p>
  </motion.div>
);

export default Technology;