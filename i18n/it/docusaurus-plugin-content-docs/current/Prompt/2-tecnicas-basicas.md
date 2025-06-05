---
sidebar_position: 2
---
# Técnicas Básicas de Prompting

Imagine que você está explicando para um novo estagiário como criar uma vista de corte no Revit. Você não simplesmente diz "crie uma vista de corte" – isso seria como dar uma instrução vaga que provavelmente resultaria em frustração. Em vez disso, você guia: "Primeiro, vá até a aba Arquitetura, depois clique em Corte, posicione a linha onde você quer o corte, e ajuste a profundidade da vista." Esse processo de dar instruções claras e estruturadas é exatamente o que fazemos quando trabalhamos com inteligência artificial através do prompting.

A diferença é que, em vez de ensinar um estagiário, estamos "conversando" com um modelo de linguagem. E assim como diferentes situações no escritório pedem diferentes tipos de orientação – às vezes você mostra fazendo junto, outras vezes você deixa a pessoa tentar sozinha com dicas pontuais – existem diferentes técnicas de prompting para diferentes necessidades. O que pode parecer como um simples "bate-papo" com a IA na verdade envolve estratégias bem definidas que podem fazer a diferença entre obter uma resposta genérica ou uma solução realmente útil para seu projeto.

Vamos começar pelo mais básico. Pense comigo: quando você está trabalhando em um projeto complexo, como você aborda? Provavelmente não tenta resolver tudo de uma vez. Você quebra em etapas, talvez olha projetos similares que já fez, ou pede a opinião de colegas mais experientes. As técnicas de prompting seguem essa mesma lógica natural de resolução de problemas.

## Aprendizado em Contexto: Mostrando pelo Exemplo

A primeira técnica que vale conhecer é o que chamamos de **aprendizado em contexto** ou ICL (In-Context Learning). É como quando você mostra para alguém como fazer algo ao invés de apenas explicar com palavras [3]. Sabe quando você precisa ensinar um colega a configurar uma nova família no Revit? Você provavelmente não começa com um manual – você abre o programa e faz junto com ele, mostrando cada passo.

Com a IA funciona de forma similar. Em vez de simplesmente pedir "me ajude com este cálculo de área", você pode mostrar um exemplo primeiro: "Veja, para um ambiente de 4m x 3m, a área é 12m². Agora me ajude a calcular a área deste outro ambiente de 5,5m x 2,8m." Esse "mostrar fazendo" é incrivelmente poderoso.

### Few-Shot: Aprendendo com Alguns Exemplos

Dentro do aprendizado em contexto, temos o que chamamos de **few-shot learning** – literalmente "aprendizado com poucos tiros" [3]. É como se você estivesse dando alguns exemplos práticos antes de fazer sua pergunta real. Imagina que você quer que a IA te ajude a descrever ambientes para um memorial descritivo. Em vez de simplesmente pedir "descreva este ambiente", você pode fazer assim:

*"Veja alguns exemplos de como gosto de descrever ambientes:
- Sala: ambiente amplo com 20m², destinado ao convívio familiar, com acesso direto ao terraço.
- Cozinha: área de 12m² integrada à sala de jantar, otimizada para funcionalidade e praticidade.

Agora me ajude a descrever este escritório de 15m² com vista para o jardim."*

A quantidade de exemplos importa. Pesquisas mostram que geralmente mais exemplos levam a melhores resultados, especialmente com modelos maiores [3]. Mas cuidado com a ordem – o jeito como você organiza os exemplos pode influenciar bastante a resposta. É como quando você está mostrando diferentes soluções de projeto: a ordem em que você apresenta pode influenciar qual direção a pessoa vai seguir.

### Zero-Shot: Direto ao Ponto

Nem sempre você precisa dar exemplos. Às vezes, uma instrução clara e direta já resolve – isso é o **zero-shot prompting** [5]. É como quando você pede para alguém experiente "me gere um cronograma básico para esta reforma" e a pessoa já sabe exatamente o que fazer, mesmo sem exemplos específicos.

O truque aqui está na clareza da instrução. Em vez de "me ajude com este projeto", seja específico: "liste as principais etapas para reforma de um apartamento de 80m², incluindo prazos estimados e interdependências entre tarefas." A especificidade compensa a falta de exemplos.

## Chain-of-Thought: Pensando Passo a Passo

Aqui chegamos a uma das técnicas mais poderosas: o **Chain-of-Thought** ou CoT [4]. É basicamente pedir para a IA "mostrar o raciocínio" – como quando você pede para um projetista junior não apenas entregar o resultado, mas explicar como chegou até ele.

Imagina que você está calculando a quantidade de cerâmica para um banheiro. Em vez de simplesmente perguntar "quantos metros quadrados de cerâmica preciso?", você pode pedir: "Me ajude a calcular a quantidade de cerâmica para este banheiro. Pense passo a passo: primeiro calcule a área das paredes, depois desconte as aberturas, e finalmente adicione a margem de segurança."

