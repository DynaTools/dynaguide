## Filtering of Types and Instances

### Overview
Two shortcuts, when applied to `FilteredElementCollector`, allow differentiation between types and instances. This is useful for splitting mixed lists obtained by collecting by category.

### Shortcuts
- `WhereElementIsElementType()`
- `WhereElementIsNotElementType()`

### Floor Elements Example
```python
Floors = FilteredElementCollector(doc).OfCategory(BuiltInCategory.OST_Floors).WhereElementIsNotElementType().ToElements()
FloorType = FilteredElementCollector(doc).OfCategory(BuiltInCategory.OST_Floors).WhereElementIsElementType().ToElements()
OUT = Floors, FloorType

