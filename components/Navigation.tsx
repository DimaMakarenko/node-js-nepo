'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLink = {
  label: string;
  href: string;
}

type Props = {
  navLinks: NavLink[];
}

const Navigation = ({ navLinks }: Props) => {
  const pathname = usePathname();

  return (
    <nav className='space-x-5'>
      {navLinks.map(({ label, href }) => <Link href={href} key={href} className={`${href === pathname && 'text-gray-400'}`}>{label}</Link>)}
    </nav>
  )
}

export { Navigation }
