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
  const arr = (arr, num) => {
    var newArr = []
    for (let i = 0; i < arr.length; i += num) {
      newArr.push(arr.slice(i, i + num))
    }
    return newArr
  }
  const creatArr = (arr) => {
    const _arr = []
    for (let i = 0; i < arr.length; i++) {
      _arr.push(arr[i])
    }
    return _arr
  }
  const creatChild = (arr) => {
    return arr.map((item) => {
      return {
        children: item
      }
    })
  }
  if ('SPAN' == tagName) {
    try {
      const _content1 = dom.children[1].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0]
      console.log(_content1)
      const _content2 = _content1.children[0].children[0].children[0].children[0].children
      console.log(_content)
      _content = creatArr(_content2)
      _content = arr(_content, 3)
      _content = creatChild(_content)
      console.log(_content)
      text = _content1.children[1].innerText
      console.log(text)
    } catch (e) {
    }
  } else {
    _content = dom.children[1].children[0].children[0].children[0].children[0].children
    console.log(_content)
    if (_content.length < 2) {
      _content = _content[0].children
      console.log(_content)
      _content = creatArr(_content)
      _content = arr(_content, 3)
      _content = creatChild(_content)
    }
    console.log(_content)
    const _dom = item.children[1].children[1].children[0].children[1].children[0].children[1]
    text = _dom?.innerText || ''
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
