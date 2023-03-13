export let whySetup = () => {
  let thisWindowWidth = $(window).width();
  let thisWindowHeight = $(window).height();
  let whyBodySplitText = new SplitText(".why-body", {
    type: "lines",
  });
  let whyBodyLines = whyBodySplitText.lines;
  $(whyBodyLines).addClass("whyBodyLines");
  gsap.set(whyBodyLines, { y: 20, opacity: 0 });

  gsap.set("#arm-bottom", {
    rotation: 180,
    x: -5,
    transformOrigin: "100% 0",
  });
  let mm = gsap.matchMedia();

  // add a media query. When it matches, the associated function will run
  mm.add("(min-width: 800px)", () => {
    gsap.set(".money-clock", { x: -450 });
    gsap.set(".why-list-item p", { x: "-" + thisWindowWidth / 2 });
    gsap.set(".why-list-item img", { x: -60 });
  });
  mm.add("(max-width: 799px)", () => {
    gsap.set(".why-list-item p", { x: "-" + thisWindowWidth });
    gsap.set(".why-list-item img", { x: -62 });
  });
  // gsap.set(".why-list-item-inner", { height: 0 });
};

export let whyAnims = () => {
  let secName = "why";
  let timeDur = 1;
  let scrubDur = 1;

  let backTL = gsap.timeline({
    scrollTrigger: {
      trigger: "#" + secName,
      start: "top bottom-=100",
      end: "top center",
      scrub: scrubDur,
    },
    defaults: {
      duration: timeDur,
    },
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
  let mm = gsap.matchMedia();
  mm.add("(min-width: 800px)", () => {
    backTL.to(".money-clock", { x: 0, opacity: 1 }, "backOut");
  });

  let bodyTL = gsap.timeline({
    scrollTrigger: {
      trigger: ".why-headline",
      start: "top center",
      toggleActions: "play none none reverse",
      fastScrollEnd: true,
    },
    defaults: {
      duration: timeDur,
    },
  });

  bodyTL.to(".whyBodyLines", { y: 0, opacity: 1, stagger: 0.1 }, "backOut");

  bodyTL.to(
    "#arm-top",
    {
      rotation: 720,
      ease: "power4.out",
      duration: 2,
      transformOrigin: "0 100%",
    },
    "backOut"
  );
  bodyTL.to(
    "#arm-bottom",
    {
      rotation: 360,
      ease: "power4.out",
      x: 0,
      duration: 2,
      transformOrigin: "100% 0",
    },
    "backOut"
  );

  // add a media query. When it matches, the associated function will run
  mm.add("(min-width: 800px)", () => {
    const listItems = gsap.utils.toArray(".why-list-item");
    listItems.forEach((item) => {
      let inner = $(item).find(".why-list-item-inner");
      let img = $(item).find("img");
      let p = $(item).find("p");
      let tl = gsap.timeline({
        defaults: {
          duration: timeDur,
        },
        scrollTrigger: {
          trigger: item,
          start: "bottom bottom",
          toggleActions: "play none none reverse",
          fastScrollEnd: true,
        },
      });
      tl.to(p, { x: 0, ease: "back.out(0.25)" }, "listIn");
      tl.to(
        img,
        { x: 0, ease: "back.out(0.5)", duration: timeDur / 2 },
        "listIn+=" + timeDur / 2
      );
    });
  });

  mm.add("(max-width: 799px)", () => {
    const listItems = gsap.utils.toArray(".why-list-item");
    listItems.forEach((item) => {
      let inner = $(item).find(".why-list-item-inner");
      let img = $(item).find("img");
      let p = $(item).find("p");
      let tl = gsap.timeline({
        defaults: {
          duration: timeDur,
        },
        scrollTrigger: {
          trigger: item,
          start: "bottom bottom",
          toggleActions: "play none none reverse",
          fastScrollEnd: true,
        },
      });
      tl.to(p, { x: 0, ease: "back.out(0.25)" }, "listIn");
      tl.to(
        img,
        { x: 0, ease: "back.out(0.5)", duration: timeDur / 2 },
        "listIn+=" + timeDur / 2
      );
    });
    // tl.to(inner, { height: "auto" }, "listIn");
  });
};
