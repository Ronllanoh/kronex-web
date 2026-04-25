"use client";

import { useState } from "react";

export default function CalculadoraPrecioVentaPage() {
  const [costo, setCosto] = useState("");
  const [transporte, setTransporte] = useState("");
  const [margen, setMargen] = useState("");
  const [iva, setIva] = useState(true);

  const limpiarNumero = (valor: string) => {
    return Number(valor.replace(/\./g, "").replace(/[^0-9]/g, "")) || 0;
  };

  const formatearMiles = (valor: string) => {
    const numero = limpiarNumero(valor);
    if (numero === 0) return "";
    return numero.toLocaleString("es-CL");
  };

  const costoNum = limpiarNumero(costo);
  const transporteNum = limpiarNumero(transporte);
  const margenNum = Number(margen) || 0;

  const costoTotal = costoNum + transporteNum;
  const margenDecimal = margenNum / 100;
  const precioNeto =
   margenDecimal >= 1 ? 0 : costoTotal / (1 - margenDecimal);
  const utilidad = precioNeto - costoTotal;
  const precioFinal = iva ? precioNeto * 1.19 : precioNeto;

  const pesos = (valor: number) =>
    "$" + Math.round(valor).toLocaleString("es-CL");

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
            <div className="grid grid-cols-2 gap-6">
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
          Calculadora de precio de venta.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Calcula rápidamente cuánto deberías cobrar según costo, margen deseado
          e IVA.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold">Datos</h2>

            <div className="mt-8 space-y-6">
              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Costo del producto / servicio
                </label>

                <input
                  type="text"
                  value={costo}
                  onChange={(e) => setCosto(formatearMiles(e.target.value))}
                  placeholder="40.000"
                  className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Costo transporte (opcional)
                </label>

                <input
                  type="text"
                  value={transporte}
                  onChange={(e) =>
                    setTransporte(formatearMiles(e.target.value))
                  }
                  placeholder="0"
                  className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Margen deseado sobre venta (%)
                </label>

                <input
                  type="number"
                  value={margen}
                  onChange={(e) => setMargen(e.target.value)}
                  placeholder="30"
                  className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
                />
              </div>

              <label className="flex items-center gap-3 text-sm text-slate-300">
                <input
                  type="checkbox"
                  checked={iva}
                  onChange={() => setIva(!iva)}
                  className="h-4 w-4"
                />
                Incluir IVA (19%)
              </label>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold">Resultado</h2>

            <div className="mt-8 space-y-5">
              <div className="rounded-2xl bg-slate-950 p-5">
                <p className="text-sm text-slate-400">Costo total</p>
                <p className="mt-2 text-3xl font-bold">{pesos(costoTotal)}</p>
              </div>

              <div className="rounded-2xl bg-slate-950 p-5">
                <p className="text-sm text-slate-400">Utilidad estimada</p>
                <p className="mt-2 text-3xl font-bold">{pesos(utilidad)}</p>
              </div>

              <div className="rounded-2xl bg-slate-950 p-5">
                <p className="text-sm text-slate-400">Precio neto sugerido</p>
                <p className="mt-2 text-3xl font-bold">{pesos(precioNeto)}</p>
              </div>

              <div className="rounded-2xl bg-cyan-400/10 p-5">
                <p className="text-sm text-cyan-200">
                  Precio final {iva ? "con IVA" : "sin IVA"}
                </p>

                <p className="mt-2 text-4xl font-bold text-cyan-300">
                  {pesos(precioFinal)}
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h3 className="text-3xl font-bold">
            ¿Necesitas algo más que una calculadora?
          </h3>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Kronex desarrolla soluciones digitales para automatizar procesos,
            ordenar operaciones y mejorar la gestión de empresas.
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