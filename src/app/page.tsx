import { HeaderCustom } from "@/app/components/HeaderCustom/HeaderCustom";
import { Tasks } from "./components/Tasks/Tasks";
import styles from "./page.module.scss";

export default function Home() {

  return (
    <main className={styles.page}>

      <HeaderCustom />

      <Tasks />

    </main>

  );
}
