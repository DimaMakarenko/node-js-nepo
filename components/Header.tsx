import Link from "next/link";
import { Navigation } from "./Navigation";

const navItem = [
  { label: 'Home', href: '/'},
  { label: 'About', href: '/about'},
  { label: 'Blog', href: '/blog'},
];

const Header = () => {
  return (
    <header className="h-20 flex items-center justify-center bg-slate-600 text-white">
      <Navigation navLinks={navItem}/>
    </header>
  )
}

export { Header };
