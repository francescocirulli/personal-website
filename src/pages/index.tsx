import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import ExperienceCard from '@/components/ExperienceCard'
import HackathonCard from '@/components/HackathonCard'
import NFTCard from '@/components/NFTCard'
import ProjectCard from '@/components/ProjectCard'
import { H1, H3, Text } from '@/components/Text'
import { AirstackERC721TokenType } from '@/lib/airstack/interfaces'
import { experiences } from '@/lib/experiences'
import { hackathons } from '@/lib/hackathons'
import { projects } from '@/lib/projects'


const HomePage = () => {
  const [littleLemons, setLittleLemons] = useState<AirstackERC721TokenType[]>(
    [],
  )

  useEffect(() => {
    const fetchLittleLemons = async () => {
      try {
        const res = await fetch('/api/nfts', {
          method: 'GET',
        })
        const json = (await res.json()).reverse()
        console.log(json)
        setLittleLemons(json)
      } catch (error) {
        console.error('Error fetching bubble:', error)
      }
    }

    fetchLittleLemons()
  }, [])

  return (
    <div className="h-full">
      <div className="mb-6 text-center">
        <Image
          src="/frankpfp.jpg"
          width={120}
          height={120}
          alt="Lemon"
          className="rounded-full"
        />
      </div>
      {/* Bio */}
      <div className="mb-6">
        <H1 className="mb-6 text-center">
          Hey, this is Frank 💻
        </H1>
        <Text>
          I&apos;m a PM and solidity/backend dev, enthusiastic about startups and
          techs. I am a builder who likes new challenges and work with others.
          I work in web3 since 2018, in the last year I&apos;m experimenting with AI.
          My focus right now is on building cosumer facing web3 apps.
          <br />
          <br />
          I&apos;m a community builder, I love to talk with people sharing my interests and grow together.
           That&apos;s why I started a community for web3 builders (
          <a
            href="https://twitter.com/urbeEth"
            target="_blank"
            rel="noreferrer"
            className="text-primary"
          >
            urbe.eth
          </a>
          ) in my hometown, Rome, where we hangout and drink beers together.
        </Text>
      </div>

      {/* Projects */}
      <div className="mb-6">
        <H3 className="mb-3">Projects</H3>
        <Text className="mb-6">
          Here somethings I built in the last period
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>

      {/* Experiences */}
      <div className="mb-6">
        <H3 className="mb-3">Experiences</H3>
        <Text className="mb-6">
          Companies I&apos;ve been working with in the past
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-4">
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.companyName}
              experience={experience}
            />
          ))}
        </div>
      </div>

      {/* Hackathons */}
      <div className="mb-6">
        <H3 className="mb-3">Hackathons</H3>
        <Text className="mb-6">
          Hackathons I attended
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-4">
          {hackathons.map((hackathon) => (
            <HackathonCard
              key={hackathon.Name}
              hackathon={hackathon}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage
