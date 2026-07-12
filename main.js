// ===========================================
// MN PhysioCare Clinic - main.js
// ===========================================


// ===============================
// Mobile Menu Toggle
// ===============================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (navLinks.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");
        } else {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        }
    });
}


// ===============================
// Close Mobile Menu
// ===============================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");

    });

});


// ===============================
// Close Menu Outside Click
// ===============================

document.addEventListener("click", function(e){

    if(
        !menuToggle.contains(e.target) &&
        !navLinks.contains(e.target)
    ){

        navLinks.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");

    }

});


// ===============================
// Sticky Header Shadow
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 40){

        header.style.boxShadow="0 8px 20px rgba(0,0,0,.15)";

    }

    else{

        header.style.boxShadow="none";

    }

});


// ===============================
// Active Navigation
// ===============================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});


// ===============================
// Scroll To Top Button
// ===============================

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        scrollBtn.style.display="flex";

    }

    else{

        scrollBtn.style.display="none";

    }

});

scrollBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            window.scrollTo({

                top:target.offsetTop-80,

                behavior:"smooth"

            });

        }

    });

});


// ===============================
// Reveal Animation
// ===============================

const reveals=document.querySelectorAll(

".service-card,.qualification-card,.gallery-grid img,.review-card,.doctor-box,.about-content,.achievement-content,.news-card,.benefits-grid div,.features div"

);

function reveal(){

    reveals.forEach(item=>{

        const windowHeight=window.innerHeight;

        const top=item.getBoundingClientRect().top;

        if(top < windowHeight-100){

            item.style.opacity="1";
            item.style.transform="translateY(0)";

        }

    });

}

reveals.forEach(item=>{

    item.style.opacity="0";
    item.style.transform="translateY(40px)";
    item.style.transition="all .7s ease";

});

window.addEventListener("scroll",reveal);

reveal();


// ===============================
// Appointment Form
// ===============================

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! Your appointment request has been submitted successfully.");

form.reset();

});

}


// ===============================
// Current Year Footer (Optional)
// ===============================

const year=document.querySelector(".year");

if(year){

year.textContent=new Date().getFullYear();

}