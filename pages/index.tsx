import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import TitlebarImageList from "./TitlebarImageList";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>이미지 판매 사이트 Sparta</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          스파르타 이미지 판매 사이트에 오신 걸 환영합니다
        </h1>

        <p className={styles.description}>
          관심있는 이미지가 있으시면 작가에게 연락해 구매하세요!
        </p>
        <div className={styles.grid}>
          <TitlebarImageList />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://spartacodingclub.kr/community/exhibition?category=all"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Sparta
        </a>
      </footer>
    </div>
  )
}

export default Home
