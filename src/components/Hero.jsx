const Hero = () => (
  <section className="relative min-h-screen pt-32 pb-20 overflow-hidden hero-pattern">
    <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      <div className="z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/20 text-secondary border border-secondary/30 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
          </span>
          <span className="font-label-caps text-label-caps uppercase">Open to Collaboration</span>
        </div>
        <h1 className="font-h1 text-h1 mb-4 text-white">Karan Kumar</h1>
        <h2 className="font-h2 text-h2 text-secondary mb-6">Full Stack Developer | Backend Developer </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mb-10">
          I build scalable backend systems and solve real-world production issues. Experienced in APIs, databases, and enterprise systems, with a passion for operational excellence.
        </p>
        <div className="flex flex-wrap gap-4">
          <a className="px-8 py-3 bg-secondary-container text-white rounded font-medium hover:brightness-110 active:scale-95 transition-all" href="#projects">View Projects</a>
          <a className="px-8 py-3 glass-card text-white rounded font-medium active:scale-95 transition-all text-center" href={`${import.meta.env.BASE_URL}karan_resume.pdf`} download="Karan_Kumar_Resume.pdf">Download Resume</a>
          <a className="px-8 py-3 border border-outline text-on-background rounded font-medium hover:bg-white/5 active:scale-95 transition-all" href="#contact">Contact Me</a>
        </div>
      </div>
      <div className="relative hidden md:block">
        <div className="glass-card rounded-xl p-6 relative z-10 overflow-hidden shadow-2xl">
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <code className="block font-mono text-sm leading-relaxed text-tertiary">
            <span className="text-slate-500">// System Health Monitor</span><br/>
            <span className="text-indigo-400">async</span> <span className="text-secondary">function</span> <span className="text-indigo-300">initBackend</span>() {'{\n'}
            &nbsp;&nbsp;<span className="text-indigo-400">const</span> <span className="text-slate-100">status</span> = <span className="text-indigo-400">await</span> DB.connect();<br/>
            &nbsp;&nbsp;<span className="text-indigo-400">if</span> (status === <span className="text-tertiary">'READY'</span>) {'{\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;console.<span className="text-indigo-300">log</span>(<span className="text-tertiary">"Infrastructure online"</span>);<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-100">runReliabilityCheck();</span><br/>
            &nbsp;&nbsp;{'}\n'}
            {'}'}
          </code>
        </div>
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary-container/10 blur-[100px] rounded-full"></div>
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-tertiary-container/20 blur-[100px] rounded-full"></div>
      </div>
    </div>
  </section>
);
export default Hero;
