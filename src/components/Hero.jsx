import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] pt-28">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/70 to-white pointer-events-none" />

      <div className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center min-h-[70vh]">
            <div className="py-10">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900"
              >
                Award-winning Office Fitouts in Melbourne
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.7 }}
                className="mt-5 text-lg text-slate-600 max-w-xl"
              >
                Strategy, design and construction for high-performance workplaces. From space planning to turn-key delivery, we make your vision tangible.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="mt-8 flex flex-wrap items-center gap-3"
              >
                <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold transition-colors">
                  Get a Free Quote
                </a>
                <a href="#projects" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-900 font-semibold transition-colors">
                  See Our Work
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="mt-8 flex items-center gap-6 text-sm text-slate-600"
              >
                <div>
                  <span className="font-semibold text-slate-900">20+ years</span> delivering office fitouts
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Melbourne</span> & across Victoria
                </div>
              </motion.div>
            </div>
            <div className="hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  )
}
