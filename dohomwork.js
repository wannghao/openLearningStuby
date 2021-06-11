let daai = '{"— ____________________ — Here you are.":["May I have the menu?"],"— ____________________ — For only' +
  ' one month":["For how long can I keep a book?"],"—____________________ —Yes， I\'d like to have a look at the 2-piece suit.":[null],"— _________________________ — I’d like to open a saving account (储蓄账户).":["What can I do for you?"],"— _________________________ — I have a stomachache (肚子痛).":["What’s the matter with you?"],"—Could you come and spend the weekend with us? —__________________________I\'ve had a date already.":["Oh， I\'m afraid I can\'t."],"— ___________________________ — I’m flying to London.":["Where are you flying?"],"— _________________________ — I’d like to make a reservation.":["What can I do for you?"],"—Hello， are you Muriel Douglas? —Yes， and you must be James. ____________________":["It\'s nice to meet you at long last."],"— Do you know____________________? — Of course， er， let me check the bus schedule first.":["which bus we should take"],"—May I have the bill， please? —_________________________":["Here is it."],"— How often do you eat out? — ________， but usually once a week.":["It depends"],"—Next， please. ____________________ —A one-way ticket to Chicago， please.":["Where to， sir?"],"— What would you recommend? — ____________________":["Our Kongpao Chicken is on sale. If you order one， the second one comes in half price."],"— May I have your name and passport number? — __________________________":["My name is Jim Parson. Here’s my passport."],"—Here we come. —Thank you. ____________________?":["What\'s the fare"],"— ____________________ — Go straight ahead and turn left":["Could you please show me the way to my dormitory?"],"— ____________________ — Sorry， you have to pay cash (现金).":["Do you take credit cards?"],"—What are you eating for lunch? —Leftovers（剩菜）. ____________________ —No， thanks. I\'m not hungry.":["Do you want some?"]}'

/**
 * 自动做作业函数
 * @author marker
 * @param answerStr
 */
function doHomework (answerStr) {
  // let ans = answerStr.split('|')// 答案列表
  let ans = JSON.parse(daai)
  let questionNode = $('#tblDataList>tbody')
  let rows = questionNode.rows


  for (let i = 0; i < rows.length; i++) {
    let item = rows[i]
    console.log(item)
    const dom = item.children[0].children[0].children[0].children[0].children[1].children[1].children[0]
    console.log(dom)
    const title = dom.children[0].children[0].innerText
    const content = dom.children[1].children[0].children[0].children[0]
    console.log(title)
    console.log(content)
    let right = ans[i]//正确答案 A =65
    if (!right) {
      continue// 不存在就继续走
    }
    console.log(right)
    if (right.length <= 1) {// 单项选择

      console.log(i + '.单选题:' + right)

      let rightIndex = right.charCodeAt() - 65// 0开始
      // 答案里列表
      let answerListNode = item.children[0].children[0].children[0].children[0].children[1].children[1].children[0].children[1].children[0].children[0].children[0].children[0]
      if (answerListNode.children.length == 1) {
        // 选中答案
        try {// 尝试选择判断题/单选题
          if (rightIndex == 0) {
            answerListNode.children[0].children[0].children[0].click()
          } else if (rightIndex == 1) {
            answerListNode.children[0].children[3].children[0].click()
          } else if (rightIndex == 2) {
            answerListNode.children[0].children[6].children[0].click()
          } else if (rightIndex == 3) {
            answerListNode.children[0].children[9].children[0].click()
          }
        } catch (e) {
        }

      } else {//
        // 选中答案
        try {// 尝试选择判断题/单选题
          answerListNode.rows[rightIndex].children[0].children[0].click()
        } catch (e) {
        }
      }


    } else {// 多选题

      console.log(i + '.多选题:' + right)

      for (let j = 0; j < right.length; j++) {
        let crooet = right[j]
        let rightIndex = crooet.charCodeAt() - 65
        // 答案里列表
        let answerListNode = item.children[0].children[0].children[0].children[0].children[1].children[1].children[0].children[1].children[0].children[0].children[0].children[0]


        // 选中答案
        try {// 尝试选择判断题
          answerListNode.rows[rightIndex].children[0].children[0].click()
        } catch (e) {
          console.log(e)
        }
      }


    }


  }


}

// 做作业吧
doHomework('C|A|B|A|D||B|A|D|D|D|C|B|C|B|A|B|A|B|D')


