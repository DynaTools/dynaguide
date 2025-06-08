---
sidebar_position: 1
---

# Element Collection with FilteredElementCollector

In the context of Revit API for Dynamo, collectors are essential tools used to retrieve elements from a Revit document based on specific criteria. These collectors, known as `FilteredElementCollector` in the Revit API, allow users to filter elements by various parameters, such as category, type, parameter values, and more.

This guide provides a comprehensive overview of understanding and using collectors in Dynamo with Revit API, with detailed explanations and examples for each filtering technique.

## Table of Contents

1. [BoundingBox Tolerance](#boundingbox-tolerance)
2. [Categories Types](#categories-types)
3. [Collecting Worksets](#collecting-worksets)
4. [Collectors](#collectors)
5. [Element Filters](#element-filters)
6. [Element Conversion Methods](#element-conversion-methods)
7. [Elements Intersecting a BoundingBox](#elements-intersecting-a-boundingbox)
8. [Elements within a BoundingBox](#elements-within-a-boundingbox)
9. [Exclusive Filter](#exclusive-filter)
10. [FamilySymbols Filtering](#familysymbols-filtering)
11. [Filter Examples](#filter-examples)
12. [Filter Items According to the Current Design Option](#filter-items-according-to-the-current-design-option)
13. [Filter by Class](#filter-by-class)
14. [Filter Intersecting Elements](#filter-intersecting-elements)
15. [Filter Selectable Items](#filter-selectable-items)
16. [Filter Space Tags](#filter-space-tags)
17. [Filter by Family Instance](#filter-by-family-instance)
18. [Filter by Level](#filter-by-level)
19. [Filter by Parameter Values](#filter-by-parameter-values)
20. [Filter by Workset](#filter-by-workset)
21. [Filtering Elements Controlled by a Line](#filtering-elements-controlled-by-a-line)
22. [Filtering Elements Visible in View](#filtering-elements-visible-in-view)
23. [Filtering View-Dependent Elements](#filtering-view-dependent-elements)
24. [Filtering by Design Options](#filtering-by-design-options)
25. [Filtering of Types and Instances](#filtering-of-types-and-instances)
26. [Insertion Point within a BoundingBox](#insertion-point-within-a-boundingbox)
27. [Labels](#labels)
28. [Logic Filters](#logic-filters)
29. [MultiClass Filtering](#multiclass-filtering)
30. [Other FilteredElementCollector Methods](#other-filteredelementcollector-methods)
31. [Quick Filters](#quick-filters)
32. [Quick Filter Concatenation](#quick-filter-concatenation)
33. [Slow Filters](#slow-filters)
34. [Structural Element Filtering](#structural-element-filtering)

## BoundingBox Tolerance
Using bounding box tolerance in filters.
[BoundingBox Tolerance](BoundingBox_Tolerance.md)

[EN] A way to set how precise you want to be when checking if things fit inside a box in your 3D model.


## Categories Types
Understanding and working with Revit category types.
[Categories Types](categories-types.md)

[EN] Different groups that Revit uses to organize things in your building design, like walls, doors, or windows.


## Collecting Worksets
How to collect worksets in a Revit project.
[Collecting Worksets](Collecting_Worksets.md)

[EN] A method to gather all the separate parts of your project that different team members might be working on.


## Collectors
An overview of collectors in Revit API.
[Collectors](Collectors.md)

[EN] Tools that help you find and gather specific things in your Revit project, like all the doors or all the walls of a certain height.


## Element Filters
Various types of element filters and their usage.
[Element Filters](element-filters.md)

[EN] Ways to narrow down your search in Revit, like looking for only red doors or only windows on the second floor.


## Element Conversion Methods
Methods to convert elements between different types.
[Element Conversion Methods](Element_Conversion_Methods.md)

[EN] Ways to change how Revit sees and treats different parts of your building model.


## Elements Intersecting a BoundingBox
How to collect elements intersecting a bounding box.
[Elements Intersecting a BoundingBox](Elements_Intersecting_a_BoundingBox.md)

[EN] Finding all the parts of your building that touch or go through an imaginary box you've drawn in your model.


## Elements within a BoundingBox
Collecting elements within a specified bounding box.
[Elements within a BoundingBox](Elements_within_a_BoundingBox.md)

[EN] Locating all the items in your Revit model that fit completely inside a box you've defined.


## Exclusive Filter
Using exclusive filters to refine collections.
[Exclusive Filter](Exclusive_Filter.md)

[EN] A way to tell Revit what you don't want to include in your search results.


## FamilySymbols Filtering
Filtering elements based on family symbols.
[FamilySymbols Filtering](FamilySymbols_Filtering.md)

[EN] Finding specific types of building components, like a particular style of window or door.


## Filter Examples
Various examples of filter usage in Revit API.
[Filter Examples](filter-examples.md)

[EN] Sample ways to search for things in your Revit project, like finding all the doors or all the walls.


## Filter Items According to the Current Design Option
Filtering elements based on the current design option.
[Filter Items According to the Current Design Option](filter-items-current-design-option.md)

[EN] A way to focus on parts of your building that belong to a specific design variation you're considering.


## Filter by Class
Collecting elements based on their class.
[Filter by Class](filter-by-class.md)

[EN] Searching for things in Revit based on what kind of object they are in the computer program.


## Filter Intersecting Elements
How to filter elements that intersect.
[Filter Intersecting Elements](Filter_Intersecting_Elements.md)

[EN] Finding building parts that overlap or touch each other in your Revit model.


## Filter Selectable Items
Filtering selectable elements.
[Filter Selectable Items](Filter_Selectable_Items.md)

[EN] A way to find things in your Revit model that you can click on and select.


## Filter Space Tags
Filtering space tags.
[Filter Space Tags](Filter_Space_Tags.md)

[EN] Locating labels that identify different areas or rooms in your building design.


## Filter by Family Instance
Collecting family instances.
[Filter by Family Instance](Filter_by_Family_Instance.md)

[EN] Finding specific copies of building components, like a particular door or window you've placed in your model.


## Filter by Level
Filtering elements by level.
[Filter by Level](Filter_by_Level.md)

[EN] Searching for things on a specific floor or height in your building design.


## Filter by Parameter Values
Using parameter values to filter elements.
[Filter by Parameter Values](Filter_by_Parameter_Values.md)

[EN] Finding building elements based on their properties, like all walls of a certain thickness.


## Filter by Workset
Collecting elements by workset.
[Filter by Workset](Filter_by_Workset.md)

[EN] Searching for items that belong to a specific group or section of your project that team members work on separately.


## Filtering Elements Controlled by a Line
Filtering elements controlled by a line in Revit.
[Filtering Elements Controlled by a Line](filtering-elements-controlled-by-line.md)

[EN] Finding building parts that are defined or shaped by a specific line in your design.


## Filtering Elements Visible in View
Collecting elements visible in the current view.
[Filtering Elements Visible in View](filtering-elements-visible-in-view.md)

[EN] Locating items that you can see in a particular view or perspective of your building model.


## Filtering View-Dependent Elements
Collecting view-dependent elements.
[Filtering View-Dependent Elements](filtering-view-dependent-elements.md)

[EN] Finding things in your Revit model that only appear or change based on how you're looking at the building.


## Filtering by Design Options
Using design options to filter elements.
[Filtering by Design Options](filtering-by-design-options.md)

[EN] Searching for building elements that are part of different design choices you're considering.


## Filtering of Types and Instances
Filtering elements by types and instances.
[Filtering of Types and Instances](filtering-types-and-instances.md)

[EN] Finding either general categories of building parts or specific examples of those parts in your model.


## Insertion Point within a BoundingBox
Finding insertion points within a bounding box.
[Insertion Point within a BoundingBox](Insertion_Point_within_a_BoundingBox.md)

[EN] Locating where specific items are placed within a defined area of your building model.


## Labels
Working with labels in Revit API.
[Labels](Labels.md)

[EN] Working with text or symbols that identify or describe parts of your building design.


## Logic Filters
Using logical operations for filtering.
[Logic Filters](Logic_Filters.md)

[EN] Using 'and', 'or', and 'not' statements to create more complex searches in your Revit model.


## MultiClass Filtering
Filtering elements by multiple classes.
[MultiClass Filtering](multiclass-filtering.md)

[EN] Searching for multiple types of building elements at the same time in your Revit project.


## Other FilteredElementCollector Methods
Additional methods for element collection.
[Other FilteredElementCollector Methods](Other_FilteredElementCollector_Methods.md)

[EN] Additional ways to search and gather items in your Revit model beyond the basic methods.


## Quick Filters
Using quick filters for efficient element collection.
[Quick Filters](quick-filters.md)

[EN] Fast ways to search for things in your Revit model without slowing down your computer too much.


## Quick Filter Concatenation
Concatenating multiple filters quickly.
[Quick Filter Concatenation](Quick_Filter_Concatenation.md)

[EN] Combining multiple quick search methods to find very specific things in your Revit project.


## Slow Filters
Using slow filters for element collection.
[Slow Filters](Slow_Filters.md)

[EN] More detailed search methods that might take longer but can find very specific things in your Revit model.


## Structural Element Filtering
Filtering structural elements.
[Structural Element Filtering](structural-element-filtering.md)

[EN] Finding parts of your building that help hold it up, like beams, columns, or foundation elements.


---

Happy Designing! 🎨
