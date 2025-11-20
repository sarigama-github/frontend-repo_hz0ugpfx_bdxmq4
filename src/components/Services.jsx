import { motion } from 'framer-motion'
import { Building2, Ruler, Paintbrush, Boxes } from 'lucide-react'

const items = [
  { icon: Building2, title: 'Office Fitouts', desc: 'End-to-end design and construction for high-performing workplaces.' },
  { icon: Ruler, title: 'Space Planning', desc: 'Workplace strategy, test-fits, and efficient floorplate planning.' },
  { icon: Paintbrush, title: 'Interior Design', desc: 'Materiality, lighting, and furniture selection that elevates your brand.' },
  { icon: Boxes, title: 'Refurbishments', desc: 'Adaptive reuse and upgrades of existing office spaces with minimal downtime.' },
]

export default function Services(){
  return (
    <section id="services" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">What We Do</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">Complete office fitout services for businesses across Melbourne and Victoria.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({icon:Icon, title, desc}) => (
            <motion.div key={title} initial={{opacity:0, y:10}} whileInView={{opacity:1,y:0}} viewport={{ once:true }} transition={{duration:0.5}} className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="w-11 h-11 rounded-lg bg-slate-900 text-white grid place-items-center mb-4">
                <Icon size={22} />
              </div>
              <h3 className="font-semibold text-slate-900">{title}</h3>
              <p className="text-sm text-slate-600 mt-2">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
