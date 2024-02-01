import { CreateButton } from "../components/CreateButton.js";

const btnsContainer = document.createElement('div');
    btnsContainer.classList.add('btnsContainer');

const btnCount = CreateButton({btnName: 'Count', btnType: 'button', btnClass: 'btnCount'});
const btnActived = CreateButton({btnName: 'Active items', btnType: 'button', btnClass: 'activeItems'});
const btnClearItems = CreateButton({btnName: 'Clear items', btnType: 'button', btnClass: 'clearItems'});
const app = document.querySelector('.app');

btnsContainer.append(btnCount,btnActived,btnClearItems);
app.append(btnsContainer);

btnCount.addEventListener('click',() =>{
    console.log("object");
});


console.log(!!0);