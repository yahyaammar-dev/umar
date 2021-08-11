function myFunction(){
    var x = document.getElementById("menu"); 
     
     if(x.style.display == "block")
     {
         x.style.display = "none";
     }
     else{
         x.style.display = "block";
     }
 }

new TypeIt('#type1', {
    speed: 150,
    loop: true,
    waitUntilVisible: true,
})
.type('Designer', { delay: 400})
.pause(500)
.delete(9)
.type('Developer',{ delay:400})
.pause(500)
.delete(9)
.type('Video Editer',{ delay:400})
.pause(500)
.delete(9)
.go();


new TypeIt('#type2', {
    speed: 150,
    loop: true,
    waitUntilVisible: true,
})
.type('Designer', { delay: 400})
.pause(500)
.delete(9)
.type('Developer',{ delay:400})
.pause(500)
.delete(9)
.go();
                









   //  GSAP Means Animations
gsap.from(".logo", {opacity: 0, duration: 1, delay: .5, y: -10});
gsap.from(".menu-right", {opacity: 0, duration: 1, delay: 2, x: -40});   
gsap.from(".banner", {opacity: 0, duration: 1, delay: 1.5, x: 200});
gsap.from(".hero h3", {opacity: 0, duration: 1, delay: 2, y: -50});
gsap.from(".hero h1", {opacity: 0, duration: 1, delay: 2.5, y: -45});
gsap.from(".hero h4", {opacity: 0, duration: 1, delay: 3, y: -30});
gsap.from(".hero a", {opacity: 0, duration: 1, delay: 3.5, y: -50});
gsap.from(".nav-item", {opacity: 0, duration: 1, delay: 1.2, y: 30, stagger: .2});
gsap.from(".icons span", {opacity: 0, duration: 1, delay: 4, x: -30, stagger: .2});

        
AOS.init();