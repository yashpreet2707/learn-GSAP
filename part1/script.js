
var tl = gsap.timeline() 

tl.from("h1", {
    y: -20,
    opacity: 0,
})

tl.from("h4", {
    y: -20,
    opacity: 0, 
    stagger: 0.3
})

tl.from("#h2-center h2", {
    y: 20 ,
    opacity: 0,
    duration: 0.5,
    scale: 0.2
})