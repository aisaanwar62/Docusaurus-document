import React from "react";
import Particles from "../magicui/particles";
// index.js or App.js

type FeatureItem1 = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<"svg">>;
  imgSrc?: string;
  description: JSX.Element;
};
type FeatureItem2 = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<"svg">>;
  imgSrc?: string;
  description: JSX.Element;
};

const FeatureList1: FeatureItem1[] = [
  {
    title: "OUR MISSION",
    Svg: require("@site/static/img/undraw_goals_re_lu76 (1).svg").default,
    description: (
      <>
        We believe technology should be a powerful tool for progress, not
        intimidation. That‘s why we bridge the gap between talent and
        opportunity, empowering individuals and businesses to achieve their
        digital dreams. Pie Technologies is your launchpad to digital success
        where innovation meets expertise.
      </>
    ),
  },
  {
    title: "ABOUT US",
    Svg: require("@site/static/img/undraw_software_engineer_re_tnjc.svg")
      .default,
    description: (
      <>
        Pie Technologies empowers businesses and individuals through a diverse
        landscape of IT solutions. We architect custom software for streamlined
        operations, deliver agility, scalability, and innovation by reshaping
        infrastructure for digital transformation, build robust cybersecurity
        shields for data trust, and ensure optimal performance with proactive IT
        management. We seamlessly integrate existing technologies, cultivate
        talent through in-demand training and certifications, and accelerate
        career growth with immersive bootcamp experiences. We are your trusted
        partner in navigating the digital landscape, unlocking potential, and
        shaping your success.
      </>
    ),
  },
  {
    title: "OUR VISION",
    Svg: require("@site/static/img/undraw_growth_analytics_re_pyxf.svg")
      .default,
    description: (
      <>
        Pie Technologies aims to play a vital role in developing an employable
        workforce by transforming their learnings into skills required by the
        relevant industry, hence improving the country‘s economic growth. Join
        us, and let‘s unlock your full potential together.
      </>
    ),
  },
];
const FeatureList2: FeatureItem2[] = [
  {
    title: "Admin",
    Svg: require("@site/static/img/undraw_mobile_login_re_9ntv.svg").default,
    description: (
      <>
        The Admin Dashboard offers a comprehensive overview of key metrics and
        activities, including trainees, trainers, batches, scheduled activities,
        and top-performing students.
      </>
    ),
  },
  {
    title: "Trainer",
    Svg: require("@site/static/img/undraw_online_learning_re_qw08.svg").default,
    description: (
      <>
        The Trainer Dashboard offers a comprehensive overview of key metrics and
        activities, including Total Modules, Total Lectures Delivered, Batches
        Assigned, Tests/Assignments Conducted, and a list of the top 5
        performing students.
      </>
    ),
  },
  {
    title: "Trainee",
    Svg: require("@site/static/img/undraw_online_test_re_kyfx.svg").default,
    description: (
      <>
        The Trainee Dashboard offers a comprehensive overview of key metrics and
        activities, including Total Modules, Assignments, Tests, Active
        Activities, Daily Tasks, Daily Plans, and Completed Tasks.
      </>
    ),
  },
];

function Feature1({ title, Svg, imgSrc, description }: FeatureItem1) {
  return (
    <div className="flex items-start space-x-4 px-32 md:px-14 ">
      <div className="flex-shrink-0">
        {Svg ? (
          <Svg
            className="w-96 h-96 md:w-60 md:h-60 2xl:w-96 2xl:h-96 pr-5"
            role="img"
          />
        ) : (
          <img
            src={imgSrc}
            alt={title}
            className="w-96 h-96  md:w-60 md:h-60 2xl:w-56 2xl:h-96 pr-5"
          />
        )}
      </div>
      <div className="flex flex-col items-start justify-center 2xl:text-lg">
        <h3 className="font-bold text-lg mb-2 text-slate-700">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
function Feature2({ title, Svg, imgSrc, description }: FeatureItem2) {
  return (
    <div className="flex items-start space-x-4 px-32 md:px-14 ">
      <div className="flex-shrink-0">
        {Svg ? (
          <Svg
            className="w-96 h-96 md:w-56 md:h-56 2xl:w-96 2xl:h-96 pr-5"
            role="img"
          />
        ) : (
          <img
            src={imgSrc}
            alt={title}
            className="w-96 h-96 md:w-56 md:h-56 2xl:w-56 2xl:h-96 pr-5"
          />
        )}
      </div>
      <div className="flex  flex-col justify-center items-start 2xl:text-lg">
        <h3 className="font-bold text-lg mb-2 text-slate-700">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <div>
      {" "}
      <section className="flex items-center justify-center mt-32 h-20 ">
        <h1 className="font-bold text-3xl md:text-xl  text-slate-700 underline underline-offset-4 hover:text-green-700">
          WHY CONNECT WITH US
        </h1>
      </section>
      <section className="flex flex-col overflow-y-auto h-96 md:h-64 2xl:h-96 2xl:mx-44 mx-44 md:mx-20 my-20 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-green-700">
        <div className={` items-center justify-center `}>
          {FeatureList1.map((props, idx) => (
            <Feature1 key={idx} {...props} />
          ))}
        </div>
      </section>
      <section className="relative flex items-center justify-center mt-32 bg-green-700 w-full h-20">
        {/* Make sure Particles covers the entire section */}
        <Particles className="absolute top-0 left-0 w-full h-full" />

        <h1 className="font-bold text-3xl 2xl:text-xl text-green-950 underline underline-offset-8 relative z-10 hover:text-white">
          ROLES
        </h1>
      </section>
      <section className="flex flex-col overflow-y-auto h-96 md:h-56 2xl:h-96 2xl:mx-44 mx-44 md:mx-20 my-28 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-green-700">
        <div className={` items-center justify-center    `}>
          {FeatureList2.map((props, idx) => (
            <Feature2 key={idx} {...props} />
          ))}
        </div>
      </section>
    </div>
  );
}
