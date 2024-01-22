import About from './_components/sections/about';
import HowEdit from './_components/sections/howEdit';
import Data from './_components/sections/markerData';
import MiniMap from './_components/sections/miniMap';
import styles from './page.module.scss';

export default function Page() {
  return (
    <main className={styles.main}>
      <About />
      <MiniMap />
      <Data />
      <HowEdit />
    </main>
  );
}
