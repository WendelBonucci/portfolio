import styles from "./page.module.css";
import InitialContent from "@/components/InitialContent/InitialContent";
import Title from "@/utils/Title/Title";

export default function Home() {
  return (
    <div className={styles.page}>
      <InitialContent />
      <Title text="Sobre mim"/>
    </div>
  );
}
