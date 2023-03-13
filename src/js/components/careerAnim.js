export let careerSetup = () => {
  let thisWindowWidth = $(window).width();
  let thisWindowHeight = $(window).height();
  let careerBodySplitText = new SplitText(".career-body", {
    type: "lines",
  });
  let careerBodyLines = careerBodySplitText.lines;
  $(careerBodyLines).addClass("careerAnimLine1");
  gsap.set(".careerAnimLine1", { x: "-" + thisWindowWidth, opacity: 0 });
  gsap.set(".careerAnimLine2", { x: thisWindowWidth, opacity: 0 });
  // gsap.set("#background-svg-careers", { x: thisWindowWidth * 2 });
  // gsap.set("#careers", { x: thisWindowWidth * 2 });
};

export let careerAnim = () => {
  // let secName = "hero";
  let secName = "careers";
  let timeDur = 1;
  let scrubDur = 1;

  let zIndexTL = gsap.timeline({
    scrollTrigger: {
      trigger: ".who-section .content",
      start: "bottom center",
      onEnter: function () {
        // alert("in");
        $("#background-svg-careers").css("z-index", "21");
        $("#careers").css("z-index", "21");
      },
    },
    defaults: {
      duration: timeDur,
    },
  });

  let backTL = gsap.timeline({
    scrollTrigger: {
      trigger: ".who-section .content",
      start: "bottom center-=100",
      end: "bottom top+=200",
      scrub: scrubDur,
    },
    defaults: {
      duration: timeDur,
    },

    onReverseComplete: function () {
      // alert("out");
      $("#background-svg-careers").css("z-index", "1");
      $("#careers").css("z-index", "1");
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

  let mm = gsap.matchMedia();

  mm.add("(min-width: 800px)", () => {
    let bodyTL = gsap.timeline({
      scrollTrigger: {
        trigger: "#who",
        start: "bottom top+=300",
        toggleActions: "play none none reverse",
        fastScrollEnd: true,
      },
      defaults: {
        duration: timeDur / 2,
      },
    });

    bodyTL.to(".careerAnimLine1", { x: 0, opacity: 1, stagger: 0.1 }, "rollin");
    bodyTL.to(".careerAnimLine2", { x: 0, opacity: 1, stagger: 0.1 }, "rollin");
  });
  mm.add("(max-width: 799px)", () => {
    let bodyTL = gsap.timeline({
      scrollTrigger: {
        trigger: "#who",
        start: "bottom top+=200",
        toggleActions: "play none none reverse",
        fastScrollEnd: true,
      },
      defaults: {
        duration: timeDur / 2,
      },
    });

    bodyTL.to(
      ".careerAnimLine1",
      { x: 0, opacity: 1, stagger: 0.1 },
      "careerin"
    );
    bodyTL.to(
      ".careerAnimLine2",
      { x: 0, opacity: 1, stagger: 0.1 },
      "careerin"
    );
  });
};
