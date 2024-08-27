gsap.from("#page1 #box", {
    duration: 1,
    rotate: 100,
    delay: 1,
    scale: 0
})

// gsap.from("#page2 #box", {
//     duration: 1,
//     rotate: 10,
//     delay: 1,
//     scale: 0,
//     scrollTrigger: {
//         trigger: "#page2 #box",
//         scroller: "body",
//         markers: true ,
//     }
// })

gsap.to("#page2 h1", {
    scale: 1.5,
    duration: 0.4,
    delay: 0.4,
    backgroundColor: "red",
    color: "black",
    scrollTrigger: {
        trigger: "#page2 h1",
        scoller: "body",
        markers: true
    }
})