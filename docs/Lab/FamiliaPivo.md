---
sidebar_position: 1
---

# Tutorial: Revit Fractal Family - Universal Rotation System

![Initial Concept](./img/image.png)

<div style={{textAlign: 'center', marginBottom: '2rem'}}>

![Universal Rotation System](./img/OrbitFamily-ezgif.com-video-to-gif-converter.gif)

</div>

## Concept

:::info Inspiration
The concept of creating a rotating family at any angle seemed impossible until discovering an advanced adaptive family technique. This tutorial simplifies the process to create a photovoltaic panel family that can rotate at any angle.
:::

The principle is similar to a **fractal vise**, where each rotating piece is connected to another, allowing movement in multiple axes:

<div style={{textAlign: 'center', margin: '1.5rem 0'}}>

![Fractal Vise - Concept](./img/image-1.png)

</div>

:::tip Key Concept
For the system to adapt to any element, we use rotating pieces connected sequentially. We'll implement this using Revit's **Revolve** command.
::: 

## Part 1: Creating the Fractal Pivot Family

### 1. Create New Family

<div className="steps-container">

- Open Revit
- Create a new family (**Generic Model Adaptive** or **Metric Generic Model**)
- Define the base reference planes

</div>

<div style={{textAlign: 'center', margin: '1.5rem 0'}}>

![Creating New Family](./img/image-2.png)

</div>

### 2. Create the First Revolve

<div className="steps-container">

- Draw the profile for the revolve
- Use the **Revolve** tool to create the first rotating piece
- Configure the rotation axis

</div>

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', margin: '1.5rem 0'}}>

![Revolve Profile](./img/image-3.png)

![Revolve Configuration](./img/image-4.png)

![First Revolve](./img/image-5.png)

</div>

<div style={{textAlign: 'center', margin: '1rem 0'}}>

![First Revolve Result](./img/image-6.png)

![3D Visualization](./img/image-7.png)

</div>

### 3. Add Angular Parameters

:::warning Important
Create clear parameters to control rotation. This is fundamental for parametric control of the system.
:::

<div className="steps-container">

- Create angle parameters to control rotation
- Associate parameters with the revolve
- Configure necessary formulas

</div>

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', margin: '1.5rem 0'}}>

![Creating Parameters](./img/image-8.png)

![Parameter Configuration](./img/image-9.png)

![Associating Parameters](./img/image-10.png)

![Rotation Test](./img/image-11.png)

</div>

### 4. Apply Workplane on Revolve

:::danger Critical Step
This is the most important step! The workplane applied on the first revolve surface will be the base for the next element.
:::

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', margin: '1.5rem 0'}}>

![Applying Workplane](./img/image-12.png)

![Workplane Configuration](./img/image-13.png)

![Positioned Workplane](./img/image-14.png)

</div>

### 5. Create Second Revolve in Different Direction

<div className="steps-container">

- With the workplane active, create another revolve
- Orient this revolve in a different direction (perpendicular, for example)
- Configure its own angular parameters

</div>

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', margin: '1.5rem 0'}}>

![Second Revolve](./img/image-15.png)

![Perpendicular Configuration](./img/image-16.png)

![Complete System](./img/image-17.png)

</div>

### 6. Configure Relationship Between Revolves

<div className="steps-container">

- Establish parametric relationship between elements
- **Test**: when one rotates, the other should follow maintaining its relative orientation
- Adjust constraints as needed

</div>

<div style={{textAlign: 'center', margin: '1.5rem 0'}}>

![Movement Test](./img/image-18.png)

</div>

### 7. Save the Pivot Family

<div className="steps-container">

- Save this family with a descriptive name (e.g., `Fractal_Pivot_Base`)
- This will be your rotational control family

</div>

<div style={{textAlign: 'center', margin: '1.5rem 0'}}>

![Saving the Family](./img/image-19.png)

</div>
## Part 2: Applying the Face-Based System

### 8. Create or Open Face-Based Family

<div className="steps-container">

- Create a new family or use an existing one (e.g., photovoltaic panel)
- Choose the **Face-Based** template
- Model the desired element (panel, plate, etc.)

</div>

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', margin: '1.5rem 0'}}>

![Face-Based Template](./img/image-20.png)

![Modeled Panel](./img/image-21.png)

</div>

### 9. Insert into Project

<div className="steps-container">

- Load both families into the project
- First, insert the fractal pivot family
- Configure initial angles

</div>

### 10. Apply Face-Based Family

:::tip Final Application
- Select the face-based family
- **Apply on the last revolve face** of the pivot family
- The face-based family will now follow all system rotation
:::

---

## Method Advantages

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', margin: '2rem 0'}}>

<div style={{padding: '1.5rem', border: '1px solid var(--ifm-color-emphasis-200)', borderRadius: '8px'}}>
<h4>🎯 Total Control</h4>
<p>Complete control over rotation in multiple axes</p>
</div>

<div style={{padding: '1.5rem', border: '1px solid var(--ifm-color-emphasis-200)', borderRadius: '8px'}}>
<h4>🔧 Flexibility</h4>
<p>Add as many rotation levels as desired</p>
</div>

<div style={{padding: '1.5rem', border: '1px solid var(--ifm-color-emphasis-200)', borderRadius: '8px'}}>
<h4>♻️ Reusability</h4>
<p>The pivot can be used with different face-based elements</p>
</div>

<div style={{padding: '1.5rem', border: '1px solid var(--ifm-color-emphasis-200)', borderRadius: '8px'}}>
<h4>📐 Precision</h4>
<p>Exact angles defined parametrically</p>
</div>

</div>

## Practical Tips

:::note Best Practices
1. **Naming**: Use clear names for parameters (e.g., `Rotation_Axis_X`, `Rotation_Axis_Y`)
2. **Incremental Testing**: Test each rotation level before adding the next
3. **Performance**: Limit the number of revolves to maintain good performance
4. **Visibility**: Configure pivot visibility to hide it when necessary
:::

## Practical Applications

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', margin: '1.5rem 0'}}>

- 🌞 Photovoltaic panels with precise orientation
- 🏢 Adjustable brise-soleil  
- 🎨 Dynamic facade elements
- ⚙️ Mechanical equipment with multiple degrees of freedom
- 💡 Directional luminaires

</div>

## Final Result

:::success Complete System
You will have a system where:
- ✅ The pivot family controls all rotation
- ✅ The face-based element (panel) perfectly follows the movement  
- ✅ Angles can be adjusted in multiple directions
- ✅ The system is fully parametric and reusable
:::