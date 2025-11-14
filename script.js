var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#page02",
        start: "top 100%",
        end: "bottom 100%",
        scrub: true
    }
})

tl.to("#fanta", {
    x: -520,
    y: 800,
    duration: 1
});
tl.to("#groupOrange", {
    x: 450,
    y: 780,
    duration: 1
}, fanta)
tl.to("#singleOrange", {
    x: -150,
    y: 1100,
    duration: 1
}, fanta)
tl.to("#leaf", {
    x: 1250,
    y: 700,
    duration: 1,
    rotate: 140
}, fanta)
tl.to("#leaf02", {
    x: -1500,
    y: 300,
    duration: 1,
    rotate: 140
}, fanta)


var tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page03",
        start: "top 100%",
        end: "bottom 100%",
        scrub: true
    }
})

tl1.to("#fanta", {
    x: 0,
    y: 1600,
    width: 400,
    duration: 1
});
tl1.from("#d1", {
    scale: 0,
    duration: 1
}, 1)
tl1.from("#d2", {
    scale: 0,
    duration: 1
}, 1)
tl1.from("#d3", {
    scale: 0,
    duration: 1
}, 1)
tl1.from("#d4", {
    scale: 0,
    duration: 1
}, 1)

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page04",
        start: "top 100%",
        end: "bottom 100%",
        scrub: true
    }
})
tl2.to("#whiteDiv", {
    y: 800,
    height: 600,
    width: 500,
    duration: 2
})
tl2.to("#d1Text", {
    opacity: 0
}, whiteDiv)
tl2.to("#d1", {
    y: 1000,
    x: 310,
    width: 270,
    duration: 3
}, whiteDiv)

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page05",
        start: "top 60%",
        end: "bottom 100%",
        scrub: true
    }
})
tl3.to("#whiteDiv", {
    y: 1650,
    height: 600,
    width: 500
})