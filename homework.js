let listTable = $('#_block_content_exam_1>form>table>tbody')
let rows = listTable.rows
let results = {}
for (let i = 0; i < rows.length; i++) {
  console.log('current index ' + i)
  let item = rows[i]

  let tagName = item.children[1].children[1].children[0].children[1].children[0].children[0].tagName
  let text = ''
  let ti = {}
  console.log('current tagName= ' + tagName)
  let tiContent = {}
  let dom = item.children[1].children[1].children[0]
  let title = dom.children[0].children[0].innerText
  let _content = []
  if ('SPAN' == tagName) {
    try {
      _content = dom.children[1].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children
      text = item.children[1].children[1].children[0].children[1].children[0].children[0].children[0].children[1].innerText
    } catch (e) {
    }
    try {
      item.children[1].children[1].children[0].children[1].children[0].children[0].children[1].innerText
    } catch (e) {
    }
  } else {
    _content = dom.children[1].children[0].children[0].children[0].children[0].children
    text = item.children[1].children[1].children[0].children[1].children[0].children[1].innerText
  }
  for (let i of _content) {
    let a = i.children[1].innerText
    a = a.substring(a.indexOf('(') + 1, a.indexOf(')'))
    const _title = i.children[2].children[0].innerText
    tiContent[a] = _title
  }
  let index_a = text.indexOf('：') + 1
  let index_b = text.indexOf(']')
  let result = text.substring(index_a, index_b)


  results[title] = [tiContent[result]]
}
console.log(results)
console.log(JSON.stringify(results))
