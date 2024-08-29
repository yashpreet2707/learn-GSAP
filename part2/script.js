gsap.to("#page2 h1", {
    transform: "translateX(-170%)",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top 20%",
        end: "top 1%",
        scrub: 2,
    }
})