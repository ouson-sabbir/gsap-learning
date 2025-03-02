let menu = document.querySelector("#nav i")
let close = document.querySelector("#full i")

let tl = gsap.timeline();

tl.to("#full",{
   right: 0,
   duration: 0.5
});

tl.from("#full h4",{
   x: 120,
   opacity: 0,
   stagger: 0.1,
   duration: 0.4
})
tl.from("#full i",{
   opacity: 0,
})
tl.pause();

menu.addEventListener("click",function(){
   tl.play();
});

close.addEventListener("click",function(){
   tl.reverse();
})