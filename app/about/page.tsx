export default function About() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">À propos</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <p className="text-gray-600 mb-4">
          ContactBook est une application simple de gestion de contacts développée avec Next.js.
        </p>
        <p className="text-gray-600 mb-4">
          Fonctionnalités :
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Affichage de la liste des contacts</li>
          <li>Consultation des détails d'un contact</li>
          <li>Ajout de nouveaux contacts</li>
          <li>Interface responsive avec Tailwind CSS</li>
        </ul>
      </div>
    </div>
  );
}
