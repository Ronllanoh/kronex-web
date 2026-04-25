"use client";

import { useEffect, useState } from "react";

export default function CobranzasPage() {

    const escenarios = [
  {
    monto: "$24.580.000",
    clientes: "128",
    vencidas: "17",
    texto: "Seguimiento, control y reportes en un solo lugar.",
  },
  {
    monto: "$8.920.000",
    clientes: "46",
    vencidas: "6",
    texto: "Detecta cuentas críticas a tiempo.",
  },
  {
    monto: "$41.300.000",
    clientes: "214",
    vencidas: "29",
    texto: "Visualiza tu cartera completa y prioriza la gestión comercial.",
  },
];

const [actual, setActual] = useState(0);

useEffect(() => {
  const intervalo = setInterval(() => {
    setActual((prev) => (prev + 1) % escenarios.length);
  }, 5000);

  return () => clearInterval(intervalo);
}, []);

const data = escenarios[actual];

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/90 backdrop-blur">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
    <a href="/" className="text-2xl font-bold tracking-tight">
      Kronex
    </a>

    <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
      <div className="group relative">
        <button className="flex items-center gap-2 transition hover:text-white">
          Soluciones
          <span className="text-xs">⌄</span>
        </button>

        <div className="invisible absolute left-1/2 top-full w-[760px] -translate-x-1/2 pt-4 opacity-0 transition group-hover:visible group-hover:opacity-100">
          <div className="rounded-3xl border border-white/10 bg-[#070b1f] p-6 shadow-2xl">
            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="mb-4 border-b border-white/10 pb-3 font-semibold text-white">
                  Software
                </p>

                <a
                  href="/soluciones/cobranzas"
                  className="block rounded-2xl p-4 transition hover:bg-white/10"
                >
                  <span className="block font-semibold text-white">
                    Gestión de cobranzas
                  </span>
                  <span className="mt-2 block text-sm leading-6 text-slate-400">
                    Control de clientes, deuda, seguimiento y reportes.
                  </span>
                </a>
              </div>

              <div>
                <p className="mb-4 border-b border-white/10 pb-3 font-semibold text-white">
                  Próximamente
                </p>

                <div className="space-y-3 text-slate-500">
                  <p>Inventario</p>
                  <p>Ventas</p>
                  <p>Proveedores</p>
                  <p>Reportes gerenciales</p>
                </div>
              </div>

              <div>
                <p className="mb-4 border-b border-white/10 pb-3 font-semibold text-white">
                  A medida
                </p>

                <a
                  href="/#contacto"
                  className="block rounded-2xl p-4 transition hover:bg-white/10"
                >
                  <span className="block font-semibold text-white">
                    Desarrollo personalizado
                  </span>
                  <span className="mt-2 block text-sm leading-6 text-slate-400">
                    Creamos soluciones digitales según tu operación.
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="/recursos" className="transition hover:text-white">
        Recursos
      </a>

      <a href="/#contacto" className="transition hover:text-white">
        Contacto
      </a>
    </div>
  </div>
</nav>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Gestión de cobranzas
          </p>

          <h1 className="max-w-3xl text-5xl font-bold leading-tight md:text-7xl">
            Controla tus cobranzas con más orden, seguimiento y visibilidad.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Kronex centraliza clientes, deudas, estados de pago y seguimiento
            comercial para que tu empresa reduzca trabajo manual y tome mejores
            decisiones.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="/#contacto"
              className="rounded-full bg-cyan-400 px-7 py-4 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Solicitar demo
            </a>

            <a
              href="#funciones"
              className="rounded-full border border-white/20 px-7 py-4 text-center font-semibold text-white transition hover:bg-white/10"
            >
              Ver funciones
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
          <div className="rounded-2xl bg-slate-950 p-6">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-sm text-slate-400">Panel de cobranzas</span>
              <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                En control
              </span>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl bg-white/5 p-4">
                <p className="text-sm text-slate-400">Monto por cobrar</p>
                <p className="mt-2 text-3xl font-bold transition-all duration-500">{data.monto}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-white/5 p-4">
                  <p className="text-sm text-slate-400">Clientes</p>
                  <p className="mt-2 text-2xl font-bold transition-all duration-500">{data.clientes}</p>
                </div>

                <div className="rounded-xl bg-white/5 p-4">
                  <p className="text-sm text-slate-400">Vencidas</p>
                  <p className="mt-2 text-2xl font-bold transition-all duration-500">{data.vencidas}</p>
                </div>
              </div>

              <div className="rounded-xl bg-cyan-400/10 p-4 text-cyan-200 transition-all duration-500">{data.texto}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="funciones"
        className="border-y border-white/10 bg-white/[0.03] px-6 py-20"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Funciones principales
          </p>

          <h2 className="max-w-3xl text-4xl font-bold md:text-5xl">
            Una plataforma pensada para ordenar el proceso completo de cobranza.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              [
                "Clientes y Deudas",
                "Registra y visualiza información clave de clientes, montos, vencimientos y estados.",
              ],
              [
                "Seguimiento Comercial",
                "Mantén trazabilidad de gestiones, comentarios, responsables y próximos pasos.",
              ],
              [
                "Estados de Cobranza",
                "Clasifica cuentas por pendiente, vencida, gestionada, comprometida o pagada.",
              ],
              [
                "Reportes Eficientes",
                "Obtén una visión rápida del total por cobrar, cuentas críticas y avance de gestión.",
              ],
              [
                "Menos Excel",
                "Reduce planillas dispersas y centraliza información en una plataforma ordenada.",
              ],
              [
                "Escalable",
                "Pensado para crecer con nuevos módulos, automatizaciones e integraciones.",
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
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Para quién es
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Ideal para empresas que necesitan más control sobre sus cuentas por
            cobrar.
          </h2>
        </div>

        <div className="space-y-4 text-lg leading-8 text-slate-300">
          <p>
            Kronex está diseñado para negocios que gestionan clientes,
            facturación, pagos pendientes y seguimiento comercial de forma
            recurrente.
          </p>
          <p>
            Es especialmente útil cuando la cobranza depende de planillas,
            recordatorios manuales, mensajes dispersos o información repartida
            entre varias personas.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="text-4xl font-bold md:text-5xl">
          Ordena tus cobranzas antes de que se transformen en un problema.
        </h2>

        <p className="mt-6 text-lg text-slate-300">
          Solicita una demo y evaluemos gratuitamente cómo Kronex puede mejorar la operación de tu
          empresa.
        </p>

        <a
          href="/#contacto"
          className="mt-10 inline-block rounded-full bg-cyan-400 px-8 py-4 font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          Solicitar demo
        </a>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400">
        © 2026 Kronex SpA. Todos los derechos reservados.
      </footer>
    </main>
  );
}