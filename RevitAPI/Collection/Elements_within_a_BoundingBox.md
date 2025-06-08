# Elements Within a BoundingBox

## Overview
The `BoundingBoxIsInsideFilter()` detects elements completely inside another specified element.

## Example
1. **Get the bounding box and construct the outline:**
    ```python
    Element = UnwrapElement(IN[0])
    bb = Element.get_BoundingBox(doc.ActiveView)
    outline = Outline(bb.Min, bb.Max)
    ```

2. **Filter elements within the bounding box:**
    ```python
    Filter = BoundingBoxIsInsideFilter(outline)
    elems = FilteredElementCollector(doc, doc.ActiveView.Id).WherePasses(Filter).ToElements()
    ```

## Note
This filter, like the previous one, allows defining a tolerance and/or inverting it with a Boolean.
