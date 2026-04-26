import { motion } from "motion/react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rizky Firmansyah",
    role: "Food Enthusiast",
    comment: "Rasa ayam bakarnya benar-benar beda. Bumbunya meresap sampai ke tulang, dan sambalnya juara!",
    rating: 5
  },
  {
    name: "Sarah Wijaya",
    role: "Lifestyle Blogger",
    comment: "Tempatnya sangat elegan. Cocok untuk dinner romantis atau acara keluarga. Pelayanannya sangat profesional.",
    rating: 5
  },
  {
    name: "Hendra Putra",
    role: "Pengusaha",
    comment: "Ayam Bakar Madu Queen adalah favorit keluarga saya. Manisnya pas dan aromanya sangat menggugah selera.",
    rating: 4
  }
];

export default function Testimoni() {
  return (
    <section className="py-24 bg-obsidian">
      <div className="max-w-7xl mx-auto px-12 text-center mb-16">
        <h2 className="text-[11px] uppercase tracking-[0.3em] gold-text font-bold mb-4">Testimoni</h2>
        <h3 className="text-4xl md:text-5xl serif italic tracking-tight text-white font-medium">Kesan Dari Mereka</h3>
      </div>

      <div className="max-w-7xl mx-auto px-12 grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-bg p-10 flex flex-col gap-6 group hover:translate-y-[-4px] transition-all duration-300"
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, idx) => (
                <Star 
                  key={idx} 
                  size={12} 
                  className={idx < t.rating ? "text-gold fill-gold" : "text-white/10"} 
                />
              ))}
            </div>
            <p className="serif italic text-base text-white/80 leading-relaxed font-light">"{t.comment}"</p>
            <div className="mt-auto pt-6 border-t border-white/5">
              <p className="text-[10px] gold-text uppercase tracking-widest font-bold">- {t.name}, {t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
