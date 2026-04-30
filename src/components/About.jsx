const About = () => (
  <section className="py-section-gap" id="about">
    <div className="max-w-[1200px] mx-auto px-6">
      <div className="grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-4 sticky top-24">
          <h2 className="font-h2 text-h2 mb-4 border-l-4 border-secondary pl-4">About Me</h2>
          <p className="text-on-surface-variant">Engineering reliability through code and logic.</p>
        </div>
        <div className="md:col-span-8 space-y-8">
          <div className="glass-card p-card-padding rounded-xl">
            <p className="font-body-lg text-body-lg text-slate-300 leading-relaxed">
              I am currently pursuing my <span className="text-secondary font-semibold">BCA (2023-2026)</span>, focusing on the architecture of secure and performant digital infrastructures. My journey is defined by a transition from building interfaces to ensuring the heart of the system—the backend—remains robust under heavy production loads.
            </p>
            <p className="font-body-lg text-body-lg text-slate-300 mt-6 leading-relaxed">
              With experience handling <span className="text-tertiary">Toll Management Systems (TMS)</span> in high-stakes production environments, I thrive on log analysis, problem-solving, and the thrill of optimizing legacy systems. My current interests lie at the intersection of Backend development, DevOps, and AI-driven automation.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default About;
