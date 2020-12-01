burger = document.querySelector('.burger')
header = document.querySelector('.header')
left = document.querySelector('.left')
mid = document.querySelector('.mid')
right = document.querySelector('.right')


burger.addEventListener('click',()=>{
   left.classList.toggle('visibility');
   mid.classList.toggle('visibility');
   right.classList.toggle('visibility');
   header.classList.toggle('navheight');
})