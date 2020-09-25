import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Deciding to Fail Better</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
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

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
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

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
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

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        #__next-prerender-indicator {
          display: none;
        }
      `}</style>
    </div>
  )
}
