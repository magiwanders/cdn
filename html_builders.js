function _Object(type, attributes, children) {
    var element = document.createElement(type)

    for (key in attributes) {
        var attribute = attributes[key]
      if (key=='style') {
        for (style_key in attributes[key]) {
            element.setAttribute
        }
      } else {
      }
      element.setAttribute(key, attribute)
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

function buildAllHTMLFunctions() {
    for(var i=0; i<HTMLTagList.length; i++) {
        window['_'+HTMLTagList[i]] = new Function('attributes', 'children', 'return _Object("'+HTMLTagList[i]+'", attributes, children)')
    }
}

// function _div(attributes, children) {return _Object('div', attributes, children)}
// function _button(attributes, children) {return _Object('button', attributes, children)}
// function _br(attributes, children) {return _Object('br', attributes, children)}
// function _input(attributes, children) {return _Object('input', attributes, children)}
// function _label(attributes, children) {return _Object('label', attributes, children)}
// function _select(attributes, children) {return _Object('select', attributes, children)}
// function _option(attributes, children) {return _Object('option', attributes, children)}
// function _optgroup(attributes, children) {return _Object('optgroup', attributes, children)}
// function _h1(attributes, children) {return _Object('h1', attributes, children)}
// function _h2(attributes, children) {return _Object('h2', attributes, children)}
// function _h3(attributes, children) {return _Object('h3', attributes, children)}
// function _a(attributes, children) {return _Object('a', attributes, children)}
// function _canvas(attributes, children) {return _Object('canvas', attributes, children)}

// Ignored tags: !DOCTYPE, comment, var
HTMLTagList = [
    'html', 'head', 'body', 'title',
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'p', 'b', 'i', 'em', 'mark', 'small', 'strong', 'sub', 'sup', 'br', 'wbr',
    'abbr',
    'address',
    'bdi', 'bdo', 'pre', 'u',
    'blockquote', 'cite', 'code', 'q', 'rt', 'samp',
    'del', 's', 'ins', 'ruby',
    'dfn', 'rp',
    'kbd',
    'meter',
    'progress',
    'template',
    'time',
    'form', 'input', 'textarea', 'button', 'fieldset', 'legend', 'datalist', 'output',
    'label', 'select', 'optgroup', 'option',
    'iframe',
    'img', 'map', 'area', 'canvas', 'figure', 'picture', 'svg',
    'figcaption', 
    'audio', 'source', 'track', 'video',
    'a', 'link', 'nav',
    'ul', 'ol', 'li', 'dl', 'dt', 'dd',
    'table', 'caption', 'th', 'tr', 'td', 'thead', 'tbody', 'tfoot', 'col', 'colgroup',
    'style', 'div', 'span', 'header', 'footer', 'main', 'section', 'article', 'aside', 'details', 'dialog', 'summary', 'data',
    'meta', 'base',
    'script', 'noscript', 'embed', 'object', 'param'
]

buildAllHTMLFunctions()