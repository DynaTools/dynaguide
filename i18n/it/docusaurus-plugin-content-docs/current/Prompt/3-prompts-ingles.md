---
sidebar_position: 3
---
# Além dos Prompts em Inglês

Você já parou para pensar como seria frustrante se toda vez que quisesse usar o Revit, tivesse que pensar em inglês? É exatamente isso que acontece com muitas ferramentas de IA hoje. A grande maioria foi treinada principalmente com textos em inglês, criando uma barreira invisível mas muito real para quem pensa e trabalha em português. É como se você tivesse um assistente super competente, mas que só entende instruções em uma língua estrangeira.

Mas aqui vem a boa notícia: o mundo da inteligência artificial está se expandindo muito além das palavras em inglês. Estamos entrando numa era onde você pode conversar com a IA em português, mostrar imagens dos seus projetos, até mesmo usar áudios ou vídeos como parte dos seus prompts. Pense comigo... em breve você poderá simplesmente fotografar um esboço feito à mão e pedir para a IA transformá-lo numa planta baixa detalhada no Revit. Parece ficção científica, mas essa realidade já está batendo na nossa porta.

## O Desafio das Línguas

Sabe quando você tenta explicar algo técnico para um cliente e precisa "traduzir" o arquitetês para uma linguagem mais simples? Com a IA acontece algo parecido, mas ao contrário. Os modelos de linguagem grandes foram alimentados principalmente com conteúdo em inglês durante seu treinamento, o que significa que eles naturalmente "pensam" melhor nessa língua [3][4][5]. É como se fossem arquitetos que estudaram só em universidades americanas - eles sabem fazer o trabalho, mas se expressam melhor em inglês.

Essa diferença é mais pronunciada em idiomas com menos recursos disponíveis online. Enquanto o inglês tem uma abundância de textos técnicos, tutoriais e documentações, outras línguas ficam em desvantagem [3]. Mas os pesquisadores não ficaram de braços cruzados diante desse desafio.

### A Estratégia da Tradução Primeiro

Uma das abordagens mais diretas é surpreendentemente simples: traduzir primeiro, perguntar depois. A técnica "Translate First Prompting" funciona exatamente como o nome sugere [6]. Imagine que você quer que a IA analise as especificações de um projeto que estão em português. Em vez de enviar direto na nossa língua, você primeiro traduz para o inglês, deixa a IA processar, e depois traduz a resposta de volta.

Pode parecer um processo trabalhoso, mas pense assim: é como quando usamos um intérprete numa reunião internacional. Às vezes, dar uma volta mais longa garante que a mensagem chegue com mais clareza. E o melhor é que você pode automatizar esse processo - existem várias formas de fazer essa tradução acontecer nos bastidores [6][7][8].

### Cadeia de Pensamento Multilíngue

Lembra da técnica de Chain-of-Thought que vimos antes? Ela também ganhou versões multilíngues. A técnica XLT (Cross-Lingual Thought) é particularmente interessante [9]. É como ter um consultor que primeiro pensa no problema em sua língua nativa, depois considera aspectos em inglês onde tem mais expertise, e finalmente apresenta uma solução integrada.

Outra abordagem fascinante é a CLSP (Cross-Lingual Self Consistent Prompting) [10]. Imagine que você está projetando uma escola e quer garantir que considerou todos os aspectos importantes. Com CLSP, a IA constrói caminhos de raciocínio diferentes em várias línguas para responder à mesma pergunta, depois compara essas perspectivas para dar uma resposta mais robusta. É como ter uma equipe internacional revisando seu projeto - cada perspectiva cultural e linguística pode revelar considerações que você não havia pensado.

### A Escolha da Língua do Template

Aqui está um insight interessante que pode mudar como você interage com IA: mesmo quando o conteúdo está em português, usar templates de prompt em inglês muitas vezes produz melhores resultados [11][12]. É contraintuitivo, eu sei. É como descobrir que seu projeto fica melhor quando você usa as configurações padrão do Revit em inglês, mesmo que sua interface esteja em português.

Isso acontece porque há uma sobreposição maior entre os templates em inglês e os dados que o modelo viu durante o treinamento [11]. Por outro lado, quando traduzimos templates para outras línguas, às vezes introduzimos erros sutis de sintaxe e semântica que confundem o modelo [12].

Mas não é uma regra absoluta. Para casos específicos da cultura local, templates na língua nativa podem ser mais eficazes [13][14]. É uma questão de experimentar e ver o que funciona melhor para seu contexto específico.

## Além das Palavras: O Mundo Multimodal

