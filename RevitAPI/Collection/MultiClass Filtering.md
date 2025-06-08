## Multi-Class Filtering

### Overview
A quick filter represented in the API by `ElementMultiClassFilter` allows searching for elements whose class matches any of those inserted as arguments by means of a set. These data sets must be strongly typed.

### Example
1. **Import the necessary library:**
    ```python
    import System
    from System.Collections.Generic import *
    ```

2. **Construct a strongly typed list:**
    ```python
    typeList = List[System.Type]()
    typeList.Add(Floor)
    typeList.Add(Wall)
    ```

3. **Create an instance of `ElementMulticlassFilter`:**
    ```python
    emcf = ElementMulticlassFilter(typeList)
    ```

4. **Apply the filter to the collector:**
    ```python
    elems = FilteredElementCollector(doc).WherePasses(emcf).ToElements()
    ```

### Note
To define the classes, the RevitAPI library must be imported. Without it, the script will throw an exception indicating that the variables `Floor` and `Wall` have not been defined.
