export let heroSetup = () => {
  let h1SplitText = new SplitText(".hero-section h1", {
    type: "lines",
  });
  let h1Line = h1SplitText.lines;

  $(h1Line).each(function (index) {
    if (index % 2 === 0) {
      $(this).addClass("hAnimEven");
    } else {
      $(this).addClass("hAnimOdd");
    }
  });

  let hPSplitText = new SplitText(".hero-section p", {
    type: "lines",
  });
  let hPLine = hPSplitText.lines;

  $(hPLine).each(function (index) {
    if (index % 2 === 0) {
      $(this).addClass("hAnimEven");
    } else {
      $(this).addClass("hAnimOdd");
    }
  });
};

export let heroAnims = () => {
  let secName = "hero";
  let timeDur = 1;
  let scrubDur = 1;
  let thisWindowWidth = $(window).width();
  let thisWindowHeight = $(window).height();

  let backTL = gsap.timeline({
    scrollTrigger: {
      trigger: "#hero",
      start: "bottom+=110 bottom",
      end: "bottom center",
      scrub: scrubDur,
    },
    defaults: {
      duration: timeDur,
      ease: "none",
    },
  });

  backTL.to(
    "#background-svg-" + secName + "-2",
    {
      morphSVG: {
        shape: "#background-svg-" + secName + "-2-c",
      },
    },
    "backOut"
  );

  backTL.to(
    "#background-svg-" + secName + "-3",
    {
      morphSVG: {
        shape: "#background-svg-" + secName + "-3-c",
        shapeIndex: 1,
      },
    },
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

  let textTL = gsap.timeline({
    scrollTrigger: {
      trigger: "#hero",
      start: "bottom+=10 bottom",
      end: "bottom center",
      scrub: scrubDur,
    },
    defaults: {
      duration: timeDur,
      ease: "none",
    },
  });

  textTL.to(".hero-logo-mark", { y: "-" + thisWindowHeight }, "backOut");
  textTL.to(
    ".hAnimEven",
    {
      x: "-" + thisWindowWidth,
      stagger: 0.1,
    },
    "backOut"
  );
  textTL.to(
    ".hAnimOdd",
    {
      x: thisWindowWidth,
      stagger: 0.1,
    },
    "backOut"
  );
  textTL.to(".preheadline", { bottom: "-" + thisWindowHeight }, "backOut");
};
