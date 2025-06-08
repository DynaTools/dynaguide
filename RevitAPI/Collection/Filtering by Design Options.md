## Filtering by Design Options

### Overview
You can collect elements that fall within a specific design option by passing a layout option.

### Example
1. **Filter walls in a specific design option:**
    ```python
    Walls = FilteredElementCollector(doc).OfCategory(BuiltInCategory.OST_Walls)
    elems = Walls.ContainedInDesignOption(DesignOption.Id)
    ```

2. **Directly filter by design option:**
    ```python
    DeOp = FilteredElementCollector(doc).OfClass(DesignOption).ToElements()
    ```

### Note
The design option must be selected beforehand. This can be done in multiple ways, including filtering through its class.
