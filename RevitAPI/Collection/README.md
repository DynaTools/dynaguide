# Revit API Collectors for Dynamo

In the context of Revit API for Dynamo, collectors are essential tools used to retrieve elements from a Revit document based on specific criteria. These collectors, known as `FilteredElementCollector` in the Revit API, allow users to filter elements by various parameters, such as category, type, parameter values, and more.

This README provides a comprehensive guide to understanding and using collectors in Dynamo with Revit API, referencing each explanation with the corresponding `.md` file.

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

[PT-BR] Uma forma de definir quão preciso você quer ser ao verificar se as coisas se encaixam dentro de uma caixa no seu modelo 3D.

## Categories Types
Understanding and working with Revit category types.
[Categories Types](Categories%20Types.md)

[EN] Different groups that Revit uses to organize things in your building design, like walls, doors, or windows.

[PT-BR] Diferentes grupos que o Revit usa para organizar coisas no seu projeto de construção, como paredes, portas ou janelas.

## Collecting Worksets
How to collect worksets in a Revit project.
[Collecting Worksets](Collecting_Worksets.md)

[EN] A method to gather all the separate parts of your project that different team members might be working on.

[PT-BR] Um método para reunir todas as partes separadas do seu projeto em que diferentes membros da equipe podem estar trabalhando.

## Collectors
An overview of collectors in Revit API.
[Collectors](Collectors.md)

[EN] Tools that help you find and gather specific things in your Revit project, like all the doors or all the walls of a certain height.

[PT-BR] Ferramentas que ajudam você a encontrar e reunir coisas específicas no seu projeto Revit, como todas as portas ou todas as paredes de uma certa altura.

## Element Filters
Various types of element filters and their usage.
[Element Filters](Element%20Filters.md)

[EN] Ways to narrow down your search in Revit, like looking for only red doors or only windows on the second floor.

[PT-BR] Formas de refinar sua busca no Revit, como procurar apenas portas vermelhas ou apenas janelas no segundo andar.

## Element Conversion Methods
Methods to convert elements between different types.
[Element Conversion Methods](Element_Conversion_Methods.md)

[EN] Ways to change how Revit sees and treats different parts of your building model.

[PT-BR] Maneiras de mudar como o Revit vê e trata diferentes partes do seu modelo de construção.

## Elements Intersecting a BoundingBox
How to collect elements intersecting a bounding box.
[Elements Intersecting a BoundingBox](Elements_Intersecting_a_BoundingBox.md)

[EN] Finding all the parts of your building that touch or go through an imaginary box you've drawn in your model.

[PT-BR] Encontrar todas as partes do seu edifício que tocam ou atravessam uma caixa imaginária que você desenhou no seu modelo.

## Elements within a BoundingBox
Collecting elements within a specified bounding box.
[Elements within a BoundingBox](Elements_within_a_BoundingBox.md)

[EN] Locating all the items in your Revit model that fit completely inside a box you've defined.

[PT-BR] Localizar todos os itens no seu modelo Revit que se encaixam completamente dentro de uma caixa que você definiu.

## Exclusive Filter
Using exclusive filters to refine collections.
[Exclusive Filter](Exclusive_Filter.md)

[EN] A way to tell Revit what you don't want to include in your search results.

[PT-BR] Uma forma de dizer ao Revit o que você não quer incluir nos seus resultados de busca.

## FamilySymbols Filtering
Filtering elements based on family symbols.
[FamilySymbols Filtering](FamilySymbols_Filtering.md)

[EN] Finding specific types of building components, like a particular style of window or door.

[PT-BR] Encontrar tipos específicos de componentes de construção, como um estilo particular de janela ou porta.

## Filter Examples
Various examples of filter usage in Revit API.
[Filter Examples](Filter%20Examples.md)

[EN] Sample ways to search for things in your Revit project, like finding all the doors or all the walls.

[PT-BR] Exemplos de maneiras de procurar coisas no seu projeto Revit, como encontrar todas as portas ou todas as paredes.

## Filter Items According to the Current Design Option
Filtering elements based on the current design option.
[Filter Items According to the Current Design Option](Filter%20Items%20According%20to%20the%20Current%20Design%20Option.md)

[EN] A way to focus on parts of your building that belong to a specific design variation you're considering.

[PT-BR] Uma forma de focar em partes do seu edifício que pertencem a uma variação específica de design que você está considerando.

## Filter by Class
Collecting elements based on their class.
[Filter by Class](Filter%20by%20Class.md)

[EN] Searching for things in Revit based on what kind of object they are in the computer program.

[PT-BR] Procurar coisas no Revit com base no tipo de objeto que elas são no programa de computador.

## Filter Intersecting Elements
How to filter elements that intersect.
[Filter Intersecting Elements](Filter_Intersecting_Elements.md)

[EN] Finding building parts that overlap or touch each other in your Revit model.

[PT-BR] Encontrar partes da construção que se sobrepõem ou se tocam no seu modelo Revit.

## Filter Selectable Items
Filtering selectable elements.
[Filter Selectable Items](Filter_Selectable_Items.md)

[EN] A way to find things in your Revit model that you can click on and select.

[PT-BR] Uma forma de encontrar coisas no seu modelo Revit que você pode clicar e selecionar.

## Filter Space Tags
Filtering space tags.
[Filter Space Tags](Filter_Space_Tags.md)

[EN] Locating labels that identify different areas or rooms in your building design.

[PT-BR] Localizar etiquetas que identificam diferentes áreas ou salas no seu projeto de construção.

## Filter by Family Instance
Collecting family instances.
[Filter by Family Instance](Filter_by_Family_Instance.md)

[EN] Finding specific copies of building components, like a particular door or window you've placed in your model.

