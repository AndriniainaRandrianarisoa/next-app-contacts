'use client';

import { useRouter } from 'next/navigation';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object({
  name: Yup.string().required('Nom requis'),
  email: Yup.string().email('Email invalide').required('Email requis'),
  phone: Yup.string().required('Téléphone requis')
});

export default function NewContact() {
  const router = useRouter();

  const handleSubmit = async (values: any) => {
    try {
      const res = await fetch('/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      });

      if (res.ok) {
        router.push('/contacts');
      } else {
        const error = await res.json();
        alert(error.error);
      }
    } catch (error) {
      alert('Erreur lors de l\'ajout');
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Ajouter un contact</h1>
      
      <Formik
        initialValues={{ name: '', email: '', phone: '' }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form className="bg-white p-6 rounded shadow space-y-4">
          <div>
            <label className="block mb-1">Nom</label>
            <Field name="name" className="w-full p-2 border rounded" />
            <ErrorMessage name="name" className="text-red-500 text-sm" component="div" />
          </div>

          <div>
            <label className="block mb-1">Email</label>
            <Field name="email" type="email" className="w-full p-2 border rounded" />
            <ErrorMessage name="email" className="text-red-500 text-sm" component="div" />
          </div>

          <div>
            <label className="block mb-1">Téléphone</label>
            <Field name="phone" className="w-full p-2 border rounded" />
            <ErrorMessage name="phone" className="text-red-500 text-sm" component="div" />
          </div>

          <div className="flex space-x-4 pt-4">
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Ajouter
            </button>
            <button type="button" onClick={() => router.back()} className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">
              Annuler
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
