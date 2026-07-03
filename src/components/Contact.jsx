import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    <section id="contact" className="py-32 bg-black border-t border-outline relative select-none">
      <div className="section-container grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Pinned Header */}
        <div className="lg:col-span-3 lg:sticky lg:top-32 self-start">
          <div className="premium-divider mb-3">
            <span className="tech-label">[ CONNECT ]</span>
          </div>
          <h2 className="text-3xl font-black tracking-tight text-white uppercase leading-none font-sans">
            GET IN <span className="text-primary">TOUCH</span>
          </h2>
          <div className="h-[1px] w-12 bg-primary/30 mt-6 hidden lg:block" />
        </div>

        {/* Right Column: Scrollable Grid */}
        <div className="lg:col-span-9 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Telemetry */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-8"
          >
            <p className="text-on-surface-variant text-base md:text-lg font-light leading-relaxed max-w-md">
              Meskipun saat ini saya fokus pada masa studi di Wikrama, saya selalu antusias membuka ruang diskusi teknologi, kolaborasi project baru, atau peluang mentoring menarik.
            </p>

            {/* Premium Micro Info Cards */}
            <div className="space-y-4 max-w-md pt-4">
              <div className="flex items-center gap-4 p-4 border border-outline bg-white/[0.01] hover:border-primary/20 transition-all duration-300">
                <div className="p-2.5 bg-white/[0.02] text-primary/60">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[9px] font-sans font-semibold text-primary/35 tracking-[0.25em] uppercase">E-Mail Address</p>
                  <a href="mailto:hafizhrahmat7@gmail.com" className="text-sm font-semibold text-white hover:text-primary transition-colors">
                    hafizhrahmat7@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 border border-outline bg-white/[0.01] hover:border-primary/20 transition-all duration-300">
                <div className="p-2.5 bg-white/[0.02] text-primary/60">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[9px] font-sans font-semibold text-primary/35 tracking-[0.25em] uppercase">Current Base</p>
                  <p className="text-sm font-semibold text-white">Bogor, Indonesia</p>
                </div>
              </div>
            </div>

            {/* Social Grid */}
            <div className="pt-6">
              <p className="text-[9px] font-sans font-semibold text-primary/40 tracking-[0.25em] uppercase mb-4">SOCIAL DIRECTORY</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Fizzz14"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-outline bg-white/[0.01] text-white/50 hover:text-primary hover:border-primary/45 transition-all duration-300"
                >
                  <GithubIcon />
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-hafizh-rahmat-774026315"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-outline bg-white/[0.01] text-white/50 hover:text-primary hover:border-primary/45 transition-all duration-300"
                >
                  <LinkedinIcon />
                </a>
                <a
                  href="https://www.instagram.com/hapisssss.14"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-outline bg-white/[0.01] text-white/50 hover:text-primary hover:border-primary/45 transition-all duration-300"
                >
                  <InstagramIcon />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-7 bg-black p-8 md:p-10 rounded-none relative overflow-hidden border border-outline flex flex-col justify-center min-h-[460px]"
          >
            {/* Corner Indicators */}
            <div className="absolute top-0 left-0 w-8 h-8 pointer-events-none">
              <div className="absolute top-4 left-4 w-2 h-px bg-primary/20" />
              <div className="absolute top-4 left-4 h-2 w-px bg-primary/20" />
            </div>
            <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none">
              <div className="absolute top-4 right-4 w-2 h-px bg-primary/20" />
              <div className="absolute top-4 right-4 h-2 w-px bg-primary/20" />
            </div>

            <h3 className="text-lg font-bold tracking-tight text-white mb-6 uppercase">
              Send Inquiry
            </h3>

            <form onSubmit={handleSubmit} className="space-y-8 font-sans">
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  id="form-name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  className="w-full bg-transparent border-b border-outline py-3 text-sm text-white placeholder-transparent focus:outline-none focus:border-primary transition-colors duration-300"
                />
                <label
                  htmlFor="form-name"
                  className="absolute left-0 top-3 text-xs tracking-wider text-white/40 uppercase pointer-events-none transition-all duration-300 group-focus-within:-top-4 group-focus-within:text-[9px] group-focus-within:text-primary peer-placeholder-shown:top-3 peer-placeholder-shown:text-xs"
                  style={{
                    transformOrigin: '0% 0%',
                    transform: formData.name ? 'translateY(-28px) scale(0.75)' : 'none',
                    color: formData.name ? 'var(--primary)' : 'inherit'
                  }}
                >
                  Your Name
                </label>
              </div>

              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  id="form-email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  className="w-full bg-transparent border-b border-outline peer py-3 text-sm text-white placeholder-transparent focus:outline-none focus:border-primary transition-colors duration-300"
                />
                <label
                  htmlFor="form-email"
                  className="absolute left-0 top-3 text-xs tracking-wider text-white/40 uppercase pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-primary peer-placeholder-shown:top-3 peer-placeholder-shown:text-xs"
                  style={{
                    transformOrigin: '0% 0%',
                    transform: formData.email ? 'translateY(-28px) scale(0.75)' : 'none',
                    color: formData.email ? 'var(--primary)' : 'inherit'
                  }}
                >
                  Your Email
                </label>
              </div>

              <div className="relative group">
                <textarea
                  name="message"
                  id="form-message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder=" "
                  className="w-full bg-transparent border-b border-outline peer py-3 text-sm text-white placeholder-transparent focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                />
                <label
                  htmlFor="form-message"
                  className="absolute left-0 top-3 text-xs tracking-wider text-white/40 uppercase pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-primary peer-placeholder-shown:top-3 peer-placeholder-shown:text-xs"
                  style={{
                    transformOrigin: '0% 0%',
                    transform: formData.message ? 'translateY(-28px) scale(0.75)' : 'none',
                    color: formData.message ? 'var(--primary)' : 'inherit'
                  }}
                >
                  Message
                </label>
              </div>

              {/* Action row with alerts */}
              <div className="flex flex-col gap-4 pt-4">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-primary w-full group py-3 text-[11px] font-sans font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-2 cursor-pointer border-none"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      SENDING...
                    </>
                  ) : (
                    <>
                      <Send size={12} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      SEND INQUIRY
                    </>
                  )}
                </button>

                {/* Status Telemetry Output */}
                <AnimatePresence mode="wait">
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="p-3 border border-primary/20 bg-primary/[0.02] flex items-center gap-3 text-primary text-[10px] tracking-wider uppercase font-semibold select-none"
                    >
                      <CheckCircle2 size={14} className="shrink-0" />
                      <span>INQUIRY SUCCESS // MESSAGE RECEIVED</span>
                    </motion.div>
                  )}

                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="p-3 border border-red-500/20 bg-red-500/[0.02] flex items-center gap-3 text-red-400 text-[10px] tracking-wider uppercase font-semibold select-none"
                    >
                      <AlertCircle size={14} className="shrink-0" />
                      <span>SYSTEM ERROR // {errorMsg}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
