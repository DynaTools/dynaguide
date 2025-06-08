# 2. Revit API Element Filters

The `FilteredElementCollector` class is the primary tool for collecting elements in Revit. To use it effectively, you need to apply specific filtering rules.

## Required Libraries

First, make sure you have the necessary references:

```python
import clr
clr.AddReference("RevitAPI")
from Autodesk.Revit.DB import *
clr.AddReference('RevitServices')
from RevitServices.Persistence import DocumentManager

doc = DocumentManager.Instance.CurrentDBDocument
```

## Getting Revit Application Information

You can retrieve various properties of the Revit application using the `Application` object:

```python
app = doc.Application
version_info = f"""
Version Number: {app.VersionNumber}
Version Name: {app.VersionName}
Version Build: {app.VersionBuild}
Sub Version Number: {app.SubVersionNumber}
Product: {app.Product}
Language: {app.Language}
User Data Folder: {app.CurrentUsersDataFolderPath}
"""
print(version_info)
```

This code snippet will print out various details about the current Revit application instance.
