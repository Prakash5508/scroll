// Setting date

const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ***** Closing links ***** //

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".linksContainer")
const link = document.querySelector(".link");

navToggle.addEventListener("click", function(){
    linksContainer.classList.toggle("show-links");

    const linksHeight = link.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;
        }else{
            linksContainer.style.height = 0;
    }
    console.log(linksContainer.getBoundingClientRect());
});

// *** Fixing Navbar *** //
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if(scrollHeight > navHeight){
        navbar.classList.add("fixed-nav");
    }else
    {
        navbar.classList.remove("fixed-nav");
    }

    // Setup back to top-Link
    if(scrollHeight > 500){
        console.log("hello");
        topLink.classList.add("show-link");
    }else
    {
        navbar.classList.remove("show-link");
    }
});

// Setting Scroll-->
const scrollLinks = document.querySelector(".scroll-link");

scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");
        let position = element.offsetTop - navHeight;
        if(!fixedNav){
            position = position - navHeight;
        }
        if(containerHeight > 82){
            position = position + containerHeight;
        }
        window.scrollTo({left: 0,
            top: position,
            behavior: "smooth"
        });
        linksContainer.style.height = 0;
    });
});















