

'use client'
import { motion } from 'motion/react'
import { projects } from '@/components/projectsData'


export default function Projects() {
return (
<section id="projects" className="mx-auto max-w-5xl scroll-mt-24 py-16 md:py-24">
<h2 className="text-4xl font-semibold tracking-tight text-neutral-950 dark:text-white md:text-5xl">
Projects
</h2>
<p className="mt-4 max-w-3xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-lg">
A small selection of work that highlights my taste for clean UI, careful motion, and delightful details.
</p>

<div className="mt-10">
<div className="inline-flex items-center gap-2 rounded-md bg-neutral-950/5 px-3 py-1.5 text-sm text-neutral-700 dark:bg-white/5 dark:text-neutral-200">
<span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
A few of my projects.
</div>

<div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
{projects.map((p, idx) => (
<motion.article
key={p.title}
initial={{ opacity: 0, y: 18 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: '-80px' }}
transition={{ duration: 0.35, delay: Math.min(idx * 0.03, 0.18) }}
whileHover={{ y: -6 }}
className="group rounded-2xl border border-neutral-200/80 bg-white p-4 shadow-sm transition hover:shadow-md dark:border-neutral-800/70 dark:bg-neutral-950/30"
>
<div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-neutral-200/70 bg-gradient-to-br from-neutral-100 to-white dark:border-neutral-800/60 dark:from-neutral-900 dark:to-neutral-950">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.08)_1px,transparent_0)] bg-[size:14px_14px] opacity-40 dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] dark:opacity-60" />
<div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(250,204,21,0.15),transparent)] opacity-0 transition group-hover:opacity-100" />
</div>

<div className="mt-4">
<h3 className="text-base font-semibold tracking-tight text-neutral-950 dark:text-white">
{p.title}
</h3>
<p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
{p.desc}
</p>
</div>

<div className="mt-4 flex flex-wrap gap-2">
{p.stack.map((t) => (
<span
key={t}
className="inline-flex items-center rounded-full border border-neutral-200/80 bg-white px-2.5 py-1 text-[11px] font-medium text-neutral-700 shadow-sm dark:border-neutral-800/70 dark:bg-neutral-950/40 dark:text-neutral-300"
>
{t}
</span>
))}
</div>
</motion.article>
))}
</div>
</div>
</section>
)
}
