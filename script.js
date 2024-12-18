// select span
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********** closing links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // linksContainer.classList.toggle("show-links");

  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
  // console.log(linksContainer.getBoundingClientRect());
});

// ********** fixed navbar ************

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
//   if (scrollHeight > navHeight) {
//     navbar.classList.add("fixed-nav");
//   } else {
//     navbar.classList.remove("fixed-nav");
//   }
  // setup back to top link

//   if (scrollHeight > 500) {
//     console.log("helo");

//     topLink.classList.add("show-link");
//   } else {
//     topLink.classList.remove("show-link");
//   }
// });
if (scrollHeight > navHeight) {
        navbar.classList.add("nav-color");
      } else {
        navbar.classList.remove("nav-color");
      }
if (scrollHeight > 500) {
    console.log("helo");
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;
    

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    linksContainer.style.height = 0;
  });
});
// calculate heights
function calculateHeights() {
    const linksContainer = document.querySelector(".links-container");
    const links = linksContainer.children;
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    // calculate height of each link
    Array.from(links).forEach((link) => {
        const id = link.getAttribute("id");
        const element = document.getElementById(id);
        const elementHeight = element.getBoundingClientRect().height;
        const linkHeight = link.getBoundingClientRect().height;
        // calculate position of link
        const position = element.offsetTop - navHeight;
        if (!navbar.classList.contains("fixed-nav")) {
            position = position - navHeight;
            }
            if (navHeight > 82) {
                position = position + containerHeight;
                }
                // set link position
                link.style.top = `${position}px`;
                link.style.height = `${elementHeight}px`;
            
                });
            }

// Close the dropdown if the user clicks outside of it
// window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       for (var i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.style.display === "block") {
//           openDropdown.style.display = "none";
//         }
//       }
//     }
//   }
document.getElementById('trekking').addEventListener('click', function() {
    window.location.href = '#trekking'; // Change this to the appropriate section ID
  });
  
  document.getElementById('mountain').addEventListener('click', function() {
    window.location.href = '#mountain'; // Change this to the appropriate section ID
  });
  
  document.getElementById('swimming').addEventListener('click', function() {
    window.location.href = '#swimming'; // Change this to the appropriate section ID
  });

  document.getElementById('trekking').addEventListener('click', function() {
  showContent('trekking-content');
});

document.getElementById('mountain').addEventListener('click', function() {
  showContent('mountain-content');
});

document.getElementById('swimming').addEventListener('click', function() {
  showContent('swimming-content');
});

function showContent(contentId) {
  // Hide all tour sections
  const sections = document.querySelectorAll('.tour-section');
  sections.forEach(section => {
    section.style.display = 'none';
  });

  // Show the selected tour section
  document.getElementById(contentId).style.display = 'flex';
}











