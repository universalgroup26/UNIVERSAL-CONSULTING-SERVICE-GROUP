import type { VercelRequest, VercelResponse } from '@vercel/node'

const RATE_LIMIT = new Map<string, number>()

function getIP(req: VercelRequest): string {
  const forwarded = req.headers['x-forwarded-for']
    return (Array.isArray(forwarded) ? forwarded[0] : forwarded?.split(',')[0]) || 'unknown'
    }

    export default async function handler(req: VercelRequest, res: VercelResponse) {
      if (req.method !== 'POST') {
          return res.status(405).json({ error: 'Method not allowed' })
            }

              // Rate limiting: max 5 submissions per IP per hour
                const ip = getIP(req)
                  const now = Date.now()
                    const last = RATE_LIMIT.get(ip) || 0
                      if (now - last < 720000) {
                          return res.status(429).json({ error: 'Too many requests' })
                            }
                              RATE_LIMIT.set(ip, now)

                                const body = req.body as Record<string, unknown>

                                  // Honeypot check
                                    if (body._gotcha) {
                                        return res.status(200).json({ success: true })
                                          }

                                            const webhookUrl = process.env.LEAD_WEBHOOK_URL
                                              if (!webhookUrl) {
                                                  console.error('LEAD_WEBHOOK_URL not configured')
                                                      return res.status(200).json({ success: true })
                                                        }

                                                          const payload = {
                                                              form_name: body.form_name || 'UCSG_STEM_OPT_PRIVATE_EVALUATION_V2',
                                                                  name: body.name,
                                                                      email: body.email,
                                                                          phone: body.phone || '',
                                                                              opt_status: body.opt_status,
                                                                                  degree_level: body.degree_level,
                                                                                      field: body.field,
                                                                                          employer_support: body.employer_support,
                                                                                              timeline: body.timeline,
                                                                                                  utm_source: body.utm_source || '',
                                                                                                      utm_medium: body.utm_medium || '',
                                                                                                          utm_campaign: body.utm_campaign || '',
                                                                                                              utm_content: body.utm_content || '',
                                                                                                                  utm_term: body.utm_term || '',
                                                                                                                      submitted_at: new Date().toISOString(),
                                                                                                                          source_ip: ip,
                                                                                                                            }

                                                                                                                              try {
                                                                                                                                  const ghlRes = await fetch(webhookUrl, {
                                                                                                                                        method: 'POST',
                                                                                                                                              headers: { 'Content-Type': 'application/json' },
                                                                                                                                                    body: JSON.stringify(payload),
                                                                                                                                                        })
                                                                                                                                                            if (!ghlRes.ok) {
                                                                                                                                                                  console.error('GHL webhook error:', ghlRes.status)
                                                                                                                                                                      }
                                                                                                                                                                          return res.status(200).json({ success: true })
                                                                                                                                                                            } catch (err) {
                                                                                                                                                                                console.error('Webhook fetch error:', err)
                                                                                                                                                                                    return res.status(200).json({ success: true })
                                                                                                                                                                                      }
                                                                                                                                                                                      }