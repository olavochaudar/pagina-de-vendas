import React from 'react';
import { ArrowRight, BookOpen, Download } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-slate-900 pt-20 pb-24 lg:pt-32 lg:pb-40">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 -right-24 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-20 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/50 border border-blue-700 text-blue-100 text-sm font-medium mb-8">
          <BookOpen className="w-4 h-4 text-yellow-400" />
          <span>Ebook Prático de Implementação Rápida</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
          O Guia Definitivo do <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Clone Digital</span>
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-300">
          Aprenda a usar a Inteligência Artificial para escrever posts, e-mails e ofertas com a <strong>sua voz</strong>. Sem sistemas complexos, apenas copie, cole e venda.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="https://pay.hotmart.com/M103205036S" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
          >
            Baixar Agora por R$ 49,00
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#modules" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white transition-all duration-200 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 focus:outline-none">
            <Download className="mr-2 w-5 h-5" />
            Ver o que está incluso
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-8 text-slate-400">
          <div>
            <span className="block text-2xl font-bold text-white">+1.000</span>
            <span className="text-sm">Alunos Satisfeitos</span>
          </div>
          <div>
            <span className="block text-2xl font-bold text-white">50+</span>
            <span className="text-sm">Modelos Prontos</span>
          </div>
          <div>
            <span className="block text-2xl font-bold text-white">Leitura</span>
            <span className="text-sm">Rápida e Prática</span>
          </div>
          <div>
            <span className="block text-2xl font-bold text-white">Acesso</span>
            <span className="text-sm">Imediato (PDF)</span>
          </div>
        </div>
      </div>
    </section>
  );
};