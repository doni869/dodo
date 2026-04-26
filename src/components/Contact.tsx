import { motion } from "motion/react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-obsidian-light">
      <div className="max-w-7xl mx-auto px-12 grid lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[11px] uppercase tracking-[0.3em] gold-text font-bold mb-6">Hubungi Kami</h2>
          <h3 className="text-4xl md:text-5xl serif italic mb-8 leading-tight">Mulai Pengalaman <br /> <span className="not-italic font-bold">Kuliner Anda.</span></h3>
          
          <div className="space-y-10 mt-12">
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0 group-hover:gold-border transition-colors">
                <MapPin className="text-gold/40 group-hover:text-gold" size={18} />
              </div>
              <p className="text-white/60 serif text-lg font-light">Jl. Kuliner No. 01, Jakarta Selatan</p>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0 group-hover:gold-border transition-colors">
                <Phone className="text-gold/40 group-hover:text-gold" size={18} />
              </div>
              <p className="text-white/60 serif text-lg font-light">+62 812 3456 7890</p>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0 group-hover:gold-border transition-colors">
                <Mail className="text-gold/40 group-hover:text-gold" size={18} />
              </div>
              <p className="text-white/60 serif text-lg font-light">hello@bistroqueen.id</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="card-bg p-12"
        >
          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/30">Nama Lengkap</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-gold transition-colors font-light"
                  placeholder="Nama anda..."
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/30">WhatsApp</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-gold transition-colors font-light"
                  placeholder="08..."
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-white/30">Pesan Khusus</label>
              <textarea 
                rows={3}
                className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-gold transition-colors font-light resize-none"
                placeholder="Detail pesanan atau reservasi..."
              />
            </div>

            <button className="w-full gold-bg text-black font-bold py-5 uppercase text-[10px] tracking-[0.2em] hover:brightness-110 transition-all">
              Kirim Reservasi
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
