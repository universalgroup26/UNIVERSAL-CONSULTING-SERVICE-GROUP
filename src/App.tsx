import{useState,useRef,useEffect}from 'react'
import{BrowserRouter,Routes,Route,Link,useNavigate}from 'react-router-dom'

const PH='+1 (302) 893-5594',PH_HREF='tel:+13028935594',EMAIL='info@universalconsultingservicegroup.com'
const CAL_URL=typeof window!=='undefined'?(window as any).__VITE_GHL_CALENDAR_URL||'':''

declare global{interface Window{fbq?:any;gtag?:any;clarity?:any}}
const _f=new Set<string>(),_o=(k:string,fn:()=>void)=>{if(!_f.has(k)){_f.add(k);fn()}}
const track={lead:()=>_o('l',()=>{window.fbq?.('track','Lead');window.gtag?.('event','generate_lead');window.clarity?.('event','lead_submitted')}),start:()=>_o('fs',()=>{window.fbq?.('track','InitiateCheckout');window.gtag?.('event','form_start')}),cta:(l:string)=>{window.fbq?.('trackCustom','CTAClick',{label:l});window.gtag?.('event','cta_click',{event_label:l})}}

function Header(){
  return(
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/ucsg-logo.jpg" alt="UCSG" className="h-10 w-auto" onError={(e)=>{(e.currentTarget as HTMLImageElement).style.display='none'}}/>
          <div><div className="font-bold text-gray-900 text-sm">Universal Consulting</div><div className="font-bold text-gray-900 text-sm">Service Group</div></div>
        </div>
        <a href={PH_HREF} className="bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-800">{PH}</a>
      </div>
    </header>
  )
}

function HeroSection(){
  const go=()=>{document.getElementById('eval-form')?.scrollIntoView({behavior:'smooth'});track.cta('hero')}
  return(
    <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase">For F-1 Students on OPT / STEM OPT</div>
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">Your OPT is Ending.<br/><span className="text-yellow-300">What’s Your Next Visa Path?</span></h1>
        <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">Get a free, private evaluation from UCSG advisors. We’ll help you understand your options — H-1B, O-1, EB-1, EB-2 NIW, and more.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button onClick={go} className="bg-yellow-400 text-blue-900 font-bold px-8 py-4 rounded-xl text-lg hover:bg-yellow-300">Start My Free Evaluation</button>
          <a href={PH_HREF} className="border-2 border-white text-white font-semibold px-6 py-4 rounded-xl text-lg hover:bg-white hover:text-blue-900">Call {PH}</a>
        </div>
        <p className="text-blue-200 text-sm mt-4">Free consultation · No obligation · Confidential</p>
      </div>
    </section>
  )
}

const S1=[{id:'opt',label:'Current OPT status?',opts:['On OPT','On STEM OPT','Ending within 3 months','Already expired']},{id:'deg',label:'Highest U.S. degree?',opts:['Bachelor’s','Master’s','PhD','Associate’s']},{id:'field',label:'Field of study/work?',opts:['STEM / CS / Engineering','Business / Finance','Healthcare / Life Sciences','Arts / Other']}]
const S2=[{id:'emp',label:'Does your employer support H-1B?',opts:['Yes','No','Not sure','Self-employed']},{id:'time',label:'How soon do you need resolution?',opts:['Within 30 days','Within 3 months','Within 6 months','6+ months']}]

