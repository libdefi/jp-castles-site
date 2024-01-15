import styles from "./Ranking.module.scss";

export default function Ranking() {
  return (
    <section className={styles.rankings}>
      <h2>閲覧数ランキング</h2>

      <div className={styles.container}>
        <div className={styles.ranking}>
          <h3>昨日</h3>
          <ol>
            <li>
              <a href="/castle/1">大阪城</a>
            </li>
            <li>
              <a href="/castle/2">姫路城</a>
            </li>
            <li>
              <a href="/castle/3">松本城</a>
            </li>
            <li>
              <a href="/castle/4">熊本城</a>
            </li>
            <li>
              <a href="/castle/5">名古屋城</a>
            </li>
          </ol>
        </div>

        <div className={styles.ranking}>
          <h3>先月</h3>
          <ol>
            <li>
              <a href="/castle/1">大阪城</a>
            </li>
            <li>
              <a href="/castle/2">姫路城</a>
            </li>
            <li>
              <a href="/castle/3">松本城</a>
            </li>
            <li>
              <a href="/castle/4">熊本城</a>
            </li>
            <li>
              <a href="/castle/5">名古屋城</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
