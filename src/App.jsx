import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
  Database,
  Link as LinkIcon,
  BadgeCheck,
} from "lucide-react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

// --- Lightweight UI bits ----------------------------------------------------
const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
    {children}
  </span>
);

const Button = ({ as: As = "button", children, className = "", ...props }) => (
  <As
    className={
      "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium shadow-sm transition active:scale-[.98] " +
      "bg-white text-gray-900 hover:bg-gray-100 hover:shadow-[0_0_0_3px_rgba(255,255,255,0.15)] " +
      className
    }
    {...props}
  >
    {children}
  </As>
);

const ButtonGhost = ({ as: As = "button", children, className = "", ...props }) => (
  <As
    className={
      "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium transition active:scale-[.98] " +
      "border border-white/15 text-white/90 hover:bg-white/10 " +
      className
    }
    {...props}
  >
    {children}
  </As>
);

const Card = ({ children, className = "" }) => (
  <div className={"rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur " + className}>
    {children}
  </div>
);

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
);

function Stat({ value, suffix = "", label }) {
  const [n, setN] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          const start = performance.now();
          const dur = 2000; // Increased duration for smoother effect
          const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3); // Easing function
          
          const tick = (t) => {
            const p = Math.min(1, (t - start) / dur);
            const easedP = easeOutCubic(p);
            setN(Math.round(value * easedP));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById(`stat-${label.replace(/\s+/g, '-').toLowerCase()}`);
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, [value, isVisible, label]);
  
  return (
    <div id={`stat-${label.replace(/\s+/g, '-').toLowerCase()}`} className="text-center">
      <div className="text-3xl font-semibold sm:text-4xl transition-all duration-300 hover:scale-105">
        {n}{suffix}
      </div>
      <div className="mt-1 text-sm text-white/70">{label}</div>
    </div>
  );
}

