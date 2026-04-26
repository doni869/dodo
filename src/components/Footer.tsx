import { Instagram, Facebook, Twitter, ChefHat } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-10 px-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-white/30 uppercase tracking-[0.2em] gap-6 bg-obsidian">
      <div className="serif text-lg font-bold gold-text tracking-widest">
        BISTRO<span className="text-white font-light">QUEEN</span>
      </div>
      <div>&copy; 2026 BISTROQUEEN RESTAURANT GROUP</div>
      <div className="flex gap-10">
        <span className="hover:text-gold cursor-pointer transition-colors">Instagram</span>
        <span className="hover:text-gold cursor-pointer transition-colors">WhatsApp</span>
        <span className="hover:text-gold cursor-pointer transition-colors">Email</span>
      </div>
    </footer>
  );
}
