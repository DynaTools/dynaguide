## Filter by Class

### Using `OfClass` Shortcut
- `OfClass` applies a class filter (`ElementFilterClass`) to `FilteredElementCollector`.
- Example:
    ```python
    ins = FilteredElementCollector(doc).OfClass(FamilyInstance)
    ```

### Main Revit API Classes
- `AssemblyInstance`, `AssemblyType`, `BeamSystemType`
- `CADLinkType`, `Ceiling`, `CeilingAndFloor`
- `CurtainSystem`, `Dimension`, `DirectShape`
- `Family`, `FamilyInstance`, `FilledRegion`
- `Floor`, `FloorType`, `Grid`
- `ImageType`, `ImageView`, `IndependentTag`
- `Level`, `LevelType`, `MEPCurve`
- `Material`, `ModelText`, `ModelTextType`
- `PanelType`, `ParameterElement`, `Phase`
- `ProjectInfo`, `ProjectLocation`, `PropertyLine`
- `Revision`, `RevitLinkInstance`, `RoofType`
- `SharedParameterElement`, `SlabEdge`, `SlabEdgeType`
- `Sweep`, `SweepType`, `TableView`
- `TextElement`, `TextElementType`, `TilePattern`
- `View3D`, `ViewFamilyType`, `ViewPlan`
- `ViewPlanType`, `ViewSchedule`, `ViewSection`
- `ViewSheet`, `Viewport`, `WallFoundation`
- `WallFoundationType`, `WallSweep`, `WallType`

### Importing Necessary Libraries
- To search for specific elements like `PipeSegment`, import the relevant library:
    ```python
    from Autodesk.Revit.DB.Plumbing import *
    ```

### Constructing Filter Instance
- Allows flexibility to invert the filter.
- Example without inversion:
    ```python
    Filter = ElementClassFilter(Material)
    allMat = FilteredElementCollector(doc).WherePasses(Filter).ToElements()
    ```
- Example with inversion:
    ```python
    InvertFilter = ElementClassFilter(Material, True)
    allMat = FilteredElementCollector(doc).WherePasses(InvertFilter).ToElements()
    ```

**Note:** Using the `OfClass` shortcut is quicker and more elegant if inversion is not needed.
```
Copy code
InvertFilter = ElementClassFilter(Material, True)
allMat = FilteredElementCollector(doc).WherePasses(InvertFilter).ToElements()
Note: If you do not need to invert the filter, it will be quicker and more elegant to use the shortcut, as discussed at the beginning of this section.