[PT-BR] Encontrar cópias específicas de componentes de construção, como uma porta ou janela particular que você colocou no seu modelo.

## Filter by Level
Filtering elements by level.
[Filter by Level](Filter_by_Level.md)

[EN] Searching for things on a specific floor or height in your building design.

[PT-BR] Procurar coisas em um andar ou altura específica no seu projeto de construção.

## Filter by Parameter Values
Using parameter values to filter elements.
[Filter by Parameter Values](Filter_by_Parameter_Values.md)

[EN] Finding building elements based on their properties, like all walls of a certain thickness.

[PT-BR] Encontrar elementos de construção com base em suas propriedades, como todas as paredes de uma certa espessura.

## Filter by Workset
Collecting elements by workset.
[Filter by Workset](Filter_by_Workset.md)

[EN] Searching for items that belong to a specific group or section of your project that team members work on separately.

[PT-BR] Procurar itens que pertencem a um grupo ou seção específica do seu projeto em que os membros da equipe trabalham separadamente.

## Filtering Elements Controlled by a Line
Filtering elements controlled by a line in Revit.
[Filtering Elements Controlled by a Line](Filtering%20Elements%20Controlled%20by%20a%20Line.md)

[EN] Finding building parts that are defined or shaped by a specific line in your design.

[PT-BR] Encontrar partes da construção que são definidas ou moldadas por uma linha específica no seu design.

## Filtering Elements Visible in View
Collecting elements visible in the current view.
[Filtering Elements Visible in View](Filtering%20Elements%20Visible%20in%20View.md)

[EN] Locating items that you can see in a particular view or perspective of your building model.

[PT-BR] Localizar itens que você pode ver em uma vista ou perspectiva particular do seu modelo de construção.

## Filtering View-Dependent Elements
Collecting view-dependent elements.
[Filtering View-Dependent Elements](Filtering%20View-Dependent%20Elements.md)

[EN] Finding things in your Revit model that only appear or change based on how you're looking at the building.

[PT-BR] Encontrar coisas no seu modelo Revit que só aparecem ou mudam com base em como você está olhando para o edifício.

## Filtering by Design Options
Using design options to filter elements.
[Filtering by Design Options](Filtering%20by%20Design%20Options.md)

[EN] Searching for building elements that are part of different design choices you're considering.

[PT-BR] Procurar elementos de construção que fazem parte de diferentes opções de design que você está considerando.

## Filtering of Types and Instances
Filtering elements by types and instances.
[Filtering of Types and Instances](Filtering%20of%20Types%20and%20Instances.md)

[EN] Finding either general categories of building parts or specific examples of those parts in your model.

[PT-BR] Encontrar categorias gerais de partes de construção ou exemplos específicos dessas partes no seu modelo.

## Insertion Point within a BoundingBox
Finding insertion points within a bounding box.
[Insertion Point within a BoundingBox](Insertion_Point_within_a_BoundingBox.md)

[EN] Locating where specific items are placed within a defined area of your building model.

[PT-BR] Localizar onde itens específicos estão colocados dentro de uma área definida do seu modelo de construção.

## Labels
Working with labels in Revit API.
[Labels](Labels.md)

[EN] Working with text or symbols that identify or describe parts of your building design.

[PT-BR] Trabalhar com texto ou símbolos que identificam ou descrevem partes do seu projeto de construção.

## Logic Filters
Using logical operations for filtering.
[Logic Filters](Logic_Filters.md)

[EN] Using 'and', 'or', and 'not' statements to create more complex searches in your Revit model.

[PT-BR] Usar declarações 'e', 'ou' e 'não' para criar buscas mais complexas no seu modelo Revit.

## MultiClass Filtering
Filtering elements by multiple classes.
[MultiClass Filtering](MultiClass%20Filtering.md)

[EN] Searching for multiple types of building elements at the same time in your Revit project.

[PT-BR] Procurar múltiplos tipos de elementos de construção ao mesmo tempo no seu projeto Revit.

## Other FilteredElementCollector Methods
Additional methods for element collection.
[Other FilteredElementCollector Methods](Other_FilteredElementCollector_Methods.md)

[EN] Additional ways to search and gather items in your Revit model beyond the basic methods.

[PT-BR] Formas adicionais de pesquisar e reunir itens no seu modelo Revit além dos métodos básicos.

## Quick Filters
Using quick filters for efficient element collection.
[Quick Filters](Quick%20Filters.md)

[EN] Fast ways to search for things in your Revit model without slowing down your computer too much.

[PT-BR] Formas rápidas de procurar coisas no seu modelo Revit sem diminuir muito a velocidade do seu computador.

## Quick Filter Concatenation
Concatenating multiple filters quickly.
[Quick Filter Concatenation](Quick_Filter_Concatenation.md)

[EN] Combining multiple quick search methods to find very specific things in your Revit project.

[PT-BR] Combinar múltiplos métodos de busca rápida para encontrar coisas muito específicas no seu projeto Revit.

## Slow Filters
Using slow filters for element collection.
[Slow Filters](Slow_Filters.md)

[EN] More detailed search methods that might take longer but can find very specific things in your Revit model.

[PT-BR] Métodos de busca mais detalhados que podem demorar mais, mas podem encontrar coisas muito específicas no seu modelo Revit.

## Structural Element Filtering
Filtering structural elements.
[Structural Element Filtering](Structural%20Element%20Filtering.md)

[EN] Finding parts of your building that help hold it up, like beams, columns, or foundation elements.

[PT-BR] Encontrar partes do seu edifício que ajudam a sustentá-lo, como vigas, colunas ou elementos de fundação.

---

Happy Designing! 🎨
