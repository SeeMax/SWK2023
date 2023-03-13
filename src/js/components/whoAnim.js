export let whoSetup = () => {
  let thisWindowWidth = $(window).width();
  let thisWindowHeight = $(window).height();
  let whoHeadlineSplitText = new SplitText("#who-headline", {
    type: "words",
  });
  let whoHeadlineLines = whoHeadlineSplitText.words;
  $(whoHeadlineLines).addClass("whoHeadlineWords");
  let mm = gsap.matchMedia();

  $(".single-person:nth-child(4n)").addClass("personLeft personLeft1");
  $(".single-person:nth-child(4n + 1)").addClass("personLeft personLeft2");
  $(".single-person:nth-child(4n + 2)").addClass("personRight personRight1");
  $(".single-person:nth-child(4n + 3)").addClass("personRight personRight2");

  $(".single-founder:nth-child(1)").addClass("personLeft1");
  $(".single-founder:nth-child(2)").addClass("personLeft2");

  // add a media query. When it matches, the associated function will run
  mm.add("(min-width: 800px)", () => {
    gsap.set(whoHeadlineLines, { x: thisWindowWidth / 2 });
    gsap.set(".single-founder", { x: "-" + thisWindowWidth / 2 });
    gsap.set(".personLeft1", { x: "-" + thisWindowWidth });
    gsap.set(".personLeft2", { x: "-" + thisWindowWidth / 2 });
    gsap.set(".personRight1", { x: thisWindowWidth / 2 });
    gsap.set(".personRight2", { x: thisWindowWidth });
  });
  mm.add("(max-width: 799px)", () => {
    gsap.set(whoHeadlineLines, { x: -thisWindowWidth * 2 });
    gsap.set(".single-founder", { x: "-" + thisWindowWidth });
    gsap.set(".personLeft1", { x: "-" + thisWindowWidth * 2 });
    gsap.set(".personLeft2", { x: "-" + thisWindowWidth });
    gsap.set(".personRight1", { x: thisWindowWidth });
    gsap.set(".personRight2", { x: thisWindowWidth * 2 });
  });

  gsap.set(".personLeft .person-name", { x: -200 });
  gsap.set(".personLeft .person-title", { x: -200 });
  gsap.set(".personLeft a", { x: -200 });
  gsap.set(".personRight .person-name", { x: 200 });
  gsap.set(".personRight .person-title", { x: 200 });
  gsap.set(".personRight a", { x: 200 });
};

export let whoAnim = () => {
  let secName = "who";
  let timeDur = 1;
  let scrubDur = 1;
  let thisWindowHeight = $(window).height();
  let mm = gsap.matchMedia();

  let backTL = gsap.timeline({
    scrollTrigger: {
      trigger: "#whatBottomHalf",
      start: "bottom center+=100",
      end: "250",
      scrub: scrubDur,
    },
    defaults: {
      duration: timeDur,
    },
  });

  mm.add("(min-width: 800px)", () => {
    backTL.to("#what", { top: "-" + thisWindowHeight / 2 }, "backOut");
  });

  backTL.to(
    "#background-svg-" + secName + "-2",
    {
      morphSVG: {
        shape: "#background-svg-" + secName + "-2-c",
        shapeIndex: 0,
      },
    },
    "backOut"
  );

  backTL.to(
    "#background-svg-" + secName + "-3",
    {
      morphSVG: {
        shape: "#background-svg-" + secName + "-3-c",
        shapeIndex: 0,
      },
    },
    "backOut"
  );

  let contentTL = gsap.timeline({
    scrollTrigger: {
      trigger: "#" + secName,
      start: "top center",
      toggleActions: "play none none reverse",
      fastScrollEnd: true,
    },
    defaults: {
      duration: timeDur / 2,
    },
  });

  contentTL.to(".whoHeadlineWords", { x: 0, stagger: 0.05 }, "backOut");
  mm.add("(min-width: 800px)", () => {
    contentTL.to(".single-founder", { x: 0 }, "backOut");
    contentTL.to(
      ".single-founder .personDeetAnim",
      { x: 0, stagger: 0.033 },
      "backOut"
    );
  });
  mm.add("(max-width: 799px)", () => {
    const founderItems = gsap.utils.toArray(".single-founder");
    founderItems.forEach((item) => {
      let img = $(item).find("img");
      let tl = gsap.timeline({
        defaults: {
          duration: timeDur / 2,
        },
        scrollTrigger: {
          trigger: img,
          start: "bottom bottom+=50",
          toggleActions: "play none none reverse",
          fastScrollEnd: true,
        },
      });

      let deets = $(item).find(".personDeetAnim");
      tl.to(item, { x: 0 }, "backOut");
      tl.to(deets, { x: 0, stagger: 0.066 }, "backOut");
    });
  });

  const listItems = gsap.utils.toArray(".single-person");
  listItems.forEach((item) => {
    let img = $(item).find("img");
    let tl = gsap.timeline({
      defaults: {
        duration: timeDur / 2,
      },
      scrollTrigger: {
        trigger: img,
        start: "bottom bottom+=50",
        toggleActions: "play none none reverse",
        fastScrollEnd: true,
      },
    });

    let deets = $(item).find(".personDeetAnim");
    tl.to(item, { x: 0 }, "backOut");
    tl.to(deets, { x: 0, stagger: 0.066 }, "backOut");
  });
};
