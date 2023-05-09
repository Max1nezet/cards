// const card = document.querySelectorAll(".box")
// const right = document.querySelector(".right")
// const left = document.querySelector(".left")

// let num = 0

// right.addEventListener('click', ()=>{
//     num++
//     card.forEach((box) => {
//         box.style.transform = `translateX(${num * 100}%)`
//     });  
// })

// left.addEventListener('click', ()=>{
//     num--

//     card.forEach((box) => {
//         box.style.transform = `translateX(${num * 100}%)`
//     });
// })



const card = document.querySelectorAll(".box");
const right = document.querySelector(".right");
const left = document.querySelector(".left");
let num = 0;
const maxNum = card.length - 1;

right.addEventListener("click", () => {
  num++;
  if (num > maxNum) {
    num = 0;
  }
  card.forEach((box, index) => {
    box.style.transform = `translateX(${(index - num) * 100}%)`;
  });
});

left.addEventListener("click", () => {
  num--;
  if (num < 0) {
    num = maxNum;
  }
  card.forEach((box, index) => {
    box.style.transform = `translateX(${(index - num) * 100}%)`;
  });
});
