---
sidebar_position: 4
---
# Agentes: Quando a IA Ganha Ferramentas

Você já se pegou pensando como seria incrível se o Revit pudesse, sozinho, buscar informações na internet sobre um material específico que você está especificando? Ou melhor ainda: se ele pudesse calcular automaticamente os custos atualizados de um projeto, fazer verificações de código de obras e ainda gerar um relatório completo - tudo isso enquanto você toma um café?

Sabe o que é mais interessante? Essa realidade não está tão distante quanto parece. Na verdade, ela já existe através de algo que chamamos de "agentes" - sistemas de IA que não apenas processam e geram texto, mas que conseguem interagir com o mundo ao seu redor, usando ferramentas externas para resolver problemas complexos.

Pense comigo: até agora, conversamos sobre como os modelos de linguagem são impressionantes em entender e gerar texto. Mas eles têm suas limitações - são como aquele colega super inteligente que sabe de tudo, mas que nunca sai do escritório. Ele pode te dar conselhos fantásticos sobre qualquer assunto, mas não consegue ligar para o fornecedor para você ou acessar a planilha de custos atualizada da empresa.

## O que Exatamente são Agentes?

No contexto da inteligência artificial generativa, definimos agentes como sistemas que servem aos objetivos do usuário através de ações que se conectam com sistemas externos ao modelo de linguagem [39]. É como dar superpoderes ao nosso "colega inteligente" - agora ele não só conhece as respostas, mas pode efetivamente buscar informações, usar calculadoras, acessar bancos de dados e executar tarefas práticas.

Para ficar mais claro, vamos a um exemplo simples: imagine que você pergunta a um agente: "Se Ana tem 4.939 uvas e dá exatamente 39% delas para Amy, quantas sobram?" Um modelo de linguagem tradicional tentaria fazer esse cálculo na "cabeça" e poderia errar com números grandes. Já um agente adequadamente configurado poderia gerar algo como "CALC(4,939*0.39)" e então usar uma calculadora externa para obter a resposta exata [39]. 

Pode parecer um detalhe pequeno, mas essa capacidade de usar ferramentas externas abre um mundo de possibilidades. Os agentes podem resolver problemas que envolvem tanto raciocínio quanto a necessidade de acessar recursos externos, como a calculadora, ferramentas de busca na internet, bases de dados ou até mesmo executar código [40][41][42].

## Os Diferentes Tipos de Agentes

Assim como existem diferentes tipos de profissionais em um escritório de arquitetura - cada um com suas especialidades - também temos diferentes tipos de agentes, cada um otimizado para tipos específicos de tarefas.

### Agentes que Usam Ferramentas

O primeiro tipo são os agentes focados no uso de ferramentas. Eles são como aquele profissional que conhece todos os softwares e consegue usar cada um na hora certa.

Um dos sistemas mais elegantes nessa categoria é o MRKL (Modular Reasoning, Knowledge, and Language System) [43]. É um nome complicado para uma ideia simples: ter um modelo de linguagem que funciona como um "roteador inteligente", decidindo qual ferramenta usar para cada situação. Precisa de informações sobre o clima? Ele acessa um serviço meteorológico. Precisa da data atual? Consulta um calendário. Precisa fazer cálculos complexos? Usa uma calculadora. E depois combina todas essas informações para dar uma resposta completa.

Há também uma abordagem interessante chamada CRITIC (Self-Correcting with Tool-Interactive Critiquing) [44]. Este agente primeiro gera uma resposta inicial, depois a critica identificando possíveis erros, e finalmente usa ferramentas externas - como busca na internet ou interpretadores de código - para verificar e corrigir sua resposta. É como ter um revisor interno que não só identifica problemas, mas sai para conferir os fatos.

### Agentes que Programam

Outro grupo fascinante são os agentes que escrevem e executam código. Para quem trabalha com Revit, isso pode soar familiar - afinal, muitos de vocês já usam Dynamo ou até mesmo programação em Python para automatizar tarefas.

O PAL (Program-aided Language Model) [45] representa bem essa categoria. Em vez de tentar resolver um problema diretamente, ele traduz o problema para código Python e executa esse código para obter a resposta. É como ter um programador interno que converte suas perguntas em scripts funcionais.

Já o ToRA (Tool-Integrated Reasoning Agent) [46] vai um passo além. Em vez de apenas escrever código uma vez, ele alterna entre raciocínio e programação quantas vezes for necessário, refinando sua abordagem até resolver completamente o problema. É especialmente útil para problemas matemáticos complexos - imagine as possibilidades para cálculos estruturais ou análises energéticas!

