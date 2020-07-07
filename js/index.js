// Your code goes here
let logoColor = document.querySelector('.logo-heading');

const navLinks = document.querySelectorAll('.nav-link');

const body = document.querySelector('body');

 const firstSmallerImage = document.querySelector('.img-content');

 const headImg = document.querySelector('header img');


// const welcomeTitle = document.querySelector('.container h2');


logoColor.addEventListener('click', () =>{ 
    logoColor.style.transition = "1s";
    logoColor.style.color = 'purple';
    logoColor.style.fontSize = '5rem'
})

navLinks.forEach(function(){ // makes the nav links increase in size and return to normal once leaving
    for(let i = 0; i < navLinks.length; i++){
        navLinks[i].addEventListener('mouseover', () =>{
            navLinks[i].style.fontSize = '3rem';
            navLinks[i].style.transition = '0.5s'
        })
                navLinks[i].addEventListener('mouseleave', () =>{
            navLinks[i].style.fontSize = '1.6rem';
            navLinks[i].style.transition = '0.5s'
})
}
})

body.addEventListener('dblclick', () => {
    body.style.background = 'pink';
})

logoColor.addEventListener('contextmenu', (event) => { // prevents you from right clicking the logo
    event.preventDefault();
})

window.addEventListener('load', () =>{
    alert('The Page is fully loaded for you sir');
})

window.addEventListener('keydown', () => {
    body.style.fontWeight = '700';
})
 
logoColor.addEventListener('wheel', (event) =>{
    event.preventDefault();
    logoColor.style.fontSize = '100px';
})

firstSmallerImage.addEventListener('mousedown', () => {
    firstSmallerImage.style.transition = '2s';
    firstSmallerImage.style.opacity = '0';

})

firstSmallerImage.addEventListener('mouseup', () =>{
    firstSmallerImage.style.transition = '2s';
    firstSmallerImage.style.opacity = '1';
})

headImg.addEventListener('wheel', () =>{
    headImg.style.height = '40vh';
})

