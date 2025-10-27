import Image from 'next/image'
import Link from 'next/link'

const Nabar = () => {
  return (
    <header>
      <nav className="">
        <Link href="/" className="logo">
          <Image src="/icons/logo.png" alt="logo" width={24} height={24} />
          <p className="">DevHub</p>
        </Link>
        <ul className="">
          <Link href="/">Home</Link>
          <Link href="/">Event</Link>
          <Link href="/">Create Event</Link>
        </ul>
      </nav>

    </header>
  )
}

export default Nabar