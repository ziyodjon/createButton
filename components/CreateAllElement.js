export function CreateAllElement({tagName = 'div', className = ['simpleClass'],text = '',type = 'text',placeholder = 'Type to do list name', name = 'itesmAddName', required = 'required'}){
    const Element = document.createElement(tagName);
        if(className.length > 0){
            for(let i = 0; className.length > i; i++){
                Element.classList.add(className[i]);
            }
        }
        Element.textContent = text;
        if(tagName == 'input'){
            Element.name = name;
            Element.type = type;
            Element.required = required;
            Element.placeholder = placeholder;
        }

    return Element;
    
}