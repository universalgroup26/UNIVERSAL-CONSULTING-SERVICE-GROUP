const RATE=new Map()
function getIP(req){const f=req.headers['x-forwarded-for'];return(Array.isArray(f)?f[0]:f?.split(',')[0])||'unknown'}

export default async function handler(req,res){
  if(req.method!=='POST')return res.status(405).json({error:'Method not allowed'})
  const ip=getIP(req),now=Date.now(),last=RATE.get(ip)||0
  if(now-last<720000)return res.status(429).json({error:'Too many requests'})
  RATE.set(ip,now)
  const b=req.body||{}
  if(b._gotcha)return res.status(200).json({success:true})
  const url=process.env.LEAD_WEBHOOK_URL
  if(!url){console.error('LEAD_WEBHOOK_URL not set');return res.status(200).json({success:true})}
  const payload={form_name:b.form_name||'UCSG_STEM_OPT_PRIVATE_EVALUATION_V2',name:b.name,email:b.email,phone:b.phone||'',opt_status:b.opt,degree_level:b.deg,field:b.field,employer_support:b.emp,timeline:b.time,utm_source:b.utm_source||'',utm_medium:b.utm_medium||'',utm_campaign:b.utm_campaign||'',utm_content:b.utm_content||'',utm_term:b.utm_term||'',submitted_at:new Date().toISOString(),source_ip:ip}
  try{
    const r=await fetch(url,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)})
    if(!r.ok)console.error('GHL webhook error:',r.status)
    return res.status(200).json({success:true})
  }catch(e){
    console.error('Webhook error:',e)
    return res.status(200).json({success:true})
  }
}
