import { CONTACT_CONFIG } from '../lib/config'
import { analytics } from '../lib/analytics'

export default function StickyMobileCTA() {
  return (
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="flex">
                    <a
                              href="tel:+13028935594"
                                        onClick={() => analytics.ctaClick('sticky_phone')}
                                                  className="flex-1 bg-blue-700 text-white text-center py-4 font-semibold text-sm"
                                                          >
                                                                    📞 Call {CONTACT_CONFIG.phone.display}
                                                                            </a>
                                                                                    <button
                                                                                              onClick={() => {
                                                                                                          document.getElementById('evaluation-form')?.scrollIntoView({ behavior: 'smooth' })
                                                                                                                      analytics.ctaClick('sticky_form')
                                                                                                                                }}
                                                                                                                                          className="flex-1 bg-yellow-400 text-blue-900 text-center py-4 font-semibold text-sm"
                                                                                                                                                  >
                                                                                                                                                            📋 Free Evaluation
                                                                                                                                                                    </button>
                                                                                                                                                                            {CONTACT_CONFIG.whatsapp.href && (
                                                                                                                                                                                      <a
                                                                                                                                                                                                  href={CONTACT_CONFIG.whatsapp.href}
                                                                                                                                                                                                              target="_blank"
                                                                                                                                                                                                                          rel="noopener noreferrer"
                                                                                                                                                                                                                                      onClick={() => analytics.ctaClick('sticky_whatsapp')}
                                                                                                                                                                                                                                                  className="flex-1 bg-green-600 text-white text-center py-4 font-semibold text-sm"
                                                                                                                                                                                                                                                            >
                                                                                                                                                                                                                                                                        💬 WhatsApp
                                                                                                                                                                                                                                                                                  </a>
                                                                                                                                                                                                                                                                                          )}
                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                      )
                                                                                                                                                                                                                                                                                                      }