import { menuToggle, smoothScrolling, searchReveal } from "./index.js";

export let clickEvents = () => {
  //Make the animation a variable so we can read it's state (forward / reverse) within this function
  let menuToggleTL = menuToggle();

  // Clicking on Menu Toggle
  menuToggleTL.reversed(true);
  $(".menuToggle").on("click", function () {
    if (menuToggleTL.reversed()) {
      menuToggleTL.play();
      // gsap.set($(".wrapper"), { height: "100%", overflow: "hidden" });
    } else {
      // gsap.set($(".wrapper"), { height: "auto", overflow: "visible" });
      menuToggleTL.reverse();
    }
  });

  // Clicking on Hash Links
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();

    if (screen.width <= 1025) {
      // If It's A Hash Link on Mobile Scroll and Close Menu
      gsap.set($(".wrapper"), { height: "auto", overflow: "visible" });
      menuToggleTL.reverse();
      smoothScrolling($(this));
    } else {
      // Otherwise just scroll to the hash
      if ($(this).attr("href") == "#who") {
        smoothScrolling($(this), 180);
      } else if ($(this).attr("href") == "#why") {
        smoothScrolling($(this), 130);
      } else {
        smoothScrolling($(this), 0);
      }
    }
  });
};
