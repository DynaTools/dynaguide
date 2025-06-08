---
sidebar_position: 3
---
# Beyond English Prompts

Have you ever stopped to think how frustrating it would be if every time you wanted to use Revit, you had to think in English? That's exactly what happens with many AI tools today. The vast majority were trained primarily with English texts, creating an invisible but very real barrier for those who think and work in Portuguese. It's as if you had a super competent assistant, but one that only understands instructions in a foreign language.

But here's the good news: the world of artificial intelligence is expanding far beyond English words. We're entering an era where you can converse with AI in Portuguese, show images of your projects, even use audio or videos as part of your prompts. Think about it... soon you'll be able to simply photograph a hand-drawn sketch and ask AI to transform it into a detailed floor plan in Revit. It sounds like science fiction, but this reality is already knocking at our door.

## The Challenge of Languages

You know when you try to explain something technical to a client and need to "translate" architect-speak into simpler language? With AI, something similar happens, but in reverse. Large language models were fed primarily with English content during their training, which means they naturally "think" better in that language [3][4][5]. It's as if they were architects who only studied at American universities - they know how to do the work, but express themselves better in English.

This difference is more pronounced in languages with fewer resources available online. While English has an abundance of technical texts, tutorials, and documentation, other languages are at a disadvantage [3]. But researchers didn't sit idle in the face of this challenge.

### The Translate First Strategy

One of the most direct approaches is surprisingly simple: translate first, ask later. The "Translate First Prompting" technique works exactly as the name suggests [6]. Imagine you want AI to analyze project specifications that are in Portuguese. Instead of sending them directly in our language, you first translate to English, let the AI process, and then translate the response back.

It might seem like a laborious process, but think of it this way: it's like when we use an interpreter in an international meeting. Sometimes, taking a longer route ensures the message arrives with more clarity. And the best part is you can automate this process - there are several ways to make this translation happen behind the scenes [6][7][8].

### Multilingual Chain of Thought

Remember the Chain-of-Thought technique we saw before? It also gained multilingual versions. The XLT (Cross-Lingual Thought) technique is particularly interesting [9]. It's like having a consultant who first thinks about the problem in their native language, then considers aspects in English where they have more expertise, and finally presents an integrated solution.

Another fascinating approach is CLSP (Cross-Lingual Self Consistent Prompting) [10]. Imagine you're designing a school and want to ensure you've considered all important aspects. With CLSP, AI constructs different reasoning paths in various languages to answer the same question, then compares these perspectives to give a more robust answer. It's like having an international team reviewing your project - each cultural and linguistic perspective can reveal considerations you hadn't thought of.

### Choosing the Template Language

Here's an interesting insight that might change how you interact with AI: even when content is in Portuguese, using English prompt templates often produces better results [11][12]. It's counterintuitive, I know. It's like discovering your project turns out better when you use Revit's default settings in English, even though your interface is in Portuguese.

This happens because there's greater overlap between English templates and the data the model saw during training [11]. On the other hand, when we translate templates to other languages, we sometimes introduce subtle syntax and semantic errors that confuse the model [12].

But it's not an absolute rule. For cases specific to local culture, templates in the native language can be more effective [13][14]. It's a matter of experimenting and seeing what works best for your specific context.

## Beyond Words: The Multimodal World

Now let's enter an area that will make your eyes shine: prompts that go far beyond text. As architects and designers, you are visual people by nature. You think in plans, sections, perspectives, materials. What if I told you that AI is learning to "see" and "understand" these visual languages?

### Image Prompts

The ability to use images as part of prompts is revolutionizing how we interact with AI [15][16][17]. Imagine being able to photograph an interesting facade you saw on the street and ask AI: "How could I adapt elements of this style for a residential project in Brazil, considering the tropical climate?"

"Prompt Modifiers" are words you add to the prompt to modify the visual result [18]. For example, you can specify "V-Ray rendered" or "with natural lighting" to guide the type of visualization you want. It's like giving specific instructions to a renderer, but much faster.

"Negative Prompting" is another powerful tool [19]. You can literally tell AI what NOT to do - "no perspective distortions," "no fantastical elements," "no unreal colors." It's especially useful when you need precise technical visualizations to present to clients.

### Multimodal In-Context Learning

A technique gaining momentum is "Paired-Image Prompting" [20][21]. You show two images to AI - a "before" and an "after" - and it learns the transformation you want to apply. For example, you can show an environment with artificial lighting and the same environment with natural lighting, and then ask it to apply that same transformation to another project of yours.

There's also "Image-as-Text Prompting" [22], where AI first textually describes an image you provided, and then works with that description. It's useful when you want to combine visual analysis with advanced text processing.

### Visual Chain-of-Thought

Just as we have step-by-step reasoning with text, we now have techniques like "Chain-of-Images" [23]. AI can generate a sequence of images showing the development process of a design concept. It's like having an automated timelapse of your creative process.

"DDCoT (Duty Distinct Chain-of-Thought)" [24] divides complex problems into visual sub-questions, solves each separately, and then combines the answers into a final solution. Imagine analyzing a building's site planning by dividing into: solar orientation, prevailing winds, topography, and then integrating everything into a unified proposal.

## Emerging Modalities

### Audio and Video

Although still in early stages, audio prompting is beginning to show potential [25][26][27]. Soon, you'll be able to record a spoken explanation of what you need and AI will understand not only the words, but perhaps even the tone of urgency or enthusiasm in your voice.

Video prompts [28][29][30] open even more interesting possibilities. Imagine being able to send a video of a site walkthrough and ask for site planning suggestions, or show how light changes throughout the day in a space and request project optimizations.

### The 3D World

And here we arrive at an area that should excite any designer: 3D prompting [31][32][33]. The ability to work directly with three-dimensional objects as prompts is emerging. You'll be able to literally send a basic 3D model and ask AI to develop it, texture it, or even animate it.

Possibilities include 3D object synthesis [31][32][33], surface texturing [34][35][36], and even 4D scene generation - that is, animation of three-dimensional environments over time [37][38].

## Preparing for the Future

Let's pause for a moment to absorb all of this. We're talking about a future where you'll be able to work with AI using your native language, your visual references, your sound inspirations, and even your three-dimensional models. It's as if the barrier between your creative mind and digital tools is dissolving.

This doesn't mean English will disappear from the equation - on the contrary, understanding these dynamics will give you more control over when to use each approach. Sometimes you'll want the precision of a well-structured English prompt. Other times, the expressiveness of explaining something in Portuguese will be exactly what you need.

And don't worry if all this seems a bit overwhelming at the moment. Like any new tool, fluency comes with practice. The important thing is to understand that we're entering an era where communication with AI will be much richer and more natural than simply typing commands in English.

These expansions of prompting capabilities naturally lead us to the next topic we'll explore: agents. Because when you master these multiple languages - textual, visual, and even three-dimensional - the next step is learning to combine them in more sophisticated and powerful ways.

## References Cited in This Section

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