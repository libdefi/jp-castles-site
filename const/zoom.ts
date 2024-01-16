type ZoomLevelMap = {
  [key: number]: number;
};

/**
 * zoomレベルと表示するスケールの対応表
 */
export const ZOOM_LEVEL_MAP: ZoomLevelMap = {
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

/**
 * 最大ズームレベル
 */
export const ZOOM_MAX = Math.max(...Object.keys(ZOOM_LEVEL_MAP).map(Number));

/**
 * 最小ズームレベル
 */
export const ZOOM_MIN = Math.min(...Object.keys(ZOOM_LEVEL_MAP).map(Number));

export const DEFAULT_ZOOM = 14;
