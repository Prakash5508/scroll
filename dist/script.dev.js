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
  var navHeight = navbar.getBoundingClientRect().height;

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

var scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default anchor click behavior

    var id = e.currentTarget.getAttribute("href").slice(1); // Get the target section ID

    var element = document.getElementById(id); // Get the target section element
    // Scroll to the target section

    element.scrollIntoView({
      behavior: "smooth"
    }); //   });
    // });

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
}

document.getElementById('trekking').addEventListener('click', function (e) {
  e.preventDefault(); // Prevent default anchor click behavior

  showContent('trekking-content');
});
document.getElementById('mountain').addEventListener('click', function (e) {
  e.preventDefault(); // Prevent default anchor click behavior

  showContent('mountain-content');
});
document.getElementById('beaches').addEventListener('click', function (e) {
  e.preventDefault(); // Prevent default anchor click behavior

  showContent('beaches-content');
});

function showContent(contentId) {
  // Hide all tour sections
  var sections = document.querySelectorAll('.tour-section');
  sections.forEach(function (section) {
    section.style.display = 'none';
  }); // Show the selected tour section

  document.getElementById(contentId).style.display = 'flex';
} // slider for img


document.addEventListener('DOMContentLoaded', function () {
  var tourButtons = document.querySelectorAll('.tour-button');
  var tourSections = document.querySelectorAll('.tour-section');
  tourButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      // Hide all tour sections
      tourSections.forEach(function (section) {
        section.style.display = 'none';
        section.classList.remove('show'); // Remove show class
      }); // Show the selected tour section

      var selectedTour = document.getElementById(button.id + '-content');
      selectedTour.style.display = 'flex'; // or 'block' depending on your layout

      setTimeout(function () {
        selectedTour.classList.add('show'); // Add show class after display
      }, 10); // Small timeout to allow display to take effect
    });
  });
});