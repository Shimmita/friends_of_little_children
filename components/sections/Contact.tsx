"tsx"
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold tracking-widest text-emerald-700 uppercase bg-emerald-50 px-3 py-1 rounded-md">Get In Touch</span>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">Let's Build Strategic Alliances</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              We welcome inquiries regarding institutional partnerships, audited reporting requests, volunteer placement opportunities, and direct donor support.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0"><MapPin className="w-5 h-5" /></div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900">Head Office Location</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Mombasa County, Republic of Kenya</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center shrink-0"><Phone className="w-5 h-5" /></div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900">Call Direct Registry</h4>
                  <p className="text-xs text-gray-500 mt-0.5">+254 700 000000 / Office Line</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center shrink-0"><Mail className="w-5 h-5" /></div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900">Secure Inboxes</h4>
                  <p className="text-xs text-gray-500 mt-0.5">info@friendsofthelittleangel.org</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-gray-50 p-6 sm:p-10 rounded-2xl border border-gray-100 shadow-xs">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Send an Official Message</h3>
            <p className="text-xs text-gray-400 mb-6">Your request will route directly to the designated department lead.</p>
            
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 tracking-wide uppercase">Your Name</label>
                  <input type="text" placeholder="Jane Doe" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-700 transition-colors" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 tracking-wide uppercase">Email Address</label>
                  <input type="email" placeholder="jane@example.com" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-700 transition-colors" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 tracking-wide uppercase">Inquiry Classification</label>
                <select className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-700 transition-colors text-gray-600">
                  <option>General Partnership Alliance</option>
                  <option>Corporate Sponsorship Funding</option>
                  <option>Volunteer Placement Program</option>
                  <option>OVC Care Registry Support</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 tracking-wide uppercase">Message Body</label>
                <textarea rows={4} placeholder="Please detail how we can collaborate..." className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-700 transition-colors resize-none" />
              </div>
              <button type="submit" className="w-full py-4 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl transition-all shadow-md shadow-emerald-700/10 flex items-center justify-center gap-2 text-sm uppercase tracking-wider">
                Transmit Message <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}