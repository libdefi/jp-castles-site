import Card from '@/components/share/card/Card';
import styles from './index.module.scss';
import { SCALE_MAP, scaleToMarker } from '@/const/scale';

export default function AboutIcons() {
  return (
    <Card className={styles.about_icon}>
      <h3>アイコンについて</h3>

      <div className={styles.box}>
        {SCALE_MAP.map((item) => (
          <div className={styles.icon_box} key={item.scale}>
            <img src={scaleToMarker(item.scale).img.src} alt="城アイコン" />
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
