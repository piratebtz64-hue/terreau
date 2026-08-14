import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email = (body?.email || "").toString().trim().toLowerCase();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Adresse email invalide" },
        { status: 400 }
      );
    }

    const FORMSPREE_ID = process.env.FORMSPREE_ID;

    if (FORMSPREE_ID) {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({ email })
      });

      if (!res.ok) {
        return NextResponse.json(
          { error: "Impossible d'enregistrer l'email pour le moment" },
          { status: 502 }
        );
      }
    } else {
      console.log("[Terreau] Nouvelle inscription waitlist :", email);
    }

    return NextResponse.json({
      success: true,
      message: "Inscription enregistrée"
    });
  } catch {
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}
