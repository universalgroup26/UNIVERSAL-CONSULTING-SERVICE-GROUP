import { CONTACT_CONFIG } from '../lib/config'

export default function Header() {
  return (
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
            <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                              <img
                                          src="/ucsg-logo.jpg"
                                                      alt="UCSG Logo"
                                                                  className="h-10 w-auto"
                                                                              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
                                                                                        />
                                                                                                  <div>
                                                                                                              <div className="font-bold text-gray-900 text-sm leading-tight">Universal Consulting</div>
                                                                                                                          <div className="font-bold text-gray-900 text-sm leading-tight">Service Group</div>
                                                                                                                                    </div>
                                                                                                                                            </div>
                                                                                                                                                    <a
                                                                                                                                                              href={CONTACT_CONFIG.phone.href}
                                                                                                                                                                        className="bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-800 transition-colors"
                                                                                                                                                                                >
                                                                                                                                                                                          {CONTACT_CONFIG.phone.display}
                                                                                                                                                                                                  </a>
                                                                                                                                                                                                        </div>
                                                                                                                                                                                                            </header>
                                                                                                                                                                                                              )
                                                                                                                                                                                                              }