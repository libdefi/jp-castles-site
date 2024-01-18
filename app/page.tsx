import CastleMap from "@/components/map";
import About from "./_components/sections/about/About";
import styles from "./page.module.scss";

export default function Page() {
  return (
    <main className={styles.main}>
      <About />
      <div className={styles.map}>
        <CastleMap />
      </div>
    </main>
  );
}
