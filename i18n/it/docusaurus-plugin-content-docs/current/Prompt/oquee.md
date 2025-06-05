---
sidebar_position: 1
---

# O que é Prompt?

Sabe quando você está trabalhando no Revit e precisa explicar para um novo estagiário como fazer uma determinada tarefa? Você não simplesmente fala "faça aí", né? Você dá instruções específicas: "Pegue a ferramenta de parede, selecione esse tipo estrutural aqui, desenhe com 3 metros de altura...". É assim que funciona com a inteligência artificial também.

Um prompt é basicamente isso: a instrução que você dá para uma IA funcionar [1]. É o seu jeito de "conversar" com esses sistemas inteligentes, dizendo exatamente o que você quer que eles façam. Pode parecer simples, mas é aí que mora a diferença entre conseguir um resultado incrível ou ficar batendo cabeça com respostas que não fazem sentido.

Agora, você pode estar pensando: "Mas prompt não é só texto?" Bom, aqui vem uma surpresa interessante. Assim como no Revit você pode trabalhar com plantas, cortes, 3D, imagens e até importar arquivos de outros programas, os prompts também podem ser bem variados. Você pode "alimentar" uma IA com texto simples como "escreva um email de apresentação para um cliente", mas também pode mandar uma foto de um desenho técnico feito à mão e pedir "o que significa essa marcação?", ou até mesmo enviar o áudio de uma reunião pedindo um resumo dos pontos principais [1].

O mais fascinante é que isso tudo funciona porque essas IAs foram treinadas para entender padrões. É como se elas tivessem "visto" milhões de exemplos de conversas, textos, imagens e aprendido a reconhecer o que as pessoas geralmente esperam como resposta. Quando você escreve "me ajude a calcular a área deste ambiente", a IA não está fazendo mágica - ela está aplicando padrões que aprendeu de situações similares.

Mas vamos parar um momento para absorver isso: você provavelmente já está fazendo prompting sem saber. Toda vez que você digita algo no Google, você está criando uma espécie de prompt. A diferença é que com as IAs generativas modernas, você pode ser muito mais específico e conversacional. Em vez de palavras-chave picadas como "cálculo área revit comando", você pode simplesmente perguntar "Como faço para calcular automaticamente as áreas dos ambientes no meu projeto do Revit?"

Aqui entra um conceito interessante que vale a pena conhecer: o template de prompt. Pense nele como uma família do Revit, mas para instruções [2]. Assim como você cria uma família de porta que pode ser reutilizada em vários projetos apenas mudando as dimensões, um template de prompt é uma estrutura que você pode reutilizar mudando apenas algumas variáveis.

Por exemplo, imagine que você sempre precisa escrever especificações técnicas para diferentes materiais. Em vez de começar do zero toda vez, você poderia criar um template assim: "Escreva uma especificação técnica para \{MATERIAL\}, considerando uso em \{TIPO_DE_AMBIENTE\}, com foco em \{CARACTERÍSTICAS_PRINCIPAIS\}". Aí é só substituir as partes entre chaves conforme a necessidade. Hoje você usa para "concreto armado" em "área externa" focando em "durabilidade", amanhã para "gesso acartonado" em "área interna" focando em "isolamento acústico".

O interessante é que os prompts têm componentes bem definidos, meio como os elementos de um projeto arquitetônico. Tem a instrução principal (que seria como o programa de necessidades), tem exemplos que ajudam a IA a entender o estilo que você quer (como as referências de projeto), tem especificações de formato (se você quer a resposta em lista, parágrafo, tabela...), e até instruções de "personalidade" - você pode pedir para a IA responder como se fosse um engenheiro experiente ou um consultor especializado.

Uma coisa que aprendi na prática é que a clareza é tudo. Assim como um projeto mal detalhado gera dúvidas na obra, um prompt vago gera respostas genéricas e pouco úteis. Quanto mais específico você for sobre o que precisa, melhor será o resultado.

E aqui está o pulo do gato: prompting não é uma ciência exata, é mais como uma conversa iterativa. Você faz uma pergunta, vê a resposta, refina a pergunta baseado no que recebeu, e vai ajustando até chegar onde quer. É exatamente como quando você está explicando um conceito para alguém - você vai adaptando sua explicação conforme percebe se a pessoa está entendendo ou não.

Isso nos leva naturalmente ao próximo passo da nossa jornada: se agora você já sabe o que é um prompt, chegou a hora de descobrir como criar prompts realmente eficazes. Porque uma coisa é saber que você precisa dar instruções claras para a IA, outra coisa é dominar as técnicas que fazem essas instruções funcionarem como mágica. E é exatamente isso que vamos explorar quando mergulharmos nas técnicas básicas de prompting.

## Referências Citadas Nesta Seção

[1] B. Meskó. 2023. Prompt engineering as an important emerging skill for medical professionals: Tutorial. Journal of Medical Internet Research, 25(Suppl 1):e50638.; Jules White, Quchen Fu, Sam Hays, Michael Sandborn, Carlos Olea, Henry Gilbert, Ashraf Elnashar, Jesse Spencer-Smith, and Douglas C. Schmidt. 2023. A prompt pattern catalog to enhance prompt engineering with chatgpt.; T.F. Heston and C. Khun. 2023. Prompt engineering in medical education. Int. Med. Educ., 2:198-205.; Muhammad Usman Hadi, Qasem Al Tashi, Rizwan Qureshi, Abbas Shah, Amgad Muneer, Muhammad Irfan, and et al. 2023. Large language models: A comprehensive survey of its applications, challenges, limitations, and future prospects. TechRxiv.; Tom B. Brown, Benjamin Mann, Nick Ryder, Melanie Subbiah, Jared Kaplan, Prafulla Dhariwal, Arvind Neelakantan, Pranav Shyam, Girish Sastry, Amanda Askell, Sandhini Agarwal, Ariel Herbert-Voss, Gretchen Krueger, Tom Henighan, Rewon Child, Aditya Ramesh, Daniel M. Ziegler, Jeffrey Wu, Clemens Winter, Christopher Hesse, Mark Chen, Eric Sigler, Mateusz Litwin, Scott Gray, Benjamin Chess, Jack Clark, Christopher Berner, Sam McCandlish, Alec Radford, Ilya Sutskever, and Dario Amodei. 2020. Language models are few-shot learners.

[2] Taylor Shin, Yasaman Razeghi, Robert L. Logan IV, Eric Wallace, and Sameer Singh. 2020b. Autoprompt: Eliciting knowledge from language models with automatically generated prompts. Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing (EMNLP).