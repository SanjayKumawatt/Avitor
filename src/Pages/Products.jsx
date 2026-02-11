import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, FileSearch, ScanLine, Database, Sparkles, 
  CheckCircle2, ArrowRight, Cpu, GitPullRequest, Code2,
  Truck, Activity, BadgeDollarSign, GraduationCap, Factory, ShoppingBag, Layers
} from 'lucide-react';
import CTASection from '../Components/CTA';

const Products = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="bg-white">
      
      {/* 1. Page Header */}
      <section className="bg-green-50 py-20 border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-green-200 text-green-700 text-sm font-bold tracking-wide uppercase mb-6 shadow-sm"
          >
            <Brain size={16} /> Products & Solutions
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            AI-Driven Platforms Designed for <span className="text-green-600">Modern Operations</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            AVITOR develops a growing portfolio of AI-powered software products and digital solutions focused on automation, document intelligence, and operational efficiency.
          </motion.p>
        </div>
      </section>


      {/* 2. FEATURED PRODUCT: DocuMind AI */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white rounded-3xl border border-gray-200 shadow-2xl overflow-hidden"
          >
            {/* Header / Intro */}
            <div className="grid grid-cols-1 lg:grid-cols-2 bg-slate-900 text-white">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-blue-600 p-3 rounded-xl">
                    <FileSearch size={32} className="text-white" />
                  </div>
                  <h2 className="text-4xl font-bold">DocuMind AI</h2>
                </div>
                <h3 className="text-xl text-blue-300 font-medium mb-6">AI Document Understanding Software</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  DocuMind AI is an intelligent document understanding platform designed to analyze, interpret, and extract meaningful information from unstructured documents.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  It enables organizations to convert PDFs and complex documents into structured, searchable, and actionable data, reducing manual handling by applying AI to understand content contextually.
                </p>
              </div>
              <div className="relative h-64 lg:h-auto bg-slate-800">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                  alt="Document Analysis Dashboard" 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-slate-900 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* What It Does (Grid) */}
            <div className="p-8 lg:p-12 bg-gray-50 border-b border-gray-200">
              <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">What DocuMind AI Does</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <FeatureCard 
                  icon={<ScanLine className="text-blue-600" />}
                  title="PDF & Document Analysis"
                  desc="Processes PDFs, scanned files, and digital documents to identify structure and hierarchy."
                />
                <FeatureCard 
                  icon={<Database className="text-blue-600" />}
                  title="Smart Data Extraction"
                  desc="Automatically extracts critical fields such as names, dates, tables, and metadata."
                />
                <FeatureCard 
                  icon={<Sparkles className="text-blue-600" />}
                  title="AI-Powered Summaries"
                  desc="Generates concise summaries by understanding document context for quick insights."
                />
                <FeatureCard 
                  icon={<Brain className="text-blue-600" />}
                  title="Contextual Understanding"
                  desc="Uses NLP to understand intent, relationships, and semantics within documents."
                />
              </div>
            </div>

            {/* Use Cases & Benefits (Split) */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 lg:p-12 border-r border-gray-100">
                <h5 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Layers className="text-blue-600" /> Key Use Cases
                </h5>
                <ul className="space-y-4">
                  <ListPoint text="Contract and agreement analysis" />
                  <ListPoint text="Invoice and financial document processing" />
                  <ListPoint text="Compliance and regulatory documentation" />
                  <ListPoint text="Research papers and reports" />
                  <ListPoint text="Internal knowledge digitization" />
                </ul>
              </div>
              <div className="p-8 lg:p-12 bg-blue-50/50">
                <h5 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <CheckCircle2 className="text-green-600" /> Benefits
                </h5>
                <ul className="space-y-4">
                  <ListPoint text="Reduces manual document processing time" color="green" />
                  <ListPoint text="Improves accuracy and consistency" color="green" />
                  <ListPoint text="Enables faster decision-making" color="green" />
                  <ListPoint text="Enhances data accessibility" color="green" />
                  <ListPoint text="Supports scalable document workflows" color="green" />
                </ul>
              </div>
            </div>

            {/* Designed for Growth Footer */}
            <div className="bg-green-600 text-white p-6 text-center">
              <p className="font-medium text-lg">
                <span className="font-bold border-b border-green-400 pb-1 mr-2">Designed for Growth:</span> 
                Built with scalability in mind to process increasing volumes without extra manual effort.
              </p>
            </div>
          </motion.div>

        </div>
      </section>


      {/* 3. OTHER PRODUCTS (Grid) */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Automation Platforms</h2>
            <p className="text-gray-400">Expanding the capabilities of your digital infrastructure.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProductCard 
              title="NovaMind AI"
              icon={<Cpu className="w-10 h-10 text-purple-400" />}
              desc="An intelligent automation framework that connects data, logic, and workflows to automate repetitive operations."
              tags={["Predictive insights", "Intelligent triggers", "Workflow optimization"]}
              borderColor="border-purple-500/30 hover:border-purple-500"
            />
            <ProductCard 
              title="FlowPilot"
              icon={<GitPullRequest className="w-10 h-10 text-orange-400" />}
              desc="A process orchestration platform that manages tasks, approvals, and workflows across teams and systems."
              tags={["Task automation", "Workflow visibility", "Operational consistency"]}
              borderColor="border-orange-500/30 hover:border-orange-500"
            />
            <ProductCard 
              title="AppForge"
              icon={<Code2 className="w-10 h-10 text-green-400" />}
              desc="A flexible development foundation for building custom web and mobile applications with integrated intelligence."
              tags={["Flexible Foundation", "Integrated Intelligence", "Scalability"]}
              borderColor="border-green-500/30 hover:border-green-500"
            />
          </div>
        </div>
      </section>


      {/* 4. INDUSTRIES SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-bold tracking-wider uppercase mb-2 block">Industries</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Intelligent Solutions Across <span className="text-green-600">Multiple Sectors</span>
            </h2>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <IndustryCard 
              icon={<Truck className="text-white" />} 
              title="Logistics"
              desc="Document processing, shipment records, and operational automation."
              color="bg-orange-500"
            />
            <IndustryCard 
              icon={<Activity className="text-white" />} 
              title="Healthcare"
              desc="Medical records, reports, and administrative documentation."
              color="bg-red-500"
            />
            <IndustryCard 
              icon={<BadgeDollarSign className="text-white" />} 
              title="Financial Services"
              desc="Invoices, compliance documents, and structured data extraction."
              color="bg-green-600"
            />
            <IndustryCard 
              icon={<GraduationCap className="text-white" />} 
              title="Education"
              desc="Research material processing, digital records, and automation."
              color="bg-blue-500"
            />
            <IndustryCard 
              icon={<Factory className="text-white" />} 
              title="Manufacturing"
              desc="Process documentation and operational analytics."
              color="bg-slate-600"
            />
            <IndustryCard 
              icon={<ShoppingBag className="text-white" />} 
              title="Retail & E-Commerce"
              desc="Order records, supplier documents, and inventory intelligence."
              color="bg-purple-500"
            />
          </motion.div>
        </div>
      </section>
      <section>
        <CTASection/>
      </section>

    </div>
  );
};

// --- Helper Components ---

const FeatureCard = ({ icon, title, desc }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
    <div className="mb-4 bg-blue-50 p-3 rounded-lg w-fit">{icon}</div>
    <h5 className="text-lg font-bold text-gray-900 mb-2">{title}</h5>
    <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
  </div>
);

const ListPoint = ({ text, color = "blue" }) => (
  <li className="flex items-start gap-3">
    <CheckCircle2 className={`w-5 h-5 mt-0.5 flex-shrink-0 ${color === 'green' ? 'text-green-600' : 'text-blue-600'}`} />
    <span className="text-gray-700 font-medium">{text}</span>
  </li>
);

const ProductCard = ({ title, icon, desc, tags, borderColor }) => (
  <div className={`bg-gray-800 p-8 rounded-2xl border ${borderColor} transition-all duration-300 hover:-translate-y-2 group`}>
    <div className="mb-6">{icon}</div>
    <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
    <p className="text-gray-400 mb-6 leading-relaxed min-h-[80px]">{desc}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, i) => (
        <span key={i} className="text-xs font-medium px-3 py-1 rounded-full bg-gray-700 text-gray-300 border border-gray-600">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const IndustryCard = ({ icon, title, desc, color }) => (
  <motion.div 
    variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
    className="bg-white p-6 rounded-xl border border-gray-100 hover:border-green-200 shadow-sm hover:shadow-lg transition-all group"
  >
    <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform`}>
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">{title}</h3>
    <p className="text-gray-600">{desc}</p>
  </motion.div>
);

export default Products;