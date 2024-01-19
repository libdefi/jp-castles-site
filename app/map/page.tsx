import CastleMap from "@/components/map";
import styles from "./page.module.scss";

export default function Page() {
  return (
    <main className={styles.map}>
      <CastleMap />
    </main>
  );
}
