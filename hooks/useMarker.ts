import { fetchCastleMarkers } from "@/components/api/castle";
import { DEFAULT_ZOOM, ZOOM_TO_SCALE_MAP, scaleToMarker } from "@/const/scale";
import { CastleMarker, Coordinates, CoordinatesRange } from "@/types/map";
import { LatLng, LatLngBounds, latLngBounds } from "leaflet";
import { useEffect, useState } from "react";

type UseMarker = [
  CastleMarker[],
  {
    setZoom: (zoom: number) => void;
    setBounds: (bounds: LatLngBounds) => void;
  }
];

export default function useMarker(): UseMarker {
  const [markers, setMarkers] = useState<CastleMarker[]>([]);
  const [zoom, setZoom] = useState<number>(DEFAULT_ZOOM);
  const [bounds, setBounds] = useState<LatLngBounds>();

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
      }));

      setMarkers(markers);
    })();
  }, [zoom, bounds]);

  return [markers, { setZoom, setBounds }];
}
