const Skills = () => (
  <section className="py-section-gap bg-surface-container-low/50" id="skills">
    <div className="max-w-[1200px] mx-auto px-6">
      <h2 className="font-h2 text-h2 mb-12 text-center">Technical Arsenal</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 rounded-xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
            <h3 className="font-h3 text-h3">Backend</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded text-xs font-label-caps tech-chip uppercase">Node.js</span>
            <span className="px-3 py-1 rounded text-xs font-label-caps tech-chip uppercase">Express</span>
            <span className="px-3 py-1 rounded text-xs font-label-caps tech-chip uppercase">REST API</span>
            <span className="px-3 py-1 rounded text-xs font-label-caps tech-chip uppercase">Go</span>
            <span className="px-3 py-1 rounded text-xs font-label-caps tech-chip uppercase">Python</span>
          </div>
        </div>
        
        <div className="glass-card p-6 rounded-xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>database</span>
            <h3 className="font-h3 text-h3">Databases</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded text-xs font-label-caps tech-chip uppercase">SQL Server</span>
            <span className="px-3 py-1 rounded text-xs font-label-caps tech-chip uppercase">MongoDB</span>
            <span className="px-3 py-1 rounded text-xs font-label-caps tech-chip uppercase">Oracle</span>
            <span className="px-3 py-1 rounded text-xs font-label-caps tech-chip uppercase">Redis</span>
          </div>
        </div>

        <div className="glass-card p-6 rounded-xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>web</span>
            <h3 className="font-h3 text-h3">Frontend</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded text-xs font-label-caps tech-chip uppercase">React</span>
            <span className="px-3 py-1 rounded text-xs font-label-caps tech-chip uppercase">JavaScript</span>
            <span className="px-3 py-1 rounded text-xs font-label-caps tech-chip uppercase">Tailwind</span>
            <span className="px-3 py-1 rounded text-xs font-label-caps tech-chip uppercase">HTML5/CSS3</span>
          </div>
        </div>

        <div className="glass-card p-6 rounded-xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>dns</span>
            <h3 className="font-h3 text-h3">Systems</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded text-xs font-label-caps tech-chip uppercase">Linux Server</span>
            <span className="px-3 py-1 rounded text-xs font-label-caps tech-chip uppercase">Networking</span>
            <span className="px-3 py-1 rounded text-xs font-label-caps tech-chip uppercase">Windows Server</span>
          </div>
        </div>

        <div className="glass-card p-6 rounded-xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>build</span>
            <h3 className="font-h3 text-h3">Tools</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded text-xs font-label-caps tech-chip uppercase">GitHub</span>
            <span className="px-3 py-1 rounded text-xs font-label-caps tech-chip uppercase">Postman</span>
            <span className="px-3 py-1 rounded text-xs font-label-caps tech-chip uppercase">VS Code</span>
            <span className="px-3 py-1 rounded text-xs font-label-caps tech-chip uppercase">Docker</span>
          </div>
        </div>

        <div className="glass-card p-6 rounded-xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
            <h3 className="font-h3 text-h3">AI/Data</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded text-xs font-label-caps tech-chip uppercase">ANPR</span>
            <span className="px-3 py-1 rounded text-xs font-label-caps tech-chip uppercase">Data Cleaning</span>
            <span className="px-3 py-1 rounded text-xs font-label-caps tech-chip uppercase">Annotation</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default Skills;
