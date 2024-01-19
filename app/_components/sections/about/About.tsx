import styles from "./About.module.scss";

export default function About() {
  return (
    <section className={styles.about}>
      <h3>Castle Datastore</h3>
      <div>
        <p>Castle Datastore は日本の城の情報をまとめたサイトです。</p>
        <p>城をマップから探すこともできます。</p>
        <p>※ 全ての城が掲載されているわけではありません。</p>
      </div>
    </section>
  );
}
