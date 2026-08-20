import Image from 'next/image'
import Head from 'next/head'

import { Container } from '@/components/Container'
import SocialLink from '@/ui-lib/social-link'
// import Resume from '@/ui-lib/resume/index'
import {
  CodeWarsIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/latch-headshot.jpeg'

export default function About() {
  return (
    <>
      <Head>
        <title>About - Latch Jack</title>
        <meta
          name="description"
          content="I'm Latch Jack. I live in London, where I design and build applications."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I&#39;m Latch, a software engineer based in London.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I&#39;ve always been curious about how things work. As a kid I
                was constantly taking things apart just to see what was inside.
                That curiosity eventually led me to programming, where I found I
                enjoyed solving problems just as much as building things.
              </p>

              <p>
                Most of my work revolves around TypeScript, React and modern web
                technologies, but I&#39;m always learning. Recently I&#39;ve
                been spending more time exploring system design, networking,
                cloud infrastructure and the foundations that sit beneath the
                frameworks we use every day.
              </p>

              <p>
                Outside of software you&#39;ll usually find me at the gym,
                reading comics, watching anime, cooking or working on side
                projects. I&#39;m also becoming increasingly interested in
                electronics and embedded systems, and I&#39;m excited to see
                where that curiosity takes me next.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://www.codewars.com/users/jhctal"
                icon={CodeWarsIcon}
                className="mt-4"
              >
                Follow on CodeWars
              </SocialLink>
              <SocialLink
                href="https://github.com/jhctal"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/jhctal/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Connect on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:latch.jack@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                latch.jack@gmail.com
              </SocialLink>
            </ul>
            <br className="mt-12" />
            {/* <Resume /> */}
          </div>
        </div>
      </Container>
    </>
  )
}
