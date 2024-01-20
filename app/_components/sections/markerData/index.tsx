"use client";

import { fetchCastleMarkerData } from "@/components/api/marker";
import Card from "@/components/share/card/Card";
import { getDateStr } from "@/components/util";
import { MarkerData } from "@/types/map";
import { useEffect, useState } from "react";
import styles from "./index.module.scss";

export default function Data() {
  const [markerData, setMarkerData] = useState<MarkerData | null>(null);

  useEffect(() => {
    (async () => {
      const data = await fetchCastleMarkerData();
      if (data === undefined) return;

      setMarkerData(data.data);
    })();
  }, []);

  return (
    <Card className={styles.data_card}>
      {markerData === null ? (
        <p>取得中...</p>
      ) : (
        <MarkerDataComponent markerData={markerData} />
      )}
    </Card>
  );
}

function MarkerDataComponent({ markerData }: { markerData: MarkerData }) {
  const date = new Date(markerData.updateAt);
  const dateStr = getDateStr(date);

  return (
    <>
      <h3>登録情報</h3>
      <div className={styles.box}>
        <p>登録数: {markerData.num}城</p>
        <p>最終更新: {dateStr}</p>
      </div>
    </>
  );
}
