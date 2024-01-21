import { fetchCastleMarkers } from '@/components/api/marker';
import { DEFAULT_ZOOM, ZOOM_TO_SCALE_MAP, scaleToMarker } from '@/const/scale';
import { useMarkerReloadMutators, useMarkerReloadState } from '@/state/markerReloadState';
import { CastleMarker } from '@/types/map';
import { LatLngBounds } from 'leaflet';
import { useEffect, useState } from 'react';

type UseMarker = [
  CastleMarker[],
  {
    setZoom: (zoom: number) => void;
    setBounds: (bounds: LatLngBounds) => void;
    reload: () => void;
  }
];

export default function useMarker(): UseMarker {
  const [markers, setMarkers] = useState<CastleMarker[]>([]);
  const [zoom, setZoom] = useState<number>(DEFAULT_ZOOM);
  const [bounds, setBounds] = useState<LatLngBounds>();
  const reloadFlag = useMarkerReloadState();
  const { setReloadFlag } = useMarkerReloadMutators();

  function reload() {
    setReloadFlag((v) => !v);
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (!bounds) return;

    (async () => {
      const scale = ZOOM_TO_SCALE_MAP[zoom] || 1;
      const markerSnap = await fetchCastleMarkers(bounds, scale);
      if (!markerSnap) return;

      const markers: CastleMarker[] = markerSnap.markers.map((m) => ({
        id: m.id,
        name: m.name,
        coordinates: m.coordinates,
        img: scaleToMarker(m.scale).img,
        scale: m.scale,
      }));

      setMarkers(markers);
    })();
  }, [zoom, bounds, reloadFlag]);

  return [markers, { setZoom, setBounds, reload }];
}
