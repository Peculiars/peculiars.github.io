import { Layout } from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import peculiars from '../../public/images/profile/peculiars.png'
import { AnimatedText } from '@/components/AnimatedText'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Damilare</title>
        <meta name="description" content="Welcome to my portfolio, I am Olaitan Damilare, a Frontend and Mobile Developer." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex items-center text-dark w-full min-h-[100%]'>
        <Layout>
          <div className='flex items-center justify-between w-full'>
            <div className='w-2/3 flex flex-col items-center self-center text-left'>
              <AnimatedText text='Turning Vision Into Reality With Code.'/>
              <p className='my-4 text-base font-medium'>As a skilled Frontend developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in web development.</p>
              <div className='flex items-center self-start gap-4'>
                <Link href='/Doc1.pdf' target='_blank'>Resume</Link>
                <Link href='mailto:olaitandamilare230@gmail.com' target='_blank'>Contact</Link>
              </div>
            </div>
            <div className='w-1/2'>
              <Image src={peculiars} alt='The Developer image' className=' w-[30rem] h-auto'/>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
