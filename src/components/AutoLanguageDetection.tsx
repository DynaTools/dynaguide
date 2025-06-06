import React, { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';

// Hook personalizado para detecção automática de idioma
export function useAutoLanguageDetection() {
  const location = useLocation();

  useEffect(() => {
    // Executar apenas no cliente
    if (typeof window === 'undefined') return;

    // Verificar se o usuário já fez uma escolha manual de idioma
    const hasUserPreference = localStorage.getItem('docusaurus.tab.locale') ||
                             sessionStorage.getItem('docusaurus.tab.locale');

    // Se o usuário já tem preferência, não fazer detecção automática
    if (hasUserPreference) return;

    // Não fazer detecção se já estamos em uma versão localizada
    if (location.pathname.includes('/it/')) return;

    // Detectar apenas na página inicial
    if (location.pathname !== '/' && location.pathname !== '/dynaguide/') return;

    const userLanguage = navigator.language || navigator.languages?.[0] || 'pt-BR';
    
    // Mapear idiomas para locales suportados
    const languageToLocale = {
      'it': 'it',
      'it-IT': 'it',
      'it-CH': 'it',
      'it-SM': 'it',
      'it-VA': 'it',
      'pt': 'pt-BR',
      'pt-BR': 'pt-BR',
      'pt-PT': 'pt-BR',
    };

    const detectedLocale = languageToLocale[userLanguage] || 
                          (userLanguage.startsWith('it') ? 'it' : 'pt-BR');

    // Se detectou italiano e não estamos na versão italiana
    if (detectedLocale === 'it' && !location.pathname.startsWith('/it')) {
      // Redirecionar para a versão italiana
      const newPath = `/it${location.pathname === '/' ? '' : location.pathname}${location.search}${location.hash}`;
      window.location.href = newPath;
    }
  }, [location]);
}

// Componente wrapper que aplica a detecção
export default function AutoLanguageWrapper({ children }) {
  useAutoLanguageDetection();
  return children;
}
