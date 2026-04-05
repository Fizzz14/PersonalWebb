import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleSubmit = (e) => {
    e.preventDefault();
    // form handling logic
    alert('Pesan berhasil terkirim! (Simulasi)');
  };

  return (
    <section id="contact" className="py-24 bg-black relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-16">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-mono text-gray-500 tracking-widest uppercase mb-2">05. What's Next</h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Get In Touch</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
              Meskipun saat ini saya fokus pada masa studi, saya selalu terbuka untuk koneksi baru, diskusi teknologi,
              atau peluang kolaborasi project inovatif.
            </p>

            <div className="space-y-6 mb-12 text-gray-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
                  <Mail size={20} />
                </div>
                <span>Hafizhrahmat7@gmail.com </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
                  <MapPin size={20} />
                </div>
                <span>Ciderum, Bogor, Jawa Barat</span>
              </div>
            </div>

            <div className="flex gap-4">
              {[GithubIcon, LinkedinIcon, InstagramIcon].map((Icon, idx) => (
                <a key={idx} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 hover:bg-white hover:text-black hover:-translate-y-1 transition-all duration-300">
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 rounded-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-white/50 text-white transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-white/50 text-white transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  rows="4"
                  required
                  placeholder="Hey, I'd like to talk about..."
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-white/50 text-white transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full group relative inline-flex items-center justify-center px-8 py-4 text-base font-medium text-black bg-white rounded-lg overflow-hidden transition-all hover:bg-gray-200 focus:outline-none"
              >
                <span className="mr-2 font-bold">Kirim Pesan</span>
                <Send size={18} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
