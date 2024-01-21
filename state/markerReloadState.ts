import { atom, useRecoilState, useRecoilValue } from 'recoil';
import { recoilKeyHashSet } from './keys';

const markerReload = atom<boolean>({
  key: recoilKeyHashSet.markerReload,
  default: true,
});

/**
 * @description マーカーのリロードフラグを取得する
 * @returns マーカーのリロードフラグ
 */
export function useMarkerReloadState() {
  return useRecoilValue(markerReload);
}

/**
 * @description マーカーのリロードフラグを更新する関数を取得する
 * @returns マーカーのリロードフラグを更新する関数
 */
export function useMarkerReloadMutators() {
  const [_, setReloadFlag] = useRecoilState(markerReload);

  return { setReloadFlag };
}
