## Filter Items According to the Current Design Option

### Overview
Unlike previous approaches, this filter returns a number of elements, not a collector. The `ElementDesignOptionFilter` class is used, providing a design option as an argument.

### Example
1. **Get the active design option ID:**
    ```python
    activeOptId = DesignOption.GetActiveDesignOptionId(doc)
    ```

2. **Create the filter and collect elements:**
    ```python
    filtro = ElementDesignOptionFilter(activeOptId)
    elems = FilteredElementCollector(doc).WherePasses(filtro).ToElements()
    ```

### Note
Any design option can be passed as an argument, not necessarily the current option. The filter can also be inverted with a Boolean value as a second argument.
