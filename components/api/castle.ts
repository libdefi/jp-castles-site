import { CastleMarker, CoordinatesRange } from "@/types/map";
import { CastleMarkerRes } from "@/types/response";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

/**
 * @description GETリクエストを送信する
 * @param path リクエストパス
 * @returns {Promise<T | undefined>} レスポンスデータ
 */
export const commonGetFetch = async <T>(
  path: string
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
  range: CoordinatesRange,
  scale: number
): Promise<CastleMarkerRes | undefined> {
  const url = new URL("markers", BASE_URL);
  url.searchParams.set("latMin", String(range.lat[0]));
  url.searchParams.set("latMax", String(range.lat[1]));
  url.searchParams.set("lngMin", String(range.lng[0]));
  url.searchParams.set("lngMax", String(range.lng[1]));
  url.searchParams.set("scale", String(scale));

  return commonGetFetch<CastleMarkerRes>(url.toString());
}
