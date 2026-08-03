import { useState } from 'react'

const FAQS = [
  {
      q: 'Is this consultation really free?',
          a: 'Yes. Your initial evaluation and consultation call with a UCSG advisor is completely free with no obligation.',
            },
              {
                  q: 'Does UCSG provide legal advice?',
                      a: 'UCSG advisors provide educational guidance and consulting services. For legal advice specific to your case, we recommend consulting a licensed immigration attorney.',
                        },
                          {
                              q: 'How quickly will I hear back after submitting?',
                                  a: 'We aim to respond within one business day. Our office hours are Monday–Friday, 10 AM – 5 PM ET.',
                                    },
                                      {
                                          q: 'Can UCSG help if my OPT has already expired?',
                                              a: 'Yes. We work with students at all stages, including those whose OPT has already ended. Schedule a consultation to discuss your options.',
                                                },
                                                  {
                                                      q: 'What information do I need for the evaluation?',
                                                          a: 'Just basic details about your degree, field of study, employer situation, and OPT timeline. The form takes about 2 minutes.',
                                                            },
                                                            ]

                                                            export default function FAQSection() {
                                                              const [open, setOpen] = useState<number | null>(null)

                                                                return (
                                                                    <section className="py-12 px-4 bg-gray-50">
                                                                          <div className="max-w-3xl mx-auto">
                                                                                  <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
                                                                                            Frequently Asked Questions
                                                                                                    </h2>
                                                                                                            <div className="space-y-3">
                                                                                                                      {FAQS.map((faq, i) => (
                                                                                                                                  <div key={i} className="bg-white rounded-xl border border-gray-200">
                                                                                                                                                <button
                                                                                                                                                                className="w-full text-left px-5 py-4 font-semibold text-gray-900 flex justify-between items-center"
                                                                                                                                                                                onClick={() => setOpen(open === i ? null : i)}
                                                                                                                                                                                              >
                                                                                                                                                                                                              {faq.q}
                                                                                                                                                                                                                              <span className="text-gray-400 ml-2">{open === i ? '−' : '+'}</span>
                                                                                                                                                                                                                                            </button>
                                                                                                                                                                                                                                                          {open === i && (
                                                                                                                                                                                                                                                                          <div className="px-5 pb-4 text-sm text-gray-600">{faq.a}</div>
                                                                                                                                                                                                                                                                                        )}
                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                              ))}
                                                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                                                </section>
                                                                                                                                                                                                                                                                                                                                  )
                                                                                                                                                                                                                                                                                                                                  }