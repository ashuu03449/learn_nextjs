import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-gray-800 text-white p-4 shadow-md">
      <div>
        <h1 className="text-2xl font-semibold">My Logo</h1>
      </div>
      <div>
        <nav>
          <ul className="flex gap-x-5">
            <li>
              <Link href="/" className="hover:text-gray-400 transition-colors duration-300">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-400 transition-colors duration-300">About</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-400 transition-colors duration-300">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
