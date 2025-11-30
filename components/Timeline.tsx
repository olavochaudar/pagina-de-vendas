import React from 'react';
import { Download, Copy, TrendingUp, CheckCircle2 } from 'lucide-react';

export const Timeline: React.FC = () => {
  const steps = [
    {
      icon: <Download className="w-6 h-6 text-white" />,
      title: "1. Baixe o Material",
      desc: "Receba o Ebook imediatamente no seu e-mail após a compra, pronto para ler."
    },
    {
      icon: <Copy className="w-6 h-6 text-white" />,
      title: "2. Copie e Cole",
      desc: "Escolha o modelo de post ou e-mail que você precisa, preencha as lacunas e gere na IA."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      title: "3. Publique e Venda",
      desc: "Tenha conteúdo infinito e persuasivo para atrair clientes todos os dias, sem esforço."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Como funciona?</h2>
          <p className="text-slate-600 mt-2">Sem aulas longas. Sem configuração técnica. Direto ao ponto.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-blue-100 -z-10"></div>

          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-200 mb-6 border-4 border-white z-10">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto border border-blue-100">
           <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <div className="bg-green-500 p-3 rounded-full flex-shrink-0">
                 <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <div>
                 <h4 className="text-xl font-bold text-slate-900">Perfeito para iniciantes</h4>
                 <p className="text-slate-700 mt-1">
                    Você não precisa saber programar nem ser um especialista em IA. Se você sabe conversar no WhatsApp, você consegue usar nosso método.
                 </p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};