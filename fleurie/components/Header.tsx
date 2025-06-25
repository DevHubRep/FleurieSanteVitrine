// components/Header.jsx
export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <div className="text-lg font-semibold">Fleurie Santé</div>
      <nav className="hidden md:flex gap-6 text-sm text-gray-700">
        <a href="#">ACCUEIL</a>
        <a href="#">PRODUIT</a>
        <a href="#">A PROPOS</a>
        <a href="#">FAQ</a>
      </nav>
      <div className="flex items-center gap-4">
        <button aria-label="Search">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M21 21l-4.35-4.35M17 11A6 6 0 1 0 5 11a6 6 0 0 0 12 0z" />
          </svg>
        </button>
        <button aria-label="Cart">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
            <circle cx="7" cy="21" r="1" />
            <circle cx="17" cy="21" r="1" />
          </svg>
        </button>
      </div>
    </header>
  );
}
