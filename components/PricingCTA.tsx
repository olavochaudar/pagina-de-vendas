import React from 'react';
import { Check, Star } from 'lucide-react';

export const PricingCTA: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
          <div className="grid md:grid-cols-2">
            <div className="p-10 md:p-12 bg-slate-900 text-white flex flex-col justify-between relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full mix-blend-overlay filter blur-3xl opacity-20 -mr-16 -mt-16"></div>
              
              <div>
                <div className="inline-flex items-center gap-1 bg-yellow-400/20 border border-yellow-400/30 text-yellow-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-6">
                  <Star className="w-3 h-3 fill-yellow-300" />
                  Oferta Especial
                </div>
                <h3 className="text-3xl font-bold mb-4">Pacote Completo</h3>
                <p className="text-slate-300 mb-6">
                  Tudo o que você precisa para destravar seu conteúdo ainda hoje por menos de uma pizza.
                </p>
                <div className="space-y-3">
                  {['Ebook Clone Digital (PDF)', '50+ Modelos de Texto Prontos', 'Checklist de Personalidade', 'Acesso Vitalício'].map(item => (
                    <div key={item} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-400" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-8">
                <p className="text-sm text-slate-400">Entrega imediata via e-mail</p>
              </div>
            </div>

            <div className="p-10 md:p-12 flex flex-col justify-center items-center text-center">
              <h4 className="text-slate-500 font-medium uppercase tracking-wider text-sm mb-2">De <span className="line-through">R$ 97,00</span> por apenas</h4>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-extrabold text-slate-900">R$ 49</span>
                <span className="text-xl text-slate-500">,00</span>
              </div>
              
              <a 
                href="https://pay.hotmart.com/M103205036S"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-green-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-green-600/30 hover:bg-green-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 text-lg"
              >
                Baixar Ebook Agora
              </a>
              
              <p className="mt-4 text-xs text-slate-500">
                Pagamento único. Sem mensalidades. <br/> Compra 100% segura.
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12 max-w-2xl mx-auto">
          <p className="text-slate-600 italic">
            "Não existe risco. Se você não gostar do conteúdo, devolvemos seu dinheiro em até 7 dias."
          </p>
        </div>
      </div>
    </section>
  );
};