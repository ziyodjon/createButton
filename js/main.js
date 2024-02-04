//import { CreateButton } from "../components/CreateButton.js";
import {CreateAllElement} from "../components/CreateAllElement.js";

const app = document.querySelector('.app');
const todoItems = [];

//CREATED ELEMENTS
const container = CreateAllElement({tagName:'div', className:['container']});

const header = CreateAllElement({tagName:'header', className:['header']});
const siteName = CreateAllElement({tagName:'h1', className:['siteTitle'], text:' My todo lists'});
const siteIcon = CreateAllElement({tagName:'i', className:['fa','fa-th-list']});

const itemsAddWrap = CreateAllElement({tagName:'div', className:['itemsAddWrap']});
const itemsAddForm = CreateAllElement({tagName:'form', className:['itemsAddForm']});
const itemsAddInput = CreateAllElement({tagName:'input',className:['itemsAddInput'],type:'text', placeholder:'Type your text', name:'itemsAdd', required:'required'});

const itemsWrap = CreateAllElement({tagName:'div',className:['itemsWrap']});
const itemsList = CreateAllElement({tagName:'ul',className:['itemsList'],text:'Add a to do list'});

const footer = CreateAllElement({tagName:'footer',className:['itemsFooter']});

const itemsCountWrap = CreateAllElement({tagName:'div',className:['itemsCountWrap']});
const itemsCount = CreateAllElement({tagName:'b',className:['itemsCount'],text:'0 items left'});

const itemsSortWrap = CreateAllElement({tagName:'div',className:['itemsSortWrap']});
const itemsAll = CreateAllElement({tagName:'button',className:['itemsAll'],text:'All'});
const itemsActive = CreateAllElement({tagName:'button',className:['itemsActive'],text:'Active'});
const itemsCompleted = CreateAllElement({tagName:'button',className:['itemsCompleted'],text:'Completed'});

const itemsCleartWrap = CreateAllElement({tagName:'div',className:['itemsCleartWrap']});
const itemsCleartBtn = CreateAllElement({tagName:'button', className:['itemsCleartBtn'], text:'Clear completed'});

siteName.prepend(siteIcon);
header.append(siteName);

itemsAddForm.append(itemsAddInput);
itemsAddWrap.append(itemsAddForm);

itemsWrap.append(itemsList);
itemsCountWrap.append(itemsCount);

itemsSortWrap.append(itemsAll,itemsActive,itemsCompleted);

itemsCleartWrap.append(itemsCleartBtn);

footer.append(itemsCountWrap,itemsSortWrap,itemsCleartWrap);

container.append(header,itemsAddWrap,itemsWrap,footer);
app.append(container);

// EVENTS

itemsAddForm.addEventListener('submit',function(event){
    event.preventDefault();
    const todoItemText = event.target.itemsAdd.value;
    if(todoItemText.trim() !== ''){
        const todoItem = {
        id:Date.now(),
        text: todoItemText,
        status:false,
        };
        todoItems.unshift(todoItem);
    }
  
    //saveToLocalStorage(todoItems);
    showTodoItems(todoItems,itemsList);
    this.reset();
});

function showTodoItems(items,todoListArea){
    todoListArea.innerHTML = '';
    items.forEach((item) => {
        //const todoItemList = document.createElement('li');
        const todoItemList = CreateAllElement({tagName:'li'});
        todoItemList.dataset.id =item.id;

        //const changeStatusBtn = document.createElement('div');
        const changeStatusBtn = CreateAllElement({tagName:'div',className:['todoCheckItem']});
        //changeStatusBtn.classList.add('todoCheckItem');
        if(item.status) todoItemList.classList.add('checked');
        changeStatusBtn.textContent = item.text;
        const delBtn = document.createElement('span');
        delBtn.classList.add('close', 'fa', 'fa-trash-o');
        
        todoItemList.append(changeStatusBtn,delBtn);
        todoListArea.append(todoItemList);
        changeStatusBtn.addEventListener('click',changeItemStatus);
        delBtn.addEventListener('click', deleteCurrentToDoItem);
      });
  }