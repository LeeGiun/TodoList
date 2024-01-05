document.addEventListener('DOMContentLoaded', function() {

  let saveList = JSON.parse(localStorage.getItem('todoList'))
  if (saveList) {
    document.querySelector('.bottom').innerHTML = saveList
  }

  document.querySelector('.search_btn').addEventListener('click', function () {

    // const TopSection = document.querySelector('.Top')
    // const BottomSection = document.querySelector('.bottom')


    const ListCreate = document.getElementById('search')

    // BOTTOM

    let List = document.createElement('div')

      // Check
    let ListCheck = document.createElement('span')
    let CheckIcon = document.createElement('i')
    CheckIcon.setAttribute('class', 'fas fa-check')
    ListCheck.appendChild(CheckIcon)

      // ListText
    let ListTextBox = document.createElement('span')
    // ListTextBox.textContent = ListCreate.value
    let pushText = document.createTextNode(ListCreate.value)
    ListTextBox.appendChild(pushText)

      if(!ListCreate.value.trim()) {
        alert('공백이 있거나 내용이 없습니다.')
        return
      }
      // trim()은 불필요한 공백을 제거하는 역할
      // 1. ListCreate.value는 값을 가져옴
      // 2. trim()은 공백을 제거하는 역할
      // 3. 문자열 포함된 경우 공백이 제거된 상태라도
      // "문자"라고 나올텐데,
      // 문자열이 없는경우는 ""상태로 되니까
      // 이건 불리언값으로 false로 된다는 의미
      // 4. 결과적으로 !가 붙어서 true상태로 바뀜
      // 5. if문은 true일때 조건문이 실행되니까
      // 알럿창이 노출이 되는 상황
      // 6. 그리고 return문으로 함수를 즉시 종료하고
      // 선택적 값을 반환하는 역할이다.

      
      // Delete
    let ListDelete = document.createElement('span')
    ListDelete.textContent = '삭제'





    List.setAttribute('class', 'TodoList')
    ListCheck.setAttribute('class', 'ListCheck')
    ListTextBox.setAttribute('class', 'ListTextBox')
    ListDelete.setAttribute('class', 'delete')

    document.querySelector('.bottom').appendChild(List)
/*     List.appendChild(ListCheck)
    List.appendChild(ListTextBox)
    List.appendChild(ListDelete) */

    List.insertBefore(ListCheck, List.children[0])
    List.insertBefore(ListTextBox, List.children[1])
    List.insertBefore(ListDelete, List.children[2])
    // TodoList (Check,Text,Delete) 순서로 나오도록 순서설정

    document.querySelector('.bottom').insertBefore(List, document.querySelector('.bottom').children[0])
    //리스트 생성시 맨 상단에 최근꺼가 올라오도록

    ListCreate.value = ''
    ListCreate.focus()
    // input창에 포커스를 할 경우 텍스트 모두 지워짐

    ListDelete.addEventListener('click', function () {
      if (ListDelete.parentNode.parentNode) {
        this.parentNode.parentNode.removeChild(this.parentNode)
      }
    })

    let trans = 0

    ListCheck.addEventListener('click', function() {
      if(trans == 0) {
        ListCheck.style.border = '3px solid #777'
        ListCheck.style.color = '#777'
        ListTextBox.style.textDecoration = 'line-through'
        ListTextBox.style.color = '#777'
        ListDelete.style.border = '3px solid #777'
        ListDelete.style.color = '#777'
        trans = 1
      } else if (trans == 1) {
        ListCheck.style.border = '3px solid #000'
        ListCheck.style.color = '#000'
        ListTextBox.style.textDecoration = 'none'
        ListTextBox.style.color = '#000'
        ListDelete.style.border = '3px solid #000'
        ListDelete.style.color = '#000'
        trans = 0
      }
    })
    localStorage.setItem('todoList', JSON.stringify(document.querySelector('.bottom').innerHTML)) 
  })


})