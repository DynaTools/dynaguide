# Filter by Parameter Values

## Overview
The `ElementParameterFilter()` allows filtering elements that contain a specific value in one of its parameters. This filter is complex due to its utility and requires several steps.

## Example
### Step 1: Define the Parameter
1. **BuiltIn Parameter:**
    ```python
    param = BuiltInParameter.ALL_MODEL_INSTANCE_COMMENTS
    ```

2. **User-Created Parameter:**
    ```python
    iterator = doc.ParameterBindings.ForwardIterator()
    while iterator.MoveNext():
        if iterator.Key.Name == "ParameterToBeSearched":
            param = doc.GetElement(iterator.Key.Id)
            break
    ```

### Step 2: Define the Value Provider
1. **BuiltIn Parameter:**
    ```python
    Provider = ParameterValueProvider(ElementId(param))
    ```

2. **User-Created Parameter:**
    ```python
    iterator = doc.ParameterBindings.ForwardIterator()
    while iterator.MoveNext():
        if iterator.Key.Name == "ParameterToBeSearched":
            Provider = ParameterValueProvider(iterator.Key.Id)
            break
    ```

### Step 3: Define the Evaluator
1. **Example:**
    ```python
    evaluator = FilterStringEquals()
    ```

## Combining the Filter
1. **Final Filter:**
    ```python
    Filter = ElementParameterFilter(FilterStringRule(Provider, evaluator, "Value", False))
    Elements = FilteredElementCollector(doc).WherePasses(Filter).ToElements()
    ```
