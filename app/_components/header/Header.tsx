"use client";

import { Noto_Serif_JP } from "next/font/google";
import styles from "./Header.module.scss";
import { EditLocation, Mapview } from "@/components/icons/Icons";
import { useMapModeState } from "@/state/mapModeState";

const noto_serif = Noto_Serif_JP({ subsets: ["latin"], weight: "700" });

export default function Header() {
  const mode = useMapModeState();

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <a href="/" className={noto_serif.className}>
          Castle Datastore
        </a>
      </h1>

      {mode === "edit" ? <View /> : <Edit />}
    </header>
  );
}

function View() {
  return (
    <a href="/" className={styles.anchor}>
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
