import {
  CastleMarker,
  CastleMarkerScale,
  CreateMarker,
  EditMarker,
} from '@/types/map';
import {
  CastleMarkerRes,
  CastleMarkersRes,
  MarkerDataRes,
} from '@/types/response';
import { LatLngBounds } from 'leaflet';
import {
  BASE_URL,
  commonDeleteFetch,
  commonGetFetch,
  commonPostFetch,
  commonPutFetch,
} from './base';

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

export async function fetchCreateCastleMarker(
  marker: EditMarker
): Promise<CastleMarkersRes | undefined> {
  const url = new URL('markers', BASE_URL);
  const markers: CreateMarker[] = [
    {
      name: marker.name,
      coordinates: marker.coordinates,
      scale: marker.scale,
    },
  ];
  return commonPostFetch<CastleMarkersRes, { markers: CreateMarker[] }>(
    url.toString(),
    { markers }
  );
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
    { marker }
  );
}

/**
 * @description マーカーを削除する
 * @param id マーカーID
 * @returns {Promise<string[] | undefined>} マーカー
 */
export async function fetchDeleteCastleMarker(
  id: string
): Promise<{ ids: string[] } | undefined> {
  const url = new URL('markers', BASE_URL);
  return commonDeleteFetch<{ ids: string[] }, { ids: string[] }>(
    url.toString(),
    { ids: [id] }
  );
}
