# Quick Filter Concatenation

## Overview
Quick filter concatenation allows chaining several fast filters together in the same `FilteredElementCollector` statement, thus taking advantage of multiple fast filters before moving to slower methods.

## Example
1. **Concatenation of two fast filters:**
    ```python
    Collector = FilteredElementCollector(doc)
    Category = BuiltInCategory.OST_StructuralFoundation
    Foundat = Collector.OfClass(FamilyInstance).OfCategory(Category).ToElements()
    ```

### Note
Structural wall foundations are system families, so this example is suitable for discarding them. This method quickly filters out unnecessary items without loading all others into memory.
