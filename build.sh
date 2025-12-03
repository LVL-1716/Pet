#!/bin/bash

# Pet&Style - Script de Build para Produção
# Este script automiza o processo de otimização e deploy

echo "🐾 Pet&Style - Build para Produção"
echo "======================================"
echo ""

# Verificar se Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não encontrado. Por favor, instale Node.js."
    exit 1
fi

echo "✅ Node.js encontrado: $(node --version)"
echo ""

# Instalar dependências
echo "📦 Instalando dependências..."
npm install sharp --save-dev

echo ""
echo "🖼️  Otimizando imagens..."

# Executar script de otimização
node optimize-images.js

echo ""
echo "✅ Build concluído!"
echo ""
echo "📝 Próximas etapas:"
echo "1. Inicie o servidor: npx http-server -p 8000"
echo "2. Abra http://localhost:8000 no Chrome"
echo "3. Abra DevTools (F12) e vá para a aba Lighthouse"
echo "4. Clique em 'Analyze page load' para ver os resultados"
echo ""
echo "📊 Para comparar antes e depois:"
echo "- Anote os scores ANTES das otimizações"
echo "- Aplicar as otimizações (já foram aplicadas)"
echo "- Gere novo relatório para comparação"
echo ""
