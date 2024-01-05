document.addEventListener('DOMContentLoaded', function() {

  function addEventListeners(item) {

    item.querySelector('.ListCheck').addEventListener('click', function() {
      if(this.parentNode.getAttribute('data-checked') === 'false') {
        this.style.border = '3px solid #777';
        this.style.color = '#777';
        item.querySelector('.ListTextBox').style.textDecoration = 'line-through';
        item.querySelector('.ListTextBox').style.color = '#777';
        item.querySelector('.delete').style.border = '3px solid #777';
        item.querySelector('.delete').style.color = '#777';
        this.parentNode.setAttribute('data-checked', 'true');
      } else {
        this.style.border = '3px solid #000';
        this.style.color = '#000';
        item.querySelector('.ListTextBox').style.textDecoration = 'none';
        item.querySelector('.ListTextBox').style.color = '#000';
        item.querySelector('.delete').style.border = '3px solid #000';
        item.querySelector('.delete').style.color = '#000';
        this.parentNode.setAttribute('data-checked', 'false');
      }
    });

    item.querySelector('.delete').addEventListener('click', function () {
      if (this.parentNode.parentNode) {
        this.parentNode.parentNode.removeChild(this.parentNode);
        localStorage.setItem('todoList', JSON.stringify(document.querySelector('.bottom').innerHTML));
      }
    });
  }

  let saveList = JSON.parse(localStorage.getItem('todoList'));
  if (saveList) {
    document.querySelector('.bottom').innerHTML = saveList;
    document.querySelectorAll('.TodoList').forEach(addEventListeners);
  }

  document.querySelector('.search_btn').addEventListener('click', function () {
    const ListCreate = document.getElementById('search');
    let List = document.createElement('div');
    let ListCheck = document.createElement('span');
    let CheckIcon = document.createElement('i');
    CheckIcon.setAttribute('class', 'fas fa-check');
    ListCheck.appendChild(CheckIcon);
    let ListTextBox = document.createElement('span');
    let pushText = document.createTextNode(ListCreate.value);
    ListTextBox.appendChild(pushText);
    if(!ListCreate.value.trim()) {
        alert('공백이 있거나 내용이 없습니다.');
        return;
    }
    let ListDelete = document.createElement('span');
    ListDelete.textContent = '삭제';
    List.setAttribute('class', 'TodoList');
    List.setAttribute('data-checked', 'false');
    ListCheck.setAttribute('class', 'ListCheck');
    ListTextBox.setAttribute('class', 'ListTextBox');
    ListDelete.setAttribute('class', 'delete');
    document.querySelector('.bottom').appendChild(List);
    List.insertBefore(ListCheck, List.children[0]);
    List.insertBefore(ListTextBox, List.children[1]);
    List.insertBefore(ListDelete, List.children[2]);
    document.querySelector('.bottom').insertBefore(List, document.querySelector('.bottom').children[0]);
    ListCreate.value = '';
    ListCreate.focus();
    addEventListeners(List);
    localStorage.setItem('todoList', JSON.stringify(document.querySelector('.bottom').innerHTML));
  });
});
