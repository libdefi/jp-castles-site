import About from "./_components/sections/about/About";
import styles from "./page.module.scss";
import CastleMap from "@/components/map";

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
