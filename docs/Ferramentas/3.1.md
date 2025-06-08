---
sidebar_position: 2
---

# Script with Google Colab

You know that moment when you're in Revit, working on a complex project, and you think, "If only I could automate this repetitive part..."? Or when you'd like to analyze patterns in your projects but don't know where to start? Well, artificial intelligence might be exactly the tool you need – and Google Colab is your gateway to this world.

Think of Google Colab as a digital notebook that runs in the cloud. It's like having a technical assistant who never gets tired, who can process data, perform complex calculations, and even learn patterns from your projects. And the best part? You don't need to install anything on your computer, you don't have to worry about complicated setups, and it's completely free [2].

Imagine you're drawing floor plans in Revit and want to understand which elements appear most frequently in your projects, or perhaps automate the creation of legends. With Google Colab, you can write small programs – let's call them "scripts" – that do this heavy lifting for you.

## Why Google Colab is Perfect For You

Let's be honest: as a designer, you already have a thousand things on your mind. The last thing you want is to spend hours setting up a programming environment. Google Colab solves this in an elegant way [2]. It's like having a fully equipped office that you access through your browser – no mess, no fuss.

What makes Colab special is that it comes with everything you need already installed. It's like arriving at a construction site and finding all the tools organized and ready to use. Want to process a spreadsheet with material data? It's there. Need to create visual analyses of your projects? That's included too [2].

And here's an advantage that will make your eyes light up: Colab offers free access to powerful graphics processors (GPUs) that dramatically speed up data processing. It's like having a super-powerful computer just for you, but one that lives in the cloud [2].

## Your First Steps in Colab

Let's start with something simple and practical. First, you need to access Google Colab – just search for "Google Colab" on Google and click the first link. Log in with your Google account (the same one you use for Gmail) and that's it, you're in [2].

The Colab interface is intuitive – think of it as a mix between Word and a scientific calculator. You have cells where you can write explanatory text (like this part you're reading) and cells where you write code that the computer will execute [2].

Here is your first script – something simple but useful for any designer:

```python
# Area and cost calculator for projects
print("=== Project Calculator ===")

# Let's calculate the area of a room
width = 4.5  # meters
length = 6.2  # meters
area = width * length

print(f"Room: {width}m x {length}m")
print(f"Total area: {area:.2f} m²")

# What if we want to calculate the necessary material?
price_per_sqm = 85.50  # price of flooring per m²
total_cost = area * price_per_sqm

print(f"Estimated flooring cost: $ {total_cost:.2f}")
```

Seems simple? That's because it really is! You've just created a program that calculates areas and estimates costs. But the magic lies in how you can expand this.

## Adding Intelligence to Your Scripts

Now let's take it a step further. What if you could teach the computer to recognize patterns in your projects? Or automatically process material lists? This is where artificial intelligence comes into play.

Colab comes with pre-installed AI tools that are surprisingly easy to use [2]. Let's create a script that can automatically classify material descriptions:

```python
# Installing an AI tool (you only need to do this once)
!pip install -q transformers torch

# Importing the tool
from transformers import pipeline

# Creating an intelligent classifier (this example uses a Portuguese model, but the principle is the same)
classifier = pipeline("text-classification", model="neuralmind/bert-base-portuguese-cased")

# List of materials from your project
materials = [
    "Ceramic hollow brick 14x19x29cm",
    "100mm PVC pipe for sewage",
    "White matte acrylic paint 18L",
    "Wooden door with 80cm frame"
]

print("=== Automatic Material Classification ===")
for material in materials:
    # Note: The model is trained on Portuguese, so results for English may vary.
    # The goal is to show the syntax and ease of use.
    result = classifier(material)
    print(f"Material: {material}")
    print(f"Detected category: {result[0]['label']}")
    print("---")
```

I'll pause for a moment here for you to absorb this. You've just used artificial intelligence to automatically classify materials. This is something large companies pay millions to develop, and you did it in a few lines of code, for free.

## Organizing Your Work Like a Pro

One thing I've learned from working with designers is that organization makes all the difference. In Colab, you can structure your scripts professionally, documenting each step [2]. Think of it as creating a procedural manual that others (or your future self) can easily follow.

```python
# === INITIAL SETUP ===
import pandas as pd
import numpy as np
from datetime import datetime

# Project settings
PROJECT_NAME = "Green Village Residence"
START_DATE = datetime.now()

print(f"Starting project analysis: {PROJECT_NAME}")
print(f"Date: {START_DATE.strftime('%d/%m/%Y %H:%M')}")

# === DATA PROCESSING ===
def calculate_total_area(rooms):
    """
    Calculates the total area of a set of rooms.
    """
    total = 0
    for room in rooms:
        area = room['width'] * room['length']
        total += area
        print(f"{room['name']}: {area:.2f} m²")
    
    return total

# Room data
project_rooms = [
    {'name': 'Living Room', 'width': 4.5, 'length': 6.0},
    {'name': 'Kitchen', 'width': 3.2, 'length': 4.1},
    {'name': 'Bedroom 1', 'width': 3.8, 'length': 3.5},
    {'name': 'Bedroom 2', 'width': 3.0, 'length': 3.2}
]

total_area = calculate_total_area(project_rooms)
print(f"\nTotal constructed area: {total_area:.2f} m²")
```

## Saving and Sharing Your Work

What's fantastic about Colab is how it integrates naturally with your everyday tools. Your scripts are automatically saved to Google Drive, so you never lose your work [2]. It's like having automatic backups of all your technical drawings.

And when you want to show an analysis to a client or colleague? Just share the link to the notebook, exactly as you would with a Google Doc. The person can see your calculations, understand your reasoning, and even run the code to verify the results [2].

## Expanding Your Possibilities

As you get more comfortable with Colab, the possibilities multiply. You can connect your scripts to supplier APIs to fetch real-time prices, process images of floor plans, or even create automatic reports with charts and tables.

One of my favorite examples is a script that analyzes photos from construction sites and automatically identifies construction issues. Sound like science fiction? It's running in production at several construction companies [2].

```python
# Example of image analysis (conceptual)
from transformers import pipeline

image_analyzer = pipeline("image-classification", model="google/vit-base-patch16-224")

# In a real project, you would upload photos from the site
# result = image_analyzer("photo_from_site.jpg")
# print(f"Detected elements: {result}")
```

## Connecting with the Real World

What makes all this even more exciting is thinking about the next step. These scripts you're creating in Colab can be the foundation for even more interactive tools. Imagine talking to an artificial intelligence about your projects, asking questions in natural language, and receiving detailed analyses.

"What is the average cost per square meter of my last few projects?" or "Show me material trends from the last six months" – this type of natural interaction is closer than you might think.

This naturally leads us to the next topic we will explore: how to create a custom chat that understands your projects and can answer specific questions about your work. It will be like having a technical assistant who knows all the details of your projects and is always available to help.

Google Colab is your solid foundation for this journey. Every script you create, every analysis you develop, every process you automate – all of this builds knowledge that you can apply to increasingly sophisticated tools.

Are you ready to take this next step? Let's find out how to turn these scripts into intelligent conversations.

---

## References Cited in This Section

[2] Douloumis, J. "A Beginner's Guide to Google Colab: Your Free Ticket to Machine Learning." Medium, 2024. Available at: https://medium.com/@jannis-douloumis/a-beginners-guide-to-google-colab-your-free-ticket-to-machine-learning