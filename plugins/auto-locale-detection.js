module.exports = function (context, options) {
  return {
    name: 'auto-locale-detection',
    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: 'script',
            innerHTML: `
              (function() {
                // Executar apenas no browser
                if (typeof window === 'undefined') return;
                
                // Verificar se já existe uma preferência de idioma
                var hasPreference = localStorage.getItem('docusaurus.tab.locale') ||
                                   sessionStorage.getItem('docusaurus.tab.locale') ||
                                   document.cookie.includes('docusaurus.locale');
                
                // Se já tem preferência, não fazer detecção automática
                if (hasPreference) return;
                
                // Verificar se estamos na página inicial (incluindo baseUrl)
                var currentPath = window.location.pathname;
                var baseUrl = '/dynaguide/';
                var isHomePage = currentPath === baseUrl || 
                                currentPath === baseUrl.slice(0, -1) ||
                                currentPath === '/' ||
                                (currentPath === baseUrl && !currentPath.includes('/it'));
                
                if (!isHomePage) return;
                
                // Detectar idioma do usuário
                var userLang = navigator.language || navigator.languages && navigator.languages[0] || 'pt-BR';
                
                // Mapear para locales suportados
                var langMap = {
                  'it': 'it',
                  'it-IT': 'it',
                  'it-CH': 'it',
                  'it-SM': 'it',
                  'it-VA': 'it'
                };
                
                var detectedLocale = langMap[userLang] || (userLang.startsWith('it') ? 'it' : 'pt-BR');
                
                // Se detectou italiano e não estamos na versão italiana
                if (detectedLocale === 'it' && !currentPath.includes('/it')) {
                  // Redirecionar para versão italiana mantendo o baseUrl
                  var newPath = baseUrl + 'it' + (currentPath === baseUrl ? '' : currentPath.replace(baseUrl, ''));
                  window.location.href = newPath + window.location.search + window.location.hash;
                }
              })();
            `,
          },
        ],
      };
    },
  };
};
