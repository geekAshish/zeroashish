import type { StaticImageData } from 'next/image'
import iotEProject from '@/assets/iot-e-project.png'

export type Project = {
title: string
desc: string
stack: readonly string[]
repo: string
live?: string
image?: StaticImageData | string
}

export const projects: readonly Project[] = [
{
title: 'IOT-E',
desc: 'An modern landing page for the video editing agency',
stack: ['Next.js', 'TypeScript'],
repo: 'https://github.com/geekAshish/iotentertainmentwebsite',
image: iotEProject,
},
{
title: 'Excalidraw',
desc: 'Drawing App with collaborative feature build with Monorepo',
stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Node.js', 'Express', "WebSockets"],
repo: 'https://github.com/geekAshish/project-turborepo-excalidraw',
},
{
title: 'Second Brain',
desc: 'increase your productivity, and lead a more fulfilling life with more ease and less stress.',
stack: ['React', 'Node.js', 'Express',],
repo: 'https://github.com/geekAshish/second-brain-app',
},
{
title: 'Vulnera',
desc: 'A decentralized bug bounty platform focused on security and trust.',
stack: ['Solana', 'TypeScript', 'Next.js'],
repo: 'https://github.com/geekAshish',
},
{
title: 'Solana-mpc-tss',
desc: 'A TypeScript library for Solana multi-party computation tooling.',
stack: ['TypeScript', 'Solana'],
repo: 'https://github.com/geekAshish',
},
{
title: 'Pixel Pilot',
desc: 'Transforms prompts into beautiful mathematical animations.',
stack: ['Next.js', 'TypeScript'],
repo: 'https://github.com/geekAshish',
},
{
title: 'NFT Marketplace',
desc: 'Mint, buy, and sell NFTs with a clean, modern UX.',
stack: ['Solana', 'React'],
repo: 'https://github.com/geekAshish',
},
{
title: 'Resumera',
desc: 'Resume analysis + ATS optimization with a simple, guided flow.',
stack: ['Next.js', 'Node.js'],
repo: 'https://github.com/geekAshish',
},
{
title: 'AeroFlux',
desc: 'A suite of Solana tools with an intuitive dashboard interface.',
stack: ['Solana', 'TypeScript'],
repo: 'https://github.com/geekAshish',
},
{
title: 'AMM',
desc: 'An automated market maker contract built with Anchor.',
stack: ['Solana', 'Rust'],
repo: 'https://github.com/geekAshish',
},
] as const
