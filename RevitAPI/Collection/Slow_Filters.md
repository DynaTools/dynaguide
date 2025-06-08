# Slow Filters

## Overview
Slow filters need to load the element information to execute, which can affect script performance. It is recommended to deplete fast filtering options before using them.

## List of Slow Filters
| Name                          | Constructor Arguments                         | Description                               |
|-------------------------------|-----------------------------------------------|-------------------------------------------|
| FamilyInstanceFilter          | Document / ElementId / FamilySymbolId         | Elements of a particular FamilySymbol     |
| ElementLevelFilter            | ElementId / LevelId / Boolean (invert filter) | Elements associated with a level          |
| ElementParameterFilter        | FilterRule / iList / Boolean (invert filter)  | Parameter value matching                  |
| PrimaryDesignOptionMemberFilter| None / No arguments / Boolean (invert filter)| Elements of the main design option        |
| ElementDesignOptionFilter     | designOptionId                                | Elements of the active layout option      |
| StructuralInstanceUsageFilter | StructuralInstanceUsage (enum) / Boolean (inv)| Structural use parameter for family elements|
| StructuralWallUsageFilter     | StructuralWallUsage (enum) / Boolean (inv)    | Structural use parameter for walls        |
| StructuralMaterialTypeFilter  | StructuralMaterialType (enum) / Boolean (inv) | Type of material applied to elements      |
| RoomFilter                    | None / No arguments                           | Search for rooms                          |
| SpaceFilter                   | None / No arguments                           | Search spaces                             |
| AreaFilter                    | None / No arguments                           | Search areas                              |
| RoomTagFilter                 | None / No arguments                           | Search room labels                        |
| SpaceTagFilter                | None / No arguments                           | Search space labels                       |
| AreaTagFilter                 | None / No arguments                           | Search area labels                        |
| CurveElementFilter            | CurveElementType (enum) / Boolean (inv)       | Searches for model curves, symbolic curves, detail curves, etc.|
| ElementIntersectsSolidFilter  | Solid / Boolean                               | Detects elements that collide with each other|

## Note
When applying slow filters to a collector, the `WherePasses()` method is used to stack as many as necessary.
