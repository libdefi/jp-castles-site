import { MARKERS } from './marker';

type ZoomToScaleMap = {
  [key: number]: number;
};

/**
 * zoomレベルと表示するスケールの対応表
 */
export const ZOOM_TO_SCALE_MAP: ZoomToScaleMap = {
  7: 5,
  8: 5,
  9: 4,
  10: 3,
  11: 2,
  12: 2,
  13: 1,
  14: 1,
  15: 1,
  16: 1,
  17: 1,
};

/**
 * 最大ズームレベル
 */
export const ZOOM_MAX = Math.max(...Object.keys(ZOOM_TO_SCALE_MAP).map(Number));

/**
 * 最小ズームレベル
 */
export const ZOOM_MIN = Math.min(...Object.keys(ZOOM_TO_SCALE_MAP).map(Number));

/**
 * デフォルトズームレベル
 */
export const DEFAULT_ZOOM = 14;

/**
 * スケールからマーカーを取得する
 * @param scale スケール
 * @returns マーカー
 */
export function scaleToMarker(scale: number) {
  const len = MARKERS.length;
  const i = scale - 1 < len ? scale - 1 : len - 1;
  return MARKERS[i];
}

/**
 * スケールとラベル
 */
export const SCALE_MAP = [
  {
    scale: 6,
    label: '百名城',
  },
  {
    scale: 5,
    label: '続百名城',
  },
  {
    scale: 4,
    label: '特別・国指定史跡',
  },
  {
    scale: 3,
    label: '市町村指定史跡',
  },
  {
    scale: 2,
    label: '遺構あり',
  },
  {
    scale: 1,
    label: 'その他',
  },
];