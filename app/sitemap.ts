import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const date = new Date("2026-04-26");

  return [
    {
      url: "https://www.kronex.cl",
      lastModified: date,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://www.kronex.cl/soluciones/cobranzas",
      lastModified: date,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.kronex.cl/recursos",
      lastModified: date,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.kronex.cl/recursos/calculadora-precio-venta",
      lastModified: date,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.kronex.cl/recursos/margen-bruto",
      lastModified: date,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.kronex.cl/recursos/calculadora-iva",
      lastModified: date,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.kronex.cl/recursos/punto-equilibrio",
      lastModified: date,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.kronex.cl/recursos/utilidad-producto",
      lastModified: date,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.kronex.cl/recursos/checklist-cobranza",
      lastModified: date,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}