import styles from "./Genre.module.scss";
import { GENRE_LINKS } from "@/const/links";

export default function Genre() {
  return (
    <section className={styles.genrelinks}>
      <h2>ジャンル別リンク</h2>

      <div className={styles.container}>
        {GENRE_LINKS.map((genre) => (
          <div key={genre.name} className={styles.genre}>
            <a href={`/genre/${genre.link}`}>{genre.name}</a>
          </div>
        ))}
      </div>
    </section>
  );
}
