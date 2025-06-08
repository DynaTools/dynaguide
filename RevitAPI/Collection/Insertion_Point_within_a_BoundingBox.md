# Elements Whose Insertion Point is Inside a BoundingBox

## Overview
The `BoundingBoxContainsPointFilter()` starts from the origin point of an element and detects which elements are located inside it.

## Example
1. **Get the element and its insertion point:**
    ```python
    Element = UnwrapElement(IN[0])
    Point = Element.Location.Point
    ```

2. **Filter elements by insertion point:**
    ```python
    Filter = BoundingBoxContainsPointFilter(Point)
    elems = FilteredElementCollector(doc, doc.ActiveView.Id).WherePasses(Filter).ToElements()
    ```

## Note
This filter allows defining a tolerance and/or inverting it with a Boolean.
