import { CastleMarker } from "@/types/map";

/**
 * @description マーカーのIDを取得する
 * @param marker マーカー
 * @returns マーカーのID
 */
export default function getId(marker: CastleMarker): string {
  return `${marker.name}_${marker.coordinates.lat}_${marker.coordinates.lng}`;
}

/**
 * @description 日付の文字列を取得する
 * @param d 日付
 * @returns 日付の文字列
 */
export function getDateStr(d: Date): string {
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const date = d.getDate();
  const hours = toDigits(d.getHours(), 2);
  const minuets = toDigits(d.getMinutes(), 2);

  return `${year}年${month}月${date}日 ${hours}時${minuets}分`;
}

/**
 * @description 桁を揃える
 * @param num 数字
 * @param n 桁
 * @returns 桁を揃えた数字
 */
export function toDigits(num: number, n: number): string {
  return `${num}`.padStart(n, "0");
}
