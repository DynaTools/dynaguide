# FamilySymbols Filtering

## Overview
The `FamilySymbol` class represents the specific set of family configurations, known in the Revit environment as types. The `FamilySymbolFilter` constructor allows collecting all sets of configurations (types) of a specific family.

## Example
1. **Create the filter and collect elements:**
    ```python
    Filter = FamilySymbolFilter(Family.Id)
    Types = FilteredElementCollector(doc).WherePasses(Filter).ToElements()
    ```

## Note
Families can be collected by their `Family` class:
```python
Families = FilteredElementCollector(doc).OfClass(Family).ToElements()
```
