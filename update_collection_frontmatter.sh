#!/bin/bash

# Array of files and their corresponding titles
declare -A files_titles=(
    ["02_Category_Types.md"]="Category Types"
    ["03_Basic_Element_Filters.md"]="Basic Element Filters"
    ["04_Element_Conversion_Methods.md"]="Element Conversion Methods"
    ["05_Basic_Filter_Examples.md"]="Basic Filter Examples"
    ["06_Essential_Quick_Filters.md"]="Essential Quick Filters"
    ["07_Filter_by_Element_Class.md"]="Filter by Element Class"
    ["08_Combining_Quick_Filters.md"]="Combining Quick Filters"
    ["09_Filter_Family_Symbols.md"]="Filter Family Symbols"
    ["10_Filter_Multiple_Classes.md"]="Filter Multiple Classes"
    ["11_BoundingBox_Tolerance.md"]="BoundingBox Tolerance"
    ["12_Elements_Within_BoundingBox.md"]="Elements Within BoundingBox"
    ["13_Elements_Intersecting_BoundingBox.md"]="Elements Intersecting BoundingBox"
    ["14_Delete_Unused_ViewTemplate.md"]="Delete Unused ViewTemplate"
    ["15_Exclusive_Filter.md"]="Exclusive Filter"
    ["16_Filter_by_Current_Design_Option.md"]="Filter by Current Design Option"
    ["17_Filter_Intersecting_Elements.md"]="Filter Intersecting Elements"
    ["18_Filter_Selectable_Items.md"]="Filter Selectable Items"
    ["19_Filter_Space_Tags.md"]="Filter Space Tags"
    ["20_Filter_by_Family_Instance.md"]="Filter by Family Instance"
    ["21_Filter_by_Level.md"]="Filter by Level"
    ["22_Filter_by_Parameter_Values.md"]="Filter by Parameter Values"
    ["23_Filter_by_Workset.md"]="Filter by Workset"
    ["24_Filter_Elements_Controlled_by_Line.md"]="Filter Elements Controlled by Line"
    ["25_Filter_Elements_Visible_in_View.md"]="Filter Elements Visible in View"
    ["26_Filter_View_Dependent_Elements.md"]="Filter View Dependent Elements"
    ["27_Filter_by_Design_Options.md"]="Filter by Design Options"
    ["28_Filter_Types_and_Instances.md"]="Filter Types and Instances"
    ["29_Insertion_Point_Within_BoundingBox.md"]="Insertion Point Within BoundingBox"
    ["30_Labels.md"]="Labels"
    ["31_Logic_Filters.md"]="Logic Filters"
    ["32_Other_FilteredElementCollector_Methods.md"]="Other FilteredElementCollector Methods"
    ["33_Slow_Filters.md"]="Slow Filters"
    ["34_Structural_Element_Filtering.md"]="Structural Element Filtering"
    ["35_Collecting_Worksets.md"]="Collecting Worksets"
)

cd /workspaces/dynaguide/RevitAPI/Collection

for filename in "${!files_titles[@]}"; do
    title="${files_titles[$filename]}"
    # Extract position number from filename
    position=$(echo "$filename" | grep -o '^[0-9]\+')
    
    if [ -f "$filename" ]; then
        echo "Updating $filename with title '$title' and position $position"
        
        # Create temporary file with new frontmatter
        temp_file=$(mktemp)
        
        # Add frontmatter
        cat > "$temp_file" << EOF
---
title: "$title"
sidebar_position: $position
---

EOF
        
        # Skip the first line if it's a filepath comment and the title line
        tail -n +2 "$filename" | sed '1{/^# /d;}' >> "$temp_file"
        
        # Replace original file
        mv "$temp_file" "$filename"
    fi
done

echo "Frontmatter update completed!"
