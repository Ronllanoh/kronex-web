export default function HerramientasPage() {
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

      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Herramientas gratuitas
        </p>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
          Calculadoras simples para tomar mejores decisiones de negocio.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Recursos prácticos para emprendedores, pymes y equipos comerciales que
          necesitan calcular precios, márgenes e indicadores clave.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Precio de venta",
              text: "Calcula a cuánto vender considerando costos, margen e IVA.",
              href: "/recursos/calculadora-precio-venta",
              status: "Gratis",
            },
            {
              title: "Margen bruto",
              text: "Evalúa la rentabilidad de tus productos o servicios.",
              href: "/recursos/margen-bruto",
              status: "Gratis",
            },
            {
              title: "IVA Chile",
              text: "Calcula valores netos, IVA y total de forma rápida.",
              href: "/recursos/calculadora-iva",
              status: "Gratis",
            },
            {
              title: "Punto de equilibrio",
              text: "Estima cuánto necesitas vender para cubrir tus costos.",
              href: "/recursos/punto-equilibrio",
              status: "Gratis",
            },
            {
              title: "Utilidad por producto",
              text: "Conoce la ganancia estimada por cada venta realizada.",
              href: "/recursos/utilidad-producto",
              status: "Gratis",
            },
            {
              title: "Checklist de cobranza",
              text: "Revisa señales básicas para mejorar tu gestión de cobro.",
              href: "/recursos/checklist-cobranza",
              status: "Gratis",
            },
          ].map((tool) => (
            <a
              key={tool.title}
              href={tool.href}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="mb-6 inline-flex rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                {tool.status}
              </div>

              <h2 className="text-2xl font-bold group-hover:text-cyan-300">
                {tool.title}
              </h2>

              <p className="mt-4 leading-7 text-slate-300">{tool.text}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              SEO y valor práctico
            </p>

            <h2 className="text-4xl font-bold md:text-5xl">
              Herramientas útiles que también acercan nuevos clientes a Kronex.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-300">
            <p>
              Esta sección estará pensada para atraer visitas orgánicas desde
              Google con herramientas simples, rápidas y útiles para negocios.
            </p>
            <p>
              Cada calculadora puede convertirse en una puerta de entrada hacia
              las soluciones de software y automatización de Kronex.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="text-4xl font-bold md:text-5xl">
          ¿Necesitas otros procesos más allá de una calculadora?
        </h2>

        <p className="mt-6 text-lg text-slate-300">
          Kronex desarrolla soluciones digitales para mejorar operaciones,
          automatizar tareas y entregar más control a tu empresa.
        </p>

        <a
          href="/#contacto"
          className="mt-10 inline-block rounded-full bg-cyan-400 px-8 py-4 font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          Contacta al equipo Kronex
        </a>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400">
        © 2026 Kronex SpA. Todos los derechos reservados.
      </footer>
    </main>
  );
}