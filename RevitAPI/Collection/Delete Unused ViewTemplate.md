
# Explanation of Revit API Script for Managing View Templates

This script is designed to run within the Revit environment using the Revit API, specifically to manage view templates. The script performs the following tasks:

1. **Identifies all view templates in the current document.**
2. **Finds all views that are not templates.**
3. **Determines which templates are not being used by any views.**
4. **Deletes these unused templates.**
5. **Reports the number of templates deleted and remaining.**

Let's break down the key parts of the script:

## Importing Required Libraries

```python
import clr
clr.AddReference('RevitAPI')
clr.AddReference('RevitServices')
from Autodesk.Revit.DB import FilteredElementCollector, View, ElementId
from RevitServices.Persistence import DocumentManager
from RevitServices.Transactions import TransactionManager
```

- **clr**: Common Language Runtime (CLR) is used to access .NET assemblies in Python.
- **RevitAPI and RevitServices**: These libraries provide classes and methods for interacting with Revit's model data.
- **FilteredElementCollector**: A class used to filter elements within the Revit document.
- **View**: Represents a view within a Revit document.
- **DocumentManager**: Manages access to the Revit document.
- **TransactionManager**: Handles transactions to ensure changes can be committed to the document.

## Accessing the Current Document

```python
doc = DocumentManager.Instance.CurrentDBDocument
```

- Retrieves the current Revit document, which is necessary for any operations that read or modify model data.

## Functions to Retrieve Views and Templates

### Get All View Templates

```python
def get_all_view_templates():
    return [v for v in FilteredElementCollector(doc).OfClass(View) if v.IsTemplate]
```

- **FilteredElementCollector**: Filters through the document to collect elements of the class `View`.
- **IsTemplate**: A property that indicates whether a view is a template.

### Get All Views

```python
def get_all_views():
    return [v for v in FilteredElementCollector(doc).OfClass(View) if not v.IsTemplate]
```

- Similar to `get_all_view_templates`, but collects views that are not templates by checking `not v.IsTemplate`.

### Check if a Template is Used

```python
def is_template_used(template, views):
    template_id = template.Id
    for view in views:
        if view.ViewTemplateId == template_id:
            return True
    return False
```

- **is_template_used**: This function checks if a given template is used by any view by comparing the `ViewTemplateId` of each view with the template's ID.

## Main Logic to Delete Unused Templates

### Identify Unused Templates

```python
all_templates = get_all_view_templates()
all_views = get_all_views()
unused_templates = [template for template in all_templates if not is_template_used(template, all_views)]
```

- Collects all templates and views, then identifies which templates are unused.

### Transaction to Delete Unused Templates

```python
TransactionManager.Instance.EnsureInTransaction(doc)
try:
    for template in unused_templates:
        doc.Delete(template.Id)
    print("{} templates não utilizados foram apagados.".format(len(unused_templates)))
except Exception as e:
    print("Erro ao apagar templates: {}".format(str(e)))
TransactionManager.Instance.TransactionTaskDone()
```

- **EnsureInTransaction**: Starts a transaction, necessary for modifying the document.
- **doc.Delete**: Deletes the specified element by its ID.
- **TransactionTaskDone**: Ends the transaction, committing the changes.

### Reporting Results

```python
remaining_templates = get_all_view_templates()
print("Número de templates restantes: {}".format(len(remaining_templates)))
```

- After deletion, it reports the number of templates that remain.

## Summary

The script automates the cleanup of view templates in a Revit document by identifying and removing those that are not applied to any views, helping to maintain an organized and efficient project environment.

## Script Output

```python
OUT = "Script executado com sucesso."
```

- Indicates that the script has executed successfully.
