export let calloutSetup = () => {
  let calloutBodySplitText = new SplitText(".callout-text", {
    type: "lines",
  });
  let calloutBodyLines = calloutBodySplitText.lines;

  $(calloutBodyLines).addClass("calloutBodyLines");
  $(calloutBodyLines).wrap("<div class='calloutBodyLinesWrap'></div>");

  gsap.set(calloutBodyLines, { y: 80 });
};

export let calloutAnim = () => {
  let secName = "why";
  let nextSecName = "callout";
  let standardDur = 1;
  let scrubDur = 1;
  let thisWindowWidth = $(window).width();
  let thisWindowHeight = $(window).height();

  let backDur = 1;
  let backTL = gsap.timeline({
    scrollTrigger: {
      trigger: "#" + secName,
      start: "bottom-=100 center",
      end: "bottom top-=100",
      scrub: scrubDur,
    },
    defaults: {
      duration: backDur,
    },
  });

  backTL.to(
    "#background-svg-" + secName + "-2",
    {
      morphSVG: {
        shape: "#background-svg-" + secName + "-2-c2",
      },
    },
    "backOut"
  );

  backTL.to(
    "#background-svg-" + nextSecName + "-gradient-1",
    { x: 0 },
    "backOut"
  );
  backTL.to(
    "#background-svg-" + nextSecName + "-gradient-2",
    { x: 0 },
    "backOut"
  );

  backTL.to(
    "#background-svg-" + secName + "-1",
    {
      morphSVG: {
        shape: "#background-svg-" + secName + "-1-c",
      },
    },
    "backOut"
  );

  let mm = gsap.matchMedia();

  // add a media query. When it matches, the associated function will run
  mm.add("(min-width: 768px)", () => {
    backTL.to(".money-clock", { x: "-" + thisWindowWidth / 1.5 }, "backOut");
  });
  mm.add("(max-width: 799px)", () => {
    let mobileClockTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".why-headline",
        start: "top center-=150",
        // end: "200",
        // scrub: scrubDur,
        toggleActions: "play none none reverse",
        fastScrollEnd: true,
      },
      defaults: {
        duration: backDur,
      },
    });
    mobileClockTL.to(
      ".money-clock",
      { x: "-" + thisWindowWidth / 1.5 },
      "backOut"
    );
  });

  let pinTL = gsap.timeline({
    scrollTrigger: {
      trigger: "#" + nextSecName,
      start: "center center",
      end: "top top",
      pin: true,
      // scrub: 1
    },
    defaults: {
      duration: backDur,
    },
  });

  let bodyTL = gsap.timeline({
    scrollTrigger: {
      trigger: "#" + secName,
      start: "bottom top+=300",
      toggleActions: "play none none reverse",
      fastScrollEnd: true,
      // end: "top center",
      // scrub: 1,
    },
    defaults: {
      duration: standardDur,
    },
  });

  bodyTL.to(
    ".calloutBodyLines",
    {
      y: 0,
      opacity: 1,
      stagger: 0.05,
    },
    "backOut"
  );

  let whiteTL = gsap.timeline({
    scrollTrigger: {
      trigger: "#whatscroll",
      start: "bottom top",
      toggleActions: "play none none reverse",
      fastScrollEnd: true,
      // end: "top center",
      // scrub: 1,
    },
    defaults: {
      duration: 0.000001,
    },
  });

  whiteTL.to("#background-svg-callout-2-1", { opacity: 0 });
};
