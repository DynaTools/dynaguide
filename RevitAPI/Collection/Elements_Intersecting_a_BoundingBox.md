# Elements Intersecting a BoundingBox

## Overview
The `BoundingBoxIntersectsFilter()` detects all elements intersecting a bounding box. Elements in contact with the box are selected.

## Example
1. **Get the bounding box of a specific element:**
    ```python
    Elements = UnwrapElement(IN[0])
    bb = Elements.get_BoundingBox(doc.ActiveView)
    ```

2. **Construct the outline of the bounding box:**
    ```python
    outline = Outline(bb.Min, bb.Max)
    ```

3. **Apply the filter to collect elements intersecting the bounding box:**
    ```python
    Elements = FilteredElementCollector(doc).WherePasses(BoundingBoxIntersectsFilter(outline)).ToElements()
    ```

## Note
The filtering behavior may vary depending on the view provided.
