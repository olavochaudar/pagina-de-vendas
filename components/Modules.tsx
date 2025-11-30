import React from 'react';
import { 
  Fingerprint, Sparkles, BookOpen, MessageSquare, 
  FileText, Copy, Sliders, DollarSign, Gift 
} from 'lucide-react';
import { ModuleItem } from '../types';

const modules: ModuleItem[] = [
  { id: 1, title: "O Segredo da Personalidade", description: "Como configurar a IA para ela parar de soar como um robô e falar igual a você.", iconName: "Fingerprint" },
  { id: 2, title: "Modelos de Copiar e Colar", description: "O acervo de comandos exatos que eu uso para criar posts virais em segundos.", iconName: "Copy" },
  { id: 3, title: "Conteúdo Infinito", description: "A técnica para transformar 1 ideia em 10 posts para Instagram, LinkedIn e Blog.", iconName: "Sparkles" },
  { id: 4, title: "Copywriting de Vendas", description: "Estruturas prontas para escrever páginas de vendas e anúncios que convertem.", iconName: "DollarSign" },
  { id: 5, title: "Storytelling com IA", description: "Como contar histórias emocionantes que conectam com a audiência usando a IA.", iconName: "BookOpen" },
  { id: 6, title: "E-mails que Vendem", description: "Sequências de e-mail prontas para aquecer leads e fazer ofertas.", iconName: "MessageSquare" },
  { id: 7, title: "Roteiros de Vídeo", description: "Scripts para Reels, TikTok e YouTube feitos sob medida para seu nicho.", iconName: "FileText" },
  { id: 8, title: "Dominando os Comandos", description: "Aprenda a lógica simples para pedir qualquer coisa para a inteligência artificial.", iconName: "Sliders" },
  { id: 9, title: "BÔNUS: Calendário Editorial", description: "Um plano de 30 dias de conteúdo pronto para preencher e postar.", iconName: "Gift" },
];

const IconRenderer: React.FC<{ name: string }> = ({ name }) => {
  const icons: { [key: string]: React.ElementType } = {
    Fingerprint, Sparkles, BookOpen, MessageSquare, 
    FileText, Copy, Sliders, DollarSign, Gift
  };
  const Icon = icons[name] || Sparkles;
  return <Icon className="w-8 h-8 text-white" />;
};

export const Modules: React.FC = () => {
  return (
    <section id="modules" className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-wide text-blue-600 uppercase mb-2">Por dentro do Ebook</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900">
            O que você vai <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Aprender e Aplicar
            </span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module) => (
            <div key={module.id} className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20 relative z-10">
                <IconRenderer name={module.iconName} />
              </div>
              
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {module.title}
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {module.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};