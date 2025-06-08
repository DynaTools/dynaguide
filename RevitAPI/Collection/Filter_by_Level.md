
# Filter Items According to a Specific Level

## Overview
To filter items hosted in a level, use the `ElementLevelFilter()` constructor.

### Key Features
- **Filter items by level**: Use the `ElementLevelFilter` to filter elements based on their hosting level.
- **Combination with other filters**: This filter can be combined with other filters for more specific results.

## Example

### Apply the Filter
This example demonstrates how to filter elements that are hosted on a specific level.
```python
Level = UnwrapElement(IN[0])
Filter = ElementLevelFilter(Level.Id)
Elements = FilteredElementCollector(doc).WherePasses(Filter).WhereElementIsNotElementType().ToElements()
for elem in Elements:
    print(elem.Id)
```

## Detailed Explanation
### Level Parameter
The `Level` parameter refers to the specific level whose hosted elements you want to filter. This is typically obtained by selecting a level element from the document.

### Filter Construction
The `ElementLevelFilter` constructor takes the ID of the level as an argument. This filter will then pass only those elements that are hosted on the specified level.

### Combining Filters
For more refined filtering, the `ElementLevelFilter` can be combined with other filters, such as `CategoryFilter`, `BoundingBoxIntersectsFilter`, etc.

## Now It's Your Turn

### Exercise 1: Filter Elements by Level
#### Objective
Filter and list all elements hosted on a specific level.
#### Steps
1. Obtain the level element from the document.
2. Create an `ElementLevelFilter` with the level ID.
3. Collect and list the elements hosted on the specified level.

#### Code Example
```python
Level = UnwrapElement(IN[0])
Filter = ElementLevelFilter(Level.Id)
Elements = FilteredElementCollector(doc).WherePasses(Filter).WhereElementIsNotElementType().ToElements()
for elem in Elements:
    print(elem.Id)
```

### Exercise 2: Combine Level Filter with Category Filter
#### Objective
Filter elements hosted on a specific level and belonging to a specific category (e.g., walls).
#### Steps
1. Obtain the level element and define the desired category.
2. Create an `ElementLevelFilter` and a `CategoryFilter`.
3. Combine the filters and list the resulting elements.

#### Code Example
```python
Level = UnwrapElement(IN[0])
Category = BuiltInCategory.OST_Walls
LevelFilter = ElementLevelFilter(Level.Id)
CategoryFilter = ElementCategoryFilter(Category)
Elements = FilteredElementCollector(doc).WherePasses(LevelFilter).WherePasses(CategoryFilter).WhereElementIsNotElementType().ToElements()
for elem in Elements:
    print(elem.Id)
```

### Conclusion
These exercises provide practical experience in using the `ElementLevelFilter` in Dynamo for Revit. By working through these examples, students will learn how to filter elements based on their hosting level and how to combine different filters for more precise results.

### Exercise Results

#### Exercise 1: Filter Elements by Level
For a given level, the following elements were found:
- Element Id: 12345
- Element Id: 67890

#### Exercise 2: Combine Level Filter with Category Filter
For a given level and the 'walls' category, the following elements were found:
- Element Id: 23456
- Element Id: 78901


