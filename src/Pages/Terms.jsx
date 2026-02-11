import React from 'react';
import { motion } from 'framer-motion';
import { Scale, AlertCircle, Copyright, Globe, FileSignature, Gavel } from 'lucide-react';

const TermsAndConditions = () => {
  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 border-b border-gray-100 pb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-4">
            <Scale size={16} /> Legal Agreement
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
          <p className="text-gray-500">Please read these terms carefully before using our website.</p>
        </motion.div>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-12 text-gray-700 leading-relaxed"
        >
          
          {/* Acceptance */}
          <TermSection 
            icon={<FileSignature className="text-green-600" />}
            title="Acceptance"
          >
            <p>
              By accessing and using this website, you confirm that you accept these terms of use and agree to comply with them. If you do not agree to these terms, you must not use our site.
            </p>
          </TermSection>

          {/* Use of Website */}
          <TermSection 
            icon={<Globe className="text-blue-500" />}
            title="Use of Website"
          >
            <ul className="list-disc pl-5 space-y-2 marker:text-blue-500">
              <li>Content provided on this site is for general informational purposes only.</li>
              <li>Unauthorized copying, reproduction, or misuse of any content is strictly prohibited.</li>
              <li>Users must not use the website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the site.</li>
            </ul>
          </TermSection>

          {/* Intellectual Property */}
          <TermSection 
            icon={<Copyright className="text-purple-500" />}
            title="Intellectual Property"
          >
            <p>
              All website content, including text, graphics, logos, images, software, and product names (such as DocuMind AI, NovaMind AI), are the intellectual property of <strong>AVITOR PRIVATE LIMITED</strong>. You are granted a limited license only for purposes of viewing the material on this website.
            </p>
          </TermSection>

          {/* Limitation of Liability */}
          <TermSection 
            icon={<AlertCircle className="text-red-500" />}
            title="Limitation of Liability"
          >
            <p>
              AVITOR PRIVATE LIMITED shall not be held liable for any direct, indirect, incidental, or consequential damages arising out of the use or inability to use this website or any errors/omissions in the content.
            </p>
          </TermSection>

          {/* External Links */}
          <TermSection 
            icon={<Globe className="text-orange-500" />}
            title="External Links"
          >
            <p>
              This website may contain links to third-party websites. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
            </p>
          </TermSection>

          {/* Modifications & Law */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                <FileSignature size={20} className="text-gray-600"/> Modifications
              </h3>
              <p className="text-sm text-gray-600">
                Terms may be updated at any time without prior notice. Continued use of the site signifies your acceptance of updated terms.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                <Gavel size={20} className="text-gray-600"/> Governing Law
              </h3>
              <p className="text-sm text-gray-600">
                These terms are governed by and construed in accordance with the laws of <strong>India</strong>, and you submit to the non-exclusive jurisdiction of the state and federal courts located in India for the resolution of any disputes.
              </p>
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
};

const TermSection = ({ icon, title, children }) => (
  <div className="group">
    <div className="flex items-center gap-3 mb-3">
      <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-blue-50 transition-colors">{icon}</div>
      <h2 className="text-xl font-bold text-gray-900">{title}</h2>
    </div>
    <div className="pl-12 text-gray-600 border-l-2 border-gray-100 group-hover:border-blue-100 transition-colors pl-4">
      {children}
    </div>
  </div>
);

export default TermsAndConditions;