import CastleMap from "@/components/map";
import styles from "./index.module.scss";

export default function MiniMap() {
  return (
    <a href="/map" className={styles.map}>
      <div className={styles.filter}>
        <p>マップへ移動する</p>
      </div>
      <CastleMap />
    </a>
  );
}
