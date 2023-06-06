import Link from "next/link";

const Header = () => {
  return (
    <header className="h-20 flex items-center justify-center space-x-5 bg-slate-600 text-white">
      <Link href="/">Home</Link>
      <Link href="about">About</Link>
      <Link href="blog">Blog</Link>
    </header>
  )
}

export { Header };
