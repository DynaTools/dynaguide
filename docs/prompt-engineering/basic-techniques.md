---
sidebar_position: 2
---
# Basic Prompting Techniques

Imagine you're explaining to a new intern how to create a section view in Revit. You don't just say, "create a section view"—that would be like giving a vague instruction that would likely result in frustration. Instead, you guide them: "First, go to the Architecture tab, then click on Section, position the line where you want the cut, and adjust the view depth." This process of giving clear, structured instructions is exactly what we do when we work with artificial intelligence through prompting.

The difference is that instead of teaching an intern, we are "conversing" with a language model. And just as different situations in the office call for different types of guidance—sometimes you show them by doing it together, other times you let the person try on their own with occasional tips—there are different prompting techniques for different needs. What might seem like a simple "chat" with the AI actually involves well-defined strategies that can make the difference between getting a generic response and a truly useful solution for your project.

Let's start with the very basics. Think about it: when you're working on a complex project, how do you approach it? You probably don't try to solve everything at once. You break it down into steps, maybe look at similar projects you've done, or ask for the opinion of more experienced colleagues. Prompting techniques follow this same natural logic of problem-solving.

## In-Context Learning: Showing by Example

The first technique worth knowing is what we call **In-Context Learning** (ICL). It's like when you show someone how to do something instead of just explaining it with words [3]. You know when you need to teach a colleague how to set up a new family in Revit? You probably don't start with a manual—you open the program and do it with them, showing each step.

It works similarly with AI. Instead of simply asking, "help me with this area calculation," you can show an example first: "Look, for a 4m x 3m room, the area is 12m². Now, help me calculate the area of this other 5.5m x 2.8m room." This "showing by doing" is incredibly powerful.

### Few-Shot: Learning with a Few Examples

Within in-context learning, we have what's called **few-shot learning** [3]. It's as if you're giving a few practical examples before asking your real question. Imagine you want the AI to help you describe rooms for a specification document. Instead of simply asking, "describe this room," you could do this:

*"Here are some examples of how I like to describe rooms:
- Living Room: a spacious 20m² area, intended for family gatherings, with direct access to the terrace.
- Kitchen: a 12m² area integrated with the dining room, optimized for functionality and practicality.

Now, help me describe this 15m² office with a garden view."*

The number of examples matters. Research shows that more examples generally lead to better results, especially with larger models [3]. But be careful with the order—the way you organize the examples can significantly influence the response. It's like when you're showing different project solutions: the order in which you present them can influence which direction the person will follow.

### Zero-Shot: Straight to the Point

You don't always need to provide examples. Sometimes, a clear and direct instruction is enough—this is **zero-shot prompting** [5]. It's like when you ask an experienced person to "generate a basic schedule for this renovation," and they know exactly what to do, even without specific examples.

The trick here lies in the clarity of the instruction. Instead of "help me with this project," be specific: "list the main stages for renovating an 80m² apartment, including estimated deadlines and interdependencies between tasks." Specificity compensates for the lack of examples.

## Chain-of-Thought: Thinking Step by Step

Here we arrive at one of the most powerful techniques: **Chain-of-Thought** (CoT) [4]. It's basically asking the AI to "show its reasoning"—like when you ask a junior designer not just to deliver the result, but to explain how they got there.

Imagine you're calculating the amount of tile for a bathroom. Instead of simply asking, "how many square meters of tile do I need?", you can ask: "Help me calculate the amount of tile for this bathroom. Think step by step: first, calculate the area of the walls, then subtract the openings, and finally add a safety margin."

Research shows that this works especially well for problems involving math and logical reasoning [4]. It's as if you're forcing the AI to "show its work"—and this usually leads to more accurate answers.

### Zero-Shot-CoT: The Power of "Think Step by Step"

An interesting discovery is that sometimes just adding "think step by step" or "let's think about this systematically" to the end of your prompt is enough [5]. It seems too simple to work, but the results are impressive. It's like giving a subtle hint for the person to better organize their thoughts before responding.

## Decomposition: Breaking Down Complex Problems

You know that feeling when a project seems too big and you don't even know where to start? **Decomposition** is exactly the strategy you probably already use: breaking the large problem into smaller, more manageable pieces [6].

A specific technique called **Least-to-Most Prompting** works like this: first, you ask it to identify the sub-problems, then you solve each one in sequence [7]. It's like creating a detailed schedule—you don't try to solve everything at once, but build the solution layer by layer.

## Multiple Perspectives: Ensembling

You know when you have a technical question and you ask two or three experienced colleagues for their opinion? Each might offer a slightly different perspective, and by comparing the answers, you form a more complete view. This is **ensembling** [8].

With AI, you can ask the same question in slightly different ways and compare the responses. A technique called **Self-Consistency** does exactly this: it generates several answers and chooses the one that appears most often [9]. It's like a "vote" among different versions of the same solution.

## Self-Critique: Checking Its Own Work

One of the most interesting techniques is **self-critique**—asking the AI to review and improve its own response [10]. It's like when you finish a technical drawing and then do a critical review, looking for inconsistencies or possible improvements.

You could ask something like: "Now review this solution and tell me if there's anything that could be improved or if I missed any important points." The AI will analyze its own response with a critical eye, often identifying problems that were overlooked in the first version.

## In Practice: Choosing the Right Technique

But what does this mean in practice? How do you know which technique to use when? It's like choosing the right tool for each situation in Revit—there is no single answer, but there are some useful guidelines.

For direct and objective questions, zero-shot usually works well. When you need consistency in a specific type of response (like always formatting budgets the same way), few-shot with good examples is your best friend. For complex problems that involve calculations or multiple steps, chain-of-thought makes a difference.

And don't be afraid to combine techniques. You can start with a few examples (few-shot), ask it to think step-by-step (CoT), and then request a critical review (self-critique). It's like using several Revit tools together to achieve the desired result.

The important thing is to experiment and see what works best for your specific types of questions. Each AI model has its own quirks, just as each version of Revit has its own characteristics. What works perfectly with one may need minor adjustments with another.

## References Cited in This Section

[3] Brown, T. B., Mann, B., Ryder, N., Subbiah, M., Kaplan, J., Dhariwal, P., ... & Amodei, D. (2020). Language models are few-shot learners.

[4] Wei, J., Wang, X., Schuurmans, D., Bosma, M., Ichter, B., Xia, F., ... & Zhou, D. (2022). Chain-of-thought prompting elicits reasoning in large language models.

[5] Kojima, T., Gu, S. S., Reid, M., Matsuo, Y., & Iwasawa, Y. (2022). Large language models are zero-shot reasoners.

[6] Khot, T., Trivedi, H., Finlayson, M., Fu, Y., Richardson, K., Clark, P., & Sabharwal, A. (2022). Decomposed prompting: A modular approach for solving complex tasks.

[7] Zhou, D., Schärli, N., Hou, L., Wei, J., Scales, N., Wang, X., ... & Le, Q. (2022). Least-to-most prompting enables complex reasoning in large language models.

[8] Khalifa, M., Logeswaran, L., Lee, M., Lee, H., & Wang, L. (2023). Exploring demonstration ensembling for in-context learning.

[9] Wang, X., Wei, J., Schuurmans, D., Le, Q., Chi, E., Narang, S., ... & Zhou, D. (2022). Self-consistency improves chain of thought reasoning in language models.

[10] Madaan, A., Tandon, N., Gupta, P., Hallinan, S., Gao, L., Wiegreffe, S., ... & Clark, P. (2023). Self-refine: Iterative refinement with self-feedback.
```