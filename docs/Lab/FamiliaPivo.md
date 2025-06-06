---
sidebar_position: 1
---

# Tutorial: Família Revit Fractal - Sistema de Rotação Universal

![Conceito Inicial](./img/image.png)

<div style={{textAlign: 'center', marginBottom: '2rem'}}>

![Sistema de Rotação Universal](./img/OrbitFamily-ezgif.com-video-to-gif-converter.gif)

</div>

## Conceito

:::info Inspiração
O conceito de criar uma família giratória em qualquer ângulo parecia impossível até descobrir uma técnica avançada de famílias adaptativas. Este tutorial simplifica o processo para criar uma família de painel fotovoltaico que pode rotacionar em qualquer ângulo.
:::

O princípio é similar ao de uma **morsa fractal**, onde cada peça giratória está conectada à outra, permitindo movimento em múltiplos eixos:

<div style={{textAlign: 'center', margin: '1.5rem 0'}}>

![Morsa Fractal - Conceito](./img/image-1.png)

</div>

:::tip Conceito Chave
Para que o sistema se adapte a qualquer elemento, utilizamos peças giratórias conectadas sequencialmente. Implementaremos isso usando o comando **Revolve** do Revit.
::: 

## Parte 1: Criando a Família Pivô Fractal

### 1. Criar Nova Família

<div className="steps-container">

- Abra o Revit
- Crie uma nova família (**Generic Model Adaptive** ou **Metric Generic Model**)
- Defina os planos de referência base

</div>

<div style={{textAlign: 'center', margin: '1.5rem 0'}}>

![Criando Nova Família](./img/image-2.png)

</div>

### 2. Criar o Primeiro Revolve

<div className="steps-container">

- Desenhe o perfil para o revolve
- Use a ferramenta **Revolve** para criar a primeira peça giratória
- Configure o eixo de rotação

</div>

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', margin: '1.5rem 0'}}>

![Perfil do Revolve](./img/image-3.png)

![Configuração do Revolve](./img/image-4.png)

![Primeiro Revolve](./img/image-5.png)

</div>

<div style={{textAlign: 'center', margin: '1rem 0'}}>

![Resultado Primeiro Revolve](./img/image-6.png)

![Visualização 3D](./img/image-7.png)

</div>

### 3. Adicionar Parâmetros Angulares

:::warning Importante
Crie parâmetros claros para controlar a rotação. Isso é fundamental para o controle paramétrico do sistema.
:::

<div className="steps-container">

- Crie parâmetros de ângulo para controlar a rotação
- Associe os parâmetros ao revolve
- Configure as fórmulas necessárias

</div>

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', margin: '1.5rem 0'}}>

![Criando Parâmetros](./img/image-8.png)

![Configuração de Parâmetros](./img/image-9.png)

![Associando Parâmetros](./img/image-10.png)

![Teste de Rotação](./img/image-11.png)

</div>

### 4. Aplicar Workplane no Revolve

:::danger Passo Crítico
Este é o passo mais importante! O workplane aplicado na superfície do primeiro revolve será a base para o próximo elemento.
:::

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', margin: '1.5rem 0'}}>

![Aplicando Workplane](./img/image-12.png)

![Configuração do Workplane](./img/image-13.png)

![Workplane Posicionado](./img/image-14.png)

</div>

### 5. Criar Segundo Revolve em Direção Diferente

<div className="steps-container">

- Com o workplane ativo, crie outro revolve
- Oriente este revolve em uma direção diferente (perpendicular, por exemplo)
- Configure seus próprios parâmetros angulares

</div>

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', margin: '1.5rem 0'}}>

![Segundo Revolve](./img/image-15.png)

![Configuração Perpendicular](./img/image-16.png)

![Sistema Completo](./img/image-17.png)

</div>

### 6. Configurar Relação Entre os Revolves

<div className="steps-container">

- Estabeleça a relação paramétrica entre os elementos
- **Teste**: quando um gira, o outro deve acompanhar mantendo sua orientação relativa
- Ajuste as constraints conforme necessário

</div>

<div style={{textAlign: 'center', margin: '1.5rem 0'}}>

![Teste de Movimento](./img/image-18.png)

</div>

### 7. Salvar a Família Pivô

<div className="steps-container">

- Salve esta família com um nome descritivo (ex: `Pivo_Fractal_Base`)
- Esta será sua família de controle rotacional

</div>

<div style={{textAlign: 'center', margin: '1.5rem 0'}}>

![Salvando a Família](./img/image-19.png)

</div>
## Parte 2: Aplicando o Sistema Face-Based

### 8. Criar ou Abrir Família Face-Based

<div className="steps-container">

- Crie uma nova família ou use uma existente (ex: painel fotovoltaico)
- Escolha o template **Face-Based**
- Modele o elemento desejado (painel, placa, etc.)

</div>

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', margin: '1.5rem 0'}}>

![Template Face-Based](./img/image-20.png)

![Painel Modelado](./img/image-21.png)

</div>

### 9. Inserir no Projeto

<div className="steps-container">

- Carregue ambas as famílias no projeto
- Primeiro, insira a família pivô fractal
- Configure os ângulos iniciais

</div>

### 10. Aplicar Família Face-Based

:::tip Aplicação Final
- Selecione a família face-based
- **Aplique na face do último revolve** da família pivô
- A família face-based agora seguirá toda a rotação do sistema
:::

---

## Vantagens do Método

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', margin: '2rem 0'}}>

<div style={{padding: '1.5rem', border: '1px solid var(--ifm-color-emphasis-200)', borderRadius: '8px'}}>
<h4>🎯 Controle Total</h4>
<p>Controle completo sobre a rotação em múltiplos eixos</p>
</div>

<div style={{padding: '1.5rem', border: '1px solid var(--ifm-color-emphasis-200)', borderRadius: '8px'}}>
<h4>🔧 Flexibilidade</h4>
<p>Adicione quantos níveis de rotação desejar</p>
</div>

<div style={{padding: '1.5rem', border: '1px solid var(--ifm-color-emphasis-200)', borderRadius: '8px'}}>
<h4>♻️ Reutilização</h4>
<p>O pivô pode ser usado com diferentes elementos face-based</p>
</div>

<div style={{padding: '1.5rem', border: '1px solid var(--ifm-color-emphasis-200)', borderRadius: '8px'}}>
<h4>📐 Precisão</h4>
<p>Ângulos exatos definidos parametricamente</p>
</div>

</div>

## Dicas Práticas

:::note Boas Práticas
1. **Nomeação**: Use nomes claros para os parâmetros (ex: `Rotacao_Eixo_X`, `Rotacao_Eixo_Y`)
2. **Teste Incremental**: Teste cada nível de rotação antes de adicionar o próximo
3. **Performance**: Limite o número de revolves para manter boa performance
4. **Visibilidade**: Configure a visibilidade do pivô para ocultá-lo quando necessário
:::

## Aplicações Práticas

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', margin: '1.5rem 0'}}>

- 🌞 Painéis fotovoltaicos com orientação precisa
- 🏢 Brises ajustáveis  
- 🎨 Elementos de fachada dinâmicos
- ⚙️ Equipamentos mecânicos com múltiplos graus de liberdade
- 💡 Luminárias direcionáveis

</div>

## Resultado Final

:::success Sistema Completo
Você terá um sistema onde:
- ✅ A família pivô controla toda a rotação
- ✅ O elemento face-based (painel) acompanha perfeitamente o movimento  
- ✅ Pode-se ajustar ângulos em múltiplas direções
- ✅ O sistema é totalmente paramétrico e reutilizável
:::