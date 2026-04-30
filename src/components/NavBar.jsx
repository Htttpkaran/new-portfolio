const NavBar = () => (
  <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10 shadow-sm">
    <div className="flex justify-between items-center max-w-[1200px] mx-auto px-6 h-16">
      <div className="text-xl font-bold tracking-tighter text-slate-100">KARAN.DEV</div>
      <div className="hidden md:flex gap-8 font-space-grotesk text-sm uppercase tracking-wider">
        <a className="text-slate-400 hover:text-slate-100 transition-colors" href="#about">About</a>
        <a className="text-slate-400 hover:text-slate-100 transition-colors" href="#skills">Skills</a>
        <a className="text-slate-400 hover:text-slate-100 transition-colors" href="#experience">Experience</a>
        <a className="text-slate-400 hover:text-slate-100 transition-colors" href="#projects">Projects</a>
        <a className="text-slate-400 hover:text-slate-100 transition-colors" href="#contact">Contact</a>
      </div>
      <div className="flex items-center gap-4">
        <span className="material-symbols-outlined text-indigo-500 cursor-pointer active:scale-95 transition-all">dark_mode</span>
      </div>
    </div>
  </nav>
);
export default NavBar;
