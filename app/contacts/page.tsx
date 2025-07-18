import Link from 'next/link';

async function getContacts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/contacts`, {
    cache: 'no-store'
  });
  if (!res.ok) throw new Error('Erreur de récupération');
  return res.json();
}

export default async function ContactsPage() {
  const contacts = await getContacts();

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Mes Contacts</h1>
        <Link 
          href="/contacts/new"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Ajouter un contact
        </Link>
      </div>
      
      {contacts.length === 0 ? (
        <p className="text-center py-8 text-gray-600">Aucun contact trouvé.</p>
      ) : (
        <div className="grid gap-4">
          {contacts.map((contact: any) => (
            <Link key={contact.id} href={`/contacts/${contact.id}`}>
              <div className="bg-white p-4 rounded shadow hover:shadow-md cursor-pointer">
                <h3 className="text-lg font-semibold">{contact.name}</h3>
                <p className="text-gray-600">{contact.email}</p>
                <p className="text-gray-600">{contact.phone}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
