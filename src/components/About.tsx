import { motion } from "motion/react";
import { Quote } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-obsidian">
      <div className="max-w-7xl mx-auto px-12 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden border border-white/5 aspect-[4/5] relative z-10"
          >
            <img 
              src="https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="About BistroQueen" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          {/* Decorative stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute -bottom-10 -right-10 gold-bg p-8 rounded-2xl z-20 shadow-2xl hidden lg:block"
          >
            <p className="text-4xl serif font-bold text-black italic">10+</p>
            <p className="text-[10px] font-bold text-black uppercase tracking-widest">Tahun Warisan Rasa</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[11px] uppercase tracking-[0.3em] gold-text font-bold mb-6">Tentang Kami</h2>
          <h3 className="text-4xl md:text-5xl serif italic mb-8 leading-tight">
            Warisan Kuliner <br /> <span className="not-italic font-bold">Nusantara.</span>
          </h3>
          <div className="space-y-6 text-white/60 font-light leading-relaxed">
            <p>
              BistroQueen bukanlah sekadar tempat makan. Kami adalah perjalanan rasa yang merayakan kemewahan bumbu tradisional Indonesia. Bermula dari dapur keluarga, kami membawa resep ayam bakar legendaris ke level yang lebih tinggi.
            </p>
            <p>
              Setiap potong ayam dipilih dari sumber terbaik, diungkep berjam-jam dengan rempah premium, dan dipanggang dengan teknik Sultan yang menjaga keaslian rasa sekaligus memberikan tekstur yang sempurna.
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-6 p-8 bg-white/[0.02] border border-white/5 rounded-2xl">
            <Quote className="text-gold opacity-30" size={32} />
            <p className="italic text-lg text-white/80 font-serif leading-relaxed">
              "Visi kami sederhana: Memberikan akses kepada siapa saja untuk mencicipi hidangan kelas dunia dengan akar tradisional yang kuat."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gold/20" />
              <div>
                <p className="text-sm font-bold">Queen Maria</p>
                <p className="text-[10px] text-white/40 uppercase tracking-widest">Founder BistroQueen</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
