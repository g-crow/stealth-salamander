import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <img src="/images/zoom_background_blue.jpg" alt="Vercel Logo" className="logo" />'
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}