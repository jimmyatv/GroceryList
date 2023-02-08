const addElement = document.querySelector('.add');
const groceryElement = document.querySelector('.grocery');
const groceryListElement = document.querySelector('.groceryListBody');

const list = ['bread', 'milk', 'onion'];

const read = (list) => {
    
    groceryListElement.innerHTML = '';
    
    list.forEach((element, idx) => {
        groceryListElement.innerHTML += `
        <tr>
            <td>${element}</td>
            <td><button class="btn delete-${idx}" onClick="deleteItem(event)"><i class="fa-solid fa-eraser"></i></button></td>
        </tr>`
    })
}

addElement.addEventListener('click', () => {
    if(groceryElement.value !== ''){
        list.push(groceryElement.value);
    }

    groceryElement.value = '';
    groceryElement.focus();
    read(list);
});

const deleteItem = (event) => {
    
    let klasa = event.target.parentNode.className;
    let idx = klasa.split(' ').slice(-1)[0].split('-')[1];
    console.log(idx);

    list.splice(idx, 1);
    read(list);
}

window.onload = () => {
    read(list);
}