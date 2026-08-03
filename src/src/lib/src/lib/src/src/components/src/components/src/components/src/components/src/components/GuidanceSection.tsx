const PILLARS = [
      {
          icon: '💼',
              title: 'Personalized Guidance',
                  desc: 'Every client receives a tailored evaluation — no one-size-fits-all advice.',
                    },
                      {
                          icon: '🔒',
                              title: 'Confidential Process',
                                  desc: 'Your information is never shared. All consultations are strictly private.',
                                    },
                                      {
                                          icon: '⚡',
                                              title: 'Fast Response',
                                                  desc: 'We aim to respond within one business day of your evaluation submission.',
                                                    },
                                                      {
                                                          icon: '💰',
                                                              title: 'Free Initial Consultation',
                                                                  desc: 'Your first consultation is completely free — no payment required to get started.',
                                                                    },
                                                                    ]

                                                                    export default function GuidanceSection() {
                                                                      return (
                                                                          <section className="py-12 px-4 bg-blue-50">
                                                                                <div className="max-w-5xl mx-auto">
                                                                                        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-2">
                                                                                                  Why Students Choose UCSG
                                                                                                          </h2>
                                                                                                                  <p className="text-center text-gray-500 mb-8 text-sm">
                                                                                                                            We’ve helped hundreds of F-1 students navigate their immigration journey.
                                                                                                                                    </p>
                                                                                                                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                                                                                                                                                      {PILLARS.map(p => (
                                                                                                                                                                  <div key={p.title} className="bg-white rounded-xl p-5 shadow-sm text-center">
                                                                                                                                                                                <div className="text-3xl mb-3">{p.icon}</div>
                                                                                                                                                                                              <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
                                                                                                                                                                                                            <p className="text-sm text-gray-600">{p.desc}</p>
                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                  ))}
                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                    </section>
                                                                                                                                                                                                                                                      )
                                                                                                                                                                                                                                                      }
]