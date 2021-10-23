window.dom = {
    create (string) {
        const container = document.createElement("template");
        container.innerHTML = string.trim();
        return container.content.firstChild;
    },
    find (selector) {
        return document.querySelectorAll(selector);
    },
    style (node, name, value) {
        if (arguments.length === 3) // dom.style(div, 'color', 'red')
        node.style[name] = value;
        else if (arguments.length === 2) {
            if (typeof name === 'String') //dom.style(div, 'color')
            return node.style[name];
            else if (name instanceof Object) {
                //dom.style(div, {color:'red'})
                const Object = name;
                for(let key in object)node.style[key] = object[key];
            }
        }
    },
    siblings (node) {
        return Array.from(node.parentNode.children).filter((n)=>n != node
        );
    },
    each (nodeList, fn) {
        for(let i = 0; i < nodeList.length; i++)fn.call(null, nodeList[i]);
    }
};

//# sourceMappingURL=index.26a40173.js.map
