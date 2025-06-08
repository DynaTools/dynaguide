## Filtering Elements Visible in View

### Overview
The `FilteredElementCollector` class allows passing a view identifier to restrict the search to elements visible in that view.

### Example
1. **Get the active view and document:**
    ```python
    doc = DocumentManager.Instance.CurrentDBDocument
    view = doc.ActiveView.Id
    ```

2. **Filter elements in the active view:**
    ```python
    elem_in_view = FilteredElementCollector(doc, view).OfCategory(BuiltInCategory.OST_Walls)
    ```

### Note
This method does not work with elements hosted in links. Starting from Revit 2024, the following procedure is recommended:

1. **Link elements visible in view:**
    ```python
    link = UnwrapElement(IN[1])
    elem_view_link = FilteredElementCollector(doc, view, link.Id).OfCategory(BuiltInCategory.OST_Walls)
    ```
