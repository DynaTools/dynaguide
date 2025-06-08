# Logic Filters

## Overview
Logic filters allow joining several fast and/or slow filters to be considered together or individually. 

## Types
1. **LogicalAndFilter**
    - Elements must pass all existing filters.
    - Example:
    ```python
    categoryFilter = ElementCategoryFilter(BuiltInCategory.OST_StructuralColumns)
    classFilter = ElementClassFilter(FamilyInstance)
    Filter = LogicalAndFilter(categoryFilter, classFilter)
    Columns = FilteredElementCollector(doc).WherePasses(Filter).ToElements()
    ```

2. **LogicalOrFilter**
    - Elements must pass at least one of the existing filters.
    - Example:
    ```python
    Columns = ElementCategoryFilter(BuiltInCategory.OST_StructuralColumns)
    Foundations = ElementCategoryFilter(BuiltInCategory.OST_StructuralFoundation)
    Filter = LogicalOrFilter(Columns, Foundations)
    Foundat = FilteredElementCollector(doc).WherePasses(Filter).ToElements()
    ```
