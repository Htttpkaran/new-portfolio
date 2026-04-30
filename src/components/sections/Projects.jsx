const Projects = () => (
  <section className="py-section-gap bg-surface-container-low/50" id="projects">
    <div className="max-w-[1200px] mx-auto px-6">
      <h2 className="font-h2 text-h2 mb-16 text-center">Featured Work</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="glass-card rounded-xl overflow-hidden flex flex-col">
          <div className="h-64 overflow-hidden relative">
            <img alt="AI Resume Checker UI" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdlhhJ4FEjefNjXHpt-lU_a2cmM0v_Pn3kCPBq2DNrTUNzaHubzQ7rP9Qb89GEF2E__qvFG2w2eZpFyRQoR0Whaf87DLMm8LkhQVJQCod_sJhQsimL-JMEaIUZua5oZ0V6olKIAg9YmES-VpwTjFK5W0_UivFxNvu0kLR7xUUx-8BJwaC5s2Yo74df0VNlPEK_tjDpxGpLX_XZ1bsQl7S0B25WT8K8E_WnowS8Gy1aKHPOFel4F-V7_CCVFh2ryApvNY6i7PioBHAI"/>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
            <div className="absolute bottom-4 left-6">
              <span className="text-xs font-label-caps bg-indigo-600 px-2 py-1 rounded text-white">AI / BACKEND</span>
            </div>
          </div>
          <div className="p-8 flex-grow">
            <h3 className="font-h3 text-h3 mb-3">AI Resume Checker</h3>
            <p className="text-on-surface-variant mb-6">Advanced resume parsing system using natural language processing for keyword extraction and real-time ATS scoring.</p>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="text-[10px] font-bold px-2 py-1 bg-white/5 text-slate-400 rounded">NODE.JS</span>
              <span className="text-[10px] font-bold px-2 py-1 bg-white/5 text-slate-400 rounded">EXPRESS</span>
              <span className="text-[10px] font-bold px-2 py-1 bg-white/5 text-slate-400 rounded">MONGODB</span>
            </div>
            <div className="flex gap-4">
              <a className="flex items-center gap-2 text-secondary font-medium hover:underline" href="https://github.com/Htttpkaran/ai-resume-checker" target="_blank">
                <span className="material-symbols-outlined text-sm">code</span> GitHub Repo
              </a>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-xl overflow-hidden flex flex-col">
          <div className="h-64 overflow-hidden relative">
            <img alt="ANPR System Dashboard" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2NgMulgpAjwjaIrIEZyEU_MPR0Rj48PScqV2eHHSSwbV6PzMTAW3D2TPDe3qHPajge6F2-JFtKcn0rbcvxKu9rcrW9TbsKaEUh4wRWrgE5DSQraayiwzdgbf3rmSqHLu3VAPgZdm1GDSv1_xMx_Ju8a9C4mW84dhcajmaIeDiY0pDYfMqDnnaitjdh0vaQFZhwnVlPqVEwTF4dMLavGLJ0JCxCFWryi73CimmVDzlUeXm21VYFTlrT3pyzaPEaeCmSb5pYku2Wcff"/>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
            <div className="absolute bottom-4 left-6">
              <span className="text-xs font-label-caps bg-indigo-600 px-2 py-1 rounded text-white">CV / PRODUCTION</span>
            </div>
          </div>
          <div className="p-8 flex-grow">
            <h3 className="font-h3 text-h3 mb-3">ANPR System Optimization</h3>
            <p className="text-on-surface-variant mb-6">Streamlining data annotation and toll data handling for high-speed Automated Number Plate Recognition systems in production environments.</p>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="text-[10px] font-bold px-2 py-1 bg-white/5 text-slate-400 rounded">PYTHON</span>
              <span className="text-[10px] font-bold px-2 py-1 bg-white/5 text-slate-400 rounded">SQL SERVER</span>
              <span className="text-[10px] font-bold px-2 py-1 bg-white/5 text-slate-400 rounded">OPENCV</span>
            </div>
            <div className="flex gap-4">
              <a className="flex items-center gap-2 text-secondary font-medium hover:underline" href="#">
                <span className="material-symbols-outlined text-sm">visibility</span> View Case Study
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default Projects;
