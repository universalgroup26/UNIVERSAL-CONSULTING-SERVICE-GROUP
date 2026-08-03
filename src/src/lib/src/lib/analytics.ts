declare global {
      interface Window {
          fbq?: (...args: unknown[]) => void
              gtag?: (...args: unknown[]) => void
                  clarity?: (...args: unknown[]) => void
                    }
                    }

                    const firedEvents = new Set<string>()

                    function fireOnce(key: string, fn: () => void) {
                      if (firedEvents.has(key)) return
                        firedEvents.add(key)
                          fn()
                          }

                          export const analytics = {
                            pageView() {
                                window.fbq?.('track', 'PageView')
                                    window.gtag?.('event', 'page_view')
                                      },

                                        formStart() {
                                            fireOnce('form_start', () => {
                                                  window.fbq?.('track', 'InitiateCheckout')
                                                        window.gtag?.('event', 'form_start', { event_category: 'evaluation' })
                                                            })
                                                              },

                                                                formStep(step: number) {
                                                                    fireOnce(`form_step_${step}`, () => {
                                                                          window.fbq?.('trackCustom', 'FormStep', { step })
                                                                                window.gtag?.('event', 'form_step', { step })
                                                                                    })
                                                                                      },

                                                                                        lead() {
                                                                                            fireOnce('lead', () => {
                                                                                                  window.fbq?.('track', 'Lead')
                                                                                                        window.gtag?.('event', 'generate_lead', { event_category: 'evaluation' })
                                                                                                              window.clarity?.('event', 'lead_submitted')
                                                                                                                  })
                                                                                                                    },

                                                                                                                      ctaClick(label: string) {
                                                                                                                          window.fbq?.('trackCustom', 'CTAClick', { label })
                                                                                                                              window.gtag?.('event', 'cta_click', { event_label: label })
                                                                                                                                },
                                                                                                                                }
}