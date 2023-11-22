export interface Experience {
  position: string
  companyName: string
  description: string
  tags: string[]
  url: string
  logo?: string
  startDate?: string
  endDate?: string
}

export const experiences: Experience[] = [
  {
    companyName: 'Brian',
    position: 'PM & Backend Engineer',
    description:
      'A Web3 startup building a non-custodial AI assistant for web3. "Hey Brian can you swap 10 usdc for eth on Uniswap on Arbitrum?',
    tags: ['Node.js', 'REST API', 'LLM', 'Web3', 'langChain'],
    url: 'https://www.brianknows.org/',
    startDate: 'June 2023',
    endDate: 'current',
    logo: '/brian.png',
  },
  {
    companyName: 'EtheransOS',
    position: 'Technical PM',
    description:
      'A Web3 startup building the Ethereum Operating System: a universal platform to build, deploy and manage your on-chain Web3 project',
    tags: ['Web3', 'Solidity', 'Governance', 'DeFi', 'NFT', 'R&D'],
    url: 'https://www.ethereans.app/',
    startDate: 'Oct 2021',
    endDate: 'Dec 2022',
    logo: '/ethereansos.png',
  },
  {
    companyName: 'Cidaro',
    position: 'COO',
    description:
      'An Italian consultancy startup developing custom web3 solutions for companies',
    tags: ['Node.js', 'REST API', 'Express', 'Docker', 'SQL'],
    url: 'https://www.facebook.com/CidaroBlockchain/',
    startDate: 'Jul 2018',
    endDate: 'Apr 2022',
    logo: '/cidaro.png',
  },
]
