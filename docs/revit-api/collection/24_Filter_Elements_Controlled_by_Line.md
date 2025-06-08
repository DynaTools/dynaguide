---
title: "Filter Elements Controlled by Line"
sidebar_position: 24
---

# Filter Elements Controlled by Line
### Overview
The `WhereElementIsCurveDriven()` shortcut gets elements controlled by a line.

### Example
1. **Filter elements controlled by a line:**
    ```python
    elems = FilteredElementCollector(doc).WhereElementIsCurveDriven().WhereElementIsNotElementType().ToElements()
    ```

2. **Invert the filter to find elements not controlled by a line:**
    ```python
    Filter = ElementIsCurveDrivenFilter(True)
    elems = FilteredElementCollector(doc).WherePasses(Filter).WhereElementIsNotElementType().ToElements()
    ```
