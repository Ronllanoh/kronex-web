"use client";

import { useState } from "react";

export default function PuntoEquilibrioPage() {
  const [costosFijos, setCostosFijos] = useState("");
  const [precioVenta, setPrecioVenta] = useState("");
  const [costoVariable, setCostoVariable] = useState("");

  const limpiar = (v: string) =>
    Number(v.replace(/\./g, "").replace(/[^0-9]/g, "")) || 0;

  const miles = (v: string) => {
    const n = limpiar(v);
    if (n === 0) return "";
    return n.toLocaleString("es-CL");
  };

  const fijo = limpiar(costosFijos);
  const venta = limpiar(precioVenta);
  const variable = limpiar(costoVariable);

  const margenUnitario = venta - variable;

  const unidades =
    margenUnitario > 0 ? Math.ceil(fijo / margenUnitario) : 0;

  const ventasNecesarias = unidades * venta;
  const costosTotales = fijo + variable * unidades;
  const gananciaFinal = ventasNecesarias - costosTotales;

  
  let proyeccion = unidades * 1.2;

  const unidadesExtra =
  proyeccion < 100
    ? Math.ceil(proyeccion / 10) * 10
    : Math.ceil(proyeccion / 50) * 50;

  const ventasExtra = unidadesExtra * venta;
  const costosExtra = fijo + variable * unidadesExtra;
  const gananciaExtra = ventasExtra - costosExtra;

  const pesos = (n: number) =>
    "$" + Math.round(n).toLocaleString("es-CL");

  const reiniciar = () => {
  setCostosFijos("");
  setCostoVariable("");
  setPrecioVenta("");
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

        <h1 className="text-5xl font-bold md:text-7xl">
          Calculadora punto de equilibrio
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-slate-300 leading-8">
          Descubre cuántas unidades necesitas vender para cubrir tus costos.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Datos</h2>

                <button
                    type="button"
                    onClick={reiniciar}
                    className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300"
                >
                Reiniciar
                </button>
            </div>

            <div className="mt-8 space-y-6">
              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Costos fijos mensuales
                </label>
                <input
                  type="text"
                  value={costosFijos}
                  onChange={(e) => setCostosFijos(miles(e.target.value))}
                  className="w-full rounded-2xl bg-slate-950 px-4 py-3"
                  placeholder="500.000"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Costo variable unitario
                </label>
                <input
                  type="text"
                  value={costoVariable}
                  onChange={(e) => setCostoVariable(miles(e.target.value))}
                  className="w-full rounded-2xl bg-slate-950 px-4 py-3"
                  placeholder="10.000"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Precio de venta unitario
                </label>
                <input
                  type="text"
                  value={precioVenta}
                  onChange={(e) => setPrecioVenta(miles(e.target.value))}
                  className="w-full rounded-2xl bg-slate-950 px-4 py-3"
                  placeholder="25.000"
                />
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold">Resultado</h2>

            <div className="mt-8 space-y-5">
              <div className="rounded-2xl bg-slate-950 p-5">
                <p className="text-sm text-slate-400">Costos totales estimados</p>
                <p className="mt-2 text-3xl font-bold">
                  {pesos(costosTotales)}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-950 p-5">
                <p className="text-sm text-slate-400">
                  Unidades mínimas
                </p>
                <p className="mt-2 text-3xl font-bold">
                  {unidades.toLocaleString("es-CL")}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-950 p-5">
                <p className="text-sm text-slate-400">
                Ganancia después del equilibrio
                </p>

                <p className="mt-2 text-3xl font-bold">
                    {pesos(gananciaFinal)}
                </p>
            </div>

              <div className="rounded-2xl bg-cyan-400/10 p-5">
                <p className="text-sm text-cyan-200">
                  Ventas necesarias
                </p>
                <p className="mt-2 text-4xl font-bold text-cyan-300">
                  {pesos(ventasNecesarias)}
                </p>

                <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
  <p className="text-sm text-slate-400">
    Escenario proyectado
  </p>

  <p className="mt-2 text-lg leading-7 text-slate-200">
    Si vendes{" "}
    <span className="font-bold text-cyan-300">
      {unidadesExtra.toLocaleString("es-CL")}
    </span>{" "}
    unidades, ganarías aprox.{" "}
    <span className="font-bold text-cyan-300">
      {pesos(gananciaExtra)}
    </span>
  </p>
</div>

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