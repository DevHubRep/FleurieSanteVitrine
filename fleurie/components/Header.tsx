// components/Header.jsx
import Link from 'next/link';
import Image from 'next/image';


export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <div className="flex items-center">
  <Image 
    src="/img/fleurie.png" 
    alt="Fleurie Santé Logo" 
    width={100} 
    height={50} 
    priority 
  />
</div>

<nav className="hidden md:flex gap-6 text-sm text-gray-700 mx-auto">
  <Link href="#accueil">ACCUEIL</Link>
  <Link href="#produit">PRODUIT</Link>
  <Link href="#a-propos">A PROPOS</Link>
  <Link href="#faq">FAQ</Link>
</nav>
    </header>
  );
}
