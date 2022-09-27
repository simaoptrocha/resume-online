

function showTime(e) {
  e.setAttribute("done", "true");
  e.querySelector(".timeline-point").style.color = "#2e6061"
  e.querySelector(".date").style.opacity = "100%";
  e.querySelector("p").style.opacity = "100%";
  e.querySelector("p").style.transform = "translateY(0px)";
}

const line = document.querySelector(".timeline-innerline");
const timeline_events = document.querySelectorAll("ul li.timeline-li");

let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0.5) {
        timeline_events.forEach((e)=>{
            console.log(e)
            showTime(e)
        })
        line.style.width = "100%"
    }
  });},
  { threshold: 1, rootMargin: "0px 0px -50px 0px" });


let target=document.querySelector(".timeline ul");
observer.observe(target)

