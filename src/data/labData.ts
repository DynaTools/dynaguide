/**
 * Lab section metadata and utilities
 */

export const labMetadata = {
  title: "Laboratório DynaGuide",
  description: "Experimentos práticos com Dynamo, Revit e automação no setor AEC",
  keywords: ["revit", "dynamo", "família", "fractal", "automação", "BIM", "AEC"],
  og: {
    title: "🧪 Laboratório de Experimentos - DynaGuide",
    description: "Tutoriais hands-on e soluções criativas para o setor de Arquitetura, Engenharia e Construção",
    image: "/dynaguide/img/lab-social-card.jpg"
  }
};

export const tutorials = [
  {
    id: "familia-pivo",
    title: "Família Revit Fractal - Sistema de Rotação Universal",
    description: "Sistema de pivô fractal para rotação universal de elementos",
    difficulty: "intermediario-avancado",
    duration: "45-60 min",
    tools: ["Revit", "Famílias"],
    tags: ["revit", "família", "fractal", "rotação", "tutorial"]
  }
];

export const categories = {
  "familias-revit": {
    label: "🏗️ Famílias Revit Avançadas",
    description: "Técnicas avançadas para criação de famílias paramétricas"
  },
  "automacao-dynamo": {
    label: "⚡ Automação com Dynamo", 
    description: "Scripts e fluxos de trabalho para automação"
  },
  "integracao-ia": {
    label: "🤖 Integração com IA",
    description: "Combinando IA com ferramentas de modelagem"
  }
};
