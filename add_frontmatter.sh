#!/bin/bash

# Script para adicionar frontmatter aos arquivos .md da seção Revit API

echo "Adicionando frontmatter aos arquivos da coleção..."

cd /workspaces/dynaguide/docs/revit-api/collection

for file in *.md; do
    if [[ "$file" != "index.md" ]]; then
        echo "Processando: $file"
        
        # Criar arquivo temporário com frontmatter
        {
            echo "---"
            echo "sidebar_position: 2"
            echo "---"
            echo ""
            cat "$file"
        } > "$file.tmp"
        
        # Substituir arquivo original
        mv "$file.tmp" "$file"
    fi
done

echo "Frontmatter adicionado aos arquivos da coleção!"

echo "Adicionando frontmatter aos arquivos da ui-selection..."

cd /workspaces/dynaguide/docs/revit-api/ui-selection

for file in *.md; do
    if [[ "$file" != "index.md" ]]; then
        echo "Processando: $file"
        
        # Criar arquivo temporário com frontmatter
        {
            echo "---"
            echo "sidebar_position: 2"
            echo "---"
            echo ""
            cat "$file"
        } > "$file.tmp"
        
        # Substituir arquivo original
        mv "$file.tmp" "$file"
    fi
done

echo "Frontmatter adicionado aos arquivos da ui-selection!"
echo "Processamento concluído!"
