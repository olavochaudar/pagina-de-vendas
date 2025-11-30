import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
           <h2 className="text-2xl font-bold text-white mb-2">Sistema IA Personalizada Pro</h2>
           <p className="text-sm">Seu clone digital trabalhando enquanto você vive.</p>
        </div>
        <div className="flex justify-center gap-8 text-sm mb-8">
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Suporte</a>
        </div>
        <div className="text-xs text-slate-600">
          &copy; {new Date().getFullYear()} Clone Digital Pro. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};