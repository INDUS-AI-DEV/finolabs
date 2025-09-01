import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Building2,
  Bot,
  BarChart3,
  MessageSquare,
  Phone,
  Mail,
  ShieldCheck,
  Languages,
  CheckCircle2,
  ChevronRight,
  Users2,
  TrendingUp,
  PieChart as PieChartIcon,
  CreditCard,
  Database,
  Link as LinkIcon,
  BadgeCheck,
} from 'lucide-react'
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts'

// --- Lightweight UI bits ----------------------------------------------------
const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
    {children}
  </span>
)

const Button = ({ as: As = 'button', children, className = '', ...props }) => (
  <As
    className={
      'inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium shadow-sm transition active:scale-[.98] ' +
      'bg-white text-gray-900 hover:bg-gray-100 ' +
      className
    }
    {...props}
  >
    {children}
  </As>
)

const ButtonGhost = ({ as: As = 'button', children, className = '', ...props }) => (
  <As
    className={
      'inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium transition active:scale-[.98] ' +
      'border border-white/15 text-white/90 hover:bg-white/10 ' +
      className
    }
    {...props}
  >
    {children}
  </As>
)

const Card = ({ children, className = '' }) => (
  <div className={'rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur ' + className}>
    {children}
  </div>
)

const SectionTitle = ({ eyebrow, title, kicker }) => (
  <div className="mx-auto mb-10 max-w-2xl text-center">
    {eyebrow && (
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wider text-white/70">
        {eyebrow}
      </div>
    )}
    <h2 className="text-balance text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
    {kicker && <p className="mt-3 text-white/70">{kicker}</p>}
  </div>
)

