'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {useSession,  signOut} from 'next-auth/react';


type NavLink = {
  label: string;
  href: string;
}

type Props = {
  navLinks: NavLink[];
}

const Navigation = ({ navLinks }: Props) => {
  const pathname = usePathname();
  const session = useSession()

  console.log('session', session)
  return (
    <nav className='space-x-5'>
      {navLinks.map(({ label, href }) => <Link href={href} key={href} className={`${href === pathname && 'text-gray-400'}`}>{label}</Link>)}
      {session?.data && <Link href="/profile">Profile</Link>}
      {session?.data ? <Link href="#" onClick={() => signOut({callbackUrl: '/'})}>Sign Out</Link>: <Link href="/signin">Sing In</Link>}

    </nav>
  )
}

export { Navigation }
