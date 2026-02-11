import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Target, Rocket, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import WhatWeBuilding from '../Components/WhatWeBuild';
import Industries from '../Components/Industries';
import CTASection from '../Components/CTA';

const About = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
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
      
      {/* 1. Page Header / Banner */}
      <section className="bg-green-50 py-20 border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            About <span className="text-green-600">AVITOR</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Building Practical AI Software for Real-World Use
          </motion.p>
        </div>
      </section>

      {/* 2. Main Company Intro */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 text-green-700 font-semibold bg-green-50 px-3 py-1 rounded-full text-sm mb-6">
                <MapPin size={16} /> Headquartered in Kota, Rajasthan
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                Turning Complexity into <span className="text-green-600">Clarity</span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                <strong className="text-gray-900">AVITOR PRIVATE LIMITED</strong> is an Indian software startup focused on developing intelligent digital products that help organizations manage information efficiently and operate with greater accuracy and speed.
              </p>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our work lies at the intersection of artificial intelligence, software engineering, and system design-creating platforms that bridge the gap between advanced technology and practical utility.
              </p>

              <Link 
                to="/contact" 
                className="inline-flex items-center text-green-700 font-semibold hover:text-green-800 transition-colors"
              >
                Get in touch with us <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                alt="Avitor Team Collaboration" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-bold text-lg">Innovation Hub</p>
                <p className="text-sm opacity-90">Kota, Rajasthan</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. Vision, Mission & Principles Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            
            {/* Card 1: Vision */}
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To build intelligent software products that simplify how businesses process information and make decisions.
              </p>
            </motion.div>

            {/* Card 2: Mission */}
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Rocket className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <ul className="space-y-3">
                {[
                  "Design AI-driven systems that solve operational challenges",
                  "Build scalable and adaptable software platforms",
                  "Enable automation through intelligent data processing",
                  "Deliver reliable, secure, and future-ready solutions"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Card 3: Core Principles */}
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <ShieldCheck className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Core Principles</h3>
              <ul className="space-y-3">
                {[
                  "Practical AI over experimental complexity",
                  "Scalability by design",
                  "Responsible data handling",
                  "Continuous product evolution"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </motion.div>

        </div>
      </section>
      <section>
        <WhatWeBuilding/>
        <Industries/>
        <CTASection/>
        
      </section>
      

    </div>
  );
};

export default About;