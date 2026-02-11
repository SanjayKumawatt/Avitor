import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Database, UserCheck } from 'lucide-react';

const PrivacyPolicy = () => {
  const currentDate = new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 border-b border-gray-100 pb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-semibold mb-4">
            <Shield size={16} /> Legal Documentation
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-500">Effective Date: <span className="font-medium text-gray-800">{currentDate}</span></p>
        </motion.div>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-12 text-gray-700 leading-relaxed"
        >
          {/* Intro */}
          <section>
            <p className="text-lg">
              <strong>AVITOR PRIVATE LIMITED</strong> is committed to protecting the privacy of users and visitors. This policy explains how information is collected, used, and safeguarded when you use our website and services.
            </p>
          </section>

          {/* Info Collection */}
          <PolicySection 
            icon={<Database className="text-blue-500" />}
            title="Information We Collect"
          >
            <ul className="list-disc pl-5 space-y-2 marker:text-blue-500">
              <li>Personal details submitted via forms (Name, Email, Phone).</li>
              <li>Business-related information relevant to inquiries.</li>
              <li>Communication content exchanged with our support team.</li>
              <li>Technical usage data (IP address, browser type, device details).</li>
            </ul>
          </PolicySection>

          {/* How Info is Used */}
          <PolicySection 
            icon={<FileText className="text-green-600" />}
            title="How Information Is Used"
          >
            <ul className="list-disc pl-5 space-y-2 marker:text-green-600">
              <li>Responding to your inquiries and support requests.</li>
              <li>Improving our products, services, and website functionality.</li>
              <li>Maintaining internal records for administrative purposes.</li>
              <li>Ensuring platform security and preventing fraud.</li>
            </ul>
          </PolicySection>

          {/* Security */}
          <PolicySection 
            icon={<Lock className="text-purple-500" />}
            title="Data Security"
          >
            <p>
              We apply appropriate technical and organizational measures to protect your data from unauthorized access, loss, or misuse. Our security protocols are regularly reviewed to ensure industry-standard protection.
            </p>
          </PolicySection>

          {/* Sharing */}
          <PolicySection 
            icon={<UserCheck className="text-orange-500" />}
            title="Data Sharing"
          >
            <p>
              Your personal data is not sold, rented, or shared with third parties for marketing purposes. We only share data if legally required by law enforcement or strictly necessary for service delivery (e.g., hosting providers).
            </p>
          </PolicySection>

          {/* Cookies */}
          <PolicySection 
            icon={<Eye className="text-teal-500" />}
            title="Cookies"
          >
            <p>
              Cookies may be used to improve site functionality and analyze usage trends. You can choose to disable cookies through your browser settings, though this may affect some website features.
            </p>
          </PolicySection>

          {/* User Rights */}
          <PolicySection 
            icon={<Shield className="text-red-500" />}
            title="User Rights"
          >
            <p>
              You retain rights over your personal data. Users may request access, correction, or deletion of their personal data stored with us by contacting our support team at <a href="mailto:support@avitor.in" className="text-green-600 font-medium hover:underline">support@avitor.in</a>.
            </p>
          </PolicySection>

        </motion.div>
      </div>
    </div>
  );
};

const PolicySection = ({ icon, title, children }) => (
  <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors">
    <div className="flex items-center gap-3 mb-4">
      <div className="bg-white p-2 rounded-lg shadow-sm">{icon}</div>
      <h2 className="text-xl font-bold text-gray-900">{title}</h2>
    </div>
    <div className="text-gray-600">
      {children}
    </div>
  </div>
);

export default PrivacyPolicy;