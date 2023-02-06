const addElement = document.querySelector('.add');
const groceryElement = document.querySelector('.grocery');
const groceryListElement = document.querySelector('.groceryListBody');


const list = ['bread', 'milk', 'onion'];

window.onload = () => {
    list.forEach((element, idx) => {
        groceryListElement.innerHTML += `
        <tr>
            <td>${element}</td>
            <td><button class="btn delete-${idx}" ><i class="fa-solid fa-eraser"></i></button></td>
        </tr>`
    })
}


const read = () => {
    
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
    read();
})


