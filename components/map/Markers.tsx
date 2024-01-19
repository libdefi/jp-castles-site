"use client";

import { MARKER_SELECT_COLOR } from "@/const/marker";
import { CastleMarker } from "@/types/map";
import { icon } from "leaflet";
import { Marker, Popup } from "react-leaflet";

type Props = {
  marker: CastleMarker;
  isSelected: boolean;
};

export default function Markers(props: Props) {
  const { marker, isSelected } = props;

  const markerIcon = icon({
    iconUrl: isSelected ? MARKER_SELECT_COLOR.img.src : marker.img.src,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -40],
  });

  return (
    <Marker position={marker.coordinates} icon={markerIcon}>
      <Popup>
        <a href={`/castle/${marker.id}`}>{marker.name}</a>
      </Popup>
    </Marker>
  );
}
