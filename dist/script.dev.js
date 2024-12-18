"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

// select span
var date = document.getElementById("date");
date.innerHTML = new Date().getFullYear(); // ********** closing links ************

var navToggle = document.querySelector(".nav-toggle");
var linksContainer = document.querySelector(".links-container");
var links = document.querySelector(".links");
navToggle.addEventListener("click", function () {
  // linksContainer.classList.toggle("show-links");
  var linksHeight = links.getBoundingClientRect().height;
  var containerHeight = linksContainer.getBoundingClientRect().height;

  if (containerHeight === 0) {
    linksContainer.style.height = "".concat(linksHeight, "px");
  } else {
    linksContainer.style.height = 0;
  } // console.log(linksContainer.getBoundingClientRect());

}); // ********** fixed navbar ************

var navbar = document.getElementById("nav");
var topLink = document.querySelector(".top-link");
window.addEventListener("scroll", function () {
  var scrollHeight = window.pageYOffset;
  var navHeight = navbar.getBoundingClientRect().height; //   if (scrollHeight > navHeight) {
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
}); // ********** smooth scroll ************
// select links

var scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // prevent default
    e.preventDefault(); // navigate to specific spot

    var id = e.currentTarget.getAttribute("href").slice(1);
    var element = document.getElementById(id);
    var navHeight = navbar.getBoundingClientRect().height;
    var containerHeight = linksContainer.getBoundingClientRect().height;
    var fixedNav = navbar.classList.contains("fixed-nav");
    var position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }

    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position
    }); // close

    linksContainer.style.height = 0;
  });
}); // calculate heights

function calculateHeights() {
  var linksContainer = document.querySelector(".links-container");
  var links = linksContainer.children;
  var navHeight = navbar.getBoundingClientRect().height;
  var containerHeight = linksContainer.getBoundingClientRect().height; // calculate height of each link

  Array.from(links).forEach(function (link) {
    var id = link.getAttribute("id");
    var element = document.getElementById(id);
    var elementHeight = element.getBoundingClientRect().height;
    var linkHeight = link.getBoundingClientRect().height; // calculate position of link

    var position = element.offsetTop - navHeight;

    if (!navbar.classList.contains("fixed-nav")) {
      position = (_readOnlyError("position"), position - navHeight);
    }

    if (navHeight > 82) {
      position = (_readOnlyError("position"), position + containerHeight);
    } // set link position


    link.style.top = "".concat(position, "px");
    link.style.height = "".concat(elementHeight, "px");
  });
} // Close the dropdown if the user clicks outside of it
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


document.getElementById('trekking').addEventListener('click', function () {
  window.location.href = '#trekking'; // Change this to the appropriate section ID
});
document.getElementById('mountain').addEventListener('click', function () {
  window.location.href = '#mountain'; // Change this to the appropriate section ID
});
document.getElementById('swimming').addEventListener('click', function () {
  window.location.href = '#swimming'; // Change this to the appropriate section ID
});
document.getElementById('trekking').addEventListener('click', function () {
  showContent('trekking-content');
});
document.getElementById('mountain').addEventListener('click', function () {
  showContent('mountain-content');
});
document.getElementById('swimming').addEventListener('click', function () {
  showContent('swimming-content');
});

function showContent(contentId) {
  // Hide all tour sections
  var sections = document.querySelectorAll('.tour-section');
  sections.forEach(function (section) {
    section.style.display = 'none';
  }); // Show the selected tour section

  document.getElementById(contentId).style.display = 'flex';
}