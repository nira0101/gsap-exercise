"use strict";

const gSap = gsap.timeline();

gSap.to(".ball", { x: "400", duration: 5 });
gSap.to(".ball", { duration: 4, x: "20vw", y: "-20vh", scale: 0 });
gSap.to(".ball", { duration: 8, x: 0, y: 0 });
