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
return (
<motion.section
variants={fadeUp}
initial="hidden"
animate="show"
transition={{ duration: 0.6 }}
className="mx-auto max-w-5xl pb-14 pt-14 md:pb-20 md:pt-20"
>
<div className="max-w-3xl">
<div className="flex flex-wrap items-center gap-3">
<h1 className="text-4xl font-semibold tracking-tight text-neutral-950 dark:text-white md:text-6xl">
Ashish Kushwaha
</h1>
<span className="rounded-full border border-neutral-200/80 bg-white px-3 py-1 text-sm text-neutral-700 shadow-sm dark:border-neutral-800/70 dark:bg-neutral-950/40 dark:text-neutral-300">
Web + Web3
</span>
</div>
<p className="mt-5 text-base leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-lg">
I build fast, pixel-perfect web apps with a strong focus on UI polish, performance, and clean architecture.
</p>
</div>

<div className="mt-10 max-w-5xl">
<div className="flex items-center gap-3">
<h2 className="text-sm font-semibold text-neutral-950 dark:text-neutral-100">Skills</h2>
<div className="h-px flex-1 bg-neutral-200/80 dark:bg-neutral-800/70" />
</div>
<div className="mt-4 flex flex-wrap gap-2">
{skills.map(({ label, Icon, color }) => (
<span
key={label}
className="group inline-flex items-center gap-2 rounded-full border border-neutral-200/80 bg-white px-3 py-1.5 text-xs text-neutral-700 shadow-sm transition hover:bg-neutral-50 dark:border-neutral-800/70 dark:bg-neutral-950/30 dark:text-neutral-300 dark:hover:bg-neutral-950/60 md:text-sm"
>
<span className={`grid h-5 w-5 place-items-center rounded-full bg-neutral-950/5 ${color} dark:bg-white/5`}>
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
