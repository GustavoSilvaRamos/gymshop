import { Hero } from '../components/Hero'
import { Cards } from '../components/Cards'
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
        </div>
      </div>
    </>
  )
}
