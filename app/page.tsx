"use client";

import About from "./_components/sections/about";
import MiniMap from "./_components/sections/miniMap";
import styles from "./page.module.scss";

export default function Page() {
  return (
    <main className={styles.main}>
      <About />
      <MiniMap />
    </main>
  );
}
