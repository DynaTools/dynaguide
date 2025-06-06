---
sidebar_position: 1
---

# Cos'è un Prompt?

Sapete quando state lavorando in Revit e dovete spiegare a un nuovo stagista come fare un determinato compito? Non dite semplicemente "fallo", vero? Date istruzioni specifiche: "Prendi lo strumento muro, seleziona questo tipo strutturale qui, disegna con 3 metri di altezza...". È così che funziona anche con l'intelligenza artificiale.

Un prompt è fondamentalmente questo: l'istruzione che date a un'IA per farla funzionare [1]. È il vostro modo di "conversare" con questi sistemi intelligenti, dicendo esattamente cosa volete che facciano. Può sembrare semplice, ma è qui che sta la differenza tra ottenere un risultato incredibile o sbattere la testa con risposte che non hanno senso.

Ora, potreste pensare: "Ma il prompt non è solo testo?" Beh, qui arriva una sorpresa interessante. Così come in Revit potete lavorare con piante, sezioni, 3D, immagini e persino importare file da altri programmi, anche i prompt possono essere molto vari. Potete "alimentare" un'IA con testo semplice come "scrivi un'email di presentazione per un cliente", ma potete anche mandare una foto di un disegno tecnico fatto a mano e chiedere "cosa significa questa marcatura?", o persino inviare l'audio di una riunione chiedendo un riassunto dei punti principali [1].

La cosa più affascinante è che tutto questo funziona perché queste IA sono state addestrate per comprendere pattern. È come se avessero "visto" milioni di esempi di conversazioni, testi, immagini e imparato a riconoscere cosa le persone generalmente si aspettano come risposta. Quando scrivete "aiutami a calcolare l'area di questo ambiente", l'IA non sta facendo magia - sta applicando pattern che ha imparato da situazioni simili.

Ma fermiamoci un momento per assorbire questo: probabilmente state già facendo prompting senza saperlo. Ogni volta che digitate qualcosa su Google, state creando una specie di prompt. La differenza è che con le IA generative moderne, potete essere molto più specifici e conversazionali. Invece di parole chiave spezzettate come "calcolo area revit comando", potete semplicemente chiedere "Come faccio a calcolare automaticamente le aree degli ambienti nel mio progetto di Revit?"

Qui entra un concetto interessante che vale la pena conoscere: il template di prompt. Pensatelo come una famiglia di Revit, ma per istruzioni [2]. Così come create una famiglia di porta che può essere riutilizzata in vari progetti cambiando solo le dimensioni, un template di prompt è una struttura che potete riutilizzare cambiando solo alcune variabili.

Per esempio, immaginate di dover sempre scrivere specifiche tecniche per diversi materiali. Invece di iniziare da zero ogni volta, potreste creare un template così: "Scrivi una specifica tecnica per \{MATERIALE\}, considerando l'uso in \{TIPO_DI_AMBIENTE\}, con focus su \{CARATTERISTICHE_PRINCIPALI\}". Poi basta sostituire le parti tra parentesi graffe secondo la necessità. Oggi lo usate per "calcestruzzo armato" in "area esterna" focalizzando su "durabilità", domani per "cartongesso" in "area interna" focalizzando su "isolamento acustico".

L'interessante è che i prompt hanno componenti ben definiti, un po' come gli elementi di un progetto architettonico. C'è l'istruzione principale (che sarebbe come il programma di necessità), ci sono esempi che aiutano l'IA a comprendere lo stile che volete (come i riferimenti di progetto), ci sono specifiche di formato (se volete la risposta in lista, paragrafo, tabella...), e persino istruzioni di "personalità" - potete chiedere all'IA di rispondere come se fosse un ingegnere esperto o un consulente specializzato.

Una cosa che ho imparato nella pratica è che la chiarezza è tutto. Così come un progetto mal dettagliato genera dubbi nel cantiere, un prompt vago genera risposte generiche e poco utili. Quanto più specifici siete su quello che vi serve, migliore sarà il risultato.

E qui sta il trucco: il prompting non è una scienza esatta, è più come una conversazione iterativa. Fate una domanda, vedete la risposta, affiniate la domanda basandovi su quello che avete ricevuto, e continuate ad aggiustare fino ad arrivare dove volete. È esattamente come quando state spiegando un concetto a qualcuno - andate adattando la vostra spiegazione man mano che percepite se la persona sta capendo o no.

Questo ci porta naturalmente al prossimo passo del nostro viaggio: se ora sapete già cos'è un prompt, è arrivato il momento di scoprire come creare prompt davvero efficaci. Perché una cosa è sapere che dovete dare istruzioni chiare all'IA, un'altra cosa è padroneggiare le tecniche che fanno funzionare queste istruzioni come per magia. Ed è esattamente questo che esploreremo quando ci immergeremo nelle tecniche basilari di prompting.

## Riferimenti Citati in Questa Sezione

[1] B. Meskó. 2023. Prompt engineering as an important emerging skill for medical professionals: Tutorial. Journal of Medical Internet Research, 25(Suppl 1):e50638.; Jules White, Quchen Fu, Sam Hays, Michael Sandborn, Carlos Olea, Henry Gilbert, Ashraf Elnashar, Jesse Spencer-Smith, and Douglas C. Schmidt. 2023. A prompt pattern catalog to enhance prompt engineering with chatgpt.; T.F. Heston and C. Khun. 2023. Prompt engineering in medical education. Int. Med. Educ., 2:198-205.; Muhammad Usman Hadi, Qasem Al Tashi, Rizwan Qureshi, Abbas Shah, Amgad Muneer, Muhammad Irfan, and et al. 2023. Large language models: A comprehensive survey of its applications, challenges, limitations, and future prospects. TechRxiv.; Tom B. Brown, Benjamin Mann, Nick Ryder, Melanie Subbiah, Jared Kaplan, Prafulla Dhariwal, Arvind Neelakantan, Pranav Shyam, Girish Sastry, Amanda Askell, Sandhini Agarwal, Ariel Herbert-Voss, Gretchen Krueger, Tom Henighan, Rewon Child, Aditya Ramesh, Daniel M. Ziegler, Jeffrey Wu, Clemens Winter, Christopher Hesse, Mark Chen, Eric Sigler, Mateusz Litwin, Scott Gray, Benjamin Chess, Jack Clark, Christopher Berner, Sam McCandlish, Alec Radford, Ilya Sutskever, and Dario Amodei. 2020. Language models are few-shot learners.

[2] Taylor Shin, Yasaman Razeghi, Robert L. Logan IV, Eric Wallace, and Sameer Singh. 2020b. Autoprompt: Eliciting knowledge from language models with automatically generated prompts. Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing (EMNLP).
