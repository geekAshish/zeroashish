'use client'
import { motion } from 'motion/react'
import {
DockerIcon,
KubernetesIcon,
NextIcon,
NodeIcon,
PostgresIcon,
ReactIcon,
SolanaIcon,
TailwindIcon,
TypeScriptIcon,
} from '@/components/techIcons'
import { CONTACT_EMAIL, SOCIALS } from '@/components/contactInfo'
import { GithubIcon, LinkedInIcon, XIcon } from '@/components/icons'

const fadeUp = {
hidden: { opacity: 0, y: 24 },
show: { opacity: 1, y: 0 },
}

const skills = [
{ label: 'React', Icon: ReactIcon, color: 'text-sky-500 dark:text-sky-400' },
{ label: 'Next.js', Icon: NextIcon, color: 'text-neutral-900 dark:text-neutral-100' },
{ label: 'Tailwind CSS', Icon: TailwindIcon, color: 'text-cyan-500 dark:text-cyan-400' },
{ label: 'TypeScript', Icon: TypeScriptIcon, color: 'text-blue-600 dark:text-blue-400' },
{ label: 'Node.js', Icon: NodeIcon, color: 'text-emerald-600 dark:text-emerald-400' },
{ label: 'PostgreSQL', Icon: PostgresIcon, color: 'text-indigo-600 dark:text-indigo-400' },
{ label: 'Docker', Icon: DockerIcon, color: 'text-sky-600 dark:text-sky-400' },
{ label: 'Kubernetes', Icon: KubernetesIcon, color: 'text-violet-600 dark:text-violet-400' },
{ label: 'Solana', Icon: SolanaIcon, color: 'text-fuchsia-600 dark:text-fuchsia-400' },
] as const

