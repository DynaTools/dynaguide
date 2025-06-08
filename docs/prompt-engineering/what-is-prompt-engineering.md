---
sidebar_position: 1
---

# What is a Prompt?

You know when you're working in Revit and you need to explain to a new intern how to perform a certain task? You don't just say "get it done," right? You give specific instructions: "Use the wall tool, select this structural type here, draw it at a height of 3 meters...". That's how it works with artificial intelligence, too.

A prompt is basically that: the instruction you give to an AI to get it to perform a task [1]. It's your way of "conversing" with these intelligent systems, telling them exactly what you want them to do. It may seem simple, but this is where the difference lies between getting an incredible result and banging your head against responses that don't make sense.

Now, you might be thinking, "But isn't a prompt just text?" Well, here comes an interesting surprise. Just as in Revit you can work with plans, sections, 3D views, images, and even import files from other programs, prompts can also be quite varied. You can "feed" an AI with simple text like "write an introductory email to a client," but you can also send a photo of a hand-drawn technical sketch and ask "what does this marking mean?", or even send an audio recording of a meeting and ask for a summary of the key points [1].

What's most fascinating is that this all works because these AIs have been trained to understand patterns. It's as if they have "seen" millions of examples of conversations, texts, and images, and have learned to recognize what people generally expect as a response. When you write "help me calculate the area of this room," the AI isn't performing magic—it's applying patterns it learned from similar situations.

Let's pause for a moment to absorb this: you're probably already prompting without realizing it. Every time you type something into Google, you're creating a kind of prompt. The difference is that with modern generative AIs, you can be much more specific and conversational. Instead of choppy keywords like "calculate area revit command," you can simply ask, "How do I automatically calculate the areas of the rooms in my Revit project?"

This brings us to an interesting concept worth knowing: the prompt template. Think of it like a Revit family, but for instructions [2]. Just as you create a door family that can be reused in various projects by simply changing the dimensions, a prompt template is a structure you can reuse by changing only a few variables.

For example, imagine you always need to write technical specifications for different materials. Instead of starting from scratch every time, you could create a template like this: "Write a technical specification for \{MATERIAL\}, considering its use in \{TYPE_OF_ENVIRONMENT\}, with a focus on \{KEY_CHARACTERISTICS\}." Then you just replace the parts in curly braces as needed. Today you might use it for "reinforced concrete" in an "exterior area" focusing on "durability," and tomorrow for "drywall" in an "interior area" focusing on "acoustic insulation."

What's interesting is that prompts have well-defined components, much like the elements of an architectural project. There's the main instruction (which would be like the project brief), there are examples that help the AI understand the style you want (like project references), there are format specifications (whether you want the response as a list, paragraph, table...), and even "persona" instructions—you can ask the AI to respond as if it were an experienced engineer or a specialized consultant.

One thing I've learned from practice is that clarity is everything. Just as a poorly detailed project creates confusion on the construction site, a vague prompt generates generic and unhelpful responses. The more specific you are about what you need, the better the result will be.

And here's the kicker: prompting isn't an exact science; it's more like an iterative conversation. You ask a question, see the response, refine the question based on what you received, and keep adjusting until you get where you want. It's exactly like when you're explaining a concept to someone—you adapt your explanation as you perceive whether the person is understanding or not.

This naturally leads us to the next step of our journey: now that you know what a prompt is, it's time to discover how to create truly effective prompts. Because it's one thing to know you need to give clear instructions to the AI, and another thing to master the techniques that make those instructions work like magic. And that's exactly what we'll explore when we dive into basic prompting techniques.

## References Cited in This Section

[1] B. Meskó. 2023. Prompt engineering as an important emerging skill for medical professionals: Tutorial. Journal of Medical Internet Research, 25(Suppl 1):e50638.; Jules White, Quchen Fu, Sam Hays, Michael Sandborn, Carlos Olea, Henry Gilbert, Ashraf Elnashar, Jesse Spencer-Smith, and Douglas C. Schmidt. 2023. A prompt pattern catalog to enhance prompt engineering with chatgpt.; T.F. Heston and C. Khun. 2023. Prompt engineering in medical education. Int. Med. Educ., 2:198-205.; Muhammad Usman Hadi, Qasem Al Tashi, Rizwan Qureshi, Abbas Shah, Amgad Muneer, Muhammad Irfan, and et al. 2023. Large language models: A comprehensive survey of its applications, challenges, limitations, and future prospects. TechRxiv.; Tom B. Brown, Benjamin Mann, Nick Ryder, Melanie Subbiah, Jared Kaplan, Prafulla Dhariwal, Arvind Neelakantan, Pranav Shyam, Girish Sastry, Amanda Askell, Sandhini Agarwal, Ariel Herbert-Voss, Gretchen Krueger, Tom Henighan, Rewon Child, Aditya Ramesh, Daniel M. Ziegler, Jeffrey Wu, Clemens Winter, Christopher Hesse, Mark Chen, Eric Sigler, Mateusz Litwin, Scott Gray, Benjamin Chess, Jack Clark, Christopher Berner, Sam McCandlish, Alec Radford, Ilya Sutskever, and Dario Amodei. 2020. Language models are few-shot learners.

[2] Taylor Shin, Yasaman Razeghi, Robert L. Logan IV, Eric Wallace, and Sameer Singh. 2020b. Autoprompt: Eliciting knowledge from language models with automatically generated prompts. Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing (EMNLP).
```