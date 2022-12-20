const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.navbar');

burgerMenu.addEventListener('click',()=>{
    burgerMenu.classList.toggle('close');
    menu.classList.toggle('show');
});

menu.addEventListener('click', (e)=>{
    if(e.target.id == 'nav'){
        burgerMenu.classList.toggle('close');
        menu.classList.toggle('show');
    }
});