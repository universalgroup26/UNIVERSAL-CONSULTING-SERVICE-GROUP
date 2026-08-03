import { analytics } from '../lib/analytics'

export default function HeroSection() {
  const scrollToForm = () => {
      document.getElementById('evaluation-form')?.scrollIntoView({ behavior: 'smooth' })
          analytics.ctaClick('hero_cta')
            }

              return (
                  <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 px-4">
                        <div className="max-w-4xl mx-auto text-center">
                                <div className="inline-block bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
                                          For F-1 Students on OPT / STEM OPT
                                                  </div>
                                                          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
                                                                    Your OPT is Ending.
                                                                              <br />
                                                                                        <span className="text-yellow-300">What’s Your Next Visa Path?</span>
                                                                                                </h1>
                                                                                                        <p className="text-lg md:text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
                                                                                                                  Get a free, private evaluation from UCSG advisors. We’ll review your
                                                                                                                            background and help you understand your options — H-1B, O-1, EB-1,
                                                                                                                                      EB-2 NIW, and more.
                                                                                                                                              </p>
                                                                                                                                                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                                                                                                                                                <button
                                                                                                                                                                            onClick={scrollToForm}
                                                                                                                                                                                        className="bg-yellow-400 text-blue-900 font-bold px-8 py-4 rounded-xl text-lg hover:bg-yellow-300 transition-colors shadow-lg"
                                                                                                                                                                                                  >
                                                                                                                                                                                                              Start My Free Evaluation
                                                                                                                                                                                                                        </button>
                                                                                                                                                                                                                                  <a
                                                                                                                                                                                                                                              href="tel:+13028935594"
                                                                                                                                                                                                                                                          className="border-2 border-white text-white font-semibold px-6 py-4 rounded-xl text-lg hover:bg-white hover:text-blue-900 transition-colors"
                                                                                                                                                                                                                                                                    >
                                                                                                                                                                                                                                                                                Call +1 (302) 893-5594
                                                                                                                                                                                                                                                                                          </a>
                                                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                                                          <p className="text-blue-200 text-sm mt-4">
                                                                                                                                                                                                                                                                                                                    Free consultation · No obligation · Confidential
                                                                                                                                                                                                                                                                                                                            </p>
                                                                                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                                                                                      </section>
                                                                                                                                                                                                                                                                                                                                        )
                                                                                                                                                                                                                                                                                                                                        }