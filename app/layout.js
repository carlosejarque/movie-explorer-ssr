import './globals.css';
import Link from 'next/link';
import SearchBar from '@/components/SearchBar';

export const metadata = {
  title: 'MovieLand SSR',
  description: 'Explora películas con Next.js SSR',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <header className="main-header">
          <Link href="/" className="logo">🎬 MovieLand</Link>
          <SearchBar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
