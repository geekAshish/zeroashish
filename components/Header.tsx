
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

const navItems = [
{ label: 'About', href: '/about' },
{ label: 'Projects', href: '/projects' },
{ label: 'Contact', href: '/contact' },
] as const

export default function Header() {
const pathname = usePathname()
const activePath = useMemo(() => pathname ?? '/', [pathname])

return (
<header className="sticky top-0 z-50 -mx-5 sm:-mx-8 lg:-mx-12 px-5 sm:px-8 lg:px-12 py-4 border-b border-neutral-200/70 bg-white/90 transition-colors duration-300 dark:bg-transparent dark:backdrop-blur dark:supports-[backdrop-filter]:bg-neutral-950/25 dark:border-neutral-800/60">
<div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
<Link href="/" className="group flex items-center gap-3">
<div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-yellow-300 to-orange-500 text-[13px] font-semibold text-neutral-950 shadow-sm ring-1 ring-black/10 dark:ring-white/10">
AK
</div>
<div className="hidden sm:block leading-tight">
<div className="text-sm font-semibold tracking-tight">Ashish Kushwaha</div>
<div className="text-xs text-neutral-600 dark:text-neutral-400">Software Engineer</div>
</div>
</Link>

<nav className="no-scrollbar flex max-w-[min(520px,60vw)] items-center gap-1 overflow-x-auto rounded-full border border-neutral-200/80 bg-white px-1 py-1 text-sm shadow-sm dark:border-neutral-800/70 dark:bg-neutral-950/40">
{navItems.map((item) => {
const isActive = activePath === item.href
return (
<Link
key={item.href}
href={item.href}
className={[
'whitespace-nowrap rounded-full px-3 py-1.5 transition',
isActive
? 'bg-neutral-900 text-white shadow-sm dark:bg-white dark:text-neutral-950'
: 'text-neutral-600 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white',
].join(' ')}
>
{item.label}
</Link>
)
})}
<Link
href="/blog"
className={[
'whitespace-nowrap rounded-full px-3 py-1.5 transition',
pathname?.startsWith('/blog')
? 'bg-neutral-900 text-white shadow-sm dark:bg-white dark:text-neutral-950'
: 'text-neutral-600 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white',
].join(' ')}
>
Blog
</Link>
</nav>
<div className="h-10 w-10" aria-hidden="true" />
</div>
</header>
)
}
