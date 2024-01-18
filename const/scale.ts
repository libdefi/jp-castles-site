import { MARKER_COLORS } from "./marker";

type ZoomToScaleMap = {
  [key: number]: number;
};

/**
 * zoomレベルと表示するスケールの対応表
 */
export const ZOOM_TO_SCALE_MAP: ZoomToScaleMap = {
  7: 5,
  8: 4,
  9: 3,
  10: 3,
  11: 2,
  12: 2,
  13: 1,
  14: 1,
  15: 1,
  16: 1,
  17: 1,
};

type ScaleToMarker = {
  [key: number]: (typeof MARKER_COLORS)[number];
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
  const len = MARKER_COLORS.length;
  const i = scale - 1 < len ? scale - 1 : len - 1;
  return MARKER_COLORS[i];
}
