"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        

        <a href="/" className="flex items-center">
          <img
          src="/kronex-logo.svg"
          alt="Kronex"
          className="h-9 w-auto"
          />
        </a>

        <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <div className="group relative">
            <button className="flex items-center gap-2 transition hover:text-white">
              Soluciones <span className="text-xs">⌄</span>
            </button>

            <div className="invisible absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-4 opacity-0 transition group-hover:visible group-hover:opacity-100">
              <div className="grid grid-cols-2 gap-6 rounded-3xl border border-white/10 bg-[#070b1f] p-6 shadow-2xl">
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

          <a href="/recursos" className="transition hover:text-white">
            Recursos
          </a>

          <a href="/#contacto" className="transition hover:text-white">
            Contacto
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded-xl border border-white/10 px-3 py-2 text-sm text-white md:hidden"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#050816] px-6 py-5 md:hidden">
          <div className="space-y-5 text-sm text-slate-300">
            <div>
              <p className="mb-3 font-semibold text-white">Soluciones</p>

              <a
                href="/soluciones/cobranzas"
                onClick={() => setOpen(false)}
                className="block rounded-2xl bg-white/5 p-4"
              >
                <span className="block font-semibold text-white">
                  Gestión de cobranzas
                </span>
                <span className="mt-1 block text-slate-400">
                  Control, seguimiento y reportes.
                </span>
              </a>
            </div>

            <a
              href="/recursos"
              onClick={() => setOpen(false)}
              className="block border-t border-white/10 pt-4"
            >
              Recursos
            </a>

            <a
              href="/#contacto"
              onClick={() => setOpen(false)}
              className="block border-t border-white/10 pt-4"
            >
              Contacto
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}