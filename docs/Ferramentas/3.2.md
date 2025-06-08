---
sidebar_position: 3
---

# Your First Custom Chat

You know when you're in the middle of a complex Revit project and a specific modeling question suddenly pops up? You could search on Google, but it would be much more practical if you could just talk to someone who understands the subject, right? Well, that's exactly what we're going to do now—except this "someone" will be an artificial intelligence that you'll configure yourself.

Think about it: using the ChatGPT website is like taking a taxi. It works well, but you depend on what's available at the moment. Having your own "custom chat" through the API is like having your own private car—you control when to use it, how to use it, and you can customize everything your way. It's like having a technical assistant available 24/7, who is never unavailable when you need them most.

## The Difference You'll Feel in Practice

The first thing you'll notice when you start using the ChatGPT API is the stability. Those annoying "ChatGPT is at capacity right now" messages simply disappear from your life [3]. It's like having a direct line to the artificial intelligence, no queues, no waiting.

But the real advantage lies in customization. You can shape the conversation exactly to your needs. Want an assistant that always responds considering Revit best practices? You can set it up. Need someone to explain technical concepts in a didactic way? You can adjust for that too. The API allows you to define the AI's "behavior" through initial instructions—it's like training a virtual intern who will work exactly the way you need [4].

## How It Works Under the Hood

I'll explain it simply: the API is basically a bridge between you and OpenAI's AI models. Instead of accessing it through that feature-heavy website, you make a direct, cleaner connection [5]. It's like comparing a WhatsApp conversation to a phone call—both work for communication, but the experience is very different.

To get started, you need three simple things: an OpenAI account, an API key (which is like a special password), and an environment to run your code. It might seem intimidating at first, but it's simpler than it looks. It's like learning to use a new plugin in Revit—the first few times you might feel a bit lost, but then it becomes routine [6].

What's interesting is that you don't need to be an expert programmer. Tools like Google Colab do the heavy lifting for you. It's like having Revit already installed and configured in the cloud—you just have to use it [3].

Let me show you how simple it is in practice. In Google Colab, you literally write a few lines of code and you're already talking to the AI:

```python
import openai

openai.api_key = "your_api_key_here"

response = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[{
        "role": "system", 
        "content": "You are a Revit expert who always considers BIM best practices."
    }, {
        "role": "user", 
        "content": "How should I configure window families for a residential project?"
    }]
)

print(response.choices[0].message.content)
```

It's that simple! And the response you get is already customized for your project needs.

## In Practice, What Does This Change?

Imagine being able to create an assistant that knows your specific projects, your work standards, and even the technical details you use most often. With the API, you can develop solutions that go far beyond simply "asking questions." Companies are already using this to create personalized virtual tutors, content creation assistants, and even technical support tools [7].

Let me give you some concrete examples of how this would work in your day-to-day. Imagine you're working on a commercial building project and need to ask technical questions. In Google Colab, you could set up different "specialists":

**Example 1 - Structural Consultant:**
```python
structural_consultant = {
    "role": "system",
    "content": "You are a structural engineer specializing in commercial buildings. Always consider local building codes and suggest practical solutions to implement in Revit."
}

question = {
    "role": "user", 
    "content": "I am modeling a 15m x 8m slab for an office. What is the recommended thickness and how should I configure the reinforcement in Revit?"
}
```

**Example 2 - MEP Specialist:**
```python
mep_specialist = {
    "role": "system",
    "content": "You are a building systems designer with 15 years of experience. Focus on practical and cost-effective solutions, always thinking about future maintenance."
}

mep_question = {
    "role": "user",
    "content": "How should I distribute the air conditioning vents in this 120m² open-plan office? I need the dimensions and specifications to model it in Revit."
}
```

In your case, as a designer, this could mean having an assistant that:
- Understands the specifics of your projects
- Knows your company's standards
- Responds by considering the technical norms you need to follow
- Is always available, even on weekends or late at night

And the coolest part is that you can create "memory" for your conversations. For example, if you're working on a school project, you could start like this:

