import styles from "./page.module.css";

import InitialContent from "@/components/InitialContent/InitialContent";
import Title from "@/utils/Title/Title";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Journey from "@/components/Journey/Journey";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <div className={styles.page}>
      <InitialContent />
      <About />
      {/* <Projects /> */}
      <Skills />
      <Journey />
    </div>
  );
}