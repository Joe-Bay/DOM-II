// Your code goes here
let logoColor = document.querySelector('.logo-heading');

const navLinks = document.querySelectorAll('.nav-link');





logoColor.addEventListener('click', () =>{ 
    logoColor.style.transition = "1s";
    logoColor.style.color = 'purple';
    logoColor.style.fontSize = '5rem'
})

navLinks.forEach(function(){ // makes the nav links increase in size and return to normal once leaving
    for(let i = 0; i < navLinks.length; i++){
        navLinks[i].addEventListener('mouseover', () =>{
            navLinks[i].style.fontSize = '2rem';
            navLinks[i].style.transition = '0.5s'
        })
                navLinks[i].addEventListener('mouseleave', () =>{
            navLinks[i].style.fontSize = '1.6rem';
            navLinks[i].style.transition = '0.5s'
})
}
})

