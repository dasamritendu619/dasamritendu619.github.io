document.getElementById("menu_button").addEventListener("click", function() {
    let element = document.getElementById("menu_button");
    if (element.innerHTML === "menu") {
        element.innerHTML = "close";
    }else {
        element.innerHTML = "menu";
    }
    document.getElementById("nav-box2").classList.toggle("show");
});


function navigate(location) {
    document.getElementById("nav-box2").classList.toggle("show");
    document.getElementById("menu_button").innerHTML = "menu";
    window.location.href = location;
}


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

let slideInterval = setInterval(function() {
    if (slideIndex===6) {
        showSlides(slideIndex += 1);
        clearInterval(slideInterval);
    }else{
        showSlides(slideIndex += 1);
    }
}, 4000);

const cards=document.querySelectorAll(".card");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle(entry.target.getAttribute("data-animation"));
    });
},{rootMargin: "-25px"});

cards.forEach(card => {
    observer.observe(card);
});


function download(path) {
    let fileUrl = path;
    let link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'TSFNO20230003.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

let elements = document.getElementsByClassName("column");

// Declare a loop variable

// Full-width images
function one(element) {
  document.querySelector(".activebtn").classList.remove("activebtn");
  element.classList.add("activebtn");
    for (let i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "100%";  // IE10
    elements[i].style.flex = "100%";
  }
}

// Two images side by side
function two(element) {
  document.querySelector(".activebtn").classList.remove("activebtn");
  element.classList.add("activebtn");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "50%";  // IE10
    elements[i].style.flex = "50%";
  }
}

// Four images side by side
function four(element) {
  document.querySelector(".activebtn").classList.remove("activebtn");
  element.classList.add("activebtn");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "25%";  // IE10
    elements[i].style.flex = "25%";
  }
}


// var typed = new Typed('#text-box', {
//     strings: ["Child Education.", "empower marginalized communities.", "promoting education.", "HealthCare.", "Poverty Control.", " promoting economic opportunities.", "fostering social and environmental justice.", "sustainable development initiatives."],
//     typeSpeed: 0,
//     backSpeed: 0,
//     cursorChar: '|',
//     shuffle: true,
//     smartBackspace: false,
//     loop: true
//   });

