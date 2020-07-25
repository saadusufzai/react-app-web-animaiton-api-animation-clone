import React from "react";
import poster from "../images/hero-home.jpg";
import Typewriter from "typewriter-effect";
import classes from "../css/Front.module.css";
import useWebAnimations from "@wellyshen/use-web-animations";
const Front = () => {
  const { ref: f1, getAnimation } = useWebAnimations({
    keyframes: [
      { transform: "translateX(0%)" },
      { transform: "translateX(100%)" },
      { transform: "translateX(0%)" },
    ],
    timing: {
      duration: 1500,
      easing: "ease-in-out",
      iterations: Infinity,
    },
    autoPlay: false,
  });

  const stop = () => {
    getAnimation().pause();
  };

  const animateLeft = () => {
    getAnimation().play();
  };

  return (
    <div className={classes.bg}>
      <div className={classes.textArea}>
        <div className={classes.text}>
          <p>HI, WE'RE JUNTO</p>
          <h1>We're here to help you</h1>
          <div className={classes.typewriter}>
            <Typewriter
              options={{
                strings: [
                  "outrank the competition.",
                  "look sexy online.",
                  "create badass content.",
                  "generate more leads.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div className={classes.action}>
          <div className={classes.btn}>Let's make it happen</div>
          <div
            onMouseEnter={() => animateLeft()}
            onMouseLeave={() => stop()}
            className={classes.work}
          >
            How we work <i ref={f1} className="fas fa-arrow-right"></i>{" "}
          </div>
        </div>
      </div>
      <div className={classes.video}>
        <video
          poster={poster}
          autoPlay
          preload="true"
          loop
          muted
          src="https://junto.digital/wp-content/uploads/2018/12/junto-digital-hero.webm"
          type='video/webm;codecs="vp8, vorbis"'
        />
      </div>
    </div>
  );
};

export default Front;
