import {
  CastleMarkerRes,
  CastleMarkersRes,
  MarkerDataRes,
} from '@/types/response';
import { LatLngBounds } from 'leaflet';
import { BASE_URL, commonGetFetch, commonPutFetch } from './base';
import { EditMarker } from '@/types/map';

/**
 * @description マーカーを取得する
 * @param range 緯度経度の範囲
 * @returns {Promise<CastleMarkersRes | undefined>} マーカー
 */
export async function fetchCastleMarkers(
  bounds: LatLngBounds,
  scale: number
): Promise<CastleMarkersRes | undefined> {
  const n = bounds.getNorth();
  const e = bounds.getEast();
  const s = bounds.getSouth();
  const w = bounds.getWest();

  const url = new URL('markers', BASE_URL);
  url.searchParams.set('latMin', String(s));
  url.searchParams.set('latMax', String(n));
  url.searchParams.set('lngMin', String(w));
  url.searchParams.set('lngMax', String(e));
  url.searchParams.set('scale', String(scale));

  return commonGetFetch<CastleMarkersRes>(url.toString());
}

/**
 * @description マーカー情報を取得する
 * @returns {Promise<MarkerDataRes | undefined>} マーカー情報
 */
export async function fetchCastleMarkerData(): Promise<
  MarkerDataRes | undefined
> {
  const url = new URL('markers/data', BASE_URL);

  return commonGetFetch<MarkerDataRes>(url.toString());
}

/**
 * @description マーカーを更新する
 * @param marker マーカー
 * @returns {Promise<CastleMarkerRes | undefined>} マーカー
 */
export async function fetchUpdateCastleMarker(
  marker: EditMarker
): Promise<CastleMarkerRes | undefined> {
  const url = new URL('markers', BASE_URL);
  return commonPutFetch<CastleMarkerRes, { marker: EditMarker }>(
    url.toString(),
    {
      marker,
    }
  );
}