function EvaluationForm(){
  const nav=useNavigate()
  const[step,setStep]=useState(1)
  const[ans,setAns]=useState<Record<string,string>>({})
  const[info,setInfo]=useState({name:'',email:'',phone:''})
  const[consent,setConsent]=useState(false)
  const[hp,setHp]=useState('')
  const[loading,setLoading]=useState(false)
  const[err,setErr]=useState('')
  const ref=useRef<HTMLDivElement>(null)
  useEffect(()=>{const o=new IntersectionObserver(([e])=>{if(e.isIntersecting)track.start()},{threshold:.3});if(ref.current)o.observe(ref.current);return()=>o.disconnect()},[]) 
  const q=step===1?S1:S2
  const ok1=S1.every(x=>ans[x.id]),ok2=S2.every(x=>ans[x.id])
  const next=()=>{if(!ok1)return;setStep(2);ref.current?.scrollIntoView({behavior:'smooth'})}
  const getUTM=()=>{const p=new URLSearchParams(window.location.search);return{utm_source:p.get('utm_source')||'',utm_medium:p.get('utm_medium')||'',utm_campaign:p.get('utm_campaign')||'',utm_content:p.get('utm_content')||'',utm_term:p.get('utm_term')||''}}
  const submit=async(e:React.FormEvent)=>{
    e.preventDefault()
    if(hp)return
    if(!ok2||!info.name||!info.email||!consent){setErr('Please complete all fields and accept the terms.');return}
    setLoading(true);setErr('')
    try{
      const r=await fetch('/api/lead',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({form_name:'UCSG_STEM_OPT_PRIVATE_EVALUATION_V2',...info,...ans,...getUTM()})})
      const d=await r.json()
      if(r.ok&&d.success){track.lead();nav('/thank-you')}else{setErr('Something went wrong. Call us at '+PH)}
    }catch{setErr('Network error. Call us at '+PH)}
    finally{setLoading(false)}
  }
  return(
    <section id="eval-form" className="bg-gray-50 py-12 px-4">
      <div ref={ref} className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Get Your Free Private Evaluation</h2>
          <p className="text-gray-600">Step {step} of 2 — Takes about 2 minutes</p>
          <div className="flex gap-2 justify-center mt-3">
            <div className={'h-2 w-20 rounded-full '+(step>=1?'bg-blue-700':'bg-gray-300')}/>
            <div className={'h-2 w-20 rounded-full '+(step>=2?'bg-blue-700':'bg-gray-300')}/>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <input type="text" name="_gotcha" style={{display:'none'}} value={hp} onChange={e=>setHp(e.target.value)} tabIndex={-1} autoComplete="off"/>
          {q.map(q=>(
            <div key={q.id} className="mb-6">
              <p className="font-semibold text-gray-900 mb-3">{q.label}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {q.opts.map(o=>(
                  <button key={o} type="button" onClick={()=>setAns(p=>({...p,[q.id]:o}))} className={'text-left px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all '+(ans[q.id]===o?'border-blue-700 bg-blue-50 text-blue-700':'border-gray-200 hover:border-blue-300 text-gray-700')}>{o}</button>
                ))}
              </div>
            </div>
          ))}
          {step===2&&(
            <div className="mt-6 space-y-4">
              <input type="text" placeholder="Full Name *" value={info.name} onChange={e=>setInfo(p=>({...p,name:e.target.value}))} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-700" required/>
              <input type="email" placeholder="Email Address *" value={info.email} onChange={e=>setInfo(p=>({...p,email:e.target.value}))} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-700" required/>
              <input type="tel" placeholder="Phone (optional)" value={info.phone} onChange={e=>setInfo(p=>({...p,phone:e.target.value}))} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm"/>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" checked={consent} onChange={e=>setConsent(e.target.checked)} className="mt-1 h-4 w-4 accent-blue-700"/>
                <span className="text-xs text-gray-500">I consent to be contacted by UCSG advisors. This is not legal advice. <a href="/privacy-policy" className="underline text-blue-700" target="_blank">Privacy Policy</a> &amp; <a href="/terms-of-service" className="underline text-blue-700" target="_blank">Terms</a>.</span>
              </label>
            </div>
          )}
          {err&&<p className="text-red-600 text-sm mt-4">{err}</p>}
          <div className="mt-6">
            {step===1?(
              <button type="button" onClick={next} disabled={!ok1} className="w-full bg-blue-700 text-white font-bold py-4 rounded-xl text-lg hover:bg-blue-800 disabled:opacity-50">Next: Contact Details →</button>
            ):(
              <button type="submit" onClick={submit} disabled={loading||!ok2||!info.name||!info.email||!consent} className="w-full bg-green-600 text-white font-bold py-4 rounded-xl text-lg hover:bg-green-700 disabled:opacity-50">{loading?'Submitting...':'Submit My Evaluation →'}</button>
            )}
          </div>
          <p className="text-center text-xs text-gray-400 mt-4">Your information is kept strictly confidential.</p>
        </div>
      </div>
    </section>
  )
}

