
var tl = gsap.timeline({
    repeat :-1
});

tl.to(".imageConatiner",{
    ease:Expo.easeInOut,
    width:"100%",
    duration: 2,
    stagger: 2,
},"a");
tl.to("#text h1",{
    ease:Expo.easeInOut,
    stagger: 3,
    top : 0
},"a")
tl.to("#text h1",{
    delay: 2,
    ease:Expo.easeInOut,
    stagger: 3,
    top: "-100%"
},"a")

// document.querySelectorAll(".imageConatiner");
// forEach(element => {
    
// });
