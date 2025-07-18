import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Bienvenue sur ContactBook
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Gérez facilement vos contacts avec notre application simple et intuitive.
      </p>
      <div className="space-x-4">
        <Link 
          href="/contacts" 
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 inline-block"
        >
          Voir mes contacts
        </Link>
        <Link 
          href="/contacts/new" 
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 inline-block"
        >
          Ajouter un contact
        </Link>
      </div>
    </div>
  );
}