Agora vamos entrar numa área que vai fazer seus olhos brilharem: prompts que vão muito além do texto. Como arquitetos e projetistas, vocês são pessoas visuais por natureza. Vocês pensam em plantas, cortes, perspectivas, materiais. E se eu te dissesse que a IA está aprendendo a "ver" e "entender" essas linguagens visuais?

### Prompts com Imagens

A capacidade de usar imagens como parte dos prompts está revolucionando como interagimos com IA [15][16][17]. Imagine poder fotografar uma fachada interessante que você viu na rua e perguntar à IA: "Como eu poderia adaptar elementos deste estilo para um projeto residencial no Brasil, considerando o clima tropical?"

Os "Prompt Modifiers" são palavras que você adiciona ao prompt para modificar o resultado visual [18]. Por exemplo, você pode especificar "renderizado em V-Ray" ou "com iluminação natural" para orientar o tipo de visualização que deseja. É como dar instruções específicas para um renderista, mas de forma muito mais rápida.

O "Negative Prompting" é outra ferramenta poderosa [19]. Você pode literalmente dizer à IA o que NOT fazer - "sem distorções de perspectiva", "sem elementos fantásticos", "sem cores irreais". É especialmente útil quando você precisa de visualizações técnicas precisas para apresentar ao cliente.

### Aprendizado Multimodal em Contexto

Uma técnica que está ganhando força é o "Paired-Image Prompting" [20][21]. Você mostra duas imagens à IA - uma "antes" e uma "depois" - e ela aprende a transformação que você quer aplicar. Por exemplo, você pode mostrar um ambiente com iluminação artificial e o mesmo ambiente com iluminação natural, e depois pedir para ela aplicar essa mesma transformação em outro projeto seu.

Existe também o "Image-as-Text Prompting" [22], onde a IA primeiro descreve textualmente uma imagem que você forneceu, e depois trabalha com essa descrição. É útil quando você quer combinar análise visual com processamento de texto avançado.

### Chain-of-Thought Visual

Assim como temos raciocínio passo-a-passo com texto, agora temos técnicas como o "Chain-of-Images" [23]. A IA pode gerar uma sequência de imagens que mostram o processo de desenvolvimento de um conceito de design. É como ter um timelapse automatizado do seu processo criativo.

O "DDCoT (Duty Distinct Chain-of-Thought)" [24] divide problemas complexos em subquestões visuais, resolve cada uma separadamente, e depois combina as respostas numa solução final. Imagine analisar a implantação de um edifício dividindo em: orientação solar, ventos predominantes, topografia, e depois integrando tudo numa proposta única.

## Modalidades Emergentes

### Áudio e Vídeo

Embora ainda em estágios iniciais, o prompting com áudio está começando a mostrar potencial [25][26][27]. Em breve, você poderá gravar uma explicação falada do que precisa e a IA entenderá não apenas as palavras, mas talvez até o tom de urgência ou entusiasmo na sua voz.

Os prompts com vídeo [28][29][30] abrem possibilidades ainda mais interessantes. Imagine poder enviar um vídeo de um walkthrough do terreno e pedir sugestões de implantação, ou mostrar como a luz muda ao longo do dia num espaço e pedir otimizações do projeto.

### O Mundo 3D

E aqui chegamos numa área que deveria fazer qualquer projetista ficar empolgado: prompting 3D [31][32][33]. A capacidade de trabalhar diretamente com objetos tridimensionais como prompts está nascendo. Você poderá, literalmente, enviar um modelo 3D básico e pedir para a IA desenvolvê-lo, texturizá-lo, ou até mesmo animá-lo.

As possibilidades incluem síntese de objetos 3D [31][32][33], texturização de superfícies [34][35][36], e até geração de cenas 4D - ou seja, animação de ambientes tridimensionais ao longo do tempo [37][38].

## Preparando-se para o Futuro

Vamos parar um momento para absorver isso tudo. Estamos falando de um futuro onde você poderá trabalhar com IA usando sua língua nativa, suas referências visuais, suas inspirações sonoras, e até mesmo seus modelos tridimensionais. É como se a barreira entre sua mente criativa e as ferramentas digitais estivesse se dissolvendo.

Isso não significa que o inglês vai desaparecer da equação - pelo contrário, entender essas dinâmicas te dará mais controle sobre quando usar cada abordagem. Às vezes você vai querer a precisão de um prompt em inglês bem estruturado. Outras vezes, a expressividade de explicar algo em português será exatamente o que você precisa.

