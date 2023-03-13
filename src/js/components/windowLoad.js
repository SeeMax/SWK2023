import {
  preLoader,
  mobileNavSetup,
  externalLinks,
  gsapRegisters,
  clickEvents,
  whatScroller,
  heroSetup,
  heroAnims,
  whyAnims,
  whySetup,
  calloutSetup,
  calloutAnim,
  whatSetup,
  whatAnim,
  navAnims,
  whoSetup,
  whoAnim,
  careerSetup,
  careerAnim,
  navBack,
} from "./index.js";

window.addEventListener("load", function () {
  // Setup Basic Functionality
  preLoader();
  externalLinks();
  gsapRegisters();
  // clickEvents();

  heroSetup();
  whySetup();
  calloutSetup();
  whatSetup();
  whoSetup();
  careerSetup();
  heroAnims();
  whyAnims();
  calloutAnim();
  whatAnim();
  whatScroller();
  whoAnim();
  careerAnim();
  navAnims();
  // navBack();
  clickEvents();

  if ($("body").hasClass("page-home")) {
  }

  if ($(window).width() <= 1024) {
    mobileNavSetup();
  } else {
  }
});

window.addEventListener("resize", function () {
  gsap.set(".what-scroller-inner", { clearProps: "all" });
  whatScroller();
  if ($(window).width() < 1024) {
  } else {
  }
});

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
