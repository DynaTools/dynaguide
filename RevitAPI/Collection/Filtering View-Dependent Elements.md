### Overview
Annotative elements such as tags, dimensions, and filled regions depend on the "host" view and will be displayed only in that view. Model elements are independent and can be displayed in any view.

### Example
1. **Filter view-dependent elements:**
    ```python
    view = UnwrapElement(IN[0])
    Filter = ElementOwnerViewFilter(view.Id)
    RoomTag = FilteredElementCollector(doc).WherePasses(Filter).OfCategory(BuiltInCategory.OST_RoomTags)
    ```

2. **Collect elements belonging to a specific view:**
    ```python
    TitleBlock = FilteredElementCollector(doc).OwnedByView(sheet.Id).OfCategory(BuiltInCategory.OST_TitleBlocks)
    ```

3. **Filter view-independent elements:**
    ```python
    Elem = FilteredElementCollector(doc, view.Id).WhereElementIsViewIndependent()
    ```
