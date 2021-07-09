import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.person}>
        <Image
          src="/vectors/person-jostick.svg"
          height={96}
          width={185}
          alt="jostick next to person"
        />
      </div>
      <div className={styles.learn}>
        <h1>Learn</h1>
        <p>Practice with real exercices and projects for your portfolio</p>
      </div>

      <div className={styles.screensGetStarted}>
        <div className={styles.scrensNav}>
          <div className={styles.selectScreen}></div>
          <div className={styles.unselectScreen}></div>
          <div className={styles.unselectScreen}></div>
        </div>
      </div>
    </div>
  );
}
