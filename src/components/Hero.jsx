import { SplitText } from "gsap/all";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const videoRef = useRef();

  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const heroSplit = new SplitText(".title", {
      type: "chars words",
    });
    const paragraphSplit = new SplitText(".subtitle", {
      type: "lines",
    });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(
        ".right-leaf",
        {
          y: 200,
        },
        0
      )
      .to("left-leaf", { y: -200 }, 0);

    const startValue = isMobile ? "top 50%" : "center 60%";
    const endValue = "max";

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
      },
    });

    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, {
        currentTime: videoRef.current.duration,
      });
    };
  }, []);

  return (
    <>
      <section id="hero" >
        <h1 className="title">Alireza karbalaei</h1>
        <img
          src="/images/mechanical-keyboard.png"
          alt="left-leaf"
          className="left-leaf w-[200px] "
        />
        <img
          src="/images/friends.png"
          alt="right-leaf"
          className="right-leaf w-[200px] "
        />
        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Responsive. Reliable. Refined.</p>
              <p className="subtitle">
                Senior <br /> Mern Stack
              </p>
            </div>
            <div className="view-cocktails">
              <p className="subtitle">
                Every project I create is a blend of solid engineering,
                practical design, and modern tech — built to feel smooth, smart,
                and effortless.
              </p>
              <a href="#cocktails">View Experiences</a>
            </div>
          </div>
        </div>
      </section>
      <div className="video absolute inset-0">
        <video
          ref={videoRef}
          src="/videos/output.mp4"
          playsInline
          preload="auto"
        />
      </div>
    </>
  );
};

export default Hero;
