let box = document.querySelector('.box');

let nightModec = document.querySelector('.nightMode')

let btn = document.querySelector('#btn')

btn.addEventListener('click', () =>{
  box.classList.toggle('nightMode');
})