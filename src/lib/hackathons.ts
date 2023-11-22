export interface Hackathon {
    position: string
    Name: string
    description: string
    url: string
    bounties: string
    logo?: string
  }
  
  export const hackathons: Hackathon[] = [
    {
      Name: 'ETGlobal Istanbul 2023',
      position: 'Pulse',
      description: '🏆 Winning Bounties',
      url: 'https://ethglobal.com/showcase/pulse-v4iir',
      bounties: 'Base, Lens, ENS, EAS, Push Protocol',
      logo: '/ethglobalistanbul.jpg',
    },
    {
      Name: 'ETHlisbon 2023',
      position: 'Threelingo',
      description: '🏆 Winning Bounties',
      url: 'https://taikai.network/ethlisbon/hackathons/ethlisbon-2023/projects/clokh2kpz06z6xk01gl0c0ggn/idea',
      bounties: 'Safe, Fuel, Peanut Procol',
      logo: '/ethlisbon2023.jpg',
    },
    {
        Name: 'Haugment Hack 2023',
        position: 'Brian',
        description: '🏆 Winning Bounties',
        url: '',
        bounties: 'Hugging Face, Augment Hack, Lillypad',
        logo: '/augmenthack.png',
    },
    {
      Name: 'ETHPrague 2023',
      position: 'Brian',
      description: '🏆 Winning Bounties',
      url: 'https://devfolio.co/projects/brian-bb34',
      bounties: 'AAVE, The Graph, Gnosis, Taiko, Gateway',
      logo: '/ethprague.jpg',
    },
    {
        Name: 'ETHGlobal Lisbon 2023',
        position: 'Bob Is Safe',
        description: '🏆 Winning Bounties',
        url: 'https://ethglobal.com/showcase/bob-is-safe-p2ba2',
        bounties: 'ZKBob',
        logo: '/ethgloballisbon2.png',
    },
    {
        Name: 'ETHLisbon 2022',
        position: 'Gitgate',
        description: '🏆  Winning Bounties',
        url: 'https://taikai.network/ethlisbon/hackathons/ethlisbon-2022/projects/cl9sjt5s53583760118v1r1jdup/idea',
        bounties: 'Filecoin',
        logo: '/ethlisbon2022.png',
    }
  ]
  