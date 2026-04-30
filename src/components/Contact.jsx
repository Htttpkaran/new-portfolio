const Contact = () => (
  <section className="py-section-gap" id="contact">
    <div className="max-w-[1200px] mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="font-h2 text-h2 mb-6">Let's Connect</h2>
          <p className="text-on-surface-variant mb-10 text-body-lg">
            I'm currently looking for full-time opportunities in Backend Development and Product Support. Whether you have a question or just want to say hi, my inbox is always open.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <p className="text-xs font-label-caps text-slate-500">EMAIL</p>
                <p className="text-white font-medium">karanxyz546@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">share</span>
              </div>
              <div>
                <p className="text-xs font-label-caps text-slate-500">SOCIALS</p>
                <div className="flex gap-4 mt-1">
                  <a className="text-slate-400 hover:text-white transition-colors" href="https://www.linkedin.com/in/karan-kumar-b95a16218" target="_blank">LinkedIn</a>
                  <a className="text-slate-400 hover:text-white transition-colors" href="https://github.com/Htttpkaran" target="_blank">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="glass-card p-8 rounded-xl">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="font-label-caps text-slate-400">Full Name</label>
              <input className="w-full bg-slate-900 border border-white/10 rounded px-4 py-3 text-white focus:border-secondary outline-none transition-all" type="text"/>
            </div>
            <div className="space-y-2">
              <label className="font-label-caps text-slate-400">Email Address</label>
              <input className="w-full bg-slate-900 border border-white/10 rounded px-4 py-3 text-white focus:border-secondary outline-none transition-all" type="email"/>
            </div>
            <div className="space-y-2">
              <label className="font-label-caps text-slate-400">Message</label>
              <textarea className="w-full bg-slate-900 border border-white/10 rounded px-4 py-3 text-white focus:border-secondary outline-none transition-all" rows="4"></textarea>
            </div>
            <button className="w-full bg-secondary-container text-white py-4 rounded font-bold hover:brightness-110 active:scale-95 transition-all" type="submit">Send Mission Brief</button>
          </form>
        </div>
      </div>
    </div>
  </section>
);
export default Contact;
