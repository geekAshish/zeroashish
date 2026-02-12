

'use client'
import Image from 'next/image'
import { motion } from 'motion/react'
import { projects } from '@/components/projectsData'
import { ArrowUpRightIcon } from '@/components/icons'
import { nextjs, nodejs, postgresql, react, rust, socketio, solana, tailwindcss, typescript, SOCIAL_ICONS } from '@/constant/constant'

function techIconSrc(label: string) {
  const key = label.trim().toLowerCase()
  if (key === 'react') return react
  if (key === 'next.js' || key === 'nextjs') return nextjs
  if (key === 'tailwind css' || key === 'tailwindcss') return tailwindcss
  if (key === 'typescript') return typescript
  if (key === 'node.js' || key === 'nodejs') return nodejs
  if (key === 'postgresql' || key === 'postgres') return postgresql
  if (key === 'websockets' || key === 'socket.io' || key === 'socketio') return socketio
  if (key === 'solana') return solana
  if (key === 'rust') return rust
  return null
}


export default function Projects() {
return (
<section id="projects" className="mx-auto max-w-5xl scroll-mt-24 py-16 md:py-24">
<h2 className="text-4xl font-semibold tracking-tight text-neutral-950 dark:text-white md:text-5xl">
Projects
</h2>
<p className="mt-4 max-w-3xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-lg">
Projects that reflect my full-stack mindset — elegant UI, structured backend systems, and automated deployment pipelines built for scale.
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
className="group rounded-2xl border border-neutral-200/80 bg-white p-4 shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:backdrop-blur"
>
<div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-neutral-200/70 bg-gradient-to-br from-neutral-100 to-white dark:border-white/10 dark:from-neutral-900 dark:to-neutral-950">
{p.image ? (
<>
<Image
src={p.image}
alt={`${p.title} project preview`}
fill
sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
className="object-cover transition duration-300 group-hover:scale-[1.02]"
/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
</>
) : (
<>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.08)_1px,transparent_0)] bg-[size:14px_14px] opacity-40 dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] dark:opacity-60" />
<div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(250,204,21,0.15),transparent)] opacity-0 transition group-hover:opacity-100" />
</>
)}
</div>

<div className="mt-4">
<div className="flex items-start justify-between gap-3">
<h3 className="min-w-0 text-base font-semibold tracking-tight text-neutral-950 dark:text-white">
{p.title}
</h3>
<div className="flex shrink-0 items-center gap-2 pt-0.5">
<a
href={p.repo}
target="_blank"
rel="noreferrer noopener"
aria-label="GitHub repository"
title="GitHub"
className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200/80 bg-white shadow-sm transition hover:bg-neutral-50 dark:border-white/10 dark:bg-white dark:hover:bg-white/8"
>
  <Image src={SOCIAL_ICONS.github} alt="GitHub" width={16} height={16} sizes="16px" className="h-4 w-4 object-contain" />
</a>
{p.live ? (
<a
href={p.live}
target="_blank"
rel="noreferrer noopener"
aria-label="Live site"
title="Live"
className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200/80 bg-white shadow-sm transition hover:bg-neutral-50 dark:border-white/10 dark:bg-black/20 dark:hover:bg-white/8"
>
  <ArrowUpRightIcon className="h-4 w-4 text-neutral-700 dark:text-white/75" />
</a>
) : null}
</div>
</div>
<p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{p.desc}</p>
</div>

<div className="mt-4 flex flex-wrap gap-2">
{p.stack.map((t) => (
<span
key={t}
title={t}
aria-label={t}
className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200/80 bg-white shadow-sm dark:border-white/10 dark:bg-black/20"
>
{(() => {
  const src = techIconSrc(t)
  if (!src) {
    return <span className="text-[11px] font-semibold text-neutral-700 dark:text-white/70">{t.slice(0, 1).toUpperCase()}</span>
  }

  return <Image src={src} alt={t} width={16} height={16} sizes="16px" className="h-4 w-4 object-contain" />
})()}
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
