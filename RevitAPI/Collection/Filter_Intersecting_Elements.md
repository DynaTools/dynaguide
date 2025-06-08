# Filter Intersecting Elements

## Overview
The `ElementIntersectsSolidFilter` class allows filtering elements that collide with a solid. 

## Example
1. **Define the solid and filter:**
    ```python
    def ViewRangeSolid(View_):
        crMgr = View_.GetCropRegionShapeManager()
        vrange = View_.GetViewRange()
        desf = vrange.GetOffset(PlanViewPlane.TopClipPlane) - vrange.GetOffset(PlanViewPlane.ViewDepthPlane)
        CropRegion = crMgr.GetCropShape()
        Lines = CurveLoop()
        [Lines.Append(x) for x in CropRegion[0]]
        l = List[CurveLoop]()
        l.Add(Lines)
        return GeometryCreationUtilities.CreateExtrusionGeometry(l, XYZ(0,0,1),desf)

    solid = ViewRangeSolid(View)
    Filter = ElementIntersectsSolidFilter(solid)
    elems = FilteredElementCollector(doc, doc.ActiveView.Id).WherePasses(Filter).ToElements()
    ```
