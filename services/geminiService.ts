export const rewriteContent = async (text: string, tone: string): Promise<string> => {
  // Simulação de delay de rede para manter a experiência de UI
  await new Promise(resolve => setTimeout(resolve, 1000));

  return `[SIMULAÇÃO - API REMOVIDA]

Aqui apareceria o seu texto reescrito com o tom: ${tone}.

Como a integração com a API foi removida conforme solicitado, este é apenas um texto demonstrativo. Na versão completa, a inteligência artificial analisaria "${text}" e geraria uma nova versão criativa.`;
};