import React, { useState, useRef, useEffect } from "react";
import Particles from "../magicui/particles";
// index.js or App.js
import { Button as UiButton } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  size?: string;
}
const Button: React.FC<ButtonProps> = ({ variant, size, className, ...props }) => {
  const baseClass = "px-4 py-2 rounded";
  const variantClass = variant === "outline" ? "border border-gray-400" : "bg-gray-800 text-white";
  const sizeClass = size === "icon" ? "p-2" : "p-4";
  return (
    <UiButton className={`${baseClass} ${variantClass} ${sizeClass} ${className}`} {...props} />
  );
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
    <div className="flex  items-center  w-full  px-36">
      <div className="flex-shrink-0">
        {Svg ? (
          <Svg className="w-auto h-auto md:w-56 md:h-56 2xl:w-96 2xl:h-96 pr-5" role="img" />
        ) : (
          <img src={imgSrc} alt={title} className="w-96 h-96 md:w-56 md:h-56 2xl:w-56 2xl:h-96 pr-5" />
        )}
      </div>
      <div className="flex flex-col items-center justify-center">
        <h3 className="font-bold text-lg mb-2 text-slate-700">{title}</h3>
        <p >{description}</p>
      </div>
    </div>
  );
}
function Feature2({ title, Svg, imgSrc, description }: FeatureItem2) {
  return (
    <div className="flex  items-center  w-full  px-36 ">
      <div className="flex-shrink-0">
        {Svg ? (
          <Svg
            className="w-auto h-auto md:w-56 md:h-56 2xl:w-96 2xl:h-96 pr-5"
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
      <div className="flex  flex-col justify-center items-start ">
        <h3 className="font-bold text-lg mb-2 text-slate-700">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const sliderRef1 = useRef<HTMLDivElement>(null);
  const sliderRef2 = useRef<HTMLDivElement>(null);

  const handleScroll1 = (direction: 'left' | 'right') => {
    setCurrentIndex1((prevIndex) => {
      if (direction === 'left') {
        return prevIndex === 0 ? FeatureList1.length - 1 : prevIndex - 1;
      } else {
        return prevIndex === FeatureList1.length - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  const handleScroll2 = (direction: 'left' | 'right') => {
    setCurrentIndex2((prevIndex) => {
      if (direction === 'left') {
        return prevIndex === 0 ? FeatureList2.length - 1 : prevIndex - 1;
      } else {
        return prevIndex === FeatureList2.length - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  useEffect(() => {
    if (sliderRef1.current) {
      sliderRef1.current.scrollTo({
        left: currentIndex1 * sliderRef1.current.clientWidth,
        behavior: 'smooth',
      });
    }
  }, [currentIndex1]);

  useEffect(() => {
    if (sliderRef2.current) {
      sliderRef2.current.scrollTo({
        left: currentIndex2 * sliderRef2.current.clientWidth,
        behavior: 'smooth',
      });
    }
  }, [currentIndex2]);

  return (
    <div>
      {/* Contact Us Section */}
      <section className="flex items-center justify-center mt-32 h-20">
        <h1 className="font-bold text-3xl md:text-xl text-slate-700 underline underline-offset-4 hover:text-green-700">
          WHY CONNECT WITH US
        </h1>
      </section>
      <section className="relative mx-auto my-20">
        <div className="overflow-hidden" ref={sliderRef1}>
          <div className="flex items-center justify-center" style={{ width: `${FeatureList1.length * 100}%` }}>
            {FeatureList1.map((props, idx) => (
              <Feature1 key={idx} {...props} />
            ))}
          </div>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md"
          onClick={() => handleScroll1('left')}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md"
          onClick={() => handleScroll1('right')}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </section>

      {/* Roles Section */}
      <section className="relative flex items-center justify-center mt-32 bg-green-800 w-full h-20">
        <Particles className="absolute top-0 left-0 w-full h-full" />
        <h1 className="font-bold text-3xl 2xl:text-xl text-white underline underline-offset-8 relative z-10 hover:text-white">
          ROLES
        </h1>
      </section>
      <section className="relative mx-auto my-20 mb-36">
        <div className="overflow-hidden" ref={sliderRef2}>
          <div className="flex items-center justify-center" style={{ width: `${FeatureList2.length * 100}%` }}>
            {FeatureList2.map((props, idx) => (
              <Feature2 key={idx} {...props} />
            ))}
          </div>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md"
          onClick={() => handleScroll2('left')}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md"
          onClick={() => handleScroll2('right')}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </section>
    </div>
  );
}
