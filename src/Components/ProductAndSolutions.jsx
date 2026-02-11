import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, FileSearch, ScanText, Database, Sparkles, Workflow, 
  CheckCircle2, ArrowRight, Cpu, GitPullRequest, Code2 
} from 'lucide-react';

const ProductsAndSolutions = () => {
  // Animation variants for standard fade-up
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-20 bg-white" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Section Header --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-2 text-green-600 font-bold tracking-wider uppercase mb-3">
            <Brain size={20} />
            <span>Products & Solutions</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            AI-Driven Platforms Designed for <span className="text-green-600">Modern Operations</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            AVITOR develops a growing portfolio of AI-powered software products and digital solutions focused on automation, document intelligence, and operational efficiency.
          </p>
        </motion.div>


        {/* =========================================
            FEATURED PRODUCT: DocuMind AI
        ========================================= */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-blue-50 rounded-3xl overflow-hidden border border-blue-100 mb-20 shadow-lg"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left Side: Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-600 p-2 rounded-lg text-white">
                  <FileSearch size={28} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">DocuMind AI</h3>
              </div>
              <h4 className="text-xl text-blue-700 font-medium mb-6">AI Document Understanding Software</h4>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                DocuMind AI is an intelligent document understanding platform designed to analyze, interpret, and extract meaningful information from unstructured documents. It enables organizations to convert PDFs and complex documents into structured, searchable, and actionable data.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                It reduces manual document handling by applying artificial intelligence to understand content contextually rather than treating documents as static files.
              </p>

              <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                🔹 Designed for Scalable Growth
              </div>
            </div>

            {/* Right Side: Image */}
            <div className="relative h-64 lg:h-auto">
               {/* Relevant image for document analysis/AI */}
              <img 
                src="https://images.unsplash.com/photo-1633419461186-7d40a38105ec?q=80&w=2080&auto=format&fit=crop" 
                alt="AI analyzing digital documents on a tablet" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-blue-900/20 to-transparent"></div>
            </div>
          </div>

          {/* --- DocuMind Features Grid --- */}
          <div className="bg-white p-8 lg:p-12 border-t border-blue-100">
            <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">What DocuMind AI Does</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard 
                icon={<ScanText className="text-blue-600" />}
                title="PDF & Document Analysis"
                desc="Processes PDFs, scanned files, and digital documents to identify structure, content hierarchy, and key data elements."
              />
              <FeatureCard 
                icon={<Database className="text-blue-600" />}
                title="Smart Data Extraction"
                desc="Automatically extracts critical fields such as names, dates, identifiers, tables, and metadata with high accuracy."
              />
              <FeatureCard 
                icon={<Sparkles className="text-blue-600" />}
                title="AI-Powered Auto Summaries"
                desc="Generates concise summaries by understanding document context, helping users quickly grasp key information."
              />
              <FeatureCard 
                icon={<Brain className="text-blue-600" />}
                title="Contextual Understanding"
                desc="Uses natural language processing to understand intent, relationships, and semantics within documents."
              />
            </div>
          </div>

           {/* --- DocuMind Lists (Use Cases & Benefits) --- */}
           <div className="bg-gray-50 p-8 lg:p-12 border-t border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h5 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Workflow size={20} className="text-blue-600"/> Key Use Cases
                </h5>
                <ul className="space-y-3">
                  <ListPoint text="Contract and agreement analysis" />
                  <ListPoint text="Invoice and financial document processing" />
                  <ListPoint text="Compliance and regulatory documentation" />
                  <ListPoint text="Research papers and reports" />
                  <ListPoint text="Internal knowledge digitization" />
                </ul>
              </div>
              <div>
                <h5 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-green-600"/> Benefits of DocuMind AI
                </h5>
                <ul className="space-y-3">
                  <ListPoint text="Reduces manual document processing time" color="green" />
                  <ListPoint text="Improves accuracy and consistency" color="green" />
                  <ListPoint text="Enables faster decision-making" color="green" />
                  <ListPoint text="Enhances data accessibility" color="green" />
                  <ListPoint text="Supports scalable document workflows" color="green" />
                </ul>
              </div>
           </div>
        </motion.div>


        {/* =========================================
            OTHER PRODUCTS GRID (NovaMind, FlowPilot, AppForge)
        ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* --- NovaMind AI --- */}
          <ProductCard 
            title="NovaMind AI"
            icon={<Cpu size={32} className="text-white" />}
            headerColor="bg-purple-600"
            imgSrc="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2065&auto=format&fit=crop"
            description="An intelligent automation framework that connects data, logic, and workflows to automate repetitive operations and decision paths."
            points={[
              "Predictive insights",
              "Intelligent triggers",
              "Workflow optimization"
            ]}
          />

          {/* --- FlowPilot --- */}
          <ProductCard 
            title="FlowPilot"
            icon={<GitPullRequest size={32} className="text-white" />}
            headerColor="bg-orange-500"
            imgSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
            description="A process orchestration platform that manages tasks, approvals, and workflows across teams and systems."
            points={[
              "Task automation",
              "Workflow visibility",
              "Operational consistency"
            ]}
          />

          {/* --- AppForge --- */}
          <ProductCard 
            title="AppForge"
            icon={<Code2 size={32} className="text-white" />}
            headerColor="bg-green-600"
            imgSrc="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2070&auto=format&fit=crop"
            description="A flexible development foundation for building custom web and mobile applications with integrated intelligence and scalability."
            points={[
              "Custom web & mobile apps",
              "Integrated intelligence",
              "Scalable foundation"
            ]}
          />

        </div>

      </div>
    </section>
  );
};

// ==================== Helper Components ====================

// 1. For DocuMind Features Grid
const FeatureCard = ({ icon, title, desc }) => (
  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
    <div className="mb-4 bg-white p-3 rounded-lg w-fit shadow-sm border border-gray-50">{icon}</div>
    <h5 className="text-lg font-bold text-gray-900 mb-2">{title}</h5>
    <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
  </div>
);

// 2. For Bullet Points List
const ListPoint = ({ text, color = "blue" }) => (
  <li className="flex items-start gap-3">
    <CheckCircle2 className={`w-5 h-5 mt-0.5 flex-shrink-0 ${color === 'green' ? 'text-green-500' : 'text-blue-500'}`} />
    <span className="text-gray-700 font-medium">{text}</span>
  </li>
);

// 3. For the 3 smaller Product Cards
const ProductCard = ({ title, icon, headerColor, description, points, imgSrc }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col"
    >
      {/* Image Header */}
      <div className="relative h-48 overflow-hidden">
        <img src={imgSrc} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
         <div className={`absolute bottom-4 left-4 ${headerColor} p-3 rounded-xl shadow-lg`}>
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
          {description}
        </p>
        
        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
           <ul className="space-y-2">
            {points.map((point, index) => (
              <li key={index} className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                <ArrowRight size={16} className={`text-${headerColor.replace('bg-', '')}`} />
                {point}
              </li>
            ))}
           </ul>
        </div>
      </div>
    </motion.div>
  )
};

export default ProductsAndSolutions;