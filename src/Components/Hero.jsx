import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Rocket, Lightbulb, Puzzle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden pt-10 pb-20 lg:pt-20 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <span className="text-green-600 font-semibold text-lg mb-4 tracking-wide uppercase">
              Solutions for your business
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Intelligent Software Products Built to <span className="text-green-600">Understand Data</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl">
              AVITOR PRIVATE LIMITED is a technology startup focused on building AI-powered software products and digital solutions that help organizations manage information, automate processes, and make smarter decisions. Our platforms are designed to reduce operational complexity while enabling scalability and adaptability across industries.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/products"
                className="inline-flex justify-center items-center px-8 py-3.5 text-base font-semibold text-white bg-green-600 rounded-md shadow-md hover:bg-green-700 hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                Explore Our Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              <Link 
                to="/consultation"
                className="inline-flex justify-center items-center px-8 py-3.5 text-base font-semibold text-green-700 bg-white border-2 border-green-600 rounded-md hover:bg-green-50 transition-all"
              >
                Request a Consultation
              </Link>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100">
               <p className="text-sm text-gray-500 font-medium italic">
                 "We transform raw data into structured knowledge and automated workflows."
               </p>
            </div>
          </motion.div>

          {/* Right Side: Illustration & Floating Elements */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Main Illustration Container */}
            <div className="relative w-full max-w-lg">
              
              {/* Background Blob/Shape */}
              <div className="absolute top-10 right-10 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>

              {/* Main Image (Tech Related Image) */}
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Technology and Data" 
                className="relative z-10 w-full h-auto drop-shadow-xl rounded-lg" 
              />

              {/* Floating Icons (Matching your reference) */}
              
              {/* Icon 1: Puzzle (Top Right) */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-6 -right-4 z-20 bg-white p-3 rounded-full shadow-lg border border-gray-100"
              >
                <div className="bg-orange-100 p-2 rounded-full">
                  <Puzzle className="w-6 h-6 text-orange-500" />
                </div>
              </motion.div>

              {/* Icon 2: Lightbulb (Top Far Right) */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute top-10 -right-12 z-20 bg-white p-3 rounded-full shadow-lg border border-gray-100"
              >
                <div className="bg-yellow-100 p-2 rounded-full">
                  <Lightbulb className="w-6 h-6 text-yellow-500" />
                </div>
              </motion.div>

              {/* Icon 3: Rocket (Middle Right) */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-1/2 -right-8 z-20 bg-white p-3 rounded-full shadow-lg border border-gray-100"
              >
                <div className="bg-blue-100 p-2 rounded-full">
                  <Rocket className="w-6 h-6 text-blue-500" />
                </div>
              </motion.div>

              {/* Skilled Professionals Badge (Bottom Left) */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 z-30 bg-white py-3 px-5 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3"
              >
                <div className="bg-green-100 p-2 rounded-full">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">Skilled Professionals</p>
                  <p className="text-xs text-gray-500">AI & Workflow Experts</p>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;