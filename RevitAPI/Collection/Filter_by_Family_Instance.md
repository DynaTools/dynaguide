# Filter by Family Instance

## Overview
The instance filter (`FamilyInstanceFilter()`) is used to find elements that are instances of family symbols. This filter allows one to remove unmatched items before they are unpacked.

## Example
1. **Apply the filter:**
    ```python
    FamInstanc = UnwrapElement(IN[0])
    Filter = FamilyInstanceFilter(doc, FamInstanc.GetTypeId())
    family_instances = FilteredElementCollector(doc).WherePasses(Filter).ToElements()
    ```
