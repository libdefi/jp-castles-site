import { CastleMarkerRes } from "@/types/response";
import axios from "axios";
import { LatLngBounds } from "leaflet";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

/**
 * @description GETリクエストを送信する
 * @param path リクエストパス
 * @returns {Promise<T | undefined>} レスポンスデータ
 */
export const commonGetFetch = async <T>(
  path: string,
): Promise<T | undefined> => {
  const url = new URL(path, BASE_URL).href;

  return axios
    .get(path)
    .then((res) => {
      return res.data as T;
    })
    .catch((err) => {
      console.error(err);
      return undefined;
    });
};

/**
 * @description マーカー情報を取得する
 * @param range 緯度経度の範囲
 * @returns {Promise<CastleMarker[] | undefined>} マーカー情報
 */
export async function fetchCastleMarkers(
  bounds: LatLngBounds,
  scale: number,
): Promise<CastleMarkerRes | undefined> {
  const n = bounds.getNorth();
  const e = bounds.getEast();
  const s = bounds.getSouth();
  const w = bounds.getWest();

  const url = new URL("markers", BASE_URL);
  url.searchParams.set("latMin", String(s));
  url.searchParams.set("latMax", String(n));
  url.searchParams.set("lngMin", String(w));
  url.searchParams.set("lngMax", String(e));
  url.searchParams.set("scale", String(scale));

  return commonGetFetch<CastleMarkerRes>(url.toString());
}