E não se preocupe se tudo isso parece um pouco esmagador no momento. Como qualquer ferramenta nova, a fluência vem com a prática. O importante é entender que estamos entrando numa era onde a comunicação com IA vai ser muito mais rica e natural do que simplesmente digitar comandos em inglês.

Essas expansões das capacidades de prompting nos levam naturalmente ao próximo tópico que vamos explorar: agentes. Porque quando você domina essas linguagens múltiplas - textual, visual, e até tridimensional - o próximo passo é aprender a combiná-las de formas mais sofisticadas e poderosas.

## Referências Citadas Nesta Seção

[3] Bang, Y., Cahyawijaya, S., Lee, N., Dai, W., Su, D., Wilie, B., Lovenia, H., Ji, Z., Yu, T., Chung, W., Do, Q. V., Xu, Y., & Fung, P. (2023). A Multitask, Multilingual, Multimodal Evaluation of ChatGPT on Reasoning, Hallucination, and Interactivity. In AACL.

[4] Jiao, W., Wang, W., Huang, J. T., Wang, X., Shi, S., & Tu, Z. (2023). Is chatgpt a good translator? yes with gpt-4 as the engine.

[5] Hendy, A., Abdelrehim, M. G., Sharaf, A., Raunak, V., Gabr, M., Matsushita, H., Kim, Y. J., Afify, M., & Awadalla, H. H. (2023). How good are gpt models at machine translation? a comprehensive evaluation. ArXiv, abs/2302.09210.

[6] Shi, F., Suzgun, M., Freitag, M., Wang, X., Srivats, S., Vosoughi, S., Chung, H. W., Tay, Y., Ruder, S., Zhou, D., Das, D., & Wei, J. (2022). Language models are multilingual chain-of-thought reasoners.

[7] Etxaniz, J., Azkune, G., Soroa, A., Lopez de Lacalle, O., & Artetxe, M. (2023). Do multilingual language models think better in english?

[8] Awasthi, A., Gupta, N., Samanta, B., Dave, S., Sarawagi, S., & Talukdar, P. (2023). Bootstrapping multilingual semantic parsers using large language models. In Proceedings of the 17th Conference of the European Chapter of the Association for Computational Linguistics, pages 2455-2467, Dubrovnik, Croatia. Association for Computational Linguistics.

[9] Huang, H., Tang, T., Zhang, D., Zhao, W. X., Song, T., Xia, Y., & Wei, F. (2023a). Not all languages are created equal in llms: Improving multilingual capability by cross-lingual-thought prompting.

[10] Qin, L., Chen, Q., Wei, F., Huang, S., & Che, W. (2023a). Cross-lingual prompting: Improving zero-shot chain-of-thought reasoning across languages.

[11] Lin, X. V., Mihaylov, T., Artetxe, M., Wang, T., Chen, S., Simig, D., Ott, M., Goyal, N., Bhosale, S., Du, J., Pasunuru, R., Shleifer, S., Koura, P. S., Chaudhary, V., O'Horo, B., Wang, J., Zettlemoyer, L., Kozareva, Z., Diab, M., Stoyanov, V., & Li, X. (2022). Few-shot learning with multilingual generative language models. In Proceedings of the 2022 Conference on Empirical Methods in Natural Language Processing, pages 9019–9052, Abu Dhabi, United Arab Emirates. Association for Computational Linguistics.

[12] Ahuja, K., Diddee, H., Hada, R., Ochieng, M., Ramesh, K., Jain, P., Nambi, A., Ganu, T., Segal, S., Axmed, M., Bali, K., & Sitaram, S. (2023). MEGA: Multilingual Evaluation of Generative AI. In EMNLP.

[13] Asai, A., Kudugunta, S., Yu, X. V., Blevins, T., Gonen, H., Reid, M., Tsvetkov, Y., Ruder, S., & Hajishirzi, H. (2023). BUFFET: Benchmarking Large Language Models for Few-shot Cross-lingual Transfer.

[14] Bai, Y., Lv, X., Zhang, J., Lyu, H., Tang, J., Huang, Z., Du, Z., Liu, X., Zeng, A., Hou, L., Dong, Y., Tang, J., & Li, J. (2023a). Longbench: A bilingual, multitask benchmark for long context understanding.

[15] Gong, Y., Ran, D., Liu, J., Wang, C., Cong, T., Wang, A., Duan, S., & Wang, X. (2023). Figstep: Jailbreaking large vision-language models via typographic visual prompts.

