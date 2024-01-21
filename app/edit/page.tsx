'use client';

import CastleMap from '@/components/map';
import { useMapModeMutators } from '@/state/mapModeState';
import { useEffect } from 'react';
import EditInfo from './_components/sections/editInfo';
import styles from './page.module.scss';

export default function Page() {
  const { setMapModeState } = useMapModeMutators();

  useEffect(() => {
    setMapModeState('edit');

    return () => {
      setMapModeState('view');
    };
  }, [setMapModeState]);

  return (
    <main className={styles.edit}>
      <div className={styles.map}>
        <CastleMap />
      </div>
      <EditInfo />
    </main>
  );
}
