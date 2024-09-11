function breakTheText() {
    var h1 = document.querySelector("h1")
    var h1Text = h1.textContent

    var splittedText = h1Text.split("")

    var clutter = ""

    var halfValue = Math.floor(splittedText.length/2 );

    splittedText.forEach( (e, index)=> {

        if (index <= halfValue) {
            clutter += `<span class="a">${e}</span>`
        } else {
            clutter += `<span class="b">${e}</span>`
        }
    })

    h1.innerHTML = clutter 

}

breakTheText() ;


gsap.from("h1 .a", {
    y: 50 ,
    opacity: 0,
    delay: 0.5 ,
    duration: 0.5,
    stagger: 0.08,
})

gsap.from("h1 .b", {
    y:50,
    opacity:0,
    delay: 0.5,
    duration: 0.5,
    stagger: -0.08 
})