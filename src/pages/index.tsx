import Head from "next/head";

import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/profile";

import styles from "../styles/pages/Home.module.css";
import CompletedChallenges from "../components/CompletedChallenges";
import Countdown from "../components/Countdown";
import { ChallegenBox } from "../components/ChallengeBox";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | move.it</title>
      </Head>

      <ExperienceBar />

      <section>
        <div className="">
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
          <ChallegenBox />
        </div>
      </section>
    </div>
  );
}
