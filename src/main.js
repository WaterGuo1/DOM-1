const div = dom.create("    <tr><td>2</td></tr>")
console.log(div);


const testDiv = dom.find('#test')[0]
console.log(testDiv)


console.log(dom.style(div, 'color', 'red'))

const divList = dom.find('.red')
console.log(divList )


const t = dom .find('#travel')[0]
dom.each(dom.children(t), (n)=> dom.style(n, 'color', 'red'))