// --- Tiny helpers ------------------------------------------------------------
function Stat({ value, suffix = '', label }) {
  const [n, setN] = useState(0)
  useEffect(() => {
    const start = performance.now()
    const dur = 1200
    const tick = (t) => {
      const p = Math.min(1, (t - start) / dur)
      setN(Math.round(value * (0.2 + 0.8 * p)))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [value])
  return (
    <div className="text-center">
      <div className="text-3xl font-semibold sm:text-4xl">{n}{suffix}</div>
      <div className="mt-1 text-sm text-white/70">{label}</div>
    </div>
  )
}

// --- Main Page ---------------------------------------------------------------
export default function FinolabsLoanRecoverySite() {
  return (
    <div className="min-h-dvh w-full bg-gradient-to-b from-[#0B0F1A] to-[#0C1224] text-white">
      {/* Decorative background blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-violet-600/25 blur-[100px]"/>
        <div className="absolute -right-20 top-1/3 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-[100px]"/>
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-cyan-500/20 blur-[90px]"/>
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#0B0F1A]/70 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-lg">
              <Building2 className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight">Finolabs</span>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <ButtonGhost href="#how" as="a">How it works</ButtonGhost>
            <ButtonGhost href="#features" as="a">Features</ButtonGhost>
            <ButtonGhost href="#insights" as="a">Insights</ButtonGhost>
            <ButtonGhost href="#integrations" as="a">Integrations</ButtonGhost>
            <ButtonGhost href="#pricing" as="a">Pricing</ButtonGhost>
            <Button className="ml-2" href="#demo" as="a">Book a Demo</Button>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-4 pt-10 sm:pt-16" id="home">
        <div className="grid items-center gap-8 sm:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2">
              <Pill><Languages className="h-4 w-4"/> Multilingual</Pill>
              <Pill><ShieldCheck className="h-4 w-4"/> RBI-compliant</Pill>
              <Pill><Bot className="h-4 w-4"/> AI-powered</Pill>
            </div>
            <h1 className="text-balance text-4xl font-semibold sm:text-5xl">Fix Loan Recoveries with AI</h1>
            <p className="mt-3 text-white/70">Profile borrowers, automate outreach, and track recoveries in real time — with full compliance.</p>
            <div className="mt-6 flex gap-3">
              <Button as="a" href="#demo">Book a Demo</Button>
              <ButtonGhost as="a" href="#signup">Start Free Trial</ButtonGhost>
            </div>
          </div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="overflow-hidden p-0">
              <div className="grid gap-px bg-white/10 sm:grid-cols-2">
                <div className="p-4">
                  <div className="mb-3 flex items-center gap-2 text-sm text-white/80"><BarChart3 className="h-4 w-4"/> Portfolio</div>
                  <div className="grid grid-cols-2 gap-3">
                    <Metric label="Total accounts" value="24,182"/>
                    <Metric label="Recovered" value="45%"/>
                    <Metric label="In negotiation" value="25%"/>
                    <Metric label="High risk" value="10%"/>
                  </div>
                </div>
                <div className="p-4">
                  <div className="mb-3 flex items-center gap-2 text-sm text-white/80"><MessageSquare className="h-4 w-4"/> Outreach</div>
                  <div className="flex items-center gap-3 text-xs text-white/70">
                    <Phone className="h-4 w-4"/> Voice • <Mail className="h-4 w-4"/> Email • <MessageSquare className="h-4 w-4"/> WhatsApp
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-6xl px-4 py-14">
        <SectionTitle
          eyebrow="Workflow"
          title="Fix recoveries in three simple steps"
          kicker="Profile borrowers, automate outreach, monitor results — on autopilot."
        />
        <div className="grid gap-6 sm:grid-cols-3">
          <HowCard icon={<Users2 className="h-5 w-5"/>} title="AI-Powered Borrower Profiling" desc="Instantly analyze borrower data, repayment history, credit risk, and behavior to predict recovery probability." badge="Profile"/>
          <HowCard icon={<Bot className="h-5 w-5"/>} title="Smart Outreach Automation" desc="Use multilingual Voice AI, SMS, WhatsApp, and email to reach borrowers at the right time." badge="Automate"/>
          <HowCard icon={<TrendingUp className="h-5 w-5"/>} title="Real-Time Recovery Dashboard" desc="Get a 360° view of statuses, pending recoveries, responses, and predictive forecasts." badge="Recover"/>
        </div>
      </section>

      {/* Key features */}
      <section id="features" className="mx-auto max-w-6xl px-4 py-14">
        <SectionTitle eyebrow="Capabilities" title="Everything collections needs — built-in" kicker="Glassmorphic simplicity. Enterprise muscle." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard icon={<Phone className="h-5 w-5"/>} title="AI Voicebot Recovery" desc="Multilingual voicebots to automate calls and negotiate repayment seamlessly."/>
          <FeatureCard icon={<PieChartIcon className="h-5 w-5"/>} title="Predictive Recovery Analytics" desc="Identify at-risk accounts and prioritize recoveries intelligently."/>
          <FeatureCard icon={<MessageSquare className="h-5 w-5"/>} title="Omnichannel Collections" desc="Reach via voice, SMS, WhatsApp, email, and in-app nudges."/>
          <FeatureCard icon={<ShieldCheck className="h-5 w-5"/>} title="Regulatory Compliance" desc="100% RBI & NBFC-compliant workflows built into the platform."/>
          <FeatureCard icon={<Users2 className="h-5 w-5"/>} title="Agent Assist AI" desc="Empower agents with real-time borrower insights and personalized scripts."/>
          <FeatureCard icon={<Database className="h-5 w-5"/>} title="Smart Loan Segmentation" desc="Segment by risk & potential to target outreach for maximum ROI."/>
        </div>
      </section>

      {/* Advanced Insights */}
      <section id="insights" className="mx-auto max-w-6xl px-4 py-14">
        <SectionTitle title="Data That Powers Smarter Recoveries" kicker="See what moves the needle, instantly." />
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <div className="mb-4 flex items-center gap-2 text-sm text-white/80"><PieChartIcon className="h-4 w-4"/> Recovery Mix</div>
            <div className="h-56 w-full">
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={pieData} dataKey="value" nameKey="name" innerRadius={50} outerRadius={80} paddingAngle={2}>
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ background: '#111827', border: '1px solid rgba(255,255,255,.15)', borderRadius: 12, color: 'white' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Card>
          <Card>
            <div className="grid gap-6 sm:grid-cols-2">
              <Stat value={50} suffix="%" label="Faster recovery cycles" />
              <Stat value={40} suffix="%" label="Improved NPA reduction" />
              <Stat value={4} suffix="X" label="Higher borrower engagement" />
              <Stat value={70} suffix="%" label="Automation in collections" />
            </div>
          </Card>
        </div>
      </section>

      {/* Communication Suite */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionTitle eyebrow="Engagement" title="Seamless Borrower Engagement" kicker="Handle complex recovery workflows across channels with one AI-powered suite." />
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400"/> Auto-dialing + conversational bots</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400"/> Personalized repayment reminders</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400"/> Escalation alerts for overdue accounts</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400"/> Borrower self-service payment links</li>
            </ul>
          </Card>
          <Card>
            <div className="text-sm text-white/80">Communication Timeline</div>
            <div className="mt-4 space-y-4">
              <TimelineItem icon={<Phone className="h-4 w-4"/>} title="Auto-call (Voicebot)" time="09:30" desc="Explained repayment options" />
              <TimelineItem icon={<MessageSquare className="h-4 w-4"/>} title="WhatsApp follow-up" time="10:00" desc="Shared payment link" />
              <TimelineItem icon={<Mail className="h-4 w-4"/>} title="Email reminder" time="15:00" desc="Statement + receipt" />
            </div>
          </Card>
        </div>
      </section>

      {/* Integrations */}
      <section id="integrations" className="mx-auto max-w-6xl px-4 py-14">
        <SectionTitle title="Works with Your Existing Systems" kicker="Connect to CRMs, LOS, payment gateways, bureaus, and accounting." />
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {[
            { name: 'Razorpay', icon: <CreditCard className="h-4 w-4"/> },
            { name: 'PayU', icon: <CreditCard className="h-4 w-4"/> },
            { name: 'Setu', icon: <LinkIcon className="h-4 w-4"/> },
            { name: 'CIBIL', icon: <BadgeCheck className="h-4 w-4"/> },
            { name: 'Equifax', icon: <BadgeCheck className="h-4 w-4"/> },
            { name: 'Custom APIs', icon: <Database className="h-4 w-4"/> },
          ].map((it, i) => (
            <div key={i} className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
              {it.icon} {it.name}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="mx-auto max-w-6xl px-4 py-14">
        <SectionTitle title="Trusted by Banks, NBFCs & Fintechs" kicker="What leaders say about Finolabs." />
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: [0, -600] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-6xl px-4 py-14">
        <SectionTitle title="Simple, Transparent Pricing" kicker="Start small. Scale to millions of accounts." />
        <div className="grid gap-6 lg:grid-cols-3">
          <PriceCard
            name="Starter"
            price="Contact"
            period=""
            highlight="For small NBFCs"
            features={["Up to 500 borrower accounts", "AI-powered recovery bot", "Basic dashboard & reports"]}
            cta="Get Pricing"
            ctaHref="#contact"
          />
          <PriceCard
            name="Pro"
            price="Contact"
            period=""
            highlight="For growing fintechs"
            popular
            features={["Unlimited borrower accounts", "Advanced analytics & segmentation", "Priority integrations"]}
            cta="Get Pricing"
            ctaHref="#contact"
          />
          <PriceCard
            name="Enterprise"
            price="Custom"
            period=""
            highlight="For banks & large institutions"
            features={["Custom SLA + white-label", "Dedicated account manager", "API-first architecture"]}
            cta="Talk to Sales"
            ctaHref="#contact"
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <Card className="overflow-hidden p-0">
          <div className="grid items-center gap-0 sm:grid-cols-2">
            <div className="p-6 sm:p-10">
              <h3 className="text-2xl font-semibold">Ready to Maximize Your Loan Recovery?</h3>
              <p className="mt-2 text-white/70">Take your collections to the next level with Finolabs' AI-powered recovery suite.</p>
              <div className="mt-5 flex gap-3">
                <Button href="#demo" as="a">Book a Demo</Button>
                <ButtonGhost href="#signup" as="a">Start Free Trial</ButtonGhost>
              </div>
            </div>
            <div className="relative h-40 sm:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center text-white/80">
                  <div className="text-sm">AI × Finance</div>
                  <div className="text-3xl font-semibold">Finolabs</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Demo (anchor target) */}
      <section id="demo" className="mx-auto max-w-6xl px-4 py-14">
        <SectionTitle eyebrow="Get a demo" title="See Finolabs in action" kicker="Tell us a bit and we’ll reach out shortly." />
        <Card>
          <form className="grid gap-4 sm:grid-cols-2">
            <input className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 outline-none placeholder:text-white/50" placeholder="Full name" />
            <input className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 outline-none placeholder:text-white/50" placeholder="Work email" type="email" />
            <input className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 outline-none placeholder:text-white/50" placeholder="Company" />
            <input className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 outline-none placeholder:text-white/50" placeholder="Phone" type="tel" />
            <textarea className="sm:col-span-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 outline-none placeholder:text-white/50" placeholder="What are you looking to improve?" rows={4} />
            <div className="sm:col-span-2">
              <Button as="button" type="button" onClick={() => location.hash = '#contact'}>Submit</Button>
            </div>
          </form>
        </Card>
      </section>

      {/* Signup (anchor target) */}
      <section id="signup" className="mx-auto max-w-6xl px-4 py-14">
        <SectionTitle eyebrow="Start free" title="Start your free trial" kicker="No credit card required." />
        <Card>
          <form className="grid gap-4 sm:grid-cols-3">
            <input className="sm:col-span-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 outline-none placeholder:text-white/50" placeholder="Work email" type="email" />
            <Button as="button" type="button" onClick={() => alert('Trial sign-up flow goes here')}>Create account</Button>
          </form>
        </Card>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-14">
        <SectionTitle eyebrow="Contact" title="Talk to our team" kicker="We’ll respond within one business day." />
        <div className="grid gap-6 sm:grid-cols-2">
          <Card>
            <div className="text-sm text-white/80">Email</div>
            <a className="mt-2 inline-flex items-center gap-2 text-white hover:underline" href="mailto:sales@finolabs.example">
              <Mail className="h-4 w-4"/> sales@finolabs.example
            </a>
          </Card>
          <Card>
            <div className="text-sm text-white/80">Phone</div>
            <a className="mt-2 inline-flex items-center gap-2 text-white hover:underline" href="tel:+10000000000">
              <Phone className="h-4 w-4"/> +1 (000) 000-0000
            </a>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-4 pb-10">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500">
              <Building2 className="h-5 w-5" />
            </div>
            <span className="text-sm text-white/70">© {new Date().getFullYear()} Finolabs — RBI-Compliant AI</span>
          </div>
          <div className="flex items-center gap-4 text-xs text-white/60">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <span className="mx-2 h-4 w-px bg-white/20"/>
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">X</a>
            <a href="#" className="hover:text-white">YouTube</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

// --- Reusable bits -----------------------------------------------------------
function Metric({ label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
      <div className="text-xs text-white/60">{label}</div>
      <div className="text-sm font-medium">{value}</div>
    </div>
  )
}

function HowCard({ icon, title, desc, badge }) {
  return (
    <Card>
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-2 py-1 text-xs text-white/70">
        {icon} <span>{badge}</span>
      </div>
      <div className="text-white">{title}</div>
      <div className="mt-1 text-sm text-white/70">{desc}</div>
    </Card>
  )
}

function FeatureCard({ icon, title, desc }) {
  return (
    <Card>
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 px-2 py-1 text-xs text-white/70">
        {icon} <span>Feature</span>
      </div>
      <div className="text-white">{title}</div>
      <div className="mt-1 text-sm text-white/70">{desc}</div>
    </Card>
  )
}

function PriceCard({ name, price, period, features, cta, ctaHref = '#contact', highlight, popular }) {
  return (
    <Card className={'relative ' + (popular ? 'ring-2 ring-fuchsia-400' : '') }>
      {highlight && (
        <div className="absolute -top-3 left-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-wider text-white/80">
          {highlight}
        </div>
      )}
      <div className="mb-4 text-sm text-white/70">{name}</div>
      <div className="flex items-end gap-1">
        <div className="text-3xl font-semibold text-white">{price}</div>
        <div className="text-white/60">{period}</div>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-white/80">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-400"/> {f}
          </li>
        ))}
      </ul>
      <Button as="a" href={ctaHref} className="mt-5 w-full">{cta}</Button>
    </Card>
  )
}

function TimelineItem({ icon, title, time, desc }) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full border border-white/20 bg-white/10"/>
      <div className="absolute left-2 top-5 h-full w-px bg-white/10"/>
      <div className="mb-1 flex items-center gap-2 text-sm">
        {icon}
        <span className="font-medium">{title}</span>
        <span className="text-xs text-white/60">{time}</span>
      </div>
      <div className="text-xs text-white/70">{desc}</div>
    </div>
  )
}

function TestimonialCard({ quote, name, title, logo }) {
  return (
    <Card className="min-w-[320px] max-w-sm">
      <div className="text-sm text-white/80">“{quote}”</div>
      <div className="mt-4 flex items-center gap-3">
        <div className="grid h-9 w-9 place-items-center rounded-full bg-white/10">
          <Users2 className="h-4 w-4"/>
        </div>
        <div>
          <div className="text-sm font-medium">{name}</div>
          <div className="text-xs text-white/60">{title}</div>
        </div>
        <div className="ml-auto text-xs text-white/60">{logo}</div>
      </div>
    </Card>
  )
}

// --- Data -------------------------------------------------------------------
const pieData = [
  { name: 'Recovered', value: 45 },
  { name: 'In negotiation', value: 25 },
  { name: 'Pending', value: 20 },
  { name: 'High risk', value: 10 },
]

const pieColors = [
  '#A78BFA', // violet-400
  '#F472B6', // pink-400
  '#22D3EE', // cyan-400
  '#93C5FD', // blue-300
]

const testimonials = [
  {
    quote: 'Finolabs cut our recovery cycle time by half while keeping compliance airtight.',
    name: 'Head of Collections',
    title: 'Top-5 NBFC',
    logo: 'NBFC',
  },
  {
    quote: 'Voicebots in local languages boosted borrower engagement 4× within weeks.',
    name: 'Founder',
    title: 'Fintech lender',
    logo: 'FINTECH',
  },
  {
    quote: 'Agent Assist gave our team superpowers — context, scripts, and risk in one view.',
    name: 'Collections Manager',
    title: 'Private Bank',
    logo: 'BANK',
  },
]