[16] Ding, M., Yang, Z., Hong, W., Zheng, W., Zhou, C., Yin, D., Lin, J., Zou, X., Shao, Z., Yang, H., & Tang, J. (2021). Cogview: Mastering text-to-image generation via transformers. In Advances in Neural Information Processing Systems, volume 34, pages 19822-19835. Curran Associates, Inc.

[17] Hinz, T., Heinrich, S., & Wermter, S. (2022). Semantic object accuracy for generative text-to-image synthesis. IEEE Transactions on Pattern Analysis and Machine Intelligence, 44(3):1552–1565.

[18] Oppenlaender, J. (2023). A taxonomy of prompt modifiers for text-to-image generation.

[19] Schulhoff, S. (2022). Learn Prompting.

[20] Wang, Z., Jiang, Y., Lu, Y., Shen, Y., He, P., Chen, W., Wang, Z., & Zhou, M. (2023k). In-context learning unlocked for diffusion models.

[21] Liu, Y., Chen, X., Ma, X., Wang, X., Zhou, J., Qiao, Y., & Dong, C. (2023e). Unifying image processing as visual prompting question answering.

[22] Hakimov, S., & Schlangen, D. (2023). Images in language space: Exploring the suitability of large language models for vision & language tasks. In Findings of the Association for Computational Linguistics: ACL 2023, pages 14196–14210, Toronto, Canada. Association for Computational Linguistics.

[23] Meng, F., Yang, H., Wang, Y., & Zhang, M. (2023). Chain of images for intuitively reasoning.

[24] Zheng, G., Yang, B., Tang, J., Zhou, H. Y., & Yang, S. (2023b). Ddcot: Duty-distinct chain-of-thought prompting for multimodal reasoning in language models.

[25] Hsu, M. H., Chang, K. W., Li, S. W., & Lee, H. (2023). An exploration of in-context learning for speech language model.

[26] Wang, S., Yang, C. H. H., Wu, J., & Zhang, C. (2023g). Can whisper perform speech-based in-context learning.

[27] Peng, P., Yan, B., Watanabe, S., & Harwath, D. (2023). Prompting the hidden talent of web-scale speech models for zero-shot task generalization.

[28] Brooks, T., Peebles, B., Homes, C., DePue, W., Guo, Y., Jing, L., Schnurr, D., Taylor, J., Luhman, T., Luhman, E., Ng, C. W. Y., Wang, R., & Ramesh, A. (2024). Video generation models as world simulators. OpenAI.

[29] Lv, J., Huang, Y., Yan, M., Huang, J., Liu, J., Liu, Y., Wen, Y., Chen, X., & Chen, S. (2023). Gpt4motion: Scripting physical motions in text-to-video generation via blender-oriented gpt planning.

[30] Liang, J., Fan, Y., Zhang, K., Timofte, R., Van Gool, L., & Ranjan, R. (2023). Movideo: Motion-aware video generation with diffusion models.

[31] Feng, L., Wang, M., Wang, M., Xu, K., & Liu, X. (2023). Metadreamer: Efficient text-to-3d creation with disentangling geometry and texture.

[32] Li, J., Tan, H., Zhang, K., Xu, Z., Luan, F., Xu, Y., Hong, Y., Sunkavalli, K., Shakhnarovich, G., & Bi, S. (2023c). Instant3d: Fast text-to-3d with sparse-view generation and large reconstruction model.

[33] Lin, C. H., Gao, J., Tang, L., Takikawa, T., Zeng, X., Huang, X., Kreis, K., Fidler, S., Liu, M. Y., & Lin, T. Y. (2023). Magic3d: High-resolution text-to-3d content creation.

[34] Liu, Y., Xie, M., Liu, H., & Wong, T. T. (2023g). Text-guided texturing by synchronized multi-view diffusion.

[35] Yang, H., Chen, Y., Pan, Y., Yao, T., Chen, Z., & Mei, T. (2023b). 3dstyle-diffusion: Pursuing fine-grained text-driven 3d stylization with 2d diffusion models.

[36] Le, C., Hetang, C., Cao, A., & He, Y. (2023). Euclidreamer: Fast and high-quality texturing for 3d models with stable diffusion depth.

[37] Singer, U., Sheynin, S., Polyak, A., Ashual, O., Makarov, I., Kokkinos, F., Goyal, N., Vedaldi, A., Parikh, D., Johnson, J., & Taigman, Y. (2023). Text-to-4d dynamic scene generation.

[38] Zhao, Y., Yan, Z., Xie, E., Hong, L., Li, Z., & Lee, G. H. (2023c). Animate124: Animating one image to 4d dynamic scene.