O Task Weaver [47] adiciona ainda outra camada de sofisticação: não só transforma solicitações do usuário em código, mas também pode usar plugins personalizados. É como ter um sistema que se adapta às ferramentas específicas do seu escritório.

### Agentes Observadores

Uma terceira categoria são os agentes baseados em observação, que interagem com ambientes específicos e aprendem através da experiência.

O ReAct (Reasoning and Acting) [48] exemplifica essa abordagem elegantemente. Ele segue um ciclo simples mas poderoso: pensa sobre o problema, executa uma ação, observa o resultado, e repete esse processo até resolver a questão. Todas essas informações ficam disponíveis na sua "memória de trabalho", permitindo que aprenda com cada tentativa.

O Reflexion [49] adiciona uma camada de introspecção a esse processo. Após completar uma tarefa, ele avalia se foi bem-sucedido ou não, gera uma reflexão sobre o que funcionou ou falhou, e guarda essa análise para uso futuro. É como ter um profissional que não apenas executa tarefas, mas que aprende sistematicamente com cada projeto.

Particularmente interessantes são os agentes de aprendizado vitalício, como o Voyager [50]. Desenvolvido inicialmente para jogar Minecraft, ele propõe tarefas para si mesmo, gera código para executá-las, e salva as soluções bem-sucedidas numa memória de longo prazo. O conceito pode ser aplicado em situações reais onde um agente precisa explorar e aprender continuamente - imagine um sistema que aprende gradualmente a otimizar processos no seu escritório.

O GITM (Ghost in the Minecraft) [51] segue filosofia similar, mas com uma abordagem mais estruturada: parte de um objetivo, decompõe-o em subobjetivos, e executa ações planejadas usando uma base de conhecimento externa e memória de experiências passadas.

### Agentes de Recuperação de Informação

Por fim, temos uma categoria especialmente relevante para profissionais que lidam com grandes volumes de informação: os agentes RAG (Retrieval Augmented Generation).

Esses sistemas combinam a capacidade de geração de texto com busca inteligente de informações [52]. Em essência, eles primeiro recuperam informações relevantes de fontes externas e depois as incorporam no processo de geração de resposta.

O Verify-and-Edit [53] usa essa abordagem para melhorar a consistência das respostas. Ele gera múltiplas cadeias de raciocínio, seleciona algumas para edição, busca informações relevantes externamente, e permite que o modelo refine suas respostas com base nessas informações adicionais.

Já técnicas como o FLARE [54] e IRP [55] fazem recuperação iterativa durante a geração de textos longos. Eles seguem um processo em três etapas: geram uma frase temporária como plano, usam essa frase para buscar conhecimento externo, e então incorporam o conhecimento recuperado na frase final. Isso é especialmente útil para documentos técnicos que precisam ser tanto informativos quanto precisos.

## Conectando com Sua Realidade

Agora, você pode estar se perguntando: "Ok, isso tudo parece incrível, mas como isso se aplica ao meu trabalho com Revit?" A resposta é mais direta do que imagina.

Imagine um agente que consegue:
- Buscar automaticamente especificações atualizadas de materiais na internet
- Calcular custos em tempo real usando bases de dados de fornecedores
- Verificar se seu projeto atende aos códigos de obra locais consultando regulamentações online
- Gerar relatórios técnicos combinando informações do modelo com dados externos
- Aprender com cada projeto para sugerir otimizações futuras

Não estamos falando de ficção científica. Estamos falando de tecnologia que já existe e que está sendo refinada rapidamente.

## O Horizonte que se Aproxima

Conforme avançamos nessa jornada tecnológica, os agentes representam uma evolução natural da IA - de sistemas que apenas "conversam" para sistemas que efetivamente "fazem". Eles nos aproximam de um futuro onde as ferramentas de design não são apenas passivas, mas se tornam colaboradores ativos no processo criativo.

Mas, como toda tecnologia poderosa, os agentes trazem consigo novos desafios e considerações importantes. Como garantir que eles façam apenas o que pretendemos? Como proteger nossos dados quando eles interagem com sistemas externos? Como manter controle sobre processos cada vez mais automatizados?

Essas questões nos levam naturalmente ao próximo capítulo da nossa conversa: os desafios de segurança e as considerações éticas que acompanham o poder crescente da inteligência artificial. Porque, como você logo verá, com grandes poderes vêm grandes responsabilidades - e algumas surpresas que você talvez não esperasse.

## Referências Citadas Nesta Seção

