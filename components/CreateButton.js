export function CreateButton({btnName ='simpleButton', btnType = 'button', btnClass = 'simpleClass'}){
//export function CreateButton(obj = {btnName: 'simpleButton', btnType: 'button', btnClass: 'simpleClass'}){
    //let {btnName,btnType,btnClass} = obj;
    const button = document.createElement('button');

    button.type = btnType;
    button.classList.add(btnClass);
    button.textContent = btnName;

    return button;
}