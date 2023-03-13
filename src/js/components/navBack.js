// export let navBack = () => {
//   let blue1 = "#091733";
//   let blue2 = "#042359";
//   let blue3 = "#bdd9f9";
//   let clay1 = "#ffd5bd";
//   let clay2 = "#ffe6d9";
//   let clay3 = "#fff7f3";
//   let clayText = "#ffc8a0";
//   let timeDur = 0.3;

//   let whyTL = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".why-main-content",
//       start: "top top+=100",
//       toggleActions: "play none none reverse",
//       fastScrollEnd: true,
//     },
//     defaults: {
//       duration: timeDur,
//     },
//   });

//   let calloutTL = gsap.timeline({
//     scrollTrigger: {
//       trigger: "#why",
//       start: "bottom top+=40",
//       toggleActions: "play none none reverse",
//       fastScrollEnd: true,
//     },
//     defaults: {
//       duration: timeDur,
//     },
//   });

//   let whatTL = gsap.timeline({
//     scrollTrigger: {
//       trigger: "#whatscroll",
//       start: "top top",
//       toggleActions: "play none none reverse",
//       fastScrollEnd: true,
//     },
//     defaults: {
//       duration: 0.00001,
//     },
//   });
//   // TIMING IS WEIRD
//   let whoTL = gsap.timeline({
//     scrollTrigger: {
//       trigger: "#who",
//       start: "top center-=50",
//       toggleActions: "play none none reverse",
//       fastScrollEnd: true,
//     },
//     defaults: {
//       duration: timeDur,
//     },
//   });

//   let careersTL = gsap.timeline({
//     scrollTrigger: {
//       trigger: "#who",
//       start: "bottom center+=100",
//       toggleActions: "play none none reverse",
//       fastScrollEnd: true,
//     },
//     defaults: {
//       duration: timeDur,
//     },
//   });
//   let mm = gsap.matchMedia();

//   whyTL.set("header", { backgroundColor: blue2 }, "navIn");

//   // mm.add("(max-width: 1024px)", () => {
//   //   whyTL.to(".main-nav", { background: blue2 }, "navIn");
//   // });
//   // calloutTL.to(".main-nav .menu-item", { color: blue3 }, "navIn1");
//   // calloutTL.to(".header-logo", { fill: blue3 }, "navIn1");
//   // calloutTL.to(".mobile-menu span", { background: blue3 }, "navIn1");

//   // whatTL.to(".main-nav .menu-item", { color: blue2 }, "navIn2");
//   // whatTL.to(".header-logo", { fill: blue2 }, "navIn2");
//   // whatTL.to(".mobile-menu span", { background: blue2 }, "navIn2");

//   // mm.add("(max-width: 1024px)", () => {
//   //   whatTL.to(".main-nav", { background: "white" }, "navIn2");
//   // });
//   // whoTL.to(".main-nav .menu-item", { color: "white" }, "navIn3");
//   // whoTL.to(".header-logo", { fill: "white" }, "navIn3");
//   // whoTL.to(".mobile-menu span", { background: "white" }, "navIn3");

//   // mm.add("(max-width: 1024px)", () => {
//   //   whoTL.to(".main-nav", { background: blue2 }, "navIn3");
//   // });
//   // careersTL.to(".main-nav .menu-item", { color: blue2 }, "navIn4");
//   // careersTL.to(".header-logo", { fill: blue2 }, "navIn4");
//   // careersTL.to(".mobile-menu span", { background: blue2 }, "navIn4");

//   // mm.add("(max-width: 1024px)", () => {
//   //   careersTL.to(".main-nav", { background: "white" }, "navIn4");
//   // });
// };
