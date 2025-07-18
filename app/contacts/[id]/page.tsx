'use client';

import { useRouter } from 'next/navigation';
import { getContactById } from '../../../data/contacts';

export default function ContactDetail({ params }: { params: { id: string } }) {
  const router = useRouter();
  const contact = getContactById(parseInt(params.id));

  if (!contact) {
    return (
      <div className="text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Contact non trouvé</h1>
        <button 
          onClick={() => router.push('/contacts')}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Retour à la liste
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <button 
        onClick={() => router.back()}
        className="mb-6 text-blue-600 hover:text-blue-800"
      >
        ← Retour
      </button>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">{contact.name}</h1>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <p className="text-lg text-gray-900">{contact.email}</p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Téléphone</label>
            <p className="text-lg text-gray-900">{contact.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
