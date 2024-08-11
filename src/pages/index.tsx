import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import Meteors from "../components/magicui/meteors";
import Particles from "../components/magicui/particles";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx(
        "hero hero--primary h-96 bg-gradient-to-r from-green-800 to-green-100 relative overflow-hidden",
        "p-10",
        styles.heroBanner
      )}
    >
      {/* Meteors Component in the background */}
      {/* <Meteors number={40} /> */}
      <Particles className="absolute top-0 left-0 w-full h-full" />

      <div className="container flex items-center relative z-10">
        <div className="flex-1">
          <Heading
            as="h1"
            className="text-3xl text-green-950 font-bold 2xl:text-3xl md:text-2xl"
          >
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle mt-3 2xl:text-xl md:text-xl">
            {siteConfig.tagline}
          </p>
          <div className={styles.buttons}>
            <Link
              className="button bg-white button--lg mt-5 text-slate-700 hover:text-white hover:bg-green-800"
              to="/docs/Introduction"
            >
              View LMS Documentation
            </Link>
          </div>
        </div>
        <img
          src="/img/green-main.PNG"
          alt="Main Page"
          className="  ml-3 p-3 shadow-lg shadow-green-600"
          width={500}
          height={500}
        />
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
