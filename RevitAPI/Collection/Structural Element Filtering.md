## Structural Element Filtering

### Overview
Select structural elements using the enumerated value `StructuralType`.

### Structural Types
- `StructuralType.NonStructural`: All non-structural elements
- `StructuralType.Beam`: Structural beams
- `StructuralType.Brace`: Structural braces or brace posts
- `StructuralType.Column`: Structural columns
- `StructuralType.Footing`: Structural foundations
- `StructuralType.UnknownFraming`: Structural use unknown

### Example
1. **Create the filter:**
    ```python
    Filter = ElementStructuralTypeFilter(Structure.StructuralType.Footing)
    ```

2. **Apply the filter to the collector:**
    ```python
    Foundations = FilteredElementCollector(doc).WherePasses(Filter).WhereElementIsNotElementType().ToElements()
    ```
