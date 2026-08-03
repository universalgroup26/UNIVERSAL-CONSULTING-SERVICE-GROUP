import { Link } from 'react-router-dom'

export default function TermsOfService() {
  return (
      <div className="min-h-screen bg-white px-4 py-12">
            <div className="max-w-3xl mx-auto">
                    <Link to="/" className="text-blue-700 text-sm underline">← Back to Home</Link>
                            <h1 className="text-2xl font-bold mt-4 mb-6">Terms of Service</h1>
                                    <p className="text-gray-500 text-sm mb-6">Last updated: {new Date().getFullYear()}</p>

                                            <h2 className="font-bold text-gray-900 mt-6 mb-2">1. Services</h2>
                                                    <p className="text-gray-700 text-sm">
                                                              Universal Consulting Service Group (UCSG) provides immigration consulting and educational
                                                                        services. UCSG is not a law firm and does not provide legal advice. Our evaluations and
                                                                                  consultations are informational only.
                                                                                          </p>

                                                                                                  <h2 className="font-bold text-gray-900 mt-6 mb-2">2. No Attorney-Client Relationship</h2>
                                                                                                          <p className="text-gray-700 text-sm">
                                                                                                                    Use of this website and submission of an evaluation form does not create an attorney-client
                                                                                                                              relationship. For legal advice, please consult a licensed immigration attorney.
                                                                                                                                      </p>

                                                                                                                                              <h2 className="font-bold text-gray-900 mt-6 mb-2">3. No Guarantee of Outcomes</h2>
                                                                                                                                                      <p className="text-gray-700 text-sm">
                                                                                                                                                                Immigration outcomes depend on many factors including USCIS adjudication.
                                                                                                                                                                          UCSG makes no guarantees regarding visa approvals, case timelines, or any specific result.
                                                                                                                                                                                  </p>

                                                                                                                                                                                          <h2 className="font-bold text-gray-900 mt-6 mb-2">4. Use of Information</h2>
                                                                                                                                                                                                  <p className="text-gray-700 text-sm">
                                                                                                                                                                                                            By submitting your information, you consent to being contacted by a UCSG advisor.
                                                                                                                                                                                                                      You may opt out at any time by contacting us.
                                                                                                                                                                                                                              </p>

                                                                                                                                                                                                                                      <h2 className="font-bold text-gray-900 mt-6 mb-2">5. Contact</h2>
                                                                                                                                                                                                                                              <p className="text-gray-700 text-sm">
                                                                                                                                                                                                                                                        Questions about these terms? Contact us at info@universalconsultingservicegroup.com
                                                                                                                                                                                                                                                                  or call +1 (302) 893-5594. Office hours: Mon–Fri 10 AM – 5 PM ET.
                                                                                                                                                                                                                                                                          </p>
                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                      )
                                                                                                                                                                                                                                                                                      }