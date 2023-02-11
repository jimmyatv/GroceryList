const addElement = document.querySelector('.add');
const groceryElement = document.querySelector('.grocery');
const groceryListElement = document.querySelector('.groceryListBody');
const lessElement = document.querySelector('.less');
const moreElement = document.querySelector('.more');
const itemElement = document.querySelector('.item');


const list = ['bread', 'milk', 'onion'];

let page = 1; // current page
let maxPage; // maximum pages



const read = (list) => {
    
    groceryListElement.innerHTML = '';
    
    loadFirstSix(list, (page - 1) * 6, 6).forEach((element, idx) => {
        groceryListElement.innerHTML += `
        <tr>
            <td>${element}</td>
            <td><button class="btn delete-${idx}" onClick="deleteItem(event)"><i class="fa-solid fa-eraser"></i></button></td>
        </tr>`
    })
    list.length % 6 === 0 ? maxPage = list.length / 6 : maxPage = Math.floor(list.length / 6) + 1;
    itemElement.value = page
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

    list.length % 6 === 0 ? maxPage = list.length / 6 : maxPage = Math.floor(list.length / 6) + 1;
    console.log(maxPage);

    groceryElement.focus();
    read(list);
}

// ENTER function - DONE
groceryElement.addEventListener('keyup', (props) => {
    if(props.keyCode === 13) {
        props.preventDefault();    
        document.querySelector('.add').click();
    }

    groceryElement.focus();
    read(list);
})



lessElement.addEventListener('click', () => {
    page <= 1 ? page = 1 : page -= 1;
    read(list);
})

moreElement.addEventListener('click', () => {
    page >= maxPage ? page = maxPage : page += 1;
    read(list);
})

const loadFirstSix = (lista, fromElementIdx, noOfElements) => {
    return lista.filter((element, idx) => {
        if(idx >= fromElementIdx && idx < fromElementIdx + noOfElements) {
            return element;
        };
    });
}

