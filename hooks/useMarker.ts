import { fetchCastleMarkers } from "@/components/api/castle";
import { DEFAULT_ZOOM, ZOOM_LEVEL_MAP } from "@/const/zoom";
import { CastleMarker, Coordinates, CoordinatesRange } from "@/types/map";
import { LatLng } from "leaflet";
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
        lat: [center.lat - 2, center.lat + 2],
        lng: [center.lng - 2, center.lng + 2],
      };
      const scale = ZOOM_LEVEL_MAP[zoom] || 1;
      const markerSnap = await fetchCastleMarkers(range, scale);
      if (markerSnap) {
        setMarkers(markerSnap.markers);
      }
    })();
  }, [center, zoom]);

  return [markers, { setCenter, setZoom }];
}
