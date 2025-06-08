# Exclusive Filter

## Overview
Elements passed to the `Excluding()` filter will be automatically excluded from the results of the collector. These elements must be in a strongly typed list.

## Example
1. **Exclude specific elements:**
    ```python
    StructuralElement = UnwrapElement(IN[0])
    Element = UnwrapElement(IN[1])

    idsExclude = List[ElementId]()
    idsExclude.Add(StructuralElement.Id)
    idsExclude.Add(Element.Id)

    Walls = FilteredElementCollector(doc).OfCategory(BuiltInCategory.OST_Walls).Excluding(idsExclude).ToElements()
    ```
