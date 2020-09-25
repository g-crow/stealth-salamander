import Head from 'next/head'
import Link from 'next/link'

import "../styles/basic-styles.scss"

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Deciding to Fail Better</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="header-primary">
          Deciding to Fail Better
        </h1>

        <p className="description">
          Missoula's warm and welcoming self-development group
        </p>

        <div className="grid">
          <a href="/about" className="card">
            <h3>About &rarr;</h3>
            <p>Our origin story and what we're about</p>
          </a>

          <a href="https://decidingtofailbetter.com/" className="card">
            <h3>The 100 Day Challenge &rarr;</h3>
            <p>Choose one thing and do it 50%</p>
          </a>

          <a href="/posts/first-post" className="card">
            <h3>Blog &rarr;</h3>
            <p>From the minds of our members</p>
          </a>

          <a href="/posts/first-post" className="card">
            <h3>Contact &rarr;</h3>
            <p>We'd love to hear from you</p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://www.meetup.com/Deciding-To-Fail-Better/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Curious? Join us on Meetup!
        </a>
      </footer>
    </div>
  )
}
