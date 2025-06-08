# 6. Using Labels in Revit API

The `LabelUtils` class allows you to retrieve human-readable labels for various Revit parameters:

```python
from Autodesk.Revit.DB import LabelUtils, BuiltInParameter, LanguageType

def get_parameter_labels(language=LanguageType.English):
    labels = []
    for param in BuiltInParameter:
        try:
            label = LabelUtils.GetLabelFor(param, language)
            labels.append(f"{param}: {label}")
        except:
            pass
    return labels

english_labels = get_parameter_labels()
spanish_labels = get_parameter_labels(LanguageType.Spanish)

print("First 5 parameter labels in English:")
for label in english_labels[:5]:
    print(label)

print("\nFirst 5 parameter labels in Spanish:")
for label in spanish_labels[:5]:
    print(label)
```

This example shows how to use the `LabelUtils` class to retrieve parameter labels in different languages, demonstrating the API's localization capabilities.