function ProgramComparison(){
  const P=[{n:'H-1B Sponsorship',i:'🏢',d:'Employer-sponsored specialty occupation visa.',f:'Employer willing to sponsor'},{n:'O-1 Extraordinary Ability',i:'⭐',d:'For individuals with extraordinary ability. No lottery.',f:'Strong portfolio, awards, publications'},{n:'EB-1 Priority Worker',i:'🏆',d:'Employment-based green card for managers or outstanding researchers.',f:'Senior leadership or research role'},{n:'EB-2 NIW',i:'🌎',d:'National Interest Waiver. Self-petition green card, no employer sponsor needed.',f:'Advanced degree, work of national importance'}]
  return(
    <section className="py-12 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-2">Common Visa Pathways After OPT</h2>
        <p className="text-center text-gray-500 mb-8 text-sm">Every situation is unique. Our advisors help you identify your best option.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {P.map(p=>(<div key={p.n} className="border border-gray-200 rounded-xl p-5 hover:shadow-md"><div className="flex items-center gap-3 mb-2"><span className="text-2xl">{p.i}</span><h3 className="font-bold text-gray-900">{p.n}</h3></div><p className="text-sm text-gray-600 mb-2">{p.d}</p><p className="text-xs text-blue-700 font-medium">✔ Best fit: {p.f}</p></div>))}
        </div>
        <p className="text-center text-xs text-gray-400 mt-6">Educational information only — not legal advice. Consult a licensed immigration attorney.</p>
      </div>
    </section>
  )
}

function GuidanceSection(){
  const P=[{i:'💼',t:'Personalized Guidance',d:'Every client receives a tailored evaluation — no one-size-fits-all advice.'},{i:'🔒',t:'Confidential Process',d:'Your information is never shared. All consultations are strictly private.'},{i:'⚡',t:'Fast Response',d:'We aim to respond within one business day of your evaluation submission.'},{i:'💰',t:'Free Initial Consultation',d:'Your first consultation is completely free — no payment required.'}]
  return(
    <section className="py-12 px-4 bg-blue-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">Why Students Choose UCSG</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {P.map(p=>(<div key={p.t} className="bg-white rounded-xl p-5 shadow-sm text-center"><div className="text-3xl mb-3">{p.i}</div><h3 className="font-bold text-gray-900 mb-2">{p.t}</h3><p className="text-sm text-gray-600">{p.d}</p></div>))}
        </div>
      </div>
    </section>
  )
}

