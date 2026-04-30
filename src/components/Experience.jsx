const Experience = () => (
  <section className="py-section-gap" id="experience">
    <div className="max-w-[1200px] mx-auto px-6">
      <h2 className="font-h2 text-h2 mb-16 text-center">Professional Journey</h2>
      <div className="max-w-4xl mx-auto space-y-12 experience-line relative">
        <div className="pl-12 relative">
          <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-tertiary ring-4 ring-tertiary/20"></div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
            <h3 className="font-h3 text-h3 text-white">Product Support Engineer Intern</h3>
            <span className="text-tertiary font-label-caps bg-tertiary/10 px-3 py-1 rounded">Mar 2026 – Present</span>
          </div>
          <p className="text-secondary font-medium mb-4">Vara, Kolkata</p>
          <ul className="space-y-3 text-on-surface-variant list-disc list-inside">
            <li>Monitoring and maintaining Toll Management Systems (TMS) across multiple plazas.</li>
            <li>Resolving critical production issues through systematic log analysis and debugging.</li>
            <li>Ensuring system uptime and reliability for enterprise-grade infrastructure.</li>
          </ul>
        </div>

        <div className="pl-12 relative">
          <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-slate-700 ring-4 ring-slate-700/20"></div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
            <h3 className="font-h3 text-h3 text-white">Frontend Developer Intern</h3>
            <span className="text-slate-400 font-label-caps bg-white/5 px-3 py-1 rounded">Aug 2025 – Sept 2025</span>
          </div>
          <p className="text-secondary font-medium mb-4">Edunet Foundation</p>
          <ul className="space-y-3 text-on-surface-variant list-disc list-inside">
            <li>Architected responsive UI components using modern JavaScript frameworks.</li>
            <li>Collaborated on building reusable design patterns to speed up production cycles.</li>
            <li>Optimized client-side performance and accessibility standards.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);
export default Experience;
