gsap.from("#page1 #box",{
    scale: 0,
    duration: 2,
    delay: 1,
    rotate: 360,
    backgroundColor: "#12680f",
});
gsap.from("#page2 #box",{
    scale: 0,
    duration: 2,
    delay: 1,
    rotate: 360,
    backgroundColor: "#12680f",
    scrollTrigger:{
        trigger: "#page2 #box",
        scroller: "body",
        markers: true,
        start: "top 60%"
    }
})