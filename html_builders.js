function BuildObject(type, attributes, children) {
    var element = document.createElement(type)
  
    for (key in attributes) {
      element.setAttribute(key, attributes[key])
    }

    if (children != undefined) {
        if (children[0] == undefined || typeof children === 'string') {
            element = append(element, children)
        } else {
            children.forEach(child => {
                element = append(element, child)
            })
        }
    }
  
    return element
}

function append(element, to_append) {
    if (typeof to_append === 'string') {
        element.appendChild(document.createTextNode(to_append))
    } else {
        element.appendChild(to_append)
    }
    return element
}

function Div(attributes, children) {return BuildObject('div', attributes, children)}
function Button(attributes, children) {return BuildObject('button', attributes, children)}
function Br(attributes, children) {return BuildObject('br', attributes, children)}
function Input(attributes, children) {return BuildObject('input', attributes, children)}
function Label(attributes, children) {return BuildObject('label', attributes, children)}
function Select(attributes, children) {return BuildObject('select', attributes, children)}
function Option(attributes, children) {return BuildObject('option', attributes, children)}
function Optgroup(attributes, children) {return BuildObject('optgroup', attributes, children)}
