import prisma from '@/src/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';


// GET - Récupérer tous les contacts
export async function GET() {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(contacts);
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des contacts' },
      { status: 500 }
    );
  }
}


// POST - Créer un nouveau contact
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone } = body;

    const contact = await prisma.contact.create({
      data: { name, email, phone }
    });

    return NextResponse.json(contact, { status: 201 });
  } catch (error: any) {
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'Un contact avec cet email existe déjà' },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: 'Erreur lors de la création du contact' },
      { status: 500 }
    );
  }
}