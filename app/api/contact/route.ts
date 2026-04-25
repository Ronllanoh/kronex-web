import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { nombre, empresa, correo, telefono, canal, mensaje } = body;

    await resend.emails.send({
      from: "Kronex <contacto@kronex.cl>",
      to: ["contacto@kronex.cl"],
      subject: "Nuevo contacto desde Kronex.cl",
      replyTo: correo,
      html: `
        <h2>Nuevo lead desde formulario</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Empresa:</strong> ${empresa || "-"}</p>
        <p><strong>Correo:</strong> ${correo}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Canal preferido:</strong> ${canal}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ ok: false, error });
  }
}