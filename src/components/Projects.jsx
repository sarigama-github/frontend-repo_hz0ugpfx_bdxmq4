import { motion } from 'framer-motion'

const projects = [
  { title: 'Modern Workplace for Tech Co', location: 'Melbourne CBD', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Hybrid Office for Finance Group', location: 'Southbank', image: 'https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxXb3JrcGxhY2UlMjBmb3IlMjBUZWNoJTIwQ298ZW58MHwwfHx8MTc2MzY3NjEzOXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { title: 'Creative Studio Upgrade', location: 'Collingwood', image: 'https://images.unsplash.com/photo-1555448248-2571daf6344b?q=80&w=1600&auto=format&fit=crop' },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Featured Projects</h2>
            <p className="mt-3 text-slate-600">A selection of workplaces we’ve delivered.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex px-4 py-2 rounded-xl bg-slate-900 text-white font-semibold">Start Your Project</a>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.div key={p.title} initial={{opacity:0, y:10}} whileInView={{opacity:1,y:0}} viewport={{ once:true }} transition={{duration:0.6, delay: idx * 0.05}} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-slate-900">{p.title}</h3>
                <p className="text-sm text-slate-600">{p.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