function ProcessSection(){
  const S=[{n:'1',t:'Complete Your Evaluation',d:'Fill out our 2-minute form with your OPT status and background details.'},{n:'2',t:'Advisor Reviews',d:'A UCSG advisor personally reviews your submission and identifies pathways.'},{n:'3',t:'Free Consultation Call',d:'We schedule a free private call to walk you through your options.'},{n:'4',t:'Personalized Action Plan',d:'You receive a clear roadmap tailored to your timeline and career goals.'}]
  return(
    <section className="py-12 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">How Our Process Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {S.map(s=>(<div key={s.n} className="text-center"><div className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">{s.n}</div><h3 className="font-bold text-gray-900 mb-1">{s.t}</h3><p className="text-sm text-gray-600">{s.d}</p></div>))}
        </div>
      </div>
    </section>
  )
}

function FAQSection(){
  const[open,setOpen]=useState<number|null>(null)
  const F=[{q:'Is this consultation really free?',a:'Yes. Your initial evaluation and consultation call is completely free with no obligation.'},{q:'Does UCSG provide legal advice?',a:'UCSG advisors provide educational guidance. For legal advice, consult a licensed immigration attorney.'},{q:'How quickly will I hear back?',a:'We aim to respond within one business day. Office hours: Mon–Fri 10 AM–5 PM ET.'},{q:'Can UCSG help if my OPT has already expired?',a:'Yes. We work with students at all stages including those whose OPT has already ended.'},{q:'What information do I need?',a:'Just basic details about your degree, field, employer situation, and OPT timeline. Takes about 2 minutes.'}]
  return(
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {F.map((f,i)=>(<div key={i} className="bg-white rounded-xl border border-gray-200"><button className="w-full text-left px-5 py-4 font-semibold text-gray-900 flex justify-between items-center" onClick={()=>setOpen(open===i?null:i)}>{f.q}<span className="text-gray-400 ml-2">{open===i?'−':'+'}</span></button>{open===i&&<div className="px-5 pb-4 text-sm text-gray-600">{f.a}</div>}</div>))}
        </div>
      </div>
    </section>
  )
}

function FinalCTA(){
  const go=()=>{document.getElementById('eval-form')?.scrollIntoView({behavior:'smooth'});track.cta('footer_cta')}
  return(
    <section className="bg-blue-900 text-white py-14 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-extrabold mb-4">Don’t Wait Until Your Status Expires</h2>
        <p className="text-blue-200 text-lg mb-8">Start your free evaluation today and get clarity on your next steps.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={go} className="bg-yellow-400 text-blue-900 font-bold px-10 py-4 rounded-xl text-lg hover:bg-yellow-300">Start Free Evaluation</button>
          <a href={PH_HREF} className="border-2 border-white text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-white hover:text-blue-900">Call {PH}</a>
        </div>
        <p className="text-blue-300 text-xs mt-6">Office hours: Mon–Fri 10 AM – 5 PM ET · Free consultation · No obligation</p>
      </div>
    </section>
  )
}

function Footer(){
  const y=new Date().getFullYear()
  return(
    <footer className="bg-gray-900 text-gray-300 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6 justify-between mb-8">
          <div><div className="flex items-center gap-3 mb-2"><img src="/ucsg-logo.jpg" alt="" className="h-8 w-auto brightness-0 invert" onError={(e)=>{(e.currentTarget as HTMLImageElement).style.display='none'}}/><span className="font-bold text-white">Universal Consulting Service Group</span></div><p className="text-sm text-gray-400 max-w-xs">Immigration consulting services for international students. Not a law firm. Not legal advice.</p></div>
          <div className="space-y-1 text-sm"><p className="font-semibold text-white mb-2">Contact</p><p><a href={PH_HREF} className="hover:text-white">{PH}</a></p><p><a href={'mailto:'+EMAIL} className="hover:text-white">{EMAIL}</a></p><p className="text-gray-500">Mon–Fri 10 AM – 5 PM ET</p></div>
          <div className="space-y-1 text-sm"><p className="font-semibold text-white mb-2">Legal</p><p><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></p><p><Link to="/terms-of-service" className="hover:text-white">Terms of Service</Link></p></div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-xs text-gray-500 text-center space-y-1">
          <p>© {y} Universal Consulting Service Group. All rights reserved.</p>
          <p>UCSG is an immigration consulting firm, not a law firm. Information on this site is educational only and does not constitute legal advice.</p>
          <p>Results may vary. No outcome is guaranteed. Consult a licensed immigration attorney for advice specific to your situation.</p>
        </div>
      </div>
    </footer>
  )
}

function StickyMobileCTA(){
  return(
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 shadow-lg">
      <div className="flex">
        <a href={PH_HREF} onClick={()=>track.cta('sticky_phone')} className="flex-1 bg-blue-700 text-white text-center py-4 font-semibold text-sm">📞 Call {PH}</a>
        <button onClick={()=>{document.getElementById('eval-form')?.scrollIntoView({behavior:'smooth'});track.cta('sticky_form')}} className="flex-1 bg-yellow-400 text-blue-900 text-center py-4 font-semibold text-sm">📋 Free Evaluation</button>
      </div>
    </div>
  )
}

function ThankYouPage(){
  useEffect(()=>{window.scrollTo(0,0)},[]) 
  const calUrl=typeof import.meta!=='undefined'?(import.meta as any).env?.VITE_GHL_CALENDAR_URL||'':''
  return(
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="text-6xl mb-4">✅</div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">Thank You — We Received Your Evaluation!</h1>
        <p className="text-gray-600 mb-6">A UCSG advisor will review your profile and reach out within one business day. Office hours: Mon–Fri 10 AM – 5 PM ET.</p>
        {calUrl?(
          <div className="mb-8"><p className="font-semibold text-gray-900 mb-3">Want to schedule your consultation now?</p><a href={calUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-700 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-800">Book My Free Consultation</a></div>
        ):(
          <div className="mb-8 bg-blue-50 rounded-xl p-4"><p className="text-gray-700 font-medium mb-2">Prefer to call directly?</p><a href={PH_HREF} className="inline-block bg-blue-700 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-800">Call {PH}</a></div>
        )}
        <p className="text-sm text-gray-500 mb-4">Or email us at <a href={'mailto:'+EMAIL} className="text-blue-700 underline">{EMAIL}</a></p>
        <Link to="/" className="text-blue-700 underline text-sm">← Back to Home</Link>
      </div>
    </div>
  )
}

function PrivacyPolicy(){
  return(
    <div className="min-h-screen bg-white px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="text-blue-700 text-sm underline">← Back to Home</Link>
        <h1 className="text-2xl font-bold mt-4 mb-6">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-6">Last updated: {new Date().getFullYear()}</p>
        <h2 className="font-bold text-gray-900 mt-6 mb-2">1. Information We Collect</h2><p className="text-gray-700 text-sm">We collect information you provide when completing our evaluation form, including your name, email address, phone number, and educational/immigration background details.</p>
        <h2 className="font-bold text-gray-900 mt-6 mb-2">2. How We Use Your Information</h2><p className="text-gray-700 text-sm">Your information is used solely to provide you with an immigration evaluation and to contact you about our consulting services. We do not sell or rent your personal information to third parties.</p>
        <h2 className="font-bold text-gray-900 mt-6 mb-2">3. Data Security</h2><p className="text-gray-700 text-sm">We take reasonable measures to protect your personal information from unauthorized access.</p>
        <h2 className="font-bold text-gray-900 mt-6 mb-2">4. Third-Party Services</h2><p className="text-gray-700 text-sm">We use Google Analytics, Meta Pixel, and Microsoft Clarity for analytics. These services may collect usage data per their own privacy policies.</p>
        <h2 className="font-bold text-gray-900 mt-6 mb-2">5. Contact</h2><p className="text-gray-700 text-sm">Questions? Email {EMAIL} or call {PH}.</p>
      </div>
    </div>
  )
}

function TermsOfService(){
  return(
    <div className="min-h-screen bg-white px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="text-blue-700 text-sm underline">← Back to Home</Link>
        <h1 className="text-2xl font-bold mt-4 mb-6">Terms of Service</h1>
        <p className="text-gray-500 text-sm mb-6">Last updated: {new Date().getFullYear()}</p>
        <h2 className="font-bold text-gray-900 mt-6 mb-2">1. Services</h2><p className="text-gray-700 text-sm">UCSG provides immigration consulting and educational services. UCSG is not a law firm and does not provide legal advice.</p>
        <h2 className="font-bold text-gray-900 mt-6 mb-2">2. No Attorney-Client Relationship</h2><p className="text-gray-700 text-sm">Submitting an evaluation form does not create an attorney-client relationship.</p>
        <h2 className="font-bold text-gray-900 mt-6 mb-2">3. No Guarantee of Outcomes</h2><p className="text-gray-700 text-sm">Immigration outcomes depend on many factors. UCSG makes no guarantees regarding visa approvals or timelines.</p>
        <h2 className="font-bold text-gray-900 mt-6 mb-2">4. Contact</h2><p className="text-gray-700 text-sm">Questions? Email {EMAIL} or call {PH}. Office hours: Mon–Fri 10 AM–5 PM ET.</p>
      </div>
    </div>
  )
}

function LandingPage(){
  return(
    <div className="min-h-screen bg-white">
      <Header/>
      <main><HeroSection/><EvaluationForm/><ProgramComparison/><GuidanceSection/><ProcessSection/><FAQSection/><FinalCTA/></main>
      <Footer/>
      <StickyMobileCTA/>
    </div>
  )
}

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/thank-you" element={<ThankYouPage/>}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
        <Route path="/terms-of-service" element={<TermsOfService/>}/>
      </Routes>
    </BrowserRouter>
  )
          }
