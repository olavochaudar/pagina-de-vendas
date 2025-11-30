import React, { useState } from 'react';
import { ToneType } from '../types';
import { rewriteContent } from '../services/geminiService';
import { Sparkles, Send, RefreshCw } from 'lucide-react';

export const DemoSection: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [selectedTone, setSelectedTone] = useState<ToneType>(ToneType.PROFESSIONAL);
  const [outputText, setOutputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleRewrite = async () => {
    if (!inputText.trim()) return;
    
    setIsLoading(true);
    const result = await rewriteContent(inputText, selectedTone);
    setOutputText(result);
    setIsLoading(false);
  };

  return (
    <section id="demo" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Abstract bg */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-700 via-slate-900 to-slate-950"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-semibold border border-purple-500/30">
              Test Drive da Tecnologia
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-2">
              Veja seu <span className="text-purple-400">Clone Digital</span> em Ação
            </h2>
            <p className="text-slate-400">
              Digite uma frase simples e veja como a IA a transforma usando diferentes "personas".
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 md:p-8 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Input */}
              <div className="flex flex-col gap-4">
                <label className="text-sm font-medium text-slate-300">1. Sua ideia bruta (Rascunho)</label>
                <textarea
                  className="w-full h-32 bg-slate-900/80 border border-slate-600 rounded-lg p-4 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                  placeholder="Ex: Eu vendo consultoria de marketing e ajudo empresas a crescerem."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />

                <label className="text-sm font-medium text-slate-300">2. Escolha o Tom de Voz</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {Object.values(ToneType).map((tone) => (
                    <button
                      key={tone}
                      onClick={() => setSelectedTone(tone)}
                      className={`px-3 py-2 rounded-lg text-xs font-medium text-left transition-all ${
                        selectedTone === tone
                          ? 'bg-purple-600 text-white border-purple-500 shadow-[0_0_15px_rgba(147,51,234,0.3)]'
                          : 'bg-slate-800 text-slate-400 border border-slate-700 hover:bg-slate-700'
                      }`}
                    >
                      {tone}
                    </button>
                  ))}
                </div>

                <button
                  onClick={handleRewrite}
                  disabled={isLoading || !inputText}
                  className="mt-2 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-3 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                  {isLoading ? (
                    <>
                      <RefreshCw className="w-5 h-5 animate-spin" />
                      Processando...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      Gerar com IA
                    </>
                  )}
                </button>
              </div>

              {/* Output */}
              <div className="flex flex-col gap-4">
                <label className="text-sm font-medium text-slate-300">3. Resultado do Clone</label>
                <div className="flex-1 bg-gradient-to-b from-slate-800 to-slate-900 border border-purple-500/30 rounded-lg p-6 relative group min-h-[250px] flex items-center justify-center">
                  {!outputText && !isLoading && (
                    <div className="text-center text-slate-500">
                      <Send className="w-10 h-10 mx-auto mb-2 opacity-20" />
                      <p className="text-sm">O resultado aparecerá aqui.</p>
                    </div>
                  )}
                  {isLoading && (
                    <div className="space-y-3 w-full animate-pulse">
                      <div className="h-4 bg-slate-700 rounded w-3/4"></div>
                      <div className="h-4 bg-slate-700 rounded w-full"></div>
                      <div className="h-4 bg-slate-700 rounded w-5/6"></div>
                    </div>
                  )}
                  {outputText && !isLoading && (
                    <div className="w-full h-full flex flex-col justify-start text-left">
                       <div className="text-xs text-purple-400 mb-2 uppercase tracking-wider font-bold">
                        Saída Gerada ({selectedTone})
                       </div>
                       <p className="text-white text-lg leading-relaxed whitespace-pre-wrap">
                        {outputText}
                       </p>
                    </div>
                  )}
                  
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 p-2">
                     <div className="w-2 h-2 bg-purple-500 rounded-full animate-ping"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};