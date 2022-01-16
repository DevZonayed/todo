const todo = document.querySelector('#do');
const add = document.querySelector('#add');
const output = document.querySelector('#output');
const closebtn = document.querySelectorAll('#todoclose');
const item = document.querySelectorAll('.list-group-item');

add.onclick = () => {
    let li = document.createElement('li');
    let btn = document.createElement('button');

    li.classList.add('list-group-item');
    li.classList.add('d-flex');
    li.classList.add('justify-content-between');
    li.classList.add('list-group-item-warning');

    btn.id = 'todoclose';
    btn.classList.add('btn-close')
    li.append(todo.value)
    li.appendChild(btn);

    output.appendChild(li)

    console.log(item)
}

item.forEach( ()=> {
   console.log(this)
})