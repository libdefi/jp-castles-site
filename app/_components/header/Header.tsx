"use client";

import { EditLocation, Mapview } from "@/components/icons/Icons";
import { useMapModeState } from "@/state/mapModeState";
import { Noto_Serif_JP } from "next/font/google";
import styles from "./Header.module.scss";
import { usePathname } from "next/navigation";

const noto_serif = Noto_Serif_JP({ subsets: ["latin"], weight: "700" });

export default function Header() {
  const mode = useMapModeState();
  const path = usePathname();
  const showView = path === "/" || mode === "edit";

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <a href="/" className={noto_serif.className}>
          Castle Datastore
        </a>
      </h1>

      {showView ? <View /> : <Edit />}
    </header>
  );
}

function View() {
  return (
    <a href="/map" className={styles.anchor}>
      <span>探す</span>
      <Mapview className={styles.search_icon} />
    </a>
  );
}

function Edit() {
  return (
    <a href="/edit" className={styles.anchor}>
      <span>編集する</span>
      <EditLocation className={styles.icon} />
    </a>
  );
}
