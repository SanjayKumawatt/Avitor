import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Target, Rocket, Shield, CheckCircle2 } from 'lucide-react';

const AboutSection = () => {
  // Data for the three bottom columns
  const missionPoints = [
    "Design AI-driven systems that solve operational challenges",
    "Build scalable and adaptable software platforms",
    "Enable automation through intelligent data processing",
    "Deliver reliable, secure, and future-ready solutions"
  ];

  const principlesPoints = [
    "Practical AI over experimental complexity",
    "Scalability by design",
    "Responsible data handling",
    "Continuous product evolution"
  ];

  // Animation variants for staggered reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Top Section: Main Intro & Image --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-green-600 font-bold tracking-wider uppercase mb-2 block">
              About AVITOR
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Building Practical AI Software for <span className="text-green-600">Real-World Use</span>
            </h2>
            
            <div className="flex items-center text-gray-500 mb-6 bg-gray-50 p-3 rounded-lg w-fit">
              <MapPin className="w-5 h-5 mr-2 text-green-600" />
              <span className="font-medium">Headquartered in Kota, Rajasthan, India</span>
            </div>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              AVITOR PRIVATE LIMITED is an Indian software startup focused on developing intelligent digital products that help organizations manage information efficiently and operate with greater accuracy and speed.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              Our work lies at the intersection of artificial intelligence, software engineering, and system design-creating platforms that turn complexity into clarity.
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.7, delay: 0.2 }}
             className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl"
          >
            {/* Image selection reasoning: 
              Chosen an image showing digital data overlaid on physical infrastructure (like a smart city or logistics hub). 
              This perfectly represents "Practical AI for Real-World Use".
            */}
            <img 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop"
              alt="AVITOR Technology integrating with the real world" 
              className="w-full h-full object-cover"
            />
            {/* Optional Gradient Overlay for better text readability if you add text over image later */}
            <div className="absolute inset-0 bg-gradient-to-tr from-green-900/20 to-transparent mix-blend-multiply"></div>
          </motion.div>
        </div>


        {/* --- Bottom Section: Vision, Mission, Principles Grid --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          
          {/* Column 1: Vision */}
          <motion.div variants={itemVariants} className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:border-red-200 transition-colors group">
            <div className="bg-red-100 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Target className="w-7 h-7 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed font-medium italic">
              "To build intelligent software products that simplify how businesses process information and make decisions."
            </p>
          </motion.div>

          {/* Column 2: Mission */}
          <motion.div variants={itemVariants} className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors group">
            <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Rocket className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <ul className="space-y-3">
              {missionPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Core Principles */}
          <motion.div variants={itemVariants} className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:border-green-200 transition-colors group">
            <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Shield className="w-7 h-7 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Core Principles</h3>
             <ul className="space-y-3">
              {principlesPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;