import { motion } from "motion/react";
import { ArrowRight, Utensils } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
          alt="Premium Ayam Bakar"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 hero-gradient-overlay" />
      </div>

      <div className="max-w-7xl mx-auto px-12 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -top-10 left-0 w-12 h-[1px] gold-bg" />
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl serif italic leading-tight mb-6 tracking-tight">
            Ayam Bakar <br />
            <span className="not-italic font-bold gold-text">Premium.</span>
          </h1>
          
          <p className="text-white/60 text-lg max-w-md leading-relaxed mb-10 font-light">
            Menghadirkan warisan cita rasa nusantara dalam balutan kemewahan. Pengalaman kuliner sultan yang tak terlupakan di setiap gigitan.
          </p>
          
          <div className="flex flex-wrap gap-6 items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 gold-bg text-black font-bold uppercase text-xs tracking-widest hover:brightness-110 transition-all"
            >
              Pesan Sekarang
            </motion.button>
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-gold transition-colors">
                <div className="w-1 h-1 bg-white rounded-full group-hover:bg-gold transition-all" />
              </div>
              <span className="text-[11px] uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">Lihat Gallery</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="hidden lg:block relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
             <img 
              src="https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Plating"
              className="w-full aspect-[4/5] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/20 blur-[100px] rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-500/20 blur-[100px] rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
