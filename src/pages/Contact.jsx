import { useState } from 'react';
import { addEnquiry } from '../db/database';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      await addEnquiry(formData);
      
      // Initialize EmailJS
      emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your public key

      // Send email using EmailJS
      await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your service ID
        "YOUR_TEMPLATE_ID", // Replace with your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          to_email: 'codingconquerorscc@gmail.com',
        }
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">Contact Us</h1>
          
          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg shadow-lg rounded-lg p-6 mb-8 border border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-white">Get in Touch</h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    <strong>Address:</strong><br />
                    Coding Conquerors Institute<br />
                    Near Prayas Hospital, College Stop Malegaon, Maharashtra
                  </p>
                  <p>
                    <strong>Email:</strong><br />
                    codingconquerorscc@gmail.com
                  </p>
                  <p>
                    <strong>Phone:</strong><br />
                    +91 8262846508
                  </p>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-emerald-400 focus:ring-emerald-400"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-emerald-400 focus:ring-emerald-400"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-emerald-400 focus:ring-emerald-400"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-emerald-400 focus:ring-emerald-400"
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-emerald-500 text-white py-2 px-4 rounded-md hover:bg-emerald-600 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <p className="text-emerald-400 text-center">Message sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-400 text-center">Error sending message. Please try again.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}