import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const electric = '#7DF9FF';

function SectionHeader({ id, title, subtitle }) {
  return (
    <div id={id} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-12 gap-y-4">
        <div className="col-span-12">
          <h2 className="text-3xl sm:text-4xl font-semibold" style={{ color: electric, fontFamily: 'Montserrat, Inter, sans-serif' }}>{title}</h2>
          {subtitle && (
            <p className="mt-2 text-sm text-[#A9A9A9]" style={{ fontFamily: 'Open Sans, Inter, sans-serif' }}>{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <section className="relative py-16 sm:py-24" id="about">
      <SectionHeader title="About Me" subtitle="Curious. Precise. Human-first." />
      <div className="mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 md:col-span-4 flex justify-center md:justify-start">
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxIgR8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Headshot"
              className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover ring-2 ring-white/10"
            />
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className="text-base leading-relaxed text-[#A9A9A9]" style={{ fontFamily: 'Open Sans, Inter, sans-serif' }}>
              I’m a product-focused engineer and designer crafting intelligent, intuitive experiences. My work blends
              machine learning, real-time interaction, and thoughtful UI/UX to deliver systems that feel effortless and
              empowering. I obsess over alignment, performance, and those small moments that make technology feel alive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const [active, setActive] = useState(null);

  const projects = useMemo(
    () => [
      {
        id: 'ai-music',
        title: 'AI-Powered Music Generator',
        thumb:
          'https://images.unsplash.com/photo-1499415479124-43c32433a620?q=80&w=1200&auto=format&fit=crop',
        description:
          'A generative model for composing ambient tracks conditioned on mood and tempo. Built with PyTorch, WebAudio, and a WASM-accelerated DSP pipeline.',
        media: [
          'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop',
        ],
      },
      {
        id: 'decentralized-social',
        title: 'Decentralized Social Platform',
        thumb:
          'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
        description:
          'A peer-to-peer social graph with end-to-end encrypted messaging, content moderation via zk-proofs, and offline-first syncing.',
        media: [
          'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=1200&auto=format&fit=crop',
        ],
      },
      {
        id: 'data-viz',
        title: 'Interactive Data Visualization Tool',
        thumb:
          'https://images.unsplash.com/photo-1551281044-8d8d0d8f1a5c?q=80&w=1200&auto=format&fit=crop',
        description:
          'A WebGL-based analytics canvas for exploring multi-dimensional datasets with streaming updates and collaborative annotation.',
        media: [
          'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
        ],
      },
      {
        id: 'vision-robotics',
        title: 'Vision-Assisted Robotics Control',
        thumb:
          'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
        description:
          'Closed-loop control using transformer-based scene understanding for safer manipulation in dynamic environments.',
        media: [
          'https://images.unsplash.com/photo-1581093588401-16bbb2d57c4b?q=80&w=1200&auto=format&fit=crop',
        ],
      },
      {
        id: 'realtime-collab',
        title: 'Realtime Collaboration Engine',
        thumb:
          'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop',
        description:
          'CRDT-powered shared editing with low-latency presence, voice, and spatial cursors for design teams.',
        media: [
          'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop',
        ],
      },
      {
        id: 'edge-ml',
        title: 'Edge ML Inference Suite',
        thumb:
          'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
        description:
          'Quantization-aware training and on-device inference across browsers and microcontrollers with unified API.',
        media: [
          'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
        ],
      },
    ],
    []
  );

  return (
    <section className="relative py-16 sm:py-24" id="projects">
      <SectionHeader title="Projects" subtitle="Selected work across AI, web, and systems." />
      <div className="mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-6">
          {projects.map((p) => (
            <motion.button
              key={p.id}
              onClick={() => setActive(p)}
              whileHover={{ y: -2 }}
              className="group relative col-span-12 sm:col-span-6 lg:col-span-4 rounded-2xl overflow-hidden border border-white/10 bg-black"
            >
              <img src={p.thumb} alt={p.title} className="h-56 w-full object-cover" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="inline-block px-3 py-1 rounded-md text-[18px] font-bold" style={{ color: electric, fontFamily: 'Open Sans, Inter, sans-serif' }}>
                  {p.title}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/80"
              onClick={() => setActive(null)}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              className="absolute right-0 top-0 h-full w-full sm:w-[640px] bg-[#0F0F0F] border-l border-white/10 overflow-y-auto"
            >
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-6">
                  <h3 className="text-2xl font-semibold" style={{ color: electric, fontFamily: 'Montserrat, Inter, sans-serif' }}>{active.title}</h3>
                  <button
                    onClick={() => setActive(null)}
                    className="px-4 py-2 rounded-lg bg-[#7DF9FF] text-black font-semibold hover:bg-[#00FFFF] transition-colors"
                    style={{ fontFamily: 'Open Sans, Inter, sans-serif' }}
                  >
                    Close
                  </button>
                </div>
                <p className="mt-4 text-sm text-[#A9A9A9]" style={{ fontFamily: 'Open Sans, Inter, sans-serif' }}>{active.description}</p>
                <div className="mt-6 space-y-4">
                  {active.media.map((m, idx) => (
                    <img key={idx} src={m} alt="media" className="w-full rounded-xl border border-white/10" />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function SkillsExperienceSection() {
  const skills = [
    { name: 'Python', level: 90 },
    { name: 'JavaScript', level: 88 },
    { name: 'UI/UX Design', level: 85 },
    { name: 'Machine Learning', level: 82 },
    { name: 'TypeScript', level: 80 },
    { name: 'React', level: 86 },
  ];

  return (
    <section className="relative py-16 sm:py-24" id="skills">
      <SectionHeader title="Skills & Experience" subtitle="Capabilities that scale from prototype to production." />
      <div className="mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-6 space-y-5">
            {skills.map((s) => (
              <div key={s.name}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm" style={{ color: electric, fontFamily: 'Open Sans, Inter, sans-serif' }}>{s.name}</span>
                  <span className="text-xs text-[#A9A9A9]" style={{ fontFamily: 'Open Sans, Inter, sans-serif' }}>{s.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: electric }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="flex flex-wrap gap-3">
              {skills.map((s) => (
                <motion.span
                  key={s.name + '-chip'}
                  whileHover={{ scale: 1.05, boxShadow: `0 0 24px ${electric}55` }}
                  className="px-3 py-1.5 rounded-lg border border-white/10 bg-[#111111] text-sm"
                  style={{ color: electric, fontFamily: 'Open Sans, Inter, sans-serif' }}
                >
                  {s.name}
                </motion.span>
              ))}
            </div>
            <p className="mt-6 text-sm text-[#A9A9A9]" style={{ fontFamily: 'Open Sans, Inter, sans-serif' }}>
              From research to release: shipping reliable, accessible, and performant products with measurable impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function EducationBlogsSection() {
  const education = [
    { title: "Master's in Computer Science, MIT", date: '2018 – 2020', desc: 'Focus on machine learning, HCI, and distributed systems.' },
    { title: "Bachelor's in Software Engineering, Stanford", date: '2014 – 2018', desc: 'Systems programming, design thinking, and entrepreneurship.' },
  ];

  const blogs = [
    { title: 'The Future of AI in Design', date: 'Aug 2024', desc: 'Exploring AI as a collaborator in the creative process.' },
    { title: 'Building Scalable Web Applications', date: 'May 2024', desc: 'Patterns for resilient, observable systems.' },
    { title: 'The Importance of User-Centered Design', date: 'Jan 2024', desc: 'Why empathy leads to better outcomes.' },
  ];

  return (
    <section className="relative py-16 sm:py-24" id="education">
      <SectionHeader title="Education & Blogs" subtitle="Learning relentlessly. Sharing openly." />
      <div className="mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-6" id="education-list">
            <h3 className="text-xl font-semibold mb-4" style={{ color: electric, fontFamily: 'Montserrat, Inter, sans-serif' }}>Education</h3>
            <div className="space-y-4">
              {education.map((e) => (
                <div key={e.title} className="rounded-xl bg-[#1E1E1E] border border-white/10 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm" style={{ color: electric, fontFamily: 'Open Sans, Inter, sans-serif' }}>{e.title}</span>
                    <span className="text-xs text-[#A9A9A9]" style={{ fontFamily: 'Open Sans, Inter, sans-serif' }}>{e.date}</span>
                  </div>
                  <p className="mt-2 text-sm text-[#A9A9A9]" style={{ fontFamily: 'Open Sans, Inter, sans-serif' }}>{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6" id="blogs">
            <h3 className="text-xl font-semibold mb-4" style={{ color: electric, fontFamily: 'Montserrat, Inter, sans-serif' }}>Blogs</h3>
            <div className="grid grid-cols-12 gap-4">
              {blogs.map((b) => (
                <motion.a
                  key={b.title}
                  href="#"
                  whileHover={{ y: -2 }}
                  className="col-span-12 sm:col-span-6 rounded-xl bg-[#1E1E1E] border border-white/10 p-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm" style={{ color: electric, fontFamily: 'Open Sans, Inter, sans-serif' }}>{b.title}</span>
                    <span className="text-xs text-[#A9A9A9]" style={{ fontFamily: 'Open Sans, Inter, sans-serif' }}>{b.date}</span>
                  </div>
                  <p className="mt-2 text-sm text-[#A9A9A9]" style={{ fontFamily: 'Open Sans, Inter, sans-serif' }}>{b.desc}</p>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PortfolioSections() {
  return (
    <>
      <AboutSection />
      <ProjectsSection />
      <SkillsExperienceSection />
      <EducationBlogsSection />
    </>
  );
}
