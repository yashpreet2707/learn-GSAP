const main = document.querySelector("#main")
const cursor = document.querySelector("#cursor")
const imageDiv = document.querySelector("#image")

main.addEventListener("mousemove", (dets) => {
    // console.log(`(${dets.x},${dets.y})`)

    gsap.to("#cursor", {
        x: dets.x ,
        y: dets.y ,
        ease: "expo.out" 
    })
    
})


imageDiv.addEventListener("mouseenter", () => {
    cursor.innerHTML = "view more"
    gsap.to("#cursor", {
        scale: 2
    })
})
imageDiv.addEventListener("mouseleave", () => {
    cursor.innerHTML = ""
    gsap.to("#cursor", {
        scale: 1
    })
})