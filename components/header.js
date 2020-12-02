import Link from 'next/link';
import './header.scss';

export default function Header() {
  return (
    <header className="header">
      <Link href="/">
        <a className="header-logo">Better UX</a>
      </Link>
    </header>
  )
}
