# 1. Introduction to the Revit API Element Collector

The Revit API provides powerful tools for interacting with and manipulating Revit models programmatically. One of the most fundamental operations is collecting elements from the model, which is primarily done using the `FilteredElementCollector` class.

## Collecting Model Categories

To start working with Revit elements, it's often useful to understand the available categories. Here's how you can collect all model categories:

```python
from Autodesk.Revit.DB import CategoryType

# Get all categories
all_categories = doc.Settings.Categories

# Filter for model categories
model_categories = [c for c in all_categories if c.CategoryType == CategoryType.Model]

# Print category names
for category in model_categories:
    print(category.Name)
```

This script will output a list of all model category names in your Revit project.

## Working with Built-in Categories

Revit also has a set of built-in categories that you can work with:

```python
from Autodesk.Revit.DB import BuiltInCategory, Category

# Get all built-in categories
bics = System.Enum.GetValues(BuiltInCategory)

# Get corresponding Category objects
categories = [Category.GetCategory(doc, bic) for bic in bics if Category.GetCategory(doc, bic) is not None]

# Print category names
for category in categories:
    print(category.Name)
```

This script will give you a list of all available built-in categories in your Revit project.
