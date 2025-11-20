import { useState } from 'react'

export default function LeadForm(){
  const [status, setStatus] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Submitting...')
    const fd = new FormData(e.currentTarget)
    const data = Object.fromEntries(fd.entries())
    data.consent_marketing = !!fd.get('consent_marketing')
    data.page = window.location.href

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      if(!res.ok) throw new Error('Failed to submit')
      const json = await res.json()
      setStatus(`Thanks! Your reference: ${json.id}`)
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Sorry, something went wrong. Please try again or call us.')
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Get a Free Consultation</h2>
            <p className="mt-3 text-slate-600">Tell us about your space and we’ll come back with ideas, budget and timeline.</p>
            <div className="mt-6 p-6 rounded-2xl border border-slate-200 bg-slate-50">
              <p className="text-sm text-slate-600">Prefer to talk? Call us on <a href="tel:+611300886658" className="font-semibold text-slate-900">1300 886 658</a></p>
            </div>
          </div>
          <form onSubmit={onSubmit} className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-slate-700">Name</label>
                <input name="name" required className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400" />
              </div>
              <div>
                <label className="text-sm text-slate-700">Email</label>
                <input type="email" name="email" required className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400" />
              </div>
              <div>
                <label className="text-sm text-slate-700">Phone</label>
                <input name="phone" className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400" />
              </div>
              <div>
                <label className="text-sm text-slate-700">Company</label>
                <input name="company" className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400" />
              </div>
              <div>
                <label className="text-sm text-slate-700">Service</label>
                <select name="service" className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400">
                  <option value="Office Fitout">Office Fitout</option>
                  <option value="Design Only">Design Only</option>
                  <option value="Refurbishment">Refurbishment</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-slate-700">Timeframe</label>
                <select name="timeframe" className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400">
                  <option value="ASAP">ASAP</option>
                  <option value="1-3 months">1-3 months</option>
                  <option value="3-6 months">3-6 months</option>
                </select>
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm text-slate-700">Budget</label>
              <input name="budget" className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400" />
            </div>
            <div className="mt-4">
              <label className="text-sm text-slate-700">Project Details</label>
              <textarea name="message" rows="4" className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400" />
            </div>
            <label className="mt-4 flex items-center gap-2 text-sm text-slate-600">
              <input type="checkbox" name="consent_marketing" /> I’d like to receive occasional updates and case studies.
            </label>
            <button className="mt-5 inline-flex items-center justify-center px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold transition-colors">
              Request Proposal
            </button>
            {status && <p className="mt-3 text-sm text-slate-600">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
