let menuBtn= document.querySelector('#menu-btn');
let menuBar=document.querySelector(".links");
const toggleBtn = document.getElementById("toggleProjectsBtn");
const projectItems = document.querySelector(".project-items");
const hiddenProjects = document.querySelectorAll(".hidden-project");


menuBtn.onclick= ()=>{
    menuBtn.classList.toggle('bx-x');
    menuBar.classList.toggle('active');
}

window.onscroll=()=> {
    menuBtn.classList.remove('bx-x');
    menuBar.classList.remove('active');
}

ScrollReveal({
    reset: false,
    distance: '30px',
    duration: 1500,
    delay: 200,
});

var typed= new Typed(".auto-type",{
    strings : [" Java Full-stack", " Python", " Generative AI", " AWS Cloud"],
    typeSpeed : 30,
    backSpeed : 30,
    backDelay: 1000, 
    startDelay: 500,
    loop:true
})


ScrollReveal().reveal('.image', { origin:'right' });

ScrollReveal().reveal('.name_role, .side_icons', {
    origin:'left'
});

ScrollReveal().reveal('.heading', {
    origin:'top'
});

ScrollReveal().reveal('.about-text, .skills-items, .project-1, .certification-card, .experience-card, .urls, .form', {
    origin:'bottom',
    interval:120
});

let btn=document.querySelector(".submit");
const form=document.getElementById("myForm");

let expanded = false;

toggleBtn.addEventListener("click", () => {

    expanded = !expanded;

    hiddenProjects.forEach(project => {

        if(expanded){
            project.classList.add("show");
        }else{
            project.classList.remove("show");
        }

    });

    toggleBtn.innerHTML = expanded
        ? "Show Less ↑"
        : "View More Projects ↓";

});

// btn.onclick = (event)=>{
//     event.preventDefault();
//     form.reset();
// }
