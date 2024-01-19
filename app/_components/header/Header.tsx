import { Noto_Serif_JP } from "next/font/google";
import styles from "./Header.module.scss";
import { EditLocation } from "@/components/icons/Icons";

const noto_serif = Noto_Serif_JP({ subsets: ["latin"], weight: "700" });

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <a href="/" className={noto_serif.className}>
          Castle Datastore
        </a>
      </h1>

      <a href="/edit" className={styles.edit}>
        <span>編集する</span>
        <EditLocation className={styles.edit_icon} />
      </a>
    </header>
  );
}
