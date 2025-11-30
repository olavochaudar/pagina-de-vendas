import React from 'react';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Carlos Mendes",
      role: "Copywriter Freelancer",
      image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      text: "Eu gastava 4 horas por dia escrevendo e-mails para clientes. Com o método do Clone Digital, faço em 20 minutos e a conversão dos meus clientes aumentou drasticamente."
    },
    {
      id: 2,
      name: "Fernanda Lima",
      role: "Criadora de Conteúdo",
      image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      text: "Finalmente uma IA que fala como eu! Meus seguidores nem perceberam a diferença, só elogiaram a constância das postagens. O módulo de storylearning é genial."
    },
    {
      id: 3,
      name: "Roberto Silva",
      role: "Dono de Agência",
      image: "https://i.pravatar.cc/150?u=a042581f4e29026024d3",
      text: "O módulo de 'Personalidade' vale o preço sozinho. Consegui escalar meu time de redação mantendo a voz única de cada cliente da agência. Recomendo demais!"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Resultados Reais de <span className="text-blue-600">Alunos Reais</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Veja como produtores de conteúdo, copywriters e empresários estão economizando tempo e vendendo mais.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 italic leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4 pt-4 border-t border-slate-50">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-slate-100"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                  <span className="text-xs text-slate-500 font-medium uppercase tracking-wide">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};