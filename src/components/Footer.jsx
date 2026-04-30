const Footer = () => (
  <footer className="bg-slate-950 w-full py-12 border-t border-slate-800">
    <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="text-lg font-bold text-slate-300 tracking-tighter">KARAN.DEV</div>
      <div className="font-space-grotesk text-xs text-slate-500">© 2026 Karan Kumar. Built for reliability.</div>
      <div className="flex gap-6">
        <a className="text-slate-500 hover:text-teal-400 transition-colors" href="#">GitHub</a>
        <a className="text-slate-500 hover:text-teal-400 transition-colors" href="#">LinkedIn</a>
        <a className="text-slate-500 hover:text-teal-400 transition-colors" href="#">Email</a>
      </div>
    </div>
  </footer>
);
export default Footer;
