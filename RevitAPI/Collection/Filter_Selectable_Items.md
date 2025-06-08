# Filter Selectable Items

## Overview
The `SelectableInViewFilter` filter allows access to all selectable elements in a view.

## Example
1. **Filter selectable elements:**
    ```python
    clr.AddReference('RevitAPIUI')
    from Autodesk.Revit.UI import *
    from Autodesk.Revit.UI.Selection import *
    Filter = SelectableInViewFilter(doc, doc.ActiveView.Id)
    Elements = FilteredElementCollector(doc, doc.ActiveView.Id).WherePasses(Filter).ToElements()
    ```
