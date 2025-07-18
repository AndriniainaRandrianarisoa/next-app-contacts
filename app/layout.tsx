import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'ContactBook',
  description: 'Application de gestion de contacts',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <div className="min-h-screen bg-gray-50">
          <nav className="bg-blue-600 text-white shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
              <div className="flex justify-between items-center py-4">
                <Link href="/" className="text-xl font-bold">
                  ContactBook
                </Link>
                <div className="space-x-4">
                  <Link href="/" className="hover:text-blue-200">
                    Accueil
                  </Link>
                  <Link href="/contacts" className="hover:text-blue-200">
                    Contacts
                  </Link>
                  <Link href="/about" className="hover:text-blue-200">
                    À propos
                  </Link>
                </div>
              </div>
            </div>
          </nav>
          <main className="max-w-6xl mx-auto px-4 py-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
