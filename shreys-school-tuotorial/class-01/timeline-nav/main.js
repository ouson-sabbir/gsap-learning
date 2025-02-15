var tl = gsap.timeline();
tl.from(".bg1",{
    x: 0,
    opacity: 0,
    width: 0,
    duration: 0.7,
    delay: 0.5
});
tl.from(".bg2",{
    x: 0,
    opacity: 0,
    width: 0,
    duration: 0.7,
});
tl.from(".logo h2",{
    y: -20,
    opacity: 0,
    duration: 1,
});
tl.from(".nav-section h4",{
    y: -20,
    opacity: 0,
    duration: 1,
    stagger: 0.3
});
tl.from(".hero-setion h1",{
    y: 20,
    opacity: 0,
    duration: 0.5,
    scale: 0.5
});