export default function Hero() {
const github = SOCIALS.find((s) => s.label.toLowerCase() === 'github')?.href || '#'
const linkedin = SOCIALS.find((s) => s.label.toLowerCase() === 'linkedin')?.href || '#'
const x = SOCIALS.find((s) => ['x', 'twitter'].includes(s.label.toLowerCase()))?.href || '#'

return (
<motion.section
variants={fadeUp}
initial="hidden"
animate="show"
transition={{ duration: 0.6 }}
className="mx-auto max-w-5xl pb-14 pt-14 md:pb-20 md:pt-20"
>
<div className="text-center">
  <h1 className="mx-auto max-w-4xl font-[var(--font-signature)] text-5xl tracking-tight text-neutral-950/90 sm:text-6xl md:text-7xl dark:text-white/90">
    Ashish Kushwaha
  </h1>
  <p className="mt-4 text-sm text-neutral-600 dark:text-white/55 md:text-base">
    Software Engineer · UI craft · Performance-minded
  </p>
</div>

<div className="mt-10 grid gap-6 md:grid-cols-[1.15fr_0.85fr] md:items-start">
  <div className="rounded-3xl border border-neutral-200/80 bg-white p-6 shadow-sm backdrop-blur md:p-8 dark:border-white/10 dark:bg-white/5">
    <div className="flex items-start gap-5">
      <div className="relative">
        <div className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-yellow-300/90 to-orange-500/90 text-lg font-semibold text-neutral-950 ring-1 ring-black/20">
          AK
        </div>
        <div className="absolute -right-1 -top-1 grid h-7 w-7 place-items-center rounded-full bg-neutral-950/80 text-[10px] text-white ring-1 ring-white/15">
          IN
        </div>
      </div>
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <h2 className="truncate text-xl font-semibold tracking-tight text-neutral-950 md:text-2xl dark:text-white">
            Ashish Kushwaha
          </h2>
          <span className="inline-flex items-center rounded-full border border-neutral-200/80 bg-neutral-950/5 px-2.5 py-1 text-xs text-neutral-700 dark:border-white/10 dark:bg-black/20 dark:text-white/70">
            Web + Web3
          </span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-neutral-600 md:text-base dark:text-white/60">
          I build fast, pixel-perfect web apps with a focus on UI polish, performance, and clean architecture.
        </p>

        <div className="mt-5 grid gap-2 text-sm text-neutral-700 dark:text-white/65">
          <div className="flex items-center justify-between gap-3 rounded-2xl border border-neutral-200/80 bg-neutral-950/5 px-4 py-3 dark:border-white/10 dark:bg-black/20">
            <span className="text-neutral-500 dark:text-white/50">Role</span>
            <span className="font-medium text-neutral-900 dark:text-white/80">Software Engineer</span>
          </div>
          <div className="flex items-center justify-between gap-3 rounded-2xl border border-neutral-200/80 bg-neutral-950/5 px-4 py-3 dark:border-white/10 dark:bg-black/20">
            <span className="text-neutral-500 dark:text-white/50">Email</span>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="truncate font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-500 dark:text-white/80 dark:decoration-white/15 dark:hover:decoration-white/35"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
          <div className="flex items-center justify-between gap-3 rounded-2xl border border-neutral-200/80 bg-neutral-950/5 px-4 py-3 dark:border-white/10 dark:bg-black/20">
            <span className="text-neutral-500 dark:text-white/50">Focus</span>
            <span className="font-medium text-neutral-900 dark:text-white/80">Frontend · DX · Design systems</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="grid gap-3">
    <a
      href={x}
      target={x === '#' ? undefined : '_blank'}
      rel={x === '#' ? undefined : 'noreferrer noopener'}
      className="group flex items-center justify-between gap-4 rounded-3xl border border-neutral-200/80 bg-white px-5 py-4 text-neutral-800 shadow-sm backdrop-blur transition hover:bg-neutral-50 hover:text-neutral-950 dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:bg-white/7 dark:hover:text-white"
    >
      <span className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-2xl bg-neutral-950/5 ring-1 ring-neutral-200/80 dark:bg-black/25 dark:ring-white/10">
          <XIcon className="h-5 w-5" />
        </span>
        <span className="min-w-0">
          <div className="text-sm font-semibold">X (formerly Twitter)</div>
          <div className="text-xs text-neutral-600 dark:text-white/50">Follow for updates</div>
        </span>
      </span>
      <span className="text-xs text-neutral-500 transition group-hover:text-neutral-700 dark:text-white/45 dark:group-hover:text-white/65">Open</span>
    </a>

    <a
      href={github}
      target={github === '#' ? undefined : '_blank'}
      rel={github === '#' ? undefined : 'noreferrer noopener'}
      className="group flex items-center justify-between gap-4 rounded-3xl border border-neutral-200/80 bg-white px-5 py-4 text-neutral-800 shadow-sm backdrop-blur transition hover:bg-neutral-50 hover:text-neutral-950 dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:bg-white/7 dark:hover:text-white"
    >
      <span className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-2xl bg-neutral-950/5 ring-1 ring-neutral-200/80 dark:bg-black/25 dark:ring-white/10">
          <GithubIcon className="h-5 w-5" />
        </span>
        <span className="min-w-0">
          <div className="text-sm font-semibold">GitHub</div>
          <div className="text-xs text-neutral-600 dark:text-white/50">Code & experiments</div>
        </span>
      </span>
      <span className="text-xs text-neutral-500 transition group-hover:text-neutral-700 dark:text-white/45 dark:group-hover:text-white/65">Open</span>
    </a>

    <a
      href={linkedin}
      target={linkedin === '#' ? undefined : '_blank'}
      rel={linkedin === '#' ? undefined : 'noreferrer noopener'}
      className="group flex items-center justify-between gap-4 rounded-3xl border border-neutral-200/80 bg-white px-5 py-4 text-neutral-800 shadow-sm backdrop-blur transition hover:bg-neutral-50 hover:text-neutral-950 dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:bg-white/7 dark:hover:text-white"
    >
      <span className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-2xl bg-neutral-950/5 ring-1 ring-neutral-200/80 dark:bg-black/25 dark:ring-white/10">
          <LinkedInIcon className="h-5 w-5" />
        </span>
        <span className="min-w-0">
          <div className="text-sm font-semibold">LinkedIn</div>
          <div className="text-xs text-neutral-600 dark:text-white/50">Work & writing</div>
        </span>
      </span>
      <span className="text-xs text-neutral-500 transition group-hover:text-neutral-700 dark:text-white/45 dark:group-hover:text-white/65">Open</span>
    </a>
  </div>
</div>

<div className="mt-10 max-w-5xl">
<div className="flex items-center gap-3">
<h2 className="text-sm font-semibold text-neutral-950 dark:text-white/85">Stack</h2>
<div className="h-px flex-1 bg-neutral-200/80 dark:bg-white/10" />
</div>
<div className="mt-4 flex flex-wrap gap-2">
{skills.map(({ label, Icon, color }) => (
<span
key={label}
className="group inline-flex items-center gap-2 rounded-full border border-neutral-200/80 bg-white px-3 py-1.5 text-xs text-neutral-700 shadow-sm backdrop-blur transition hover:bg-neutral-50 hover:text-neutral-950 dark:border-white/10 dark:bg-white/5 dark:text-white/70 dark:hover:bg-white/7 dark:hover:text-white md:text-sm"
>
<span className={`grid h-5 w-5 place-items-center rounded-full bg-neutral-950/5 ${color} ring-1 ring-neutral-200/80 dark:bg-black/20 dark:ring-white/10`}>
<Icon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:scale-110" />
</span>
{label}
</span>
))}
</div>
</div>
</motion.section>
)
}
