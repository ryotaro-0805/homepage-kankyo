import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'

export default function Home() {

  
  
  return (
    <div className={styles.container}>
      <Head>
        <title>平戸市を発展させる　西日本環境開発株式会社</title>
        <meta name="description" content="長崎県平戸市の発展を目標としている企業です。" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>

        <div>
          <div>swiper</div>
          <h3>motto</h3>          
          </div>
        <section>conpany's feature</section>
        <section>achivements</section>
        <section>projects</section>
        <section>informations</section>
        <section>contact</section>


      </main>

      <Footer />
    </div>
  )
}
