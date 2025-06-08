# 5. Working with Categories and Types

In Revit API, categories and types are identified by enumerated values. Here's how you can work with them:

```python
door_category = Category.GetCategory(doc, BuiltInCategory.OST_Doors)
sub_categories = door_category.SubCategories

print(f"The 'Doors' category has {sub_categories.Size} subcategories:")
for sub_category in sub_categories:
    print(f"- {sub_category.Name}")
```

## Changes in Revit 2022

Revit 2022 introduced 64-bit identifiers for built-in categories:

```python
door_category_type_id = Category.GetBuiltInCategoryTypeId(BuiltInCategory.OST_Doors)
print(f"The TypeId for the 'Doors' category is: {door_category_type_id}")
```

This section demonstrates how to work with categories and types in Revit, including the changes introduced in Revit 2022.
