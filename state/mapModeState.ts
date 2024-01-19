import { atom, useRecoilState, useRecoilValue } from "recoil";
import { recoilKeyHashSet } from "./keys";

const mapMode = atom<"edit" | "view">({
  key: recoilKeyHashSet.mapMode,
  default: "view",
});

/**
 * @description マップのモードを取得する
 * @returns　マップのモード
 */
export function useMapModeState() {
  return useRecoilValue(mapMode);
}

/**
 * @description マップのモードを更新する
 * @returns マップのモードを更新する関数
 */
export function useMapModeMutators() {
  const [_mapModeState, setMapModeState] = useRecoilState(mapMode);

  return { setMapModeState };
}
