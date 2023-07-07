let menuBtn= document.querySelector('#menu-btn');
let menuBar=document.querySelector(".links");

menuBtn.onclick= ()=>{
    menuBtn.classList.toggle('bx-x');
    menuBar.classList.toggle('active');
}

window.onscroll=()=> {
    menuBtn.classList.remove('bx-x');
    menuBar.classList.remove('active');
}

ScrollReveal({
    reset: true,
    distance: '30px',
    duration: 1500,
    delay: 200,
});


ScrollReveal().reveal('.image', { origin:'right' });
ScrollReveal().reveal('.name_role, .side_icons', { origin:'left' });
ScrollReveal().reveal('.skills-items, .about-text, .dwnld, .project-items, .urls, .form' ,{ origin:'bottom' });
ScrollReveal().reveal('.heading', { origin:'top' });
