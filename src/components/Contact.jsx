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
                <span className="tech-label">[ CONNECT ]</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white">
                INITIATE <span className="text-primary">COMMUNICATION.</span>
              </h2>
            </div>

            <p className="text-on-surface-variant text-base md:text-lg font-light leading-relaxed max-w-md">
              Meskipun saat ini saya fokus pada masa studi di Wikrama, saya selalu antusias membuka ruang diskusi teknologi, kolaborasi project baru, atau peluang mentoring menarik.
            </p>

            {/* Premium Micro Info Cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-none border border-outline bg-white/[0.01] hover:bg-white/[0.03] transition-all hover:border-primary/30 group cursor-default">
                <div className="p-2.5 rounded-none bg-white/[0.02] text-primary group-hover:text-black group-hover:bg-primary transition-all">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-primary/40 tracking-wider uppercase">Direct Mail</p>
                  <a href="mailto:Hafizhrahmat7@gmail.com" className="text-sm font-medium text-on-surface-variant hover:text-white transition-colors duration-300">
                    Hafizhrahmat7@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-none border border-outline bg-white/[0.01] hover:bg-white/[0.03] transition-all hover:border-primary/30 group cursor-default">
                <div className="p-2.5 rounded-none bg-white/[0.02] text-primary group-hover:text-black group-hover:bg-primary transition-all">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-primary/40 tracking-wider uppercase">Headquarters</p>
                  <p className="text-sm font-medium text-on-surface-variant">Ciderum, Bogor, Jawa Barat</p>
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
                  className="w-11 h-11 rounded-none border border-outline flex items-center justify-center bg-white/[0.01] text-primary/60 hover:bg-primary hover:text-black hover:border-primary hover:-translate-y-1 transition-all duration-300 shadow-md"
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
            className="lg:col-span-7 glass-card p-8 md:p-10 rounded-none relative overflow-hidden flex flex-col justify-center min-h-[460px] corner-mark"
          >
            <div className="corner-inner" />

            <div className="absolute top-5 right-6 z-20 pointer-events-none">
              <span className="text-[9px] font-mono text-primary/30 tracking-widest">[ SYS // MSG_0x9A ]</span>
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
                    <CheckCircle2 size={56} className="text-primary" />
                  </motion.div>
                  <h4 className="text-2xl font-bold text-white tracking-tight">TRANSMISSION COMPLETE</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed max-w-sm font-light">
                    Terima kasih! Pesan Anda telah berhasil ditransmisikan dan diteruskan langsung ke email pribadi saya. Saya akan merespons secepat mungkin.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setStatus('idle')}
                    className="mt-6 px-6 py-2.5 border border-outline rounded-none text-xs font-mono text-primary/60 hover:text-white hover:border-primary transition-all cursor-pointer"
                  >
                    Transmit Another Message
                  </motion.button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-8 pt-4"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-950/30 border border-red-500/20 rounded-none flex items-center gap-3 text-red-400 text-sm"
                    >
                      <AlertCircle size={18} className="flex-shrink-0" />
                      <span>{errorMsg}</span>
                    </motion.div>
                  )}

                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Identity (Full Name)"
                      disabled={status === 'submitting'}
                      className="w-full bg-transparent border-b border-outline py-4 focus:border-primary focus:ring-0 text-sm outline-none transition-all placeholder:text-primary/30 font-mono text-white disabled:opacity-50"
                    />
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Communication Channel (Email Address)"
                      disabled={status === 'submitting'}
                      className="w-full bg-transparent border-b border-outline py-4 focus:border-primary focus:ring-0 text-sm outline-none transition-all placeholder:text-primary/30 font-mono text-white disabled:opacity-50"
                    />
                  </div>

                  <div className="relative">
                    <textarea
                      name="message"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message Protocol"
                      disabled={status === 'submitting'}
                      className="w-full bg-transparent border-b border-outline py-4 focus:border-primary focus:ring-0 text-sm outline-none transition-all placeholder:text-primary/30 font-mono text-white resize-none disabled:opacity-50"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full btn-primary group rounded-none"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="animate-spin mr-2 text-black" size={16} />
                        <span>TRANSMITTING_DATA...</span>
                      </>
                    ) : (
                      <>
                        <span className="mr-2 text-black">TRANSMIT DATA</span>
                        <Send size={15} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-black" />
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
