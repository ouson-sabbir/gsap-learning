gsap.from("#page1 #box",{
    scale: 0,
    duration: 1,
    delay: 1,
    rotate: 360,
    backgroundColor: "#12680f",
});
gsap.from("#page2 h1",{
    x: 500,
    opacity: 0,
    duration: 2,
    scrollTrigger:{
        trigger: "#page2 h1",
        scroller: "body",
        markers: true,
        start: "top 60%"
    }
});
gsap.from("#page2 h2",{
    x: -500,
    opacity: 0,
    duration: 2,
    scrollTrigger:{
        trigger: "#page2 h2",
        scroller: "body",
        markers: true,
        start: "top 60%"
    }
})