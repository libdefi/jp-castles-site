import { MARKERS } from '@/const/marker';
import { scaleToMarker } from '@/const/scale';
import { CastleMarker, Coordinates, EditMarker } from '@/types/map';
import { StaticImageData } from 'next/image';
import { useEffect } from 'react';
import { atom, useRecoilState, useRecoilValue } from 'recoil';
import { recoilKeyHashSet } from './keys';

const editMarker = atom<EditMarker>({
  key: recoilKeyHashSet.editMarker,
  default: {
    id: null,
    name: '',
    coordinates: {
      lat: 0,
      lng: 0,
    },
    img: MARKERS[0].img,
    scale: 1,
  },
});

/**
 * @description 編集中のマーカーの状態を取得する
 * @returns 編集中のマーカーの状態
 */
export function useEditMarkerState() {
  return useRecoilValue(editMarker);
}

/**
 * @description 編集中のマーカーの状態を更新する
 * @returns 編集中のマーカーの状態を更新する関数
 */
export function useEditMarkerMutators() {
  const [editMarkerState, setEditMarkerState] = useRecoilState(editMarker);

  /**
   * @description マーカーのIDを更新する
   * @param id 更新するID
   */
  function setId(id: string | null) {
    setEditMarkerState((prev) => ({ ...prev, id }));
  }

  /**
   * @description マーカーの名前を更新する
   * @param name 更新する名前
   */
  function setName(name: string) {
    setEditMarkerState((prev) => ({ ...prev, name }));
  }

  /**
   * @description マーカーの座標を更新する
   * @param coordinates 更新する座標
   */
  function setCoordinates(coordinates: Coordinates) {
    setEditMarkerState((prev) => ({
      ...prev,
      coordinates,
    }));
  }

  /**
   * @description マーカーのスケールを更新する
   * @param img 更新するスケール
   */
  function setScale(scale: number) {
    setEditMarkerState((prev) => ({ ...prev, scale }));
  }

  /**
   * @description マーカーの画像を更新する
   * @param img 更新する画像
   */
  function setImg(img: StaticImageData) {
    setEditMarkerState((prev) => ({ ...prev, img }));
  }

  /**
   * @description マーカーを更新する
   * @param marker 更新するマーカー
   */
  function setMarker(marker: CastleMarker) {
    setEditMarkerState((v) => ({ ...v, ...marker }));
  }

  useEffect(() => {
    const img = scaleToMarker(editMarkerState.scale).img;
    setImg(img);
  }, [editMarkerState.scale]);

  return { setId, setName, setCoordinates, setScale, setMarker };
}
