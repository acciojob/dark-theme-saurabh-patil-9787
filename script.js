//your code here
let container=document.getElementById('app');
let swapBtn = document.getElementById('swap')

swapBtn.addEventListener('click',swapTheme)

function swapTheme (){
    container.classList.toggle('night')
}
