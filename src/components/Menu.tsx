import { motion, AnimatePresence } from "motion/react";
import { Star, X, Check } from "lucide-react";
import { useState } from "react";

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

const sambalVariants = [
  { name: "Sambal Terasi Sultan", image: "https://images.unsplash.com/photo-1596797038530-2c39efb07b37?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { name: "Sambal Korek Bawang", image: "https://images.unsplash.com/photo-1549466601-5e8884c0175b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { name: "Sambal Matah Bali", image: "https://images.unsplash.com/photo-1547928576-a4a33237ecd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { name: "Sambal Ijo Premium", image: "https://images.unsplash.com/photo-1614735241165-6756e1df61ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" }
];

const toppingVariants = [
  { name: "Bawang Goreng Krispi", image: "https://images.unsplash.com/photo-1512058560366-cd242d4ba363?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { name: "Serundeng Kelapa", image: "https://images.unsplash.com/photo-1563379091339-03b21bc4bd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { name: "Kremesan Gurih", image: "https://images.unsplash.com/photo-1621800043295-a73fe2f76e2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { name: "Telur Asin", image: "https://images.unsplash.com/photo-1582234372722-50d7ccc30e5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" }
];

export default function MenuSeccion() {
  const [showFullMenu, setShowFullMenu] = useState(false);
  const [selectedItem, setSelectedItem] = useState<null | number>(null);

  return (
    <section id="menu" className="py-24 bg-obsidian-light">
      <div className="max-w-7xl mx-auto px-12">
        <div className="mb-16 text-center lg:text-left">
          <h2 className="text-[11px] uppercase tracking-[0.3em] gold-text font-bold mb-4">Menu Unggulan</h2>
          <h3 className="text-4xl md:text-5xl serif italic tracking-tight text-white mb-10">Kelezatan Tanpa Kompromi</h3>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-10">
              {menuItems.slice(0, 2).map((item) => (
                <div 
                  key={item.id} 
                  className="flex justify-between items-end border-b border-white/10 pb-6 group cursor-pointer"
                  onClick={() => setSelectedItem(item.id)}
                >
                  <div className="flex flex-col">
                    <span className="serif text-2xl group-hover:gold-text transition-colors">{item.title}</span>
                    <span className="text-sm text-white/40 italic font-light mt-2">{item.desc}</span>
                  </div>
                  <span className="gold-text serif text-xl font-bold">{item.price.replace("Rp", "Rp ")}</span>
                </div>
              ))}
            </div>
            <div className="space-y-10">
              {menuItems.slice(2, 4).map((item) => (
                <div 
                  key={item.id} 
                  className="flex justify-between items-end border-b border-white/10 pb-6 group cursor-pointer"
                  onClick={() => setSelectedItem(item.id)}
                >
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
           <button 
             onClick={() => setShowFullMenu(true)}
             className="gold-border border px-10 py-4 text-[10px] uppercase tracking-widest font-bold gold-text hover:bg-white/5 transition-all"
           >
             Lihat Menu Lengkap
           </button>
        </div>
      </div>

      {/* Full Menu / Customization Modal */}
      <AnimatePresence>
        {(showFullMenu || selectedItem !== null) && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
            onClick={() => {
              setShowFullMenu(false);
              setSelectedItem(null);
            }}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-obsidian w-full max-w-4xl max-h-[85vh] overflow-y-auto card-bg p-8 md:p-12 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => {
                  setShowFullMenu(false);
                  setSelectedItem(null);
                }}
                className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <h2 className="serif text-4xl font-bold gold-text">
                    {selectedItem ? menuItems.find(i => i.id === selectedItem)?.title : "Kostumisasi Pesanan"}
                  </h2>
                  <p className="text-white/60 font-light leading-relaxed">
                    Pilih varian sambal dan topping untuk melengkapi kelezatan Ayam Bakar Sultan pilihan Anda.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-[10px] uppercase tracking-widest font-bold gold-text mb-4">Varian Sambal</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {sambalVariants.map((s) => (
                          <div key={s.name} className="group cursor-pointer">
                            <div className="aspect-video rounded-xl overflow-hidden mb-2 border border-white/5 group-hover:border-gold/50 transition-all">
                              <img src={s.image} alt={s.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                            </div>
                            <div className="flex items-center gap-2">
                               <div className="w-4 h-4 rounded-full border border-gold/20 flex items-center justify-center shrink-0 group-hover:border-gold">
                                 <Check size={8} className="text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                               </div>
                               <span className="text-[11px] text-white/70 group-hover:text-white transition-colors uppercase tracking-wider">{s.name}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-[10px] uppercase tracking-widest font-bold gold-text mb-4">Topping Tambahan</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {toppingVariants.map((t) => (
                          <div key={t.name} className="group cursor-pointer">
                            <div className="aspect-video rounded-xl overflow-hidden mb-2 border border-white/5 group-hover:border-gold/50 transition-all">
                              <img src={t.image} alt={t.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                            </div>
                            <div className="flex items-center gap-2">
                               <div className="w-4 h-4 rounded-full border border-gold/20 flex items-center justify-center shrink-0 group-hover:border-gold">
                                 <Check size={8} className="text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                               </div>
                               <span className="text-[11px] text-white/70 group-hover:text-white transition-colors uppercase tracking-wider">{t.name}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center gap-8">
                  <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
                    <img 
                      src={selectedItem ? menuItems.find(i => i.id === selectedItem)?.image : menuItems[0].image} 
                      alt="Menu Selection" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button className="gold-bg text-black font-bold py-6 uppercase text-xs tracking-widest hover:brightness-110 transition-all shadow-xl">
                    Konfirmasi & Pesan
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

