"use client";

import { useState } from "react";

const items = [
  "Tengo identificadas todas las facturas o pagos pendientes.",
  "Conozco la fecha de vencimiento de cada deuda.",
  "Tengo clasificados los clientes según estado de pago.",
  "Registro cada gestión realizada con el cliente.",
  "Tengo responsables definidos para hacer seguimiento.",
  "Reviso periódicamente las cuentas vencidas.",
  "Uso recordatorios o alertas para evitar olvidos.",
  "Tengo visibilidad del monto total por cobrar.",
  "Puedo identificar clientes críticos o recurrentemente atrasados.",
  "Tengo reportes básicos para tomar decisiones.",
];

export default function ChecklistCobranzaPage() {
  const [checked, setChecked] = useState<boolean[]>(
    Array(items.length).fill(false)
  );

  const completados = checked.filter(Boolean).length;
  const porcentaje = Math.round((completados / items.length) * 100);

  const toggleItem = (index: number) => {
    const nuevo = [...checked];
    nuevo[index] = !nuevo[index];
    setChecked(nuevo);
  };

  const reiniciar = () => {
    setChecked(Array(items.length).fill(false));
  };

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

      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Recurso gratuito
        </p>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
          Checklist de gestión de cobranza.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Evalúa rápidamente qué tan ordenado está tu proceso de cobranza y
          detecta oportunidades de mejora.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Checklist</h2>

              <button
                type="button"
                onClick={reiniciar}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300"
              >
                Reiniciar
              </button>
            </div>

            <div className="mt-8 space-y-4">
              {items.map((item, index) => (
                <label
                  key={item}
                  className="flex cursor-pointer gap-3 rounded-2xl border border-white/10 bg-slate-950 p-4 text-sm leading-6 text-slate-300 transition hover:border-cyan-400/50"
                >
                  <input
                    type="checkbox"
                    checked={checked[index]}
                    onChange={() => toggleItem(index)}
                    className="mt-1 h-4 w-4"
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold">Resultado</h2>

            <div className="mt-8 space-y-5">
              <div className="rounded-2xl bg-cyan-400/10 p-6">
                <p className="text-sm text-cyan-200">Nivel de avance</p>
                <p className="mt-2 text-5xl font-bold text-cyan-300">
                  {porcentaje}%
                </p>
              </div>

              <div className="rounded-2xl bg-slate-950 p-5">
                <p className="text-sm text-slate-400">Puntos cumplidos</p>
                <p className="mt-2 text-3xl font-bold">
                  {completados} de {items.length}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-slate-400">Diagnóstico</p>

                <p className="mt-3 text-lg leading-7 text-slate-200">
                  {porcentaje >= 80
                    ? "Tu proceso de cobranza se ve bastante ordenado. El siguiente paso es automatizar y mantener visibilidad constante."
                    : porcentaje >= 50
                    ? "Tienes una base, pero aún hay oportunidades claras para mejorar seguimiento, control y reportes."
                    : "Tu proceso podría estar dependiendo demasiado de tareas manuales. Ordenarlo puede ayudarte a recuperar tiempo y dinero."}
                </p>
              </div>

              <a
                href="/soluciones/cobranzas"
                className="block rounded-full bg-cyan-400 px-8 py-4 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Ver solución de cobranzas
              </a>
            </div>
          </div>
        </div>

        <section className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h3 className="text-3xl font-bold">
            ¿Necesitas algo más que un checklist?
          </h3>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Kronex ayuda a centralizar clientes, deudas, estados y seguimiento
            para que tu empresa tenga mayor control sobre sus cobranzas.
          </p>

          <a
            href="/#contacto"
            className="mt-8 inline-block rounded-full bg-cyan-400 px-8 py-4 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Hablar con Kronex
          </a>
        </section>
      </section>
    </main>
  );
}