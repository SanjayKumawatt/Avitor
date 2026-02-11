import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Mail, Send, CheckCircle, Loader2, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '', // Special field to know what the request is for
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call (Wait for 1.5 seconds)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form data if needed, or keep it to show what they sent
    }, 1500);
  };

  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. Header Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Get in <span className="text-green-500">Touch</span>
          </motion.h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project in mind or want to learn more about our AI products? We are here to help.
          </p>
        </div>
      </section>

      {/* 2. Main Content Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* --- Left Column: Contact Info --- */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Fill out the form and our team will get back to you within 24 hours. We are ready to discuss how AVITOR can transform your business operations.
                </p>
              </div>

              {/* Address Card */}
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-green-200 transition-colors">
                <div className="bg-white p-3 rounded-full shadow-sm text-green-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Our Office</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    H. No-90, Railway Society, <br />
                    Bajrang Nagar, Kota, <br />
                    Rajasthan, India, 324001.
                  </p>
                </div>
              </div>

              {/* Email Card */}
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-green-200 transition-colors">
                <div className="bg-white p-3 rounded-full shadow-sm text-green-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email Us</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    For general inquiries and support:
                  </p>
                  <a href="mailto:support@avitor.in" className="text-green-700 font-semibold hover:underline">
                    support@avitor.in
                  </a>
                </div>
              </div>
            </motion.div>


            {/* --- Right Column: Contact Form --- */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8"
            >
              <AnimatePresence mode="wait">
                
                {/* STATE 1: Success Message (No Alert) */}
                {isSuccess ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center py-10"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h3>
                    <p className="text-gray-600 mb-8 max-w-sm">
                      Thank you, <strong>{formData.name}</strong>. We have received your inquiry regarding <strong>{formData.inquiryType}</strong> and will contact you shortly.
                    </p>
                    <button 
                      onClick={() => { setIsSuccess(false); setFormData({ ...formData, message: '' }); }}
                      className="text-green-600 font-semibold hover:text-green-800 underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  
                  /* STATE 2: The Form */
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        <input 
                          type="text" 
                          name="name" 
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      {/* Phone */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                        <input 
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange} 
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        required 
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                        placeholder="john@company.com"
                      />
                    </div>

                    {/* Inquiry Type (Dropdown) */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">What is this regarding?</label>
                      <div className="relative">
                        <select 
                          name="inquiryType" 
                          required
                          value={formData.inquiryType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all appearance-none bg-white"
                        >
                          <option value="" disabled>Select an option</option>
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="DocuMind AI">DocuMind AI Product</option>
                          <option value="NovaMind Automation">NovaMind Automation</option>
                          <option value="Custom Development">Custom Software Development</option>
                          <option value="Partnership">Partnership / Investment</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                          <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                      <textarea 
                        rows="4" 
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Tell us about your requirements..."
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-green-600 text-white font-bold py-4 rounded-lg hover:bg-green-700 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="animate-spin" size={20} /> Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send size={20} />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;