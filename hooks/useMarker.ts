import { fetchCastleMarkers } from "@/components/api/castle";
import { DEFAULT_ZOOM, ZOOM_TO_SCALE_MAP, scaleToMarker } from "@/const/scale";
import { CastleMarker, Coordinates, CoordinatesRange } from "@/types/map";
import { useEffect, useState } from "react";

type UseMarker = [
  CastleMarker[],
  {
    setCenter: (center: Coordinates) => void;
    setZoom: (zoom: number) => void;
  }
];

export default function useMarker(initCenter: Coordinates): UseMarker {
  const [markers, setMarkers] = useState<CastleMarker[]>([]);
  const [center, setCenter] = useState<Coordinates>(initCenter);
  const [zoom, setZoom] = useState<number>(DEFAULT_ZOOM);

  useEffect(() => {
    (async () => {
      const range: CoordinatesRange = {
        lat: [center.lat - 0.1, center.lat + 0.1],
        lng: [center.lng - 0.1, center.lng + 0.1],
      };
      const scale = ZOOM_TO_SCALE_MAP[zoom] || 1;
      const markerSnap = await fetchCastleMarkers(range, scale);
      if (!markerSnap) return;

      const markers: CastleMarker[] = markerSnap.markers.map((m) => ({
        id: m.id,
        name: m.name,
        coordinates: m.coordinates,
        img: scaleToMarker(m.scale).img,
      }));

      setMarkers(markers);
    })();
  }, [center, zoom]);

  return [markers, { setCenter, setZoom }];
}
