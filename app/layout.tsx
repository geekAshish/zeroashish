import './globals.css'
import { ReactNode } from 'react'


export const metadata = {
title: 'Ashish Kushwaha - Software Engineer',
description: 'Building beautiful, performant web experiences with Next.js, Tailwind & Web3',
}


export default function RootLayout({ children }: { children: ReactNode }) {
return (
<html lang="en" className="dark" suppressHydrationWarning>
<body className="min-h-screen bg-neutral-50 text-neutral-950 antialiased transition-colors duration-300 selection:bg-yellow-400/25 selection:text-yellow-950 dark:bg-neutral-950 dark:text-neutral-100 dark:selection:text-yellow-100">
<div className="mx-auto w-full max-w-6xl px-3 sm:px-6 lg:px-8">
<div className="relative overflow-hidden border-x border-neutral-200/80 bg-white transition-colors duration-300 dark:border-neutral-800/60 dark:bg-neutral-950/40 dark:backdrop-blur dark:supports-[backdrop-filter]:bg-neutral-950/30">
<div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-[repeating-linear-gradient(135deg,rgba(0,0,0,0.06)_0,rgba(0,0,0,0.06)_1px,transparent_1px,transparent_10px)] opacity-15 dark:bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_10px)] dark:opacity-35" />
<div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.06)_0,rgba(0,0,0,0.06)_1px,transparent_1px,transparent_10px)] opacity-15 dark:bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_10px)] dark:opacity-35" />
<div className="relative px-5 sm:px-8 lg:px-12">{children}</div>
</div>
</div>
</body>
</html>
)
}
