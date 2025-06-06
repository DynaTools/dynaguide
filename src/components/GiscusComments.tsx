import React from 'react';
import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComments(): JSX.Element {
  const { colorMode } = useColorMode();

  return (
    <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--ifm-color-emphasis-300)' }}>
      <h3>💬 Comentários e Sugestões</h3>
      <p style={{ marginBottom: '1rem', color: 'var(--ifm-color-emphasis-700)' }}>
        Compartilhe suas ideias, faça perguntas ou adicione sugestões sobre este conteúdo. 
        Os comentários são públicos e ficam salvos no repositório do projeto.
      </p>
      
      {/* Mensagem temporária enquanto configuramos o Giscus */}
      <div style={{ 
        padding: '1rem', 
        backgroundColor: 'var(--ifm-color-warning-contrast-background)',
        border: '1px solid var(--ifm-color-warning-contrast-foreground)',
        borderRadius: '4px',
        marginBottom: '1rem'
      }}>
        <strong>🚧 Sistema de comentários em configuração</strong>
        <p style={{ marginBottom: 0, marginTop: '0.5rem' }}>
          Para ativar os comentários, você precisa:
          <br />
          1. Habilitar GitHub Discussions no repositório
          <br />
          2. Configurar o Giscus
          <br />
          3. Atualizar os IDs no código
        </p>
      </div>

      <Giscus
        id="comments"
        repo="DynaTools/dynaguide"
        repoId="" // Será preenchido após configuração
        category="General"
        categoryId="" // Será preenchido após configuração
        mapping="pathname"
        term="Comentários sobre esta página"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={colorMode === 'dark' ? 'dark' : 'light'}
        lang="pt"
        loading="lazy"
      />
    </div>
  );
}
