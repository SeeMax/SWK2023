export let whatSetup = () => {
  $(".what-list-item").each(function (index) {
    if (index == 0 || index == 2) {
      $(this).addClass("whatListEven");
    } else {
      $(this).addClass("whatListOdd");
    }
  });

  let mm = gsap.matchMedia();

  // add a media query. When it matches, the associated function will run
  mm.add("(min-width: 800px)", () => {
    let thisWindowWidth = $(window).width();
    let thisWindowHeight = $(window).height();
    let whatBodySplitText = new SplitText("#what-body", {
      type: "lines",
    });
    let whatBodyLines = whatBodySplitText.lines;
    $(whatBodyLines).addClass("whatBodyLines");
    $(whatBodyLines).wrap("<div class='whatBodyLinesWrap'></div>");

    let whatHeadlineSplitText = new SplitText("#what-headline", {
      type: "lines",
    });
    let whatHeadlineLines = whatHeadlineSplitText.lines;
    $(whatHeadlineLines).addClass("whatHeadlineLines");
    $(whatHeadlineLines).wrap("<div class='whatHeadlineLinesWrap'></div>");

    gsap.set(whatHeadlineLines, { x: thisWindowWidth / 2 });
    gsap.set(whatBodyLines, { x: "-" + thisWindowWidth / 2 });

    gsap.set(".what-list-item p", { x: "-" + thisWindowWidth / 4 });
    gsap.set(".what-list-item h3", { x: "-" + thisWindowWidth / 4 });
    gsap.set(".what-list-item img", { x: "-" + thisWindowWidth / 4 });
  });

  mm.add("(max-width: 799px)", () => {
    let thisWindowWidth = $(window).width();
    let thisWindowHeight = $(window).height();
    let whatBodySplitText = new SplitText("#what-body", {
      type: "lines",
    });
    let whatBodyLines = whatBodySplitText.lines;
    $(whatBodyLines).addClass("whatBodyLines");
    $(whatBodyLines).wrap("<div class='whatBodyLinesWrap'></div>");

    let whatHeadlineSplitText = new SplitText("#what-headline", {
      type: "lines",
    });
    let whatHeadlineLines = whatHeadlineSplitText.lines;
    $(whatHeadlineLines).addClass("whatHeadlineLines");
    $(whatHeadlineLines).wrap("<div class='whatHeadlineLinesWrap'></div>");

    gsap.set(whatHeadlineLines, { x: thisWindowWidth });
    gsap.set(whatBodyLines, { x: "-" + thisWindowWidth });

    gsap.set(".what-list-item p", { x: "-" + thisWindowWidth });
    gsap.set(".what-list-item h3", { x: "-" + thisWindowWidth });
    gsap.set(".what-list-item img", { x: "-" + thisWindowWidth });
  });
};

export let whatAnim = () => {
  let secName = "callout";
  let nextSecName = "whatscroll";
  let nextSecName2 = "what";
  let timeDur = 1;
  let scrubDur = 1;
  let thisWindowWidth = $(window).width();
  let thisWindowHeight = $(window).height();
  // let clayBack = "#042359";

  let backDur = 1;
  let backTL = gsap.timeline({
    scrollTrigger: {
      trigger: "#" + nextSecName,
      start: "bottom bottom",
      end: "bottom center-=100",
      scrub: scrubDur,
    },
    defaults: {
      duration: backDur,
    },
  });

  backTL.to(
    "#background-svg-" + secName + "-gradient-1",
    { x: thisWindowWidth * 1.5 },
    "backOut"
  );
  backTL.to(
    "#background-svg-" + secName + "-gradient-2",
    { x: "-" + thisWindowWidth * 1.5 },
    "backOut"
  );

  let whatBackTL = gsap.timeline({
    scrollTrigger: {
      trigger: "#" + nextSecName,
      start: "bottom+=200 bottom",
      endTrigger: "#whatTopHalf",
      end: "bottom bottom",
      scrub: scrubDur,
    },
    defaults: {
      duration: backDur,
    },
  });

  whatBackTL.to(
    "#background-svg-" + nextSecName2 + "-1",
    {
      morphSVG: {
        shape: "#background-svg-" + nextSecName2 + "-1-c",
        shapeIndex: 0,
      },
    },
    "backOut+=0.05"
  );
  whatBackTL.to(
    "#background-svg-" + nextSecName2 + "-2",
    {
      morphSVG: {
        shape: "#background-svg-" + nextSecName2 + "-2-c",
        shapeIndex: 0,
      },
    },
    "backOut+=0.05"
  );

  let calloutBodyTL = gsap.timeline({
    scrollTrigger: {
      trigger: "#" + nextSecName,
      start: "top bottom",
      toggleActions: "play none none reverse",
      fastScrollEnd: true,
      // end: "top center",
      // scrub: 1,
    },
    defaults: {
      duration: timeDur,
    },
  });

  calloutBodyTL.to(
    ".calloutBodyLines",
    {
      y: -80,
      stagger: 0.025,
      ease: "circ.in",
    },
    "backOut"
  );

  let whatBodyTL = gsap.timeline({
    scrollTrigger: {
      trigger: "#whatTopHalf",
      start: "bottom bottom+=100",
      // end: "bottom center-=100",
      toggleActions: "play none none reverse",
      fastScrollEnd: true,
      // end: "top center",
      // scrub: 1,
    },
    defaults: {
      duration: timeDur,
    },
  });

  whatBodyTL.to(
    ".whatHeadlineLines",
    {
      x: 0,
      opacity: 1,
      stagger: 0.1,
    },
    "backOut"
  );
  whatBodyTL.to(
    ".whatBodyLines",
    {
      x: 0,
      opacity: 1,
      stagger: 0.1,
    },
    "backOut"
  );

  let pinTL = gsap.timeline({
    scrollTrigger: {
      trigger: "#whatTopHalf",
      start: "top top",
      // end: "top top",
      pin: true,
      pinSpacing: false,
      // scrub: 1
    },
    defaults: {
      duration: backDur,
    },
  });

  const listItems = gsap.utils.toArray(".what-list-item");
  listItems.forEach((item, index) => {
    let tl = gsap.timeline({
      defaults: {
        duration: timeDur,
      },
      scrollTrigger: {
        trigger: item,
        start: "center bottom+=50",
        // end: "top center",
        // scrub: scrubDur,
        toggleActions: "play none none reverse",
        fastScrollEnd: true,
      },
    });
    let img = $(item).find("img");
    let h3 = $(item).find("h3");
    let p = $(item).find("p");
    tl.to(img, { x: 0 }, "listIn+=0.");
    tl.to(h3, { x: 0 }, "listIn+=0.1");
    tl.to(p, { x: 0 }, "listIn+=0.2");
  });

  // let bodyColorTL = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: "#whatBottomHalf",
  //     start: "bottom bottom",
  //     toggleActions: "play none none reverse",
  //     fastScrollEnd: true,
  //     // end: "bottom center-=100",
  //     // scrub: scrubDur,
  //   },
  //   defaults: {
  //     duration: backDur,
  //   },
  // });

  // bodyColorTL.set("body", { backgroundColor: clayBack });
};
