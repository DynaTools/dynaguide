# Filter by Workset

## Overview
The `ElementWorksetFilter` class is used to filter elements contained by a specific workset.

## Example
1. **Get the worksets and filter elements:**
    ```python
    wrks = FilteredWorksetCollector(doc).OfKind(WorksetKind.UserWorkset).ToWorksets()

    for w in wrks:
        if w.Name == "WorksetName": workset = w.Id

    elems = FilteredElementCollector(doc).OfCategory(BuiltInCategory.OST_Walls).WherePasses(ElementWorksetFilter(workset)).ToElements()
    ```
