import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {
  return (
      <div className="min-h-screen bg-white px-4 py-12">
            <div className="max-w-3xl mx-auto prose prose-sm">
                    <Link to="/" className="text-blue-700 text-sm underline">← Back to Home</Link>
                            <h1 className="text-2xl font-bold mt-4 mb-6">Privacy Policy</h1>
                                    <p className="text-gray-500 text-sm mb-6">Last updated: {new Date().getFullYear()}</p>

                                            <h2 className="font-bold text-gray-900 mt-6 mb-2">1. Information We Collect</h2>
                                                    <p className="text-gray-700 text-sm">
                                                              We collect information you provide when completing our evaluation form, including your name,
                                                                        email address, phone number, and educational/immigration background details.
                                                                                </p>

                                                                                        <h2 className="font-bold text-gray-900 mt-6 mb-2">2. How We Use Your Information</h2>
                                                                                                <p className="text-gray-700 text-sm">
                                                                                                          Your information is used solely to provide you with an immigration evaluation and to contact you
                                                                                                                    about our consulting services. We do not sell or rent your personal information to third parties.
                                                                                                                            </p>

                                                                                                                                    <h2 className="font-bold text-gray-900 mt-6 mb-2">3. Data Security</h2>
                                                                                                                                            <p className="text-gray-700 text-sm">
                                                                                                                                                      We take reasonable measures to protect your personal information from unauthorized access.
                                                                                                                                                                However, no internet transmission is completely secure.
                                                                                                                                                                        </p>

                                                                                                                                                                                <h2 className="font-bold text-gray-900 mt-6 mb-2">4. Third-Party Services</h2>
                                                                                                                                                                                        <p className="text-gray-700 text-sm">
                                                                                                                                                                                                  We use Google Analytics, Meta Pixel, and Microsoft Clarity for website analytics.
                                                                                                                                                                                                            These services may collect usage data. Please review their respective privacy policies.
                                                                                                                                                                                                                    </p>

                                                                                                                                                                                                                            <h2 className="font-bold text-gray-900 mt-6 mb-2">5. Contact</h2>
                                                                                                                                                                                                                                    <p className="text-gray-700 text-sm">
                                                                                                                                                                                                                                              For privacy-related questions, contact us at info@universalconsultingservicegroup.com
                                                                                                                                                                                                                                                        or call +1 (302) 893-5594.
                                                                                                                                                                                                                                                                </p>
                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                                            )
                                                                                                                                                                                                                                                                            }