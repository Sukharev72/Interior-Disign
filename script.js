let hamburger = document.querySelector(".hamburger");
let nav = document.querySelector("nav");
let navA = document.querySelectorAll("nav a");
console.log(navA)
hamburger.onclick = function(){
    hamburger.classList.toggle("hamburger-active");
    nav.classList.toggle("nav-active");
}
for(let i=0;i<navA.length;i++) {
    console.log(i+"цикл")
    navA[i].onclick = function(){
        hamburger.classList.remove("hamburger-active");
        nav.classList.remove("nav-active");
    }
}