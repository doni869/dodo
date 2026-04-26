import { motion } from "motion/react";
import { Star } from "lucide-react";

const menuItems = [
  {
    id: 1,
    title: "Ayam Bakar Signature",
    price: "Rp30.000",
    desc: "Ayam pilihan dengan bumbu rahasia BistroQueen.",
    image: "https://images.unsplash.com/photo-1598514983318-29141915795e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    popular: true
  },
  {
    id: 2,
    title: "Ayam Bakar Madu Queen",
    price: "Rp35.000",
    desc: "Sensasi manis madu hutan menyatu dengan rempah bakar.",
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    popular: false
  },
  {
    id: 3,
    title: "Ayam Bakar Pedas Royal",
    price: "Rp32.000",
    desc: "Pilihan favorit penyuka pedas dengan level kepedasan sultan.",
    image: "https://images.unsplash.com/photo-1564670056801-44330f878f79?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    popular: false
  },
  {
    id: 4,
    title: "Nasi Liwet Sultan",
    price: "Rp12.000",
    desc: "Nasi gurih dengan taburan teri Medan dan petai premium.",
    image: "https://images.unsplash.com/photo-1512058560366-cd242d4ba363?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    popular: false
  }
];

export default function MenuSeccion() {
  return (
    <section id="menu" className="py-24 bg-obsidian-light">
      <div className="max-w-7xl mx-auto px-12">
        <div className="mb-16">
          <h2 className="text-[11px] uppercase tracking-[0.3em] gold-text font-bold mb-4 text-left">Menu Unggulan</h2>
          <h3 className="text-4xl md:text-5xl serif italic tracking-tight text-white mb-10">Kelezatan Tanpa Kompromi</h3>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-10">
              {menuItems.slice(0, 2).map((item, i) => (
                <div key={item.id} className="flex justify-between items-end border-b border-white/10 pb-6 group cursor-default">
                  <div className="flex flex-col">
                    <span className="serif text-2xl group-hover:gold-text transition-colors">{item.title}</span>
                    <span className="text-sm text-white/40 italic font-light mt-2">{item.desc}</span>
                  </div>
                  <span className="gold-text serif text-xl font-bold">{item.price.replace("Rp", "Rp ")}</span>
                </div>
              ))}
            </div>
            <div className="space-y-10">
              {menuItems.slice(2, 4).map((item, i) => (
                <div key={item.id} className="flex justify-between items-end border-b border-white/10 pb-6 group cursor-default">
                  <div className="flex flex-col">
                    <span className="serif text-2xl group-hover:gold-text transition-colors">{item.title}</span>
                    <span className="text-sm text-white/40 italic font-light mt-2">{item.desc}</span>
                  </div>
                  <span className="gold-text serif text-xl font-bold">{item.price.replace("Rp", "Rp ")}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 flex justify-center">
           <button className="gold-border border px-10 py-4 text-[10px] uppercase tracking-widest font-bold gold-text hover:bg-white/5 transition-all">
             Lihat Menu Lengkap
           </button>
        </div>
      </div>
    </section>
  );
}
