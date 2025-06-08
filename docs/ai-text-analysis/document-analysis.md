---
sidebar_position: 2
---

# Analyzing Texts with AI

You know when you're reviewing a huge project and need to find patterns in hundreds of pages of specifications, client reports, and technical documentation? That feeling of looking for a needle in a haystack, but without being sure what the needle even looks like? Well, artificial intelligence is completely changing that reality, transforming mountains of text into valuable insights in a way that still feels a bit like magic.

Imagine having a super-intelligent assistant who can read a thousand pages in seconds, identify patterns you didn't even know existed, and on top of that, explain its findings clearly and organized. It's not science fiction—it's exactly what Large Language Models (LLMs) do today. And the most interesting part? They can do things that were, until recently, impossible for computers, like understanding sarcasm, capturing contextual nuances, and even interpreting underlying intentions in texts [5].

The difference is astounding. While traditional computational analysis methods needed perfectly organized data and often failed with irony or cultural references, LLMs can process "messy" text and still extract meaningful insights [5]. It's the difference between a very dedicated but limited intern and a senior analyst with years of experience.

## What Are These Language Models Anyway?

Let's start with the basics, without overcomplicating things. Large Language Models are artificial intelligence systems that have learned to understand and generate human language by analyzing astronomical amounts of text [5]. Think of ChatGPT, which you probably already know—it was trained on a substantial fraction of the entire internet and books ever written [5].

The process is fascinating: these models started as a kind of super-advanced "autocomplete," but something unexpected happened when they got too big [5]. They began to develop capabilities that no one had specifically programmed—like translating languages, writing code, or analyzing sentiment in texts. This is what researchers call "emergent properties" [6].

For us, who work with projects and documentation, this signifies a revolution. The model can read a construction problem report and identify not just the types of problems, but also patterns, urgencies, and even suggest correlations that would go unnoticed in a manual reading [5]. And it does this while maintaining context—it "remembers" what it was talking about paragraphs ago, just like in a real conversation.

## When Does It Make Sense to Use AI for Text Analysis?

Now, let's be practical. AI isn't always the best choice, and it's important to know when it's worth it. LLMs shine in tasks that were historically exclusive to humans: subjective interpretation, contextual understanding, and nuance analysis [5]. But they have their limitations.

First, speed and cost. Although they are much faster than human analysis, they are still slower than traditional processing methods [5]. If you have millions of documents to analyze, you might need to work with representative samples instead of processing everything.

Second, there are limits to the amount of text that can be processed at once—what we call the "context window" [5]. It's like the model's working memory. GPT-4, for example, can process about 32,000 "tokens" (approximately 24,000 words) simultaneously. For larger texts, you need to break them into smaller chunks.

But here's the game-changer: unlike traditional methods, you don't need to "clean" or pre-process your texts [5]. The model can handle messy, poorly formatted text, in different languages, and even with typos. It's like having a colleague who understands your scribbled notes in the margin.

## The Secret Is in the Right Question

Here we get to the heart of the matter: the art of formulating instructions for the AI, or as we technically call it, "prompt engineering" [5]. This is where your professional experience really counts. Think of it as briefing a very talented intern—the clearer and more specific your instruction, the better the result.

Let's say you want to analyze customer feedback on a project. Instead of simply asking to "analyze these texts," you can be much more specific: "Identify the main points of dissatisfaction in this feedback, classify them by category (design, functionality, communication), and rate the urgency of each on a scale of 1 to 3" [5].

The trick is to always start by clearly defining what you want to discover [5]. What is your goal? What kind of answer do you expect? Do you want numbers, categories, qualitative insights? The more specific, the better. And here's a valuable tip: end your instructions by defining exactly how you want the answer formatted [5]. For example: "Respond in the format: 'Category: [name], Urgency: [1-3], Description: [brief explanation]'."

## From Paper to Practice

Let's imagine a concrete example. Say you have dozens of technical visit reports and want to identify patterns of recurring problems. Traditionally, this would require hours of manual reading and spreadsheet creation.

