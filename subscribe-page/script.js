gsap.from(".hero-image-wrapper", ".content-wrapper", ".front-img", 2, {
  delay: 1,
  clipPath: "inset(0 100% 0 0)",
  ease: "power4.inOut",
  stagger: {
    amount: 0.5,
  },
});

gsap.from("img", 3, {
  delay: 1,
  scale: 2,
  ease: "power4.inOut",
});
