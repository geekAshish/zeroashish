export type Project = {
title: string
desc: string
stack: readonly string[]
}

export const projects: readonly Project[] = [
{
title: 'n7n',
desc: 'An AI-powered workflow automation platform built with Next.js.',
stack: ['Next.js', 'TypeScript', 'PostgreSQL'],
},
{
title: 'Verse-X',
desc: 'A vibrant 2D virtual space where people connect and collaborate.',
stack: ['React', 'WebSockets', 'Node.js'],
},
{
title: 'Vulnera',
desc: 'A decentralized bug bounty platform focused on security and trust.',
stack: ['Solana', 'TypeScript', 'Next.js'],
},
{
title: 'Solana-mpc-tss',
desc: 'A TypeScript library for Solana multi-party computation tooling.',
stack: ['TypeScript', 'Solana'],
},
{
title: 'Pixel Pilot',
desc: 'Transforms prompts into beautiful mathematical animations.',
stack: ['Next.js', 'TypeScript'],
},
{
title: 'NFT Marketplace',
desc: 'Mint, buy, and sell NFTs with a clean, modern UX.',
stack: ['Solana', 'React'],
},
{
title: 'Resumera',
desc: 'Resume analysis + ATS optimization with a simple, guided flow.',
stack: ['Next.js', 'Node.js'],
},
{
title: 'AeroFlux',
desc: 'A suite of Solana tools with an intuitive dashboard interface.',
stack: ['Solana', 'TypeScript'],
},
{
title: 'AMM',
desc: 'An automated market maker contract built with Anchor.',
stack: ['Solana', 'Rust'],
},
] as const

