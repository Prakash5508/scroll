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
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default anchor click behavior
    const id = e.currentTarget.getAttribute("href").slice(1); // Get the target section ID
    const element = document.getElementById(id); // Get the target section element

    // Scroll to the target section
    element.scrollIntoView({ behavior: "smooth" });
//   });
// });

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

document.getElementById('trekking').addEventListener('click', function(e) {
  e.preventDefault(); // Prevent default anchor click behavior
  showContent('trekking-content');
});

document.getElementById('mountain').addEventListener('click', function(e) {
  e.preventDefault(); // Prevent default anchor click behavior
  showContent('mountain-content');
});

document.getElementById('beaches').addEventListener('click', function(e) {
  e.preventDefault(); // Prevent default anchor click behavior
  showContent('beaches-content');
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

// slider for img
document.addEventListener('DOMContentLoaded', function() {
  const tourButtons = document.querySelectorAll('.tour-button');
  const tourSections = document.querySelectorAll('.tour-section');

  tourButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Hide all tour sections
      tourSections.forEach(section => {
        section.style.display = 'none';
        section.classList.remove('show'); // Remove show class
      });

      // Show the selected tour section
      const selectedTour = document.getElementById(button.id + '-content');
      selectedTour.style.display = 'flex'; // or 'block' depending on your layout
      setTimeout(() => {
        selectedTour.classList.add('show'); // Add show class after display
      }, 10); // Small timeout to allow display to take effect
    });
  });
});





