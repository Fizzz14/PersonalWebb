import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const WEB3FORMS_ACCESS_KEY = '03345376-fcea-4177-b8e0-9deb82c944ec';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    if (!WEB3FORMS_ACCESS_KEY) {
      setTimeout(() => {
        setStatus('error');
        setErrorMsg('Access Key Web3Forms belum dikonfigurasi.');
      }, 800);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Pesan Baru dari ${formData.name} - Personal Portfolio`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setErrorMsg(data.message || 'Gagal mengirim pesan. Silakan coba lagi.');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMsg('Koneksi bermasalah. Gagal menghubungi server.');
    }
  };

  return (
    <section id="contact" className="py-32 bg-transparent relative select-none">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          {/* Left Side: Info Telemetry */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <div className="premium-divider mb-3">
                <span className="tech-label">[ 06 // CONNECT ]</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white">
                Get In <span className="text-gray-500">Touch</span>
              </h2>
            </div>

            <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-md">
              Meskipun saat ini saya fokus pada masa studi di Wikrama, saya selalu antusias membuka ruang diskusi teknologi, kolaborasi project baru, atau peluang mentoring menarik.
            </p>

            {/* Premium Micro Info Cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all hover:border-white/10 group cursor-default">
                <div className="p-2.5 rounded-lg bg-white/5 text-gray-400 group-hover:text-cyan-400 group-hover:bg-cyan-500/5 transition-all">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-white/30 tracking-wider uppercase">Direct Mail</p>
                  <a href="mailto:Hafizhrahmat7@gmail.com" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300">
                    Hafizhrahmat7@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all hover:border-white/10 group cursor-default">
                <div className="p-2.5 rounded-lg bg-white/5 text-gray-400 group-hover:text-cyan-400 group-hover:bg-cyan-500/5 transition-all">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-white/30 tracking-wider uppercase">Headquarters</p>
                  <p className="text-sm font-medium text-gray-300">Ciderum, Bogor, Jawa Barat</p>
                </div>
              </div>
            </div>

            {/* Social Grid */}
            <div className="flex gap-4 pt-4">
              {[
                { Icon: GithubIcon, url: 'https://github.com/Fizzz14', label: 'GitHub' },
                { Icon: LinkedinIcon, url: 'https://www.linkedin.com/in/muhammad-hafizh-rahmat/', label: 'LinkedIn' },
                { Icon: InstagramIcon, url: 'https://www.instagram.com/_hafizzhh/', label: 'Instagram' },
              ].map(({ Icon, url, label }, idx) => (
                <a
                  key={idx}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center bg-white/5 hover:bg-white hover:text-black hover:-translate-y-1 transition-all duration-300 shadow-md"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Side: High-End Contact Terminal Panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-7 glass-card p-8 md:p-10 rounded-3xl relative overflow-hidden flex flex-col justify-center min-h-[460px] corner-mark"
          >
            <div className="corner-inner" />

            <div className="absolute top-5 right-6 z-20 pointer-events-none">
              <span className="text-[9px] font-mono text-white/20 tracking-widest">[ SYS // MSG_0x9A ]</span>
            </div>

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="text-center py-10 space-y-5 flex flex-col items-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  >
                    <CheckCircle2 size={56} className="text-cyan-400" />
                  </motion.div>
                  <h4 className="text-2xl font-bold text-white tracking-tight">Pesan Terkirim</h4>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-light">
                    Terima kasih! Pesan Anda telah dikirim dan diteruskan langsung ke email pribadi saya. Saya akan merespons secepat mungkin.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setStatus('idle')}
                    className="mt-6 px-6 py-2.5 border border-white/10 rounded-full text-xs font-mono text-gray-400 hover:text-white hover:border-white/30 transition-all cursor-pointer"
                  >
                    Kirim Pesan Lain
                  </motion.button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6 pt-4"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-950/30 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-400 text-sm"
                    >
                      <AlertCircle size={18} className="flex-shrink-0" />
                      <span>{errorMsg}</span>
                    </motion.div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-mono text-gray-500 mb-2 tracking-widest uppercase">01. FULL NAME</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        disabled={status === 'submitting'}
                        className="w-full px-4 py-3.5 bg-white/[0.01] border border-white/5 hover:border-white/10 rounded-xl focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.03] text-white text-sm transition-all duration-300 disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono text-gray-500 mb-2 tracking-widest uppercase">02. EMAIL ADDRESS</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        disabled={status === 'submitting'}
                        className="w-full px-4 py-3.5 bg-white/[0.01] border border-white/5 hover:border-white/10 rounded-xl focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.03] text-white text-sm transition-all duration-300 disabled:opacity-50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-gray-500 mb-2 tracking-widest uppercase">03. MESSAGE CONTENT</label>
                    <textarea
                      name="message"
                      rows="5"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hey Hafizh, let's build something awesome together..."
                      disabled={status === 'submitting'}
                      className="w-full px-4 py-3.5 bg-white/[0.01] border border-white/5 hover:border-white/10 rounded-xl focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.03] text-white text-sm transition-all duration-300 resize-none disabled:opacity-50"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full group relative inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-black bg-white rounded-xl overflow-hidden transition-all duration-300 hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.3)] disabled:opacity-75 disabled:hover:bg-white focus:outline-none cursor-pointer"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="animate-spin mr-2" size={16} />
                        <span>SENDING_MESSAGE...</span>
                      </>
                    ) : (
                      <>
                        <span className="mr-2">SEND_MESSAGE</span>
                        <Send size={15} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
  );
};

export default Contact;
