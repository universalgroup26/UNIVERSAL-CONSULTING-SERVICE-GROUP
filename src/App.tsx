import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import EvaluationForm from './components/EvaluationForm'
import ProgramComparison from './components/ProgramComparison'
import GuidanceSection from './components/GuidanceSection'
import ProcessSection from './components/ProcessSection'
import FAQSection from './components/FAQSection'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import StickyMobileCTA from './components/StickyMobileCTA'
import ThankYouPage from './pages/ThankYouPage'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'

function LandingPage() {
  return (
      <div>
            <Header />
                  <main>
                          <HeroSection />
                                  <EvaluationForm />
                                          <ProgramComparison />
                                                  <GuidanceSection />
                                                          <ProcessSection />
                                                                  <FAQSection />
                                                                          <FinalCTA />
                                                                                </main>
                                                                                      <Footer />
                                                                                            <StickyMobileCTA />
                                                                                                </div>
                                                                                                  )
                                                                                                  }

                                                                                                  export default function App() {
                                                                                                    return (
                                                                                                        <BrowserRouter>
                                                                                                              <Routes>
                                                                                                                      <Route path="/" element={<LandingPage />} />
                                                                                                                              <Route path="/thank-you" element={<ThankYouPage />} />
                                                                                                                                      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                                                                                                                                              <Route path="/terms-of-service" element={<TermsOfService />} />
                                                                                                                                                    </Routes>
                                                                                                                                                        </BrowserRouter>
                                                                                                                                                          )
                                                                                                                                                          }