[39] Zhang, Z., Yao, Y., Zhang, A., Tang, X., Ma, X., He, Z., Wang, Y., Gerstein, M., Wang, R., Liu, G., & Zhao, H. (2023). Igniting language intelligence: The hitchhiker's guide from chain-of-thought reasoning to language agents.

[40] Adept. (2023). Act-1.

[41] Karpas, E., Abend, O., Belinkov, Y., Lenz, B., Lieber, O., Ratner, N., Shoham, Y., Bata, H., Levine, Y., Leyton-Brown, K., Muhlgay, D., Rozen, N., Schwartz, E., Shachaf, G., Shalev-Shwartz, S., Shashua, A., & Tenenholtz, M. (2022). Mrkl systems: A modular, neurosymbolic architecture that combines large language models, external knowledge sources and discrete reasoning.

[42] Brockman, G., Cheung, V., Pettersson, L., Schneider, J., Schulman, J., Tang, J., & Zaremba, W. (2016). Openai gym.

[43] Karpas, E., Abend, O., Belinkov, Y., Lenz, B., Lieber, O., Ratner, N., Shoham, Y., Bata, H., Levine, Y., Leyton-Brown, K., Muhlgay, D., Rozen, N., Schwartz, E., Shachaf, G., Shalev-Shwartz, S., Shashua, A., & Tenenholtz, M. (2022). Mrkl systems: A modular, neurosymbolic architecture that combines large language models, external knowledge sources and discrete reasoning.

[44] Gou, Z., Shao, Z., Gong, Y., shen, y., Yang, Y., Duan, N., & Chen, W. (2024). CRITIC: Large language models can self-correct with tool-interactive critiquing. In The Twelfth International Conference on Learning Representations.

[45] Gao, L., Madaan, A., Zhou, S., Alon, U., Liu, P., Yang, Y., Callan, J., & Neubig, G. (2023). Pal: program-aided language models. In Proceedings of the 40th International Conference on Machine Learning, ICML'23. JMLR.org.

[46] Gou, Z., Shao, Z., Gong, Y., shen, y., Yang, Y., Huang, M., Duan, N., & Chen, W. (2024). ToRA: A tool-integrated reasoning agent for mathematical problem solving. In The Twelfth International Conference on Learning Representations.

[47] Qiao, B., Li, L., Zhang, X., He, S., Kang, Y., Zhang, C., Yang, F., Dong, H., Zhang, J., Wang, L., Ma, M.-J., Zhao, P., Qin, S., Qin, X., Du, C., Xu, Y., Lin, Q., Rajmohan, S., & Zhang, D. (2023). Taskweaver: A code-first agent framework. ArXiv, abs/2311.17541.

[48] Yao, S., Zhao, J., Yu, D., Du, N., Shafran, I., Narasimhan, K., & Cao, Y. (2022). React: Synergizing reasoning and acting in language models.

[49] Shinn, N., Cassano, F., Berman, E., Gopinath, A., Narasimhan, K., & Yao, S. (2023). Reflexion: Language agents with verbal reinforcement learning.

[50] Wang, G., Xie, Y., Jiang, Y., Mandlekar, A., Xiao, C., Zhu, Y., Fan, L., & Anandkumar, A. (2023). Voyager: An open-ended embodied agent with large language models.

[51] Zhu, X., Chen, Y., Tian, H., Tao, C., Su, W., Yang, C., Huang, G., Li, B., Lu, L., Wang, X., Qiao, Y., Zhang, Z., & Dai, J. (2023). Ghost in the minecraft: Generally capable agents for open-world environments via large language models with text-based knowledge and memory.

[52] Lewis, P., Perez, E., Piktus, A., Petroni, F., Karpukhin, V., Goyal, N., Küttler, H., Lewis, M., Yih, W., Rocktäschel, T., Riedel, S., & Kiela, D. (2021). Retrieval-augmented generation for knowledge-intensive nlp tasks.

[53] Zhao, R., Li, X., Joty, S., Qin, C., & Bing, L. (2023). Verify-and-edit: A knowledge-enhanced chain-of-thought framework. In Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), pages 5823-5840, Toronto, Canada. Association for Computational Linguistics.

[54] Jiang, Z., Xu, F. F., Gao, L., Sun, Z., Liu, Q., Dwivedi-Yu, J., Yang, Y., Callan, J., & Neubig, G. (2023). Active retrieval augmented generation. In Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing, pages 7969–7992, Singapore. Association for Computational Linguistics.

[55] Balepur, N., Huang, J., & Chang, K. (2023). Expository text generation: Imitate, retrieve, paraphrase. In Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing, pages 11896–11919, Singapore. Association for Computational Linguistics.