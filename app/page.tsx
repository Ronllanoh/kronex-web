"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";



export default function Home() {

const [enviando, setEnviando] = useState(false);
const [enviado, setEnviado] = useState(false);

const enviarFormulario = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setEnviando(true);

  const form = e.currentTarget;
  const formData = new FormData(form);

  const data = {
    nombre: formData.get("nombre"),
    empresa: formData.get("empresa"),
    correo: formData.get("correo"),
    telefono: formData.get("telefono"),
    canal: formData.get("canal"),
    mensaje: formData.get("mensaje"),
  };

  const res = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  setEnviando(false);

  if (res.ok) {
    setEnviado(true);
    form.reset();
  }
};

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Navbar />
      
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Tecnología para empresas modernas
          </p>

          <h1 className="max-w-3xl text-5xl font-bold leading-tight md:text-7xl">
            Soluciones digitales para ordenar, automatizar y hacer crecer tu
            negocio.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            En Kronex diseñamos software, plataformas y herramientas digitales
            para mejorar procesos, reducir trabajo manual y entregar información
            clara para la toma de decisiones.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contacto"
              className="rounded-full bg-cyan-400 px-7 py-4 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Solicitar demo
            </a>

            <a
              href="/soluciones/cobranzas"
              className="rounded-full border border-white/20 px-7 py-4 text-center font-semibold text-white transition hover:bg-white/10"
            >
              Ver soluciones
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
          <div className="rounded-2xl bg-slate-950 p-6">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-sm text-slate-400">
                Soluciones Kronex
              </span>
              <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                
              </span>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl bg-white/5 p-4">
                <p className="text-sm text-slate-400">Automatización</p>
                <p className="mt-2 text-3xl font-bold">Procesos más simples</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-white/5 p-4">
                  <p className="text-sm text-slate-400">Software</p>
                  <p className="mt-2 text-2xl font-bold">A medida</p>
                </div>

                <div className="rounded-xl bg-white/5 p-4">
                  <p className="text-sm text-slate-400">Datos</p>
                  <p className="mt-2 text-2xl font-bold">En control</p>
                </div>
              </div>

              <div className="rounded-xl bg-cyan-400/10 p-4 text-cyan-200">
                Tecnología pensada para ordenar operaciones y apoyar el
                crecimiento empresarial.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {[
            [
              "Soluciones a medida",
              "Creamos herramientas digitales adaptadas a procesos reales de negocio.",
            ],
            [
              "Automatización",
              "Reducimos tareas repetitivas para que tu equipo trabaje con más foco.",
            ],
            [
              "Visión de gestión",
              "Convertimos datos operativos en información clara para decidir mejor.",
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contacto" className="mx-auto max-w-5xl px-6 py-24">
  <div className="grid gap-10 rounded-3xl border border-white/10 bg-white/5 p-8 md:grid-cols-2 md:p-12">
    <div>
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
        Contacto
      </p>

      <h2 className="text-4xl font-bold md:text-5xl">
        Hablemos de la solución que necesita tu empresa.
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-300">
        Cuéntanos qué proceso quieres ordenar, automatizar o mejorar. En Kronex
        te contactaremos para evaluar cómo ayudarte.
      </p>
    </div>

    <form onSubmit={enviarFormulario} className="space-y-5">
      <div>
        <label className="mb-2 block text-sm text-slate-300">Nombre</label>
        <input
          type="text"
          name="nombre"
          required
          className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
          placeholder="Tu nombre"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm text-slate-300">
          Empresa <span className="text-slate-500">(opcional)</span>
        </label>
        <input
          type="text"
          name="empresa"
          className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
          placeholder="Nombre de la empresa"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm text-slate-300">Correo</label>
        <input
          type="email"
          name="correo"
          required
          className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
          placeholder="correo@empresa.cl"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm text-slate-300">Teléfono</label>
        <input
          type="tel"
          name="telefono"
          required
          className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
          placeholder="+56 9 1234 5678"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm text-slate-300">Canal de contacto preferido</label>

        <select
          name="canal"
          defaultValue="WhatsApp"
          className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
        >
        <option>WhatsApp</option>
        <option>Correo</option>
        <option>Llamada telefónica</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm text-slate-300">Mensaje</label>
        <textarea
          name="mensaje"
          required
          rows={5}
          className="w-full resize-none rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
          placeholder="Cuéntanos qué necesitas..."
        />
      </div>

      <button
  type="submit"
  disabled={enviando}
  className="w-full rounded-full bg-cyan-400 px-8 py-4 font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
>
  {enviando ? "Enviando..." : "Enviar mensaje"}
</button>

{enviado && (
  <p className="text-center text-sm text-emerald-300">
    Mensaje enviado correctamente. Te contactaremos pronto.
  </p>
)}
    </form>
  </div>
</section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400">
        © 2026 Kronex SpA. Todos los derechos reservados.
      </footer>
    </main>
  );
}