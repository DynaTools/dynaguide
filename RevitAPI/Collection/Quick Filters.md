# 3. Quick Filters

Revit API provides several quick filters for common operations:

- `ElementCategoryFilter`
- `ElementMultiCategoryFilter`
- `ElementClassFilter`
- `ElementMultiClassFilter`
- `ElementIsElementTypeFilter`
- `ElementOwnerViewFilter`
- `ElementDesignOptionFilter`
- `ElementIsCurveDrivenFilter`
- `ElementStructuralTypeFilter`
- `FamilySymbolFilter`
- `ExclusionFilter`
- `BoundingBoxIntersectsFilter`
- `BoundingBoxIsInsideFilter`
- `BoundingBoxContainsPointFilter`
- `ElementWorksetFilter`

Here's an example of using the `ElementCategoryFilter`:

```python
walls_filter = ElementCategoryFilter(BuiltInCategory.OST_Walls)
walls = FilteredElementCollector(doc).WherePasses(walls_filter).WhereElementIsNotElementType().ToElements()

print(f"Found {len(walls)} walls in the project.")
```

This example demonstrates how to use a quick filter to collect all wall elements in a Revit project.
