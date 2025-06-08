# Element Conversion Methods

## Overview
To work with elements obtained via `FilteredElementCollector` in Dynamo, they need to be converted to types that can be manipulated in the Dynamo environment.

## Methods
1. **ToElements()**
    - Converts elements to a type that can be manipulated from Dynamo.
    
2. **ToElementIds()**
    - Provides identifiers of elements as a list of integers.

## Example
1. **Convert elements:**
    ```python
    Round_column = FilteredElementCollector(doc).WherePasses(Filter).WhereElementIsNotElementType().ToElements()
    Output = []
    for c in Round_column:
        if c.Name == "~300mm":
            Output.append(c)
    ```
