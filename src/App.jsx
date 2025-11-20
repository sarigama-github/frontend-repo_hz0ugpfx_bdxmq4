import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import LeadForm from './components/LeadForm'

function App(){
  return (
    <div className="min-h-screen bg-white font-[Inter,Manrope,IBM_Plex_Sans,system-ui,sans-serif]">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <LeadForm />
      <footer className="py-10 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-300 text-sm">© {new Date().getFullYear()} Office Vision — Office Fitouts Melbourne</p>
            <div className="text-slate-400 text-xs">ABN 00 000 000 000 • Melbourne, Victoria</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
