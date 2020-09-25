import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <h1>This will be the About page</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}