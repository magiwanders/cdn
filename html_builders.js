function _Object(type, attributes, children) {
    var element = document.createElement(type)

    for (key in attributes) element.setAttribute(key, attributes[key])

    if (children != undefined) {
        if (children[0] == undefined || typeof children === 'string') {
            element = append(element, children)
        } else {
            children.forEach( child => { element = append(element, child) } )
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

// Ignored tags: !DOCTYPE, comment, var
const HTMLTagList = [
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
/////////////////////////////////////////////////
function Table(model) {
    var tg = 'border-collapse:collapse;border-spacing:0;'
    var th = 'border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;'
    var td = 'border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;word-break:normal;'
    var tablehead = 'border-color:#000000;text-align:center;vertical-align:top'
    var tablerow = 'border-color:#000000;text-align:left;vertical-align:top'

    var head_cells = []

    for (var head_cell_model of model.head) head_cells.push( _th({style: th+tablehead, colspan: head_cell_model.colspan}), head_cell_model.innerText)

    var rows = []

    for (var row_model of model.body) {
        var cells = []
        for (var cell_model of row_model) cells.push( _td({style: td+tablerow, colspan: cell_model.colspan}), cell_model.innerText)
        rows.push( cells )
    }

    return _table({style: tg}, 
        [
            _thead({}, _tr({}, ...head_cells)),
            _tbody({}, rows )
        ]
    )
}