With AI, you could create a prompt like this: "Analyze this technical visit report and identify: 1) Type of problem found, 2) Severity (low/medium/high), 3) Affected area, 4) Recommended action. For each item, provide a brief justification based on the text" [5].

What's interesting is that you can iterate quickly. If the first results aren't what you expected, you refine the instruction and test again [5]. It's a process of experimentation that closely resembles the creative design process—you keep adjusting until you reach the ideal result.

A powerful strategy is to start by observing how humans would perform the same task [5]. If you have instructions you give to interns for analyzing documents, that's a great starting point for creating your prompt. The AI can follow these same guidelines, but on a much larger scale.

## Validation: How to Know If It's Working

It might seem complicated at first, but validating AI results is crucial [7]. It's like checking the measurements after a land survey—you need to be sure the data is correct before making important decisions.

A simple approach is to take a sample of the results and compare them with human analysis [7]. It doesn't have to be everything—a representative sample already gives a good idea of reliability. You can even create a small spreadsheet where a colleague analyzes the same texts manually, and then compare the results.

To measure the level of agreement, there is a metric called "Krippendorff's Alpha," which sounds more complicated than it really is [7]. Basically, it measures how much different "analysts" (human or AI) agree with each other. Values above 0.6 are already considered good for most practical applications.

But here's an interesting reflection: research shows that AI can sometimes be more accurate than humans in certain text analysis tasks [8]. This doesn't mean we should trust it blindly, but rather that the validation process can be a two-way street—sometimes the AI helps us identify inconsistencies in our own analysis.

## Refining and Improving

The process of using AI for text analysis is iterative, like any well-executed project [5]. You rarely get it right on the first try—and that's okay! The idea is to start with a basic version of your prompt, test it, observe where the AI "stumbles," and then refine.

A useful strategy is to examine cases where you and the AI disagree [5]. Sometimes you'll find that the AI picked up on something you missed; other times, you'll realize you need to be more specific in your instructions. It's a mutual learning process—you learn about the data, and the AI "learns" about your expectations.

For example, if you're analyzing technical specifications and notice that the AI is miscategorizing certain types of requirements, you can adjust the prompt to include specific examples or clearer definitions. It's like calibrating a measuring instrument—small adjustments make a big difference in the final result.

## Preparing for the Next Step

As you become more familiar with analyzing texts using AI, a natural need emerges: what if these texts were in different languages? What if you could expand your analysis to include international documentation, standards from other countries, or collaborate with multicultural teams without language barriers?

The AI's ability to understand context and nuances is not limited to a specific language. In fact, these models were trained on texts from dozens of languages simultaneously, developing an almost intuitive understanding of how concepts translate across different cultures and contexts. This opens up fascinating possibilities for those working on projects with an international scope.

Think about the implications: being able to analyze customer feedback in Spanish, regulations in English, and technical specifications in Portuguese, all in an integrated analysis. Or translating not just words, but the cultural and technical context behind them. This is exactly what we will explore in the next topic—how AI is revolutionizing not only our ability to analyze texts but also to transcend linguistic barriers in an intelligent and contextual way.

## References Cited in This Section

[5] Petter Törnberg. How to use Large Language Models for Text Analysis. arXiv:2307.13106v1, 2023.
[6] Jason Wei, Yi Tay, Rishi Bommasani, Colin Raffel, Barret Zoph, Sebastian Borgeaud, Dani Yogatama, Maarten Bosma, Denny Zhou, and Donald Metzler. Emergent abilities of large language models. arXiv preprint arXiv:2206.07682, 2022.
[7] Knut De Swert. Calculating inter-coder reliability in media content analysis using krippendorff's alpha. Center for Politics and Communication, 15:1–15, 2012.
[8] Petter Törnberg. Chatgpt-4 outperforms experts and crowd workers in annotating political twitter messages with zero-shot learning. arXiv preprint arXiv:2304.06588, 2023.