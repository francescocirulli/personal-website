import CapazLogo from '@/icons/capaz.svg'
import CodeshareLogo from '@/icons/codeshare.svg'
import CryviaLogo from '@/icons/cryvia.svg'

export interface Project {
  title: string
  description: string
  tags: string[]
  url: string
  githubUrl?: string
  logo?: string
  emoji?: string
  label?: string
}

export const projects: Project[] = [
  {
    title: 'Pulse',
    description: 'Tinder-like social client on Farcaster and Lens with a custom feed related to your social graph',
    tags: ['Next.js', 'Airstack', 'Base', 'Privy', 'ENS'],
    url: 'pulse-indol.vercel.app',
    githubUrl: 'https://github.com/PaoloRollo/pulse',
    //logo: '/threelingo.png',
    emoji: '📱',
    label: 'ETHGlobal Istanbul 2023',
  },
  {
    title: 'threelingo',
    description: 'The free, fun and effective way to learn web3',
    tags: ['Next.js', 'Safe', 'Polygon', 'Web3Auth'],
    url: 'https://threelingo.vercel.app',
    githubUrl: 'https://github.com/PaoloRollo/threelingo',
    logo: '/threelingo.png',
    label: 'ETHLisbon 2023',
  },
  {
    title: 'Split3',
    description: 'The easiest way to split group expenses with crypto',
    tags: ['Next.js', 'RequestNetwork', 'Safe'],
    url: 'https://split-3.vercel.app',
    //githubUrl: 'https://github.com/mattiapomelli/split3-frontend',
    emoji: '🖖',
    label: 'crypto payments',
  },
  {
    title: 'Bob is Safe',
    description:
      'A privacy-first crypto payroll platform. Protect your employees privacy while keeping compliant with local regulations.',
    tags: ['Next.js', 'zkBob', 'Safe', 'Uniswap'],
    url: 'https://ethglobal.com/showcase/bob-is-safe-p2ba2',
    githubUrl: 'https://github.com/bob-is-safe/bob-is-safe-frontend',
    logo: '/bob-is-safe.png',
    label: 'ETHGlobal Lisbon 2022',
  },
  {
    title: 'GitGate',
    description: 'Token gated github repo management',
    tags: ['Next.js', 'Github', 'Polygon', 'WalletConnect'],
    url: 'https://web-gitgate.vercel.app/',
    githubUrl: 'https://github.com/Git-Gate',
    emoji: '🫂',
    //logo: '/threelingo.png',
    label: 'ETHLisbon 2022',
  },
  {
    title: 'urbe.eth',
    description:
      'Community for Web3 builders in Rome: coworking, events, hackathons, and more.',
    tags: [],
    url: 'https://twitter.com/urbeEth',
    logo: '/urbe-eth.png',
    label: 'Community co-founder',
  },
  {
    title: 'ETHRome',
    description:
      'The 1st Web3 hackathon in Italy, on Governance and Privacy topics',
    tags: [],
    url: 'https://ethrome.org',
    logo: '/ethrome.png',
    label: 'Hackathon organizer',
  },
]
