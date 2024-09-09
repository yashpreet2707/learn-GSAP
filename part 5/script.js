var menuLogo = document.querySelector("#nav i")
var crossLogo = document.querySelector("#full i")
var tl = gsap.timeline() ;

tl.to("#full", {
    right: 0 ,
    duration: 0.8,
})

tl.from("#full h4", {
    x: 200 ,
    opacity: 0,
    duration: 0.3,
    stagger: 0.1
})

tl.from("#full i", {
    opacity: 0 
})

tl.pause() ;


menuLogo.addEventListener("click", () => {
    tl.play() ;
})
crossLogo.addEventListener("click", () => {
    tl.reverse() ;
})