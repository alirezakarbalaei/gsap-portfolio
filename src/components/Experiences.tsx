import React from "react";
import { recentExperiences, moreExperiences } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Experiences = () => {
  useGSAP(() => {
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#experiences",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
      },
    });

    parallaxTimeline
      .from("#c-left-leaf", {
        x: -100,
        y: 100,
      })
      .from("#c-right-leaf", {
        x: 100,
        y: 100,
      });
  });

  return (
    <div id="experiences" className="noisy">
      <img src="/images/nodejs.png" alt="l-leaf" id="c-left-leaf"
        className="w-[200px] md:w-[400px]"
       />
      <img
        src="/images/reactjs.png"
        alt="l-right"
        id="c-right-leaf"
        className=" w-[200px] md:w-[400px]"
      />

      <div className="list">
        <div className="popular">
          <h2>Recents:</h2>

          <ul>
            {recentExperiences.map(({ role, company, period, points }) => (
              <li key={company}>
                <div>
                  <h3>
                    {role} - {company}
                  </h3>
                  <p className="text-yellow">{period}</p>
                  {points.map((point) => (
                    <p key={point}>{point}</p>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="loved">
          <h2>Others:</h2>

          <ul>
            {moreExperiences.map(({ role, company, period, points }) => (
              <li key={company}>
                <div>
                  <h3>
                    {role} - {company}
                  </h3>
                  <p className="text-yellow">{period}</p>
                  {points.map((point) => (
                    <p key={point}>{point}</p>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
