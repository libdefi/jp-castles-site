"use client";

import { useState } from "react";
import styles from "./CastleCard.module.scss";
import { Castle } from "@/types/castle";
import { ArrowDown } from "../../icons/Icons";
import CategoryIcon from "../categoryIcon/CategoryIcon";

type Props = {
  castle: Castle;
  canClose?: boolean;
  closed?: boolean;
};

export default function CastleCard(props: Props) {
  const [closed, setClosed] = useState(props.closed || false);

  function toggle() {
    setClosed((prev) => !prev);
  }

  const { castle, canClose } = props;

  return (
    <div key={castle.name} className={styles.card}>
      <ArrowDown
        className={`${styles.arrow} ${canClose && styles.canclose} ${
          closed && styles.closed
        }`}
        onClick={toggle}
      />

      <div className={styles.head}>
        <h3>
          <a href={`/castle/${castle.id}`}>{castle.name}</a>
        </h3>

        {castle.categories?.map((cate) => (
          <CategoryIcon key={cate} category={cate} />
        ))}
      </div>

      <div className={`${styles.info} ${closed && styles.closed}`}>
        <p>
          {"遺構: "}
          {castle.remains?.join(", ")}
        </p>
        <p>
          {"復元: "}
          {castle.restorations?.join(", ")}
        </p>
        <p>
          {"住所: "}
          {castle.place.pref.name}
          {castle.place.city.name}
          {castle.place.address}
        </p>
      </div>
    </div>
  );
}
