import React from 'react';
import DocItem from '@theme-original/DocItem';
import type DocItemType from '@theme/DocItem';
import type {WrapperProps} from '@docusaurus/types';
import GiscusComments from '@site/src/components/GiscusComments';

type Props = WrapperProps<typeof DocItemType>;

export default function DocItemWrapper(props: Props): JSX.Element {
  // Obtém metadata do content (funciona de forma mais confiável)
  const { content } = props;
  const { metadata } = content;
  
  // Lista de páginas onde os comentários devem aparecer
  // Você pode personalizar esta lista ou usar uma propriedade no frontmatter
  const enableCommentsFor = [
    '/Fundamentos_de_IA/intro_IA',
    '/Fundamentos_de_IA/grandes_modelos',
    '/Fundamentos_de_IA/aplicar',
    '/Prompt/oquee',
    '/Prompt/2-tecnicas-basicas',
    '/Prompt/3-prompts-ingles',
    '/Prompt/4-agentes',
    '/Prompt/5-seguranca'
  ];

  const shouldShowComments = enableCommentsFor.some(path => 
    metadata.permalink?.includes(path)
  );

  return (
    <>
      <DocItem {...props} />
      {shouldShowComments && <GiscusComments />}
    </>
  );
}
