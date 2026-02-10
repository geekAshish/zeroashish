'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'
import { CONTACT_EMAIL, SOCIALS } from '@/components/contactInfo'
import { motion } from 'motion/react'
import {
  github as githubLogo,
  leetcode as leetcodeLogo,
  linkedin as linkedinLogo,
  twitter as twitterLogo,
} from '@/constant/constant'

function SocialIcon({ label }: { label: string }) {
  const key = label.toLowerCase()
  if (key === 'github') return <Image src={githubLogo} alt="GitHub" width={16} height={16} sizes="16px" className="h-4 w-4 object-contain" />
  if (key === 'linkedin') return <Image src={linkedinLogo} alt="LinkedIn" width={16} height={16} sizes="16px" className="h-4 w-4 object-contain" />
  if (key === 'x' || key === 'twitter') return <Image src={twitterLogo} alt="X" width={16} height={16} sizes="16px" className="h-4 w-4 object-contain" />
  if (key === 'leetcode') return <Image src={leetcodeLogo} alt="LeetCode" width={16} height={16} sizes="16px" className="h-4 w-4 object-contain" />
  return <span className="text-[11px] font-semibold">{label.slice(0, 1).toUpperCase()}</span>
}

export default function GetInTouch() {
const [fromEmail, setFromEmail] = useState('')

const mailtoHref = useMemo(() => {
const subject = encodeURIComponent('Portfolio enquiry')
const body = encodeURIComponent(
`Hi Ashish,\n\nI'm reaching out from your portfolio.\n\nFrom: ${fromEmail || '(add your email here)'}\n\nThanks!`
)
return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
}, [fromEmail])

return (
<section className="mx-auto max-w-5xl py-12 md:py-16">
<h2 className="text-xl font-semibold tracking-tight text-neutral-950 dark:text-white md:text-2xl">
Get in touch
</h2>

<motion.div
initial={{ opacity: 0, y: 14 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: '-80px' }}
transition={{ duration: 0.35 }}
className="mt-6 rounded-3xl border border-neutral-200/80 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5 dark:backdrop-blur md:p-8"
>
<p className="max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-base">
I&apos;m currently looking for new opportunities. Whether you have a question or want to say hi, hit that
button.
</p>
<p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
Reach me at:{' '}
<a
href={`mailto:${CONTACT_EMAIL}`}
className="font-semibold text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-500 dark:text-white dark:decoration-neutral-700 dark:hover:decoration-neutral-400"
>
{CONTACT_EMAIL}
</a>
</p>

<form
className="mt-6 flex flex-col gap-3 sm:flex-row"
onSubmit={(e) => {
e.preventDefault()
window.location.href = mailtoHref
}}
>
<input
value={fromEmail}
onChange={(e) => setFromEmail(e.target.value)}
className="flex-1 rounded-2xl border border-neutral-200/80 bg-white px-4 py-3 text-sm text-neutral-900 shadow-sm outline-none placeholder:text-neutral-400 focus:ring-2 focus:ring-yellow-400/50 dark:border-white/10 dark:bg-black/20 dark:text-neutral-100 dark:placeholder:text-neutral-500"
placeholder="Your email"
inputMode="email"
autoComplete="email"
/>
<button
type="submit"
className="inline-flex items-center justify-center rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-neutral-950 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
>
Send Enquiry
</button>
</form>

<div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400">
<span>or drop me a message on my socials.</span>
{SOCIALS.map((s) => (
<a
key={s.label}
href={s.href}
target={s.href === '#' ? undefined : '_blank'}
rel={s.href === '#' ? undefined : 'noreferrer noopener'}
className="inline-flex items-center gap-2 rounded-full border border-neutral-200/80 bg-white px-3 py-1.5 text-neutral-700 shadow-sm transition hover:bg-neutral-50 dark:border-white/10 dark:bg-white/5 dark:text-white/75 dark:hover:bg-white/8"
>
<span className="grid h-7 w-7 place-items-center rounded-full bg-white ring-1 ring-black/10 dark:bg-white/90 dark:ring-white/10">
  <SocialIcon label={s.label} />
</span>
{s.label}
</a>
))}
</div>
</motion.div>
</section>
)
}
