import { analytics } from '../lib/analytics'

export default function FinalCTA() {
  const scrollToForm = () => {
      document.getElementById('evaluation-form')?.scrollIntoView({ behavior: 'smooth' })
          analytics.ctaClick('final_cta')
            }

              return (
                  <section className="bg-blue-900 text-white py-14 px-4">
                        <div className="max-w-3xl mx-auto text-center">
                                <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
                                          Don’t Wait Until Your Status Expires
                                                  </h2>
                                                          <p className="text-blue-200 text-lg mb-8">
                                                                    Start your free evaluation today and get clarity on your next steps.
                                                                              Our advisors are ready to help.
                                                                                      </p>
                                                                                              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                                                                                        <button
                                                                                                                    onClick={scrollToForm}
                                                                                                                                className="bg-yellow-400 text-blue-900 font-bold px-10 py-4 rounded-xl text-lg hover:bg-yellow-300 transition-colors"
                                                                                                                                          >
                                                                                                                                                      Start Free Evaluation
                                                                                                                                                                </button>
                                                                                                                                                                          <a
                                                                                                                                                                                      href="tel:+13028935594"
                                                                                                                                                                                                  onClick={() => analytics.ctaClick('final_cta_phone')}
                                                                                                                                                                                                              className="border-2 border-white text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-white hover:text-blue-900 transition-colors"
                                                                                                                                                                                                                        >
                                                                                                                                                                                                                                    Call +1 (302) 893-5594
                                                                                                                                                                                                                                              </a>
                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                              <p className="text-blue-300 text-xs mt-6">
                                                                                                                                                                                                                                                                        Office hours: Mon–Fri 10 AM – 5 PM ET · Free consultation · No obligation
                                                                                                                                                                                                                                                                                </p>
                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                          </section>
                                                                                                                                                                                                                                                                                            )
                                                                                                                                                                                                                                                                                            }