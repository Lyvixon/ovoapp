import React from 'react';
import { Check, X } from 'lucide-react';

interface Row {
  feature: string;
  appValue: string;
  appStatus: boolean;
  pdfValue: string;
  pdfStatus: boolean;
}

export default function ComparisonTable() {
  const rows: Row[] = [
    {
      feature: "Salvamento de progresso diário",
      appValue: "Sim, salva automático onde parou",
      appStatus: true,
      pdfValue: "Não, você se perde entre as páginas",
      pdfStatus: false
    },
    {
      feature: "Favoritar receitas prediletas",
      appValue: "Sim, aba exclusiva de favoritos em 1 clique",
      appStatus: true,
      pdfValue: "Não, precisa caçar de novo ou dar print",
      pdfStatus: false
    },
    {
      feature: "Acesso em tela cheia no celular",
      appValue: "Sim, sem abas de navegador (igual app nativo)",
      appStatus: true,
      pdfValue: "Não, precisa abrir leitor de PDF e dar zoom",
      pdfStatus: false
    },
    {
      feature: "Lista de compras inteligente semanal",
      appValue: "Sim, dinâmica e separada por semana",
      appStatus: true,
      pdfValue: "Não, lista estática difícil de ajustar",
      pdfStatus: false
    },
    {
      feature: "Espaço gasto na memória do celular",
      appValue: "Zero, roda direto do navegador sem download",
      appStatus: true,
      pdfValue: "Consome memória e vive perdido nos downloads",
      pdfStatus: false
    },
    {
      feature: "Atualizações futuras inclusas",
      appValue: "Sim, novas receitas entram sozinhas sem taxa",
      appStatus: true,
      pdfValue: "Não, precisaria comprar outro arquivo",
      pdfStatus: false
    },
    {
      feature: "Timer de cozinha interativo",
      appValue: "Sim, integrado em cada receita",
      appStatus: true,
      pdfValue: "Não, precisa usar aplicativo externo",
      pdfStatus: false
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-3xl border border-stone-200/80 shadow-md overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-brand-egg/50">
              <th className="py-5 px-6 font-bold text-sm text-brand-ink uppercase tracking-wider w-1/3">Recurso</th>
              <th className="py-5 px-6 font-bold text-sm text-brand-green-dark bg-brand-green/5 border-x border-stone-200/20 text-center w-1/3">
                📱 Nosso Aplicativo Móvel
              </th>
              <th className="py-5 px-6 font-bold text-sm text-brand-ink-light text-center w-1/3">
                📄 PDFs e E-books Comuns
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {rows.map((row, idx) => (
              <tr key={idx} className="hover:bg-brand-egg/20 transition-colors">
                <td className="py-4 px-6 text-[14.5px] font-bold text-brand-ink leading-snug">
                  {row.feature}
                </td>
                <td className="py-4 px-6 bg-brand-green/2 border-x border-stone-200/10 text-center">
                  <div className="flex flex-col items-center justify-center gap-1">
                    <span className="w-6 h-6 rounded-full bg-brand-green/20 text-brand-green-dark flex items-center justify-center">
                      <Check className="w-4 h-4 stroke-[3px]" />
                    </span>
                    <span className="text-xs font-bold text-brand-green-dark">
                      {row.appValue}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-6 text-center">
                  <div className="flex flex-col items-center justify-center gap-1">
                    <span className="w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center">
                      <X className="w-4 h-4 stroke-[3px]" />
                    </span>
                    <span className="text-xs text-brand-ink-light font-medium">
                      {row.pdfValue}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
