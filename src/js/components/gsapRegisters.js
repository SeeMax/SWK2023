// Register any GSAP plugins we need
export let gsapRegisters = () => {
  gsap.registerPlugin(ScrollToPlugin);
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(SplitText);
  gsap.registerPlugin(MorphSVGPlugin);
  gsap.registerPlugin(CSSRulePlugin);
};