A pesquisa mostra que isso funciona especialmente bem para problemas que envolvem matemática e raciocínio lógico [4]. É como se você estivesse forçando a IA a "mostrar o trabalho" – e isso geralmente leva a respostas mais precisas.

### Zero-Shot-CoT: O Poder do "Pense Passo a Passo"

Uma descoberta interessante é que às vezes basta adicionar "pense passo a passo" ou "vamos pensar sobre isso sistematicamente" ao final do seu prompt [5]. Parece simples demais para funcionar, mas os resultados são impressionantes. É como dar uma dica sutil para a pessoa organizar melhor o pensamento antes de responder.

## Decomposição: Dividindo Problemas Complexos

Você conhece aquela sensação quando um projeto parece grande demais e você não sabe nem por onde começar? A **decomposição** é exatamente a estratégia que você provavelmente já usa: quebrar o problema grande em pedaços menores e mais gerenciáveis [6].

Uma técnica específica chamada **Least-to-Most Prompting** funciona assim: primeiro você pede para identificar as subquestões, depois resolve cada uma em sequência [7]. É como fazer um cronograma detalhado – você não tenta resolver tudo de uma vez, mas vai construindo a solução camada por camada.

## Múltiplas Perspectivas: Ensembling

Sabe quando você tem uma dúvida técnica e pede opinião para dois ou três colegas experientes? Cada um pode dar uma perspectiva ligeiramente diferente, e comparando as respostas você forma uma visão mais completa. Isso é **ensembling** [8].

Com IA, você pode fazer a mesma pergunta de formas ligeiramente diferentes e comparar as respostas. Uma técnica chamada **Self-Consistency** faz exatamente isso: gera várias respostas e escolhe a que aparece mais vezes [9]. É como uma "votação" entre diferentes versões da mesma solução.

## Autocrítica: Checando o Próprio Trabalho

Uma das técnicas mais interessantes é a **autocrítica** – pedir para a IA revisar e melhorar sua própria resposta [10]. É como quando você termina um desenho técnico e depois faz uma revisão crítica, procurando inconsistências ou melhorias possíveis.

Você pode pedir algo como: "Agora revise esta solução e me diga se há algo que poderia ser melhorado ou se esqueci algum ponto importante." A IA vai analisar sua própria resposta com um olhar crítico, muitas vezes identificando problemas que passaram despercebidos na primeira versão.

## Na Prática: Escolhendo a Técnica Certa

Mas o que isso significa na prática? Como saber qual técnica usar quando? É como escolher a ferramenta certa para cada situação no Revit – não existe uma única resposta, mas há algumas diretrizes úteis.

Para perguntas diretas e objetivas, zero-shot costuma funcionar bem. Quando você precisa de consistência em um tipo específico de resposta (como sempre formatar orçamentos da mesma maneira), few-shot com bons exemplos é seu melhor amigo. Para problemas complexos que envolvem cálculos ou múltiplas etapas, chain-of-thought faz a diferença.

E não tenha medo de combinar técnicas. Você pode começar com alguns exemplos (few-shot), pedir para pensar passo a passo (CoT), e depois solicitar uma revisão crítica (autocrítica). É como usar várias ferramentas do Revit juntas para chegar no resultado desejado.

O importante é experimentar e ver o que funciona melhor para seus tipos específicos de perguntas. Cada modelo de IA tem suas particularidades, assim como cada versão do Revit tem suas próprias características. O que funciona perfeitamente com um pode precisar de pequenos ajustes com outro.

## Referências Citadas Nesta Seção

[3] Brown, T. B., Mann, B., Ryder, N., Subbiah, M., Kaplan, J., Dhariwal, P., ... & Amodei, D. (2020). Language models are few-shot learners.

[4] Wei, J., Wang, X., Schuurmans, D., Bosma, M., Ichter, B., Xia, F., ... & Zhou, D. (2022). Chain-of-thought prompting elicits reasoning in large language models.

[5] Kojima, T., Gu, S. S., Reid, M., Matsuo, Y., & Iwasawa, Y. (2022). Large language models are zero-shot reasoners.

[6] Khot, T., Trivedi, H., Finlayson, M., Fu, Y., Richardson, K., Clark, P., & Sabharwal, A. (2022). Decomposed prompting: A modular approach for solving complex tasks.

[7] Zhou, D., Schärli, N., Hou, L., Wei, J., Scales, N., Wang, X., ... & Le, Q. (2022). Least-to-most prompting enables complex reasoning in large language models.

[8] Khalifa, M., Logeswaran, L., Lee, M., Lee, H., & Wang, L. (2023). Exploring demonstration ensembling for in-context learning.

[9] Wang, X., Wei, J., Schuurmans, D., Le, Q., Chi, E., Narang, S., ... & Zhou, D. (2022). Self-consistency improves chain of thought reasoning in language models.

[10] Madaan, A., Tandon, N., Gupta, P., Hallinan, S., Gao, L., Wiegreffe, S., ... & Clark, P. (2023). Self-refine: Iterative refinement with self-feedback.