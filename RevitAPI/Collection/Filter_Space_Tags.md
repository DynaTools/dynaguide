# Filter Space Tags

## Overview
The `SpaceTagFilter()` has no arguments and allows the selection of space tags from the file.

## Example
1. **Filter space tags:**
    ```python
    Filter = SpaceTagFilter()
    SpaceTag = FilteredElementCollector(doc).WherePasses(Filter).ToElements()
    ```
