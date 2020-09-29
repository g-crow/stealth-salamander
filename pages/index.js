import Head from 'next/head'
import { getSortedPostsData } from '../lib/posts'

export default function Home({ allPostsData }) {
  return (
    <div className="container">
      <Head>
        <title>Deciding to Fail Better Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img src="/images/stuart_peak.jpg" alt="Mountain scenery" className="hero" />

        <h1 className="title">
          Deciding to Fail Better <span className="blog">Blog</span>
        </h1>

        <p className="description">
          From the minds of Missoula's warm and welcoming self-development group
        </p>

        <section>
          <ul>
            {allPostsData.map(({ id, date, title }) => (
              <li key={id}>
                <a href="/about" className="card">
                  <h3>{title} &rarr;</h3>
                  <p>{id} {date}</p>
                </a>
              </li>
            ))}
          </ul>
        </section>
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

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .hero {
          height: 275px;
          border-radius: 10px;
          margin-bottom: 2em;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer:hover,
        .footer:focus,
        .footer:active {
          color: #0070f3;
          border-color: #0070f3;
          cursor: pointer;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          color: rgb(42,54,77);
        }
        .title .blog {
          color: rgb(97,116,145);
        }
        .title,
        .description {
          text-align: center;
        }
        .description {
          line-height: .4;
          font-size: 1.5rem;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        li {
          display: flex;
        }
        .card {
          margin: 1rem auto;
          flex-basis: 100%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }
        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }
        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }
        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }
        .logo {
          height: 1em;
        }
        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}