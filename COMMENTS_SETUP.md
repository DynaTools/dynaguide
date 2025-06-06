# Sistema de Comentários - Instruções de Configuração

O sistema de comentários usando Giscus foi implementado no projeto. Para ativá-lo completamente, siga estes passos:

## 🚀 Status Atual

✅ **Implementado:**
- Componente GiscusComments.tsx criado
- Integração com tema claro/escuro do Docusaurus
- Wrapper DocItem configurado para páginas específicas
- Dependência @giscus/react instalada

⚠️ **Pendente:**
- Habilitar GitHub Discussions no repositório
- Configurar IDs do Giscus
- Testar funcionalidade completa

## 1. Habilitar GitHub Discussions

1. Vá para o repositório: **https://github.com/DynaTools/dynaguide**
2. Clique em **Settings** (Configurações)
3. Role para baixo até a seção **Features**  
4. Marque a caixa **Discussions**
5. Clique em **Set up discussions** quando aparecer
6. Crie as categorias:
   - **💬 General** - Para comentários gerais
   - **💡 Sugestões** - Para melhorias de conteúdo
   - **❓ Q&A** - Para perguntas e respostas

## 2. Configurar Giscus

1. Acesse: **https://giscus.app/**
2. Na seção **Repository**, digite: `DynaTools/dynaguide`
3. Aguarde a verificação automática ✅
4. Em **Page ↔️ Discussions Mapping**, escolha: **pathname**
5. Em **Discussion Category**, escolha: **General** (ou a categoria criada)
6. Em **Features**, marque:
   - ✅ Enable reactions for the main post
   - ✅ Place the comment box above the comments
7. Em **Theme**, deixe em **Preferred color scheme**

O site gerará automaticamente um código. **Copie os valores de `data-repo-id` e `data-category-id`.**

## 3. Atualizar o Código

Edite o arquivo `/src/components/GiscusComments.tsx` e substitua as linhas vazias:

```typescript
repo="DynaTools/dynaguide"
repoId="COLE_AQUI_O_REPO_ID_DO_GISCUS" // Exemplo: "R_kgDOH..."
category="General" 
categoryId="COLE_AQUI_O_CATEGORY_ID_DO_GISCUS" // Exemplo: "DIC_kwDOH..."
```

## 4. Remover Mensagem Temporária

Após configurar os IDs, remova ou comente o bloco da mensagem temporária:

```typescript
{/* Mensagem temporária - REMOVER após configuração */}
<div style={{...}}>
  <strong>🚧 Sistema de comentários em configuração</strong>
  ...
</div>
```

## 4. Personalizar Páginas com Comentários

O sistema está configurado para mostrar comentários nas seguintes páginas:
- Todas as páginas de Fundamentos de IA
- Todas as páginas de Prompts

Para adicionar comentários em outras páginas, edite o array `enableCommentsFor` em `/src/theme/DocItem/index.tsx`.

## 5. Testar

Após a configuração, os comentários aparecerão automaticamente nas páginas especificadas, permitindo que os usuários:
- Façam comentários
- Respondam a outros comentários  
- Adicionem reações
- Façam sugestões

## Vantagens do Giscus

- ✅ Gratuito e sem anúncios
- ✅ Comentários ficam salvos no GitHub
- ✅ Suporte a tema claro/escuro automático
- ✅ Moderação através do GitHub
- ✅ Notificações automáticas para mantenedores
- ✅ Suporte a Markdown nos comentários

## Alternativas

Se preferir não usar GitHub Discussions, outras opções incluem:
- **Utterances** (usa GitHub Issues)
- **Disqus** 
- **Facebook Comments**
