# 4. Usage Examples of Filters in Revit API

## Filtering by Multiple Categories

You can use the `ElementMulticategoryFilter` to filter elements from multiple categories:

```python
from System.Collections.Generic import List

categories = List[BuiltInCategory]()
categories.Add(BuiltInCategory.OST_Doors)
categories.Add(BuiltInCategory.OST_Windows)

multi_category_filter = ElementMulticategoryFilter(categories)
elements = FilteredElementCollector(doc).WherePasses(multi_category_filter).ToElements()

print(f"Found {len(elements)} doors and windows in the project.")
```

## Filtering by Element Class

You can also filter elements by their class type:

```python
from Autodesk.Revit.DB import Wall

wall_class_filter = ElementClassFilter(Wall)
walls = FilteredElementCollector(doc).WherePasses(wall_class_filter).ToElements()

print(f"Found {len(walls)} Wall instances in the project.")
```

These examples show how to use different types of filters to collect specific elements in a Revit project.
