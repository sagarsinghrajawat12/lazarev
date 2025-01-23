function locomotive(){
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  
    // for tablet smooth
    tablet: { smooth: true },
  
    // for mobile
    smartphone: { smooth: true }
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    }
  
  });
  
  
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  ScrollTrigger.refresh();
}
locomotive()

function navAnimation(){
  var nav = document.querySelector(".nav2");
nav.addEventListener("mouseenter",function(){
let tl = gsap.timeline()

  tl.to("#navbottom",{
    height:"23vh"
  })
  tl.to(".nav2 h5  ",{
    display:"block"
  })
  tl.to(".nav2 h5 span",{
    y:0,
    stagger:{
        amount:0.6
    }
  })
})

nav.addEventListener("mouseleave",function(){
  let tl = gsap.timeline()
    tl.to(".nav2 h5 span",{
      y:25,
      stagger:{
          amount:0.1
      }
    })
    tl.to(".nav2 h5",{
      display:"none",
      duration:0.1
    })
    tl.to("#navbottom",{
      height:0,
      duration:0.1
  
    })
  })
}
navAnimation()

function page2animation(){
  var relem = document.querySelectorAll(".right-elem")

relem.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    gsap.to(elem.childNodes[3],{
      opacity:1,
      scale:1
    })
  })
  elem.addEventListener("mouseleave",function(){
    gsap.to(elem.childNodes[3],{
      opacity:0,
      scale:0
    })
  })
  elem.addEventListener("mousemove", function (dets) {

    gsap.to(elem.childNodes[3], {
        x: dets.x - elem.getBoundingClientRect().x,
        y:dets.y - elem.getBoundingClientRect().y-25
        
    })
})
})
}
page2animation()

function page3vedioanimation(){
  var play = document.querySelector(".player")
var video = document.querySelector("#page3 video")
play.addEventListener("click",function(){
  video.play()
  gsap.to(video,{
    transform:"scaleX(1) scaleY(1)",
    opacity:1,
    borderRadius:0
  })
})
video.addEventListener("click",function(){
video.pause()
gsap.to(video,{
  transform:"scaleX(0.7) scaleY(0)",
  opacity:0,
  borderRadius:30
})

})
}
page3vedioanimation()

function page7animation(){
  var sec = document.querySelectorAll(".sec-right")
  sec.forEach(function(elem){
   elem.addEventListener("mouseenter",function(){
     elem.childNodes[3].style.opacity = 1
     elem.childNodes[3].play()
   })
   elem.addEventListener("mouseleave",function(){
     elem.childNodes[3].style.opacity = 0
     elem.childNodes[3].pause()
     elem.childNodes[3].load()
   })
  })
}
page7animation()

function page8animation(){
  var black = document.querySelectorAll(".black-box")
black.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    elem.childNodes[3].style.opacity=1
    elem.childNodes[3].play()
  })
  elem.addEventListener("mouseleave",function(){
    elem.childNodes[3].style.opacity=0
    elem.childNodes[3].pause()
    elem.childNodes[3].load()
    
  })
})
}
page8animation()

function page11animation(){
  gsap.from("#btm11part2 h4",{
    x:0,
    duration:1,
    scrollTrigger:{
     trigger:"#btm11part2",
     scroller:"#main",
     strat:"top 80%",
     end:"top 10%",
     scrub:true
    }
   })
}
page11animation()

function loadinganimation(){
  var tl = gsap.timeline()
  tl.from("#pag1",{
    opacity:0,
    duration:0.3,
    delay:0.2
  })
  tl.from("#page1",{
    transform:"scaleX(0.7) scaleY(0.2) translateY(80%)",
    borderRadius:"50px", 
    duration:2,
    ease:"expo.out"
  })
  tl.from("nav",{
    opacity:0
  })
 
  tl.from("#page1 h1, #page1 p, #pag1 div",{
    opacity:0,
    stagger:0.2,
    duration:0.5
  })
  tl.from("#movingdiv",{
    opacity:0,
    stagger:0.2,
    duration:0.5
  })
}
loadinganimation()