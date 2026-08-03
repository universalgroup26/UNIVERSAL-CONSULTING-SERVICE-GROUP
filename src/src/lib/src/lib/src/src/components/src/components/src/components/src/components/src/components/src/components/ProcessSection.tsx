const STEPS = [
      {
          num: '1',
              title: 'Complete Your Evaluation',
                  desc: 'Fill out our 2-minute form with your current OPT status and background details.',
                    },
                      {
                          num: '2',
                              title: 'Advisor Reviews Your Profile',
                                  desc: 'A UCSG advisor personally reviews your submission and identifies potential pathways.',
                                    },
                                      {
                                          num: '3',
                                              title: 'Free Consultation Call',
                                                  desc: 'We schedule a free, private call to walk you through your options and next steps.',
                                                    },
                                                      {
                                                          num: '4',
                                                              title: 'Personalized Action Plan',
                                                                  desc: 'You receive a clear roadmap tailored to your timeline, degree, and career goals.',
                                                                    },
                                                                    ]

                                                                    export default function ProcessSection() {
                                                                      return (
                                                                          <section className="py-12 px-4 bg-white">
                                                                                <div className="max-w-4xl mx-auto">
                                                                                        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
                                                                                                  How Our Process Works
                                                                                                          </h2>
                                                                                                                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                                                                                                            {STEPS.map(s => (
                                                                                                                                        <div key={s.num} className="text-center">
                                                                                                                                                      <div className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                                                                                                                                                                      {s.num}
                                                                                                                                                                                    </div>
                                                                                                                                                                                                  <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                                                                                                                                                                                                                <p className="text-sm text-gray-600">{s.desc}</p>
                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                      ))}
                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                        </section>
                                                                                                                                                                                                                                                          )
                                                                                                                                                                                                                                                          }
]