import Link from "next/link"

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col items-center flex-1">
      <h1 className="text-2xl">About us</h1>
      <ul className="flex space-x-5 pb-3">
        <li><Link href='/about/contacts'>Contacts</Link></li>
        <li><Link href='/about/team'>Team</Link></li>
      </ul>
      {children}
    </div>
  )
}