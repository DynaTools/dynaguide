# Other FilteredElementCollector Methods

## Overview
Various methods of the `FilteredElementCollector` class enhance functionality.

## Methods
1. **Elements Intersection**
    - Example:
    ```python
    Col1 = FilteredElementCollector(doc).WherePasses(Filter).WhereElementIsNotElementType()
    Col2 = FilteredElementCollector(doc).WherePasses(Filter).WhereElementIsNotElementType()
    ElemsJoined = Col1.IntersectWith(Col2).ToElements()
    ```

2. **Joining Elements**
    - Example:
    ```python
    Col1 = FilteredElementCollector(doc).WherePasses(Filter).WhereElementIsNotElementType()
    Col2 = FilteredElementCollector(doc).WherePasses(Filter).WhereElementIsNotElementType()
    ElemsJoined = Col1.UnionWith(Col2).ToElements()
    ```

3. **Get Iterators**
    - Example:
    ```python
    elemItr = FilteredElementCollector(doc).OfClass(ViewSheetSet).GetElementIterator()
    while (elemItr.MoveNext()):
        if elemItr.Current.Name == ViewSetName:
            existingViewSet = elemItr.Current
    ```

4. **Number of Elements**
    - Example:
    ```python
    C = FilteredElementCollector(doc).OfClass(Wall).GetElementCount()
    ```
