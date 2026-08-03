const PROGRAMS = [
      {
          name: 'H-1B Sponsorship',
              icon: '🏢',
                  desc: 'Employer-sponsored specialty occupation visa. Cap-subject; requires employer to file petition.',
                      fit: 'Employer willing to sponsor',
                        },
                          {
                              name: 'O-1 Extraordinary Ability',
                                  icon: '⭐',
                                      desc: 'For individuals with extraordinary ability in their field. No employer cap or lottery.',
                                          fit: 'Strong portfolio, awards, publications',
                                            },
                                              {
                                                  name: 'EB-1 Priority Worker',
                                                      icon: '🏆',
                                                          desc: 'Employment-based green card for multinational managers, outstanding researchers, or extraordinary ability.',
                                                              fit: 'Senior leadership or research role',
                                                                },
                                                                  {
                                                                      name: 'EB-2 NIW',
                                                                          icon: '🌎',
                                                                              desc: 'National Interest Waiver — no employer sponsor needed. Self-petition green card for advanced degree holders.',
                                                                                  fit: 'Advanced degree, work of national importance',
                                                                                    },
                                                                                    ]

                                                                                    export default function ProgramComparison() {
                                                                                      return (
                                                                                          <section className="py-12 px-4 bg-white">
                                                                                                <div className="max-w-5xl mx-auto">
                                                                                                        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-2">
                                                                                                                  Common Visa Pathways After OPT
                                                                                                                          </h2>
                                                                                                                                  <p className="text-center text-gray-500 mb-8 text-sm">
                                                                                                                                            Every situation is unique. Our advisors will help you identify the best option for your profile.
                                                                                                                                                    </p>
                                                                                                                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                                                                                                                                      {PROGRAMS.map(p => (
                                                                                                                                                                                  <div key={p.name} className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                                                                                                                                                                                                <div className="flex items-center gap-3 mb-2">
                                                                                                                                                                                                                <span className="text-2xl">{p.icon}</span>
                                                                                                                                                                                                                                <h3 className="font-bold text-gray-900">{p.name}</h3>
                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                            <p className="text-sm text-gray-600 mb-2">{p.desc}</p>
                                                                                                                                                                                                                                                                          <p className="text-xs text-blue-700 font-medium">✔ Best fit: {p.fit}</p>
                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                                ))}
                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                <p className="text-center text-xs text-gray-400 mt-6">
                                                                                                                                                                                                                                                                                                                          This information is educational only and does not constitute legal advice.
                                                                                                                                                                                                                                                                                                                                    Consult a qualified immigration attorney for advice specific to your situation.
                                                                                                                                                                                                                                                                                                                                            </p>
                                                                                                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                                                                                                      </section>
                                                                                                                                                                                                                                                                                                                                                        )
                                                                                                                                                                                                                                                                                                                                                        }
]