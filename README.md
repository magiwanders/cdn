# js_builds_html

This is an extremely simple set of utility functions in vanilla JavaScript to make building a webpage from JavaScript code more similar to frameworks like Flutter. 

Since I personally use Snakecase for my vanilla JavaScript code, these functions use PascalCase to remark their different purpose, that of building the HTML instead of providing actual JS functionality.

## Basic Usage

```javascript
<type>({<attributes>}, <children>)
```

Where:
 - ```<type>``` is the name of the HTML element with the capital letter (```Div``` for div, ```Br``` for br and so on)
 - ```{<attributes>}``` is a JSON-like set of attributes (example: ```{id: 'thiselement', style:'height:100%; width:40px;'}``` )
 - ```<children>``` is either an element or an array of elements in the same function format (or in simple ```string``` format)
 
Note that only some types are supported (see inside the ```html_builders.js``` file, I just did not write the ones I haven't used yet)

In case the type you want to use is not supported add it to the file and pull request (see the [Contributions](#contributions) section) or use the basic function:

```javascript
BuildObject('type', {<attributes>}, <children>)
```
Where ```'type'``` is just the name of the type with no capital letters.

## Example

To add the HTML code:

```html
<div id='simulation_controls' style='height:500px; width:100%; pointer-events:painted;'>
  <button id="toggle_simulation">Pause</button> or 
  <button id="step">Step</button> the simulation.
  <br><br>
</div>
```

To the element:

```html
<div id='container'></div>
```

We can use the JavaScript code :

```javascript
document.getElementById('container').appendChild(
  Div({id: 'simulation_controls', style: 'height:500px; width:100%; pointer-events:painted;'},
    [
        Button({id: 'toggle_simulation'}, 'Pause'), 'or',
        Button({id: 'step'}, 'Step'), ' the simulation',
        Br(), Br()
    ]
  )
)
```

Resulting in:

```html
<div id='container'>
  <div id='simulation_controls' style='height:500px; width:100%; pointer-events:painted;'>
    <button id="toggle_simulation">Pause</button> or 
    <button id="step">Step</button> the simulation.
    <br><br>
  </div>
</div>
```

## Contributions

To add support for example to the HTML element ```option``` add to the ```html_builders.js``` file the line:

```javascript
function Option(attributes, children) {return BuildObject('option', attributes, children)}
```

And instead of:

```javascript
BuildObject('option', {<attributes>}, <children>)
```

You can now use:

```javascript
Option({<attributes>}, <children>)
```