// --- Main Page ---------------------------------------------------------------
export default function FinolabsLoanRecoverySite() {
  // Smooth-scroll for in-page anchors
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <div className="min-h-dvh w-full scroll-smooth bg-gradient-to-b from-[#0B0F1A] to-[#0C1224] text-white">
      {/* Decorative background blobs with subtle float */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-violet-600/25 blur-[100px]"
          animate={{ y: [0, -10, 0] }} transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -right-20 top-1/3 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-[100px]"
          animate={{ y: [0, 12, 0] }} transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-cyan-500/20 blur-[90px]"
          animate={{ y: [0, -8, 0] }} transition={{ duration: 9, repeat: Infinity }}
        />
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#0B0F1A]/70 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <LogoImg
              src="/logos/finolabs.png"
              alt="Finolabs logo"
              fallback={
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-lg">
                  <Building2 className="h-5 w-5" />
                </div>
              }
            />
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
      <section className="relative mx-auto max-w-6xl px-4 pt-4 sm:pt-6">
        <div className="grid items-start gap-8 sm:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="pt-3">
              <Pill>
                <BadgeCheck className="h-3.5 w-3.5" /> RBI‑Compliant AI Collections
              </Pill>
            </div>
            <h1 className="mt-3 text-balance text-4xl font-semibold leading-tight sm:text-6xl">
              Recover Loans. Reduce NPAs. Empower Collections.
            </h1>
            <p className="mt-3 text-pretty text-base text-white/70 sm:text-lg">
              AI‑powered Loan Recovery & Collections Platform to supercharge your recovery rates, automate outreach, and boost financial compliance.
            </p>
            <div className="mt-6 flex flex-col items-center justify-start gap-3 sm:flex-row">
              <Button as="a" href="#signup">
                Start Free Trial
                <ChevronRight className="h-4 w-4" />
              </Button>
              <ButtonGhost as="a" href="#demo">Book a Demo</ButtonGhost>
            </div>
          </motion.div>

          {/* Hero visual */}
          <motion.div className="relative pt-8" initial={{ opacity: 0, scale: .98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: .1 }}>
            <Card className="relative overflow-hidden">
              <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-fuchsia-500/20 blur-[90px]"/>
              <div className="relative grid gap-4">
                <motion.div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4" initial={{ y: 12, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: .1 }}>
                  <div className="flex items-center gap-3">
                    <Bot className="h-5 w-5" />
                    <div>
                      <div className="text-sm font-medium">AI Assistant</div>
                      <div className="text-xs text-white/60">Multilingual voice + chat</div>
                    </div>
                  </div>
                  <Languages className="h-4 w-4 text-white/60"/>
                </motion.div>
                <motion.div className="rounded-2xl border border-white/10 bg-white/5 p-4" initial={{ y: 12, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: .2 }}>
                  <div className="mb-2 flex items-center gap-2 text-sm text-white/80"><BarChart3 className="h-4 w-4"/> Recovery Dashboard</div>
                  <div className="grid grid-cols-3 gap-3 text-xs">
                    <Metric label="Recovered" value="₹2.4Cr"/>
                    <Metric label="In Pipeline" value="₹1.1Cr"/>
                    <Metric label="At‑Risk" value="₹56L"/>
                  </div>
                </motion.div>
                <motion.div className="rounded-2xl border border-white/10 bg-white/5 p-4" initial={{ y: 12, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: .3 }}>
                  <div className="mb-3 flex items-center gap-2 text-sm text-white/80"><MessageSquare className="h-4 w-4"/> Outreach</div>
                  <div className="flex items-center gap-2 text-xs text-white/70">
                    <Phone className="h-4 w-4"/> Voice · <Mail className="h-4 w-4"/> Email · <MessageSquare className="h-4 w-4"/> WhatsApp
                  </div>
                </motion.div>
              </div>
            </Card>
            <div className="mt-4">
              <img
                src="/hero-illustration.svg"
                alt="Platform overview"
                className="w-full rounded-2xl border border-white/10 bg-white/5 p-3"
                onError={(e)=>{ e.currentTarget.style.display='none' }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video placeholder (below hero) */}
      <section id="video" className="mx-auto mt-6 max-w-6xl px-4">
        <Card className="relative overflow-hidden p-0">
          <div className="aspect-video w-full bg-white/5" />
          <div className="absolute inset-0 grid place-items-center">
            <div className="rounded-xl border border-white/15 bg-black/30 px-4 py-2 text-sm text-white/80">Drop your product video/embed here (YouTube, Loom, MP4)</div>
          </div>
        </Card>
      </section>

      {/* Logos (clients/partners) */}
      <section id="logos" className="mx-auto max-w-6xl px-4">
        <div className="my-10 grid grid-cols-2 items-center gap-6 opacity-80 sm:grid-cols-6">
          {[
            { name: 'Razorpay', slug: 'razorpay', type: 'png' },
            { name: 'PayU', slug: 'payu' },
            { name: 'CIBIL', slug: 'cibil', type: 'png' },
            { name: 'Equifax', slug: 'equifax' },
            { name: 'SETU', slug: 'setu', type: 'png' },
            { name: 'Seeds Fincap', slug: 'seedsfincap', type: 'png' },
          ].map((it, i) => (
            <motion.div key={i} className="flex h-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4" initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <LogoImg src={it.type === 'external' ? it.slug : `/logos/${it.slug}.${it.type || 'svg'}`} alt={`${it.name} logo`} fallback={<span className="text-xs text-white/60">{it.name}</span>} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-6xl px-4 py-14">
        <SectionTitle
          eyebrow="Workflow"
          title="Fix recoveries in three simple steps"
          kicker="Profile borrowers, automate outreach, monitor results—on autopilot."
        />
        <div className="grid gap-6 sm:grid-cols-3">
          {[0,1,2].map((i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .4, delay: i * .1 }}>
              {i === 0 && <HowCard icon={<Users2 className="h-5 w-5"/>} title="AI‑Powered Borrower Profiling" desc="Instantly analyze borrower data, repayment history, credit risk, and behavior to predict recovery probability." badge="Profile"/>}
              {i === 1 && <HowCard icon={<Bot className="h-5 w-5"/>} title="Smart Outreach Automation" desc="Use multilingual Voice AI, SMS, WhatsApp, and email to reach borrowers at the right time." badge="Automate"/>}
              {i === 2 && <HowCard icon={<TrendingUp className="h-5 w-5"/>} title="Real‑Time Recovery Dashboard" desc="Get a 360° view of statuses, pending recoveries, responses, and predictive forecasts." badge="Recover"/>}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Key features */}
      <section id="features" className="mx-auto max-w-6xl px-4 py-14">
        <SectionTitle eyebrow="Capabilities" title="Everything collections needs—built‑in" kicker="Glassmorphic simplicity. Enterprise muscle." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[0,1,2,3,4,5].map((i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .4, delay: i * .08 }}>
              {i === 0 && <FeatureCard icon={<Phone className="h-5 w-5"/>} title="AI Voicebot Recovery" desc="Multilingual voicebots to automate calls and negotiate repayment seamlessly."/>}
              {i === 1 && <FeatureCard icon={<PieChartIcon className="h-5 w-5"/>} title="Predictive Recovery Analytics" desc="Identify at‑risk accounts and prioritize recoveries intelligently."/>}
              {i === 2 && <FeatureCard icon={<MessageSquare className="h-5 w-5"/>} title="Omnichannel Collections" desc="Reach via voice, SMS, WhatsApp, email, and in‑app nudges."/>}
              {i === 3 && <FeatureCard icon={<ShieldCheck className="h-5 w-5"/>} title="Regulatory Compliance" desc="100% RBI & NBFC‑compliant workflows built into the platform."/>}
              {i === 4 && <FeatureCard icon={<Users2 className="h-5 w-5"/>} title="Agent Assist AI" desc="Empower agents with real‑time borrower insights and personalized scripts."/>}
              {i === 5 && <FeatureCard icon={<Database className="h-5 w-5"/>} title="Smart Loan Segmentation" desc="Segment by risk & potential to target outreach for maximum ROI."/>}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Advanced Insights */}
      <section id="insights" className="mx-auto max-w-6xl px-4 py-14">
        <SectionTitle title="Data That Powers Smarter Recoveries" kicker="See what moves the needle—instantly." />
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <div className="mb-4 flex items-center gap-2 text-sm text-white/80"><PieChartIcon className="h-4 w-4"/> Recovery Mix</div>
            <motion.div className="h-56 w-full" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={pieData} dataKey="value" nameKey="name" innerRadius={50} outerRadius={80} paddingAngle={2}>
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      background: "#111827", 
                      border: "1px solid rgba(255,255,255,.15)", 
                      borderRadius: 12, 
                      color: "white",
                      transition: "all 0.2s ease"
                    }}
                    labelStyle={{ color: "#f3f4f6" }}
                    itemStyle={{ color: "#ffffff" }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </motion.div>
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
        <SectionTitle eyebrow="Engagement" title="Seamless Borrower Engagement" kicker="Handle complex recovery workflows across channels with one AI‑powered suite." />
        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div className="h-full" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Card className="h-full flex flex-col">
              <h3 className="text-sm font-medium text-white/90 mb-4">Key Features</h3>
              <ul className="space-y-3 text-sm text-white/80 flex-grow">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0 text-emerald-400"/>
                  <span>Auto‑dialing + conversational bots that handle 80% of routine inquiries</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0 text-emerald-400"/>
                  <span>Personalized repayment reminders with dynamic scheduling</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0 text-emerald-400"/>
                  <span>Smart escalation alerts for overdue accounts with risk scoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0 text-emerald-400"/>
                  <span>Secure self-service payment portal with multiple payment options</span>
                </li>
              </ul>
            </Card>
          </motion.div>
          <motion.div className="h-full" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Card className="h-full flex flex-col">
              <h3 className="text-sm font-medium text-white/90 mb-4">Communication Timeline</h3>
              <div className="space-y-4 flex-grow">
                <TimelineItem 
                  icon={<Phone className="h-4 w-4 text-blue-400"/>} 
                  title="Auto‑call (Voicebot)" 
                  time="09:30" 
                  desc="Automated voice call explaining repayment options and confirming payment intent." 
                />
                <TimelineItem 
                  icon={<MessageSquare className="h-4 w-4 text-green-400"/>} 
                  title="WhatsApp follow‑up" 
                  time="10:00" 
                  desc="Personalized payment link sent with secure one-click payment options." 
                />
                <TimelineItem 
                  icon={<Mail className="h-4 w-4 text-amber-400"/>} 
                  title="Email reminder" 
                  time="15:00" 
                  desc="Detailed payment statement with receipt and next steps for completion." 
                />
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Integrations */}
      <section id="integrations" className="mx-auto max-w-6xl px-4 py-14">
        <SectionTitle title="Works with Your Existing Systems" kicker="Connect to CRMs, LOS, payment gateways, bureaus, and accounting." />
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {[
            { name: "Razorpay", slug: 'razorpay', type: 'png' },
            { name: "PayU", slug: 'payu' },
            { name: "CIBIL", slug: 'cibil', type: 'png' },
            { name: "Equifax", slug: 'equifax' },
            { name: "SETU", slug: 'setu', type: 'png' },
            { name: "Seeds Fincap", slug: 'seedsfincap', type: 'png' },
          ].map((it, i) => (
            <motion.div key={i} className="flex h-16 items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-4 py-6 text-sm text-white/60" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <LogoImg src={it.type === 'external' ? it.slug : `/logos/${it.slug}.${it.type || 'svg'}`} alt={`${it.name} logo`} fallback={<span className="text-xs">{it.name}</span>} large />
            </motion.div>
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
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
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
            features={["Up to 500 borrower accounts", "AI‑powered recovery bot", "Basic dashboard & reports"]}
            cta="Get Pricing"
          />
          <PriceCard
            name="Pro"
            price="Contact"
            period=""
            highlight="For growing fintechs"
            popular
            features={["Unlimited borrower accounts", "Advanced analytics & segmentation", "Priority integrations"]}
            cta="Get Pricing"
          />
          <PriceCard
            name="Enterprise"
            price="Custom"
            period=""
            highlight="For banks & large institutions"
            features={["Custom SLA + white‑label", "Dedicated account manager", "API‑first architecture"]}
            cta="Talk to Sales"
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <Card className="overflow-hidden p-0">
          <div className="grid items-center gap-0 sm:grid-cols-2">
            <div className="p-6 sm:p-10">
              <h3 className="text-2xl font-semibold">Ready to Maximize Your Loan Recovery?</h3>
              <p className="mt-2 text-white/70">Take your collections to the next level with Finolabs’ AI‑powered recovery suite.</p>
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

      {/* Signup target (for Start Free Trial) */}
      <section id="signup" className="mx-auto max-w-6xl px-4 pb-16">
        <Card>
          <div className="mx-auto max-w-md">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-white mb-2">Start Your Free Trial</h2>
              <p className="text-white/70">Get started with Finolabs in minutes</p>
            </div>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                  placeholder="Enter your company name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                  Work Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                  placeholder="your.email@company.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                  placeholder="+91 98765 43210"
                />
              </div>
              
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-white/80 mb-2">
                  Role
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                  placeholder="Enter your role (e.g., CEO, Collections Manager)"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                  Tell us about your requirements (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent resize-none"
                  placeholder="What challenges are you facing with loan recovery?"
                />
              </div>
              
              <Button type="submit" className="w-full">
                Start Free Trial
                <ChevronRight className="h-4 w-4" />
              </Button>
              
              <p className="text-xs text-white/60 text-center">
                By signing up, you agree to our Terms of Service and Privacy Policy.
                <br />
                No credit card required. 14-day free trial.
              </p>
            </form>
          </div>
        </Card>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-4 pb-10">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-3">
            <LogoImg
              src="/logos/finolabs.png"
              alt="Finolabs logo"
              fallback={
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500">
                  <Building2 className="h-5 w-5" />
                </div>
              }
            />
            <span className="text-sm text-white/70">© {new Date().getFullYear()} Finolabs • RBI‑Compliant AI</span>
          </div>
          <div className="flex items-center gap-4 text-xs text-white/60">
            <a href="#" className="hover:text-white">Home</a>
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#" className="hover:text-white">Contact</a>
            <span className="mx-2 h-4 w-px bg-white/20"/>
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">X</a>
            <a href="#" className="hover:text-white">YouTube</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- Reusable bits -----------------------------------------------------------
function Metric({ label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
      <div className="text-xs text-white/60">{label}</div>
      <div className="text-sm font-medium">{value}</div>
    </div>
  );
}

function HowCard({ icon, title, desc, badge }) {
  return (
    <Card className="h-full flex flex-col">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-2 py-1 text-xs font-medium text-white/80 w-fit">
        {icon} <span>{badge}</span>
      </div>
      <div className="text-lg font-semibold text-white mb-3 leading-tight">{title}</div>
      <div className="text-sm text-white/70 leading-relaxed flex-grow">{desc}</div>
    </Card>
  );
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
  );
}

function PriceCard({ name, price, period, features, cta, highlight, popular }) {
  return (
    <Card className={"relative " + (popular ? "ring-2 ring-white/20" : "") }>
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
      <Button className="mt-5 w-full" as="a" href="#pricing">{cta}</Button>
    </Card>
  );
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
  );
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
        <div className="ml-auto text-xs text-white/60">
          <LogoImg src={`/logos/${String(logo).toLowerCase()}.svg`} alt={`${logo} logo`} fallback={<Users2 className="h-4 w-4"/>} small />
        </div>
      </div>
    </Card>
  );
}

// --- Asset helpers ----------------------------------------------------------
function LogoImg({ src, alt, fallback, small = false, large = false }) {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(true);
  
  if (err || !src) return fallback || null;
  
  const isPng = src.toLowerCase().includes('.png');
  const isWebp = src.toLowerCase().includes('.webp');
  const isCibil = src.toLowerCase().includes('cibil');
  const isSetu = src.toLowerCase().includes('setu');
  const isFinolabs = src.toLowerCase().includes('finolabs');
  const isSeedsFincap = src.toLowerCase().includes('seedsfincap');
  const isExternal = src.startsWith('http');
  
  // Make CIBIL, SETU, and Finolabs logos bigger
  const sizeClass = (isCibil || isSetu) ? (large ? 'h-16' : 'h-12') : isFinolabs ? (large ? 'h-20' : 'h-14') : (large ? 'h-8' : small ? 'h-4' : 'h-6');
  
  return (
    <div className="relative flex items-center justify-center">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-2 w-2 animate-pulse rounded-full bg-white/30"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt || ""}
        onError={() => setErr(true)}
        onLoad={() => setLoading(false)}
        className={`${sizeClass} w-auto max-w-full object-contain transition-opacity duration-200 ${loading ? 'opacity-0' : 'opacity-100'} ${(isPng || isWebp) && !isSeedsFincap ? 'filter brightness-0 invert' : ''}`}
        crossOrigin={isExternal ? 'anonymous' : undefined}
        style={{ 
          maxHeight: (isCibil || isSetu) ? (large ? '64px' : '48px') : isFinolabs ? (large ? '80px' : '56px') : (large ? '32px' : small ? '16px' : '24px'),
          maxWidth: (isCibil || isSetu) ? (large ? '200px' : '180px') : isFinolabs ? (large ? '240px' : '200px') : (large ? '120px' : small ? '60px' : '80px')
        }}
        loading="lazy"
      />
    </div>
  );
}

// --- Data -------------------------------------------------------------------
const pieData = [
  { name: "Recovered", value: 45 },
  { name: "In negotiation", value: 25 },
  { name: "Pending", value: 20 },
  { name: "High risk", value: 10 },
];

const pieColors = [
  "#A78BFA", // violet-400
  "#F472B6", // pink-400
  "#22D3EE", // cyan-400
  "#93C5FD", // blue-300
];

const testimonials = [
  {
    quote: "Finolabs cut our recovery cycle time by half while keeping compliance airtight.",
    name: "Head of Collections",
    title: "Top‑5 NBFC",
    logo: "NBFC"
  },
  {
    quote: "Voicebots in local languages boosted borrower engagement 4× within weeks.",
    name: "Founder",
    title: "Fintech lender",
    logo: "FINTECH"
  },
  {
    quote: "Agent Assist gave our team superpowers—context, scripts, and risk in one view.",
    name: "Collections Manager",
    title: "Private Bank",
    logo: "BANK"
  },
];

