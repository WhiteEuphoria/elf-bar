const burgerBtn = document.querySelector(".burger")
const removeClass = document.querySelector("#link")
const buyBtn = document.querySelector("#buy")
const closeBtn = document.querySelector("#close")

burgerBtn.addEventListener("click", function (){
    document.querySelector(".navbar").classList.toggle("navbar--visible");
    document.querySelector(".header").classList.toggle("burger--background");
    document.querySelector(".burger__phone").classList.toggle("burger__phone--visible");
    document.querySelector(".burger").classList.toggle("burger--active");
});
removeClass.addEventListener("click", function (){
    document.querySelector(".navbar").classList.remove("navbar--visible");
    document.querySelector(".header").classList.remove("burger--background");
    document.querySelector(".burger__phone").classList.remove("burger__phone--visible");
    document.querySelector(".burger").classList.remove("burger--active");
})

buyBtn.addEventListener("click", function(){
    document.querySelector(".back").classList.add("rotate-1");
});

closeBtn.addEventListener("click", function(){
    document.querySelector(".back").classList.remove("rotate-1");
});
