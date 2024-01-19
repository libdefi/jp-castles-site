import { CastleMarker } from "@/types/map";

/**
 * @description マーカーのIDを取得する
 * @param marker マーカー
 * @returns マーカーのID
 */
export default function getId(marker: CastleMarker): string {
  return `${marker.name}_${marker.coordinates.lat}_${marker.coordinates.lng}`;
}
