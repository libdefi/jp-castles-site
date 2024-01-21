"use client";

import CastleMap from "@/components/map";
import { useMapModeMutators } from "@/state/mapModeState";
import { useEffect } from "react";
import styles from "./page.module.scss";

export default function Page() {
  const { setMapModeState } = useMapModeMutators();

  useEffect(() => {
    setMapModeState("edit");

    return () => {
      setMapModeState("view");
    };
  }, [setMapModeState]);

  return (
    <main className={styles.edit}>
      <div className={styles.map}>
        <CastleMap />
      </div>
    </main>
  );
}
