function showTime(e) {
    e.setAttribute("done", "true");
    e.querySelector(".timeline-point").style.color = "#2e6061"
    e.querySelector(".date").style.opacity = "100%";
    e.querySelector("p").style.opacity = "100%";
    e.querySelector("p").style.transform = "translateY(0px)";
  }
  