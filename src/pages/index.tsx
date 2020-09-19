import { Hero } from '../components/Hero'
import { Cards } from '../components/Cards'
import { Apres } from '../components/Apres'
import { Footer } from '../components/Footer'
import { CarouselItems } from '../components/CarouselItems'
import Head from 'next/head'

export default function Index() {
  return (
    <>
      <Head>
        <title>Gym shop</title>
      </Head>
      <div>
        <div className="min-h-screen">
          <Hero />
          <Cards />
          <Apres />
          <CarouselItems />
          <Footer />
        </div>
      </div>
    </>
  )
}
