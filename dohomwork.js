let daai = '{"以下属于端系统的是（ ）":["Android手机"],"关于路由协议的描述，正确的是（ ）":["通过执行一个算法来完成路由选择的一个协议"],"在Internet网络上，用来标识主机和主机上的应用程序的是（ ）":["IP地址、端口号"],"DNS不能提供的服务是（ ）。":["将IP地址转换为MAC地址"],"因特网使用的互连协议是（ ）":["IP"],"TCP使用三次握手协议来建立连接，握手的第一个报文段是由标志位字段的（ ）位被置为1来识别，表示请求连接":["SYN"],"下列不能分割冲突域的设备是（ ）":["集线器"],"以下不属于应用层协议的是（ ）":["ARP"],"在UDP报文中，伪首部的作用是（ ）":["计算校验和"],"网卡实现的主要功能是（ ）":["物理层与数据链路层的功能"],"关于HTTP和FTP的说法，错误的是（ ）":["都是无状态的"],"生成多项式是x2+x+1,传输的数据是11001，进行CRC校验后最终发送的数据是（ ）":["1100101"],"因特网网络设备的MAC地址和P地址分别由（ ）位二进制数字构成":["48，32"],"集线器HUB工作在（ ）":["物理层"],"下面的一些字段信息，包含在TCP头部而不在UDP头部的是（ ）":["顺序号"],"UDP数据报头部不包括（ ）":["UDP数据报头部长度"],"传输层端到端通信实际是在（ ）之间的通信":["进程"],"ARP协议实现的功能是（ ）":["已知IP地址获得下一跳的MAC地址"],"TCP协议为了实现可靠的服务，采用超时重传和累计确认技术，并规定确认号为（ ）":["下一个希望接收的报文段的首字节序号"],"TCP程序可以提供（ ）个不同端口":["216"]}'

/**信息存储的最小单位是（ ）
 * 自动做作业函数
 * @author marker
 * @param answerStr
 */


function doHomework (answerStr) {
  // let ans = answerStr.split('|')// 答案列表
  let ans = JSON.parse(daai)
  let questionNode = $('#tblDataList>tbody')
  let rows = questionNode.rows

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
  const arr = (arr, num) => {
    var newArr = []
    for (let i = 0; i < arr.length; i += num) {
      newArr.push(arr.slice(i, i + num))
    }
    return newArr
  }

  for (let i = 0; i < rows.length; i++) {
    let item = rows[i]
    const dom = item.children[0].children[0].children[0].children[0].children[1].children[1].children[0]
    const title = dom.children[0].children[0].innerText
    let content = dom.children[1].children[0].children[0].children[0].children[0].children
    console.log(title)
    console.log(content)
    if (content.length === 1) {
      content = content[0].children
      if (content.length === 1) {
        content = content[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0]
      }
      if (content.children) {
        content = content.children
      }
      console.log(content)
      content = creatArr(content)
      content = arr(content, 3)
      content = creatChild(content)
      console.log(content)
    }
    for (let k = 0; k < content.length; k++) {
      const _dom = content[k]
      console.log(_dom)
      const daAn = _dom.children[2].children[0].innerText
      const realDaAn = ans[title][0]
      console.log(realDaAn)
      console.log(daAn)
      daAn === realDaAn && _dom.children[0].children[0].click()
    }


  }


}

// 做作业吧
doHomework('C|A|B|A|D||B|A|D|D|D|C|B|C|B|A|B|A|B|D')


