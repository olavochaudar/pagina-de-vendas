import React from 'react';
import { XCircle, AlertTriangle } from 'lucide-react';

export const PainPoints: React.FC = () => {
  const problems = [
    "Você trava na frente da tela em branco sem saber o que postar",
    "Seus textos feitos no ChatGPT parecem robóticos e sem graça",
    "Você perde horas escrevendo e-mails que ninguém abre",
    "Falta criatividade para criar ofertas que vendem",
    "Você acha que precisa ser um expert em tecnologia para usar IA"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            A IA deveria facilitar sua vida, não complicar.
          </h2>
          <p className="text-lg text-slate-600 italic">
            "Todo mundo fala para usar IA, mas quando eu uso, o texto fica genérico e meus clientes percebem que não fui eu que escrevi."
          </p>
          <div className="mt-6 inline-block bg-red-50 text-red-700 px-6 py-2 rounded-full font-semibold border border-red-100">
            A solução não é um software caro, é saber pedir (Comandos Certos).
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <AlertTriangle className="text-orange-500" />
              O ciclo da frustração
            </h3>
            <ul className="space-y-4">
              {problems.map((prob, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{prob}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-2xl transform rotate-3 scale-105 -z-10"></div>
            <img 
              src="https://picsum.photos/600/400" 
              alt="Frustrated entrepreneur at computer" 
              className="rounded-2xl shadow-xl w-full object-cover h-80 grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur p-4 rounded-lg shadow-lg max-w-xs">
              <p className="text-sm font-semibold text-slate-800">
                Pare de quebrar a cabeça. O segredo está na forma como você pede.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};