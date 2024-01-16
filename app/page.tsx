import About from "./_components/sections/about/About";
import styles from "./page.module.scss";
import CastleMap from "@/components/map/Map";

export default function Page() {
  return (
    <main className={styles.main}>
      <About />
      <CastleMap className={styles.map} />
    </main>
  );
}
