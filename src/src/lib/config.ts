export const CONTACT_CONFIG = {
      phone: {
          display: '+1 (302) 893-5594',
              e164: '+13028935594',
                  href: 'tel:+13028935594',
                    },
                      whatsapp: {
                          number: import.meta.env.VITE_UCSG_WHATSAPP_NUMBER as string | undefined,
                              get href() {
                                    return this.number
                                            ? `https://wa.me/${this.number.replace(/\D/g, '')}`
                                                    : null
                                                        },
                                                          },
                                                            calendar: {
                                                                url: import.meta.env.VITE_GHL_CALENDAR_URL as string | undefined,
                                                                  },
                                                                    email: 'info@universalconsultingservicegroup.com',
                                                                    } as const
}