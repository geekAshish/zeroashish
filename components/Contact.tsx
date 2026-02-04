'use client'

import { useMemo, useState } from 'react'
import { CONTACT_EMAIL, SOCIALS } from '@/components/contactInfo'
import { motion } from 'motion/react'

export default function Contact() {
const [fromEmail, setFromEmail] = useState('')

const mailtoHref = useMemo(() => {
const subject = encodeURIComponent('Portfolio enquiry')
const body = encodeURIComponent(
`Hi Ashish,\n\nI'm reaching out from your portfolio.\n\nFrom: ${fromEmail || '(add your email here)'}\n\nThanks!`
)
return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
}, [fromEmail])

return (
<section id="contact" className="mx-auto max-w-5xl scroll-mt-24 py-16 md:py-24">
<h2 className="text-4xl font-semibold tracking-tight text-neutral-950 dark:text-white md:text-5xl">
Contact
</h2>
<p className="mt-4 max-w-3xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-lg">
I'm always looking for new opportunities and collaborations. Reach out on my socials or send an email.
</p>

<motion.div
initial={{ opacity: 0, y: 14 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: '-80px' }}
transition={{ duration: 0.35 }}
className="mt-10 rounded-3xl border border-neutral-200/80 bg-white p-6 shadow-sm dark:border-neutral-800/70 dark:bg-neutral-950/30 md:p-8"
>
<div className="flex items-center gap-3">
<div className="h-2 w-2 rounded-full bg-yellow-400 shadow-[0_0_0_6px_rgba(250,204,21,0.14)]" />
<h3 className="text-lg font-semibold text-neutral-950 dark:text-white">Get in touch</h3>
</div>

<p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-base">
I'm currently open to new roles. If you have a question or want to say hi, hit that button.
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
className="flex-1 rounded-2xl border border-neutral-200/80 bg-white px-4 py-3 text-sm text-neutral-900 shadow-sm outline-none placeholder:text-neutral-400 focus:ring-2 focus:ring-yellow-400/50 dark:border-neutral-800/70 dark:bg-neutral-950/40 dark:text-neutral-100 dark:placeholder:text-neutral-500"
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

<div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400">
<span>or drop me a message on my socials.</span>
{SOCIALS.map((s) => (
<a
key={s.label}
href={s.href}
className="rounded-full border border-neutral-200/80 bg-white px-3 py-1.5 text-neutral-700 shadow-sm transition hover:bg-neutral-50 dark:border-neutral-800/70 dark:bg-neutral-950/30 dark:text-neutral-300 dark:hover:bg-neutral-950/60"
>
{s.label}
</a>
))}
</div>
</motion.div>
</section>
)
}
