let text;

function runSplit() {
  let currentElement = $(".split-lines");
  text = new SplitType(currentElement, { types: "lines, words" });
  $(".line").append("<div class ='line-mask'></div>");
  createAnimation();
}
runSplit();

window.addEventListener("resize", function () {
  text.revert();
  runSplit();
});

// Update on window resize
let windowWidth = $(window).innerWidth();
window.addEventListener("resize", function () {
  if (windowWidth !== $(window).innerWidth()) {
    windowWidth = $(window).innerWidth();
    typeSplit.revert();
    runSplit();
  }
});

gsap.registerPlugin(ScrollTrigger);

function createAnimation() {
  $(".line").each(function (index) {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        // trigger element - viewport
        start: "top center",
        end: "bottom center",
        scrub: 1
      }
    });
    tl.to($(this).find(".line-mask"), {
      width: "0%",
      duration: 1
    });
  });
}