```python
project_context = {
    "role": "system",
    "content": "We are working on a municipal school project with 12 classrooms, a library, a cafeteria, and a covered court. Total area: 2,800m². Always consider accessibility, natural ventilation, and safety standards for educational facilities."
}
```

From then on, all your questions will have this context. If you ask, "How should I size the classroom windows?", the AI already knows it's for a specific school, not just any generic project.

## The First Step is Always the Most Important

Starting with the API doesn't mean you'll become a programmer overnight. It's more like learning to use a scientific calculator—at first, it seems complicated, but you use the functions you need, one at a time. OpenAI provides very detailed documentation, and there's a huge community of people sharing practical examples [4].

I'll show you exactly how to take the first steps in Google Colab. It's so simple you can do it in less than 10 minutes:

**Step 1 - Open a new notebook in Google Colab:**
Go to colab.research.google.com and create a new notebook. It's free and requires no installation.

**Step 2 - Set up the connection:**
```python
# Install the OpenAI library
!pip install openai

# Import and configure
import openai
import os

# Paste your API key here (you get it from the OpenAI website)
openai.api_key = "sk-your_secret_key_here"
```

**Step 3 - Configure your custom assistant:**
```python
def ask_expert(question, specialty="revit"):
    if specialty == "revit":
        system_prompt = "You are a Revit expert with 10 years of experience in architectural projects. Always provide practical answers with specific steps to implement in the software."
    elif specialty == "structural":
        system_prompt = "You are a structural engineer who works with Revit Structure. Always consider local building codes and provide optimized solutions."
    
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": question}
        ],
        temperature=0.7,  # Controls how "creative" the response will be
        max_tokens=500    # Limits the response size
    )
    
    return response.choices[0].message.content

# Now, just use it!
response = ask_expert(
    "How to create a parametric door family with an adjustable opening?", 
    "revit"
)

print(response)
```

**Step 4 - Test it in practice:**
```python
# Real-world example
question_of_the_day = """
I am designing a 40x60m industrial warehouse. 
I need to know:
1. Recommended minimum ceiling height
2. How to model the steel trusses in Revit
3. Specification for recommended roofing materials

Can you give me a step-by-step guide for each item?
"""

response = ask_expert(question_of_the_day, "structural")
print(response)
```

What impresses me most is how this technology is changing the way we interact with information. It's no longer about "searching"—it's about "conversing" with knowledge. And when you have total control over that conversation, the possibilities are endless.

## Preparing the Ground for the Next Step

Now that you understand the difference between using the web interface and having your own API access, it's time to get your hands dirty for real. And you know what our first practical lab will be? We're going to work with something you probably use every day: YouTube videos.

What if we could extract not only the text from the technical explanations in those Revit tutorials you watch, but also work with the audio intelligently? That's exactly what we'll explore in the next chapter—how to turn video content into personalized study material using AI.

---

## References Cited in This Section

[3] Dieckmann, Jonas. "How To Use ChatGPT API for Direct Interaction From Colab or Databricks." Towards AI, 9 Apr. 2023, https://pub.towardsai.net/how-to-use-chatgpt-api-for-direct-interaction-from-colab-or-databricks-39969a0ead5f.

[4] "A Beginner's Guide to Using the ChatGPT API." DataCamp, 14 Dec. 2023, https://www.datacamp.com/tutorial/a-beginners-guide-to-chatgpt-api.

[5] "ChatGPT API Tutorial: How to Use the ChatGPT API." Elfsight, 24 Mar. 2025, https://elfsight.com/blog/how-to-use-chatgpt-api/.

[6] "Get Started with ChatGPT API: A Beginner's Guide." My Great Learning, 10 Feb. 2025, https://www.mygreatlearning.com/blog/get-started-with-chatgpt-api/.

[7] "The Complete Guide: How to Use ChatGPT API in Application." Adam Fard UX Studio, 4 Dec. 2023, https://adamfard.com/blog/how-to-use-chatgpt-api.
```