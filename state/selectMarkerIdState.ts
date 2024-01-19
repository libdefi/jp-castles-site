import { atom, useRecoilState, useRecoilValue } from "recoil";
import { recoilKeyHashSet } from "./keys";

const selectMarkerId = atom<string>({
  key: recoilKeyHashSet.selectMarkerId,
  default: "",
});

/**
 * @description 選択中のマーカーの状態を取得する
 * @returns 選択中のマーカーの状態
 */
export function useSelectMarkerIdState() {
  return useRecoilValue(selectMarkerId);
}

/**
 * @description 編集中のマーカーの状態を更新する
 * @returns 編集中のマーカーの状態を更新する関数
 */
export function useSelectMarkerIdMutators() {
  const [_selectMarkerIdState, setSelectMarkerIdState] =
    useRecoilState(selectMarkerId);

  return { setSelectMarkerIdState };
}
