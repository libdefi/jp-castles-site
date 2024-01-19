"use client";

import { MARKER_SELECT_COLOR } from "@/const/marker";
import { useEditMarkerMutators } from "@/state/editMarkerState";
import { useMapModeState } from "@/state/mapModeState";
import { CastleMarker } from "@/types/map";
import { icon } from "leaflet";
import { Marker, Popup } from "react-leaflet";
import { Edit } from "../icons/Icons";
import styles from "./Markers.module.scss";

type Props = {
  marker: CastleMarker;
  isSelected: boolean;
};

export default function Markers(props: Props) {
  const { marker, isSelected } = props;

  const { setName, setCoordinates, setImg } = useEditMarkerMutators();
  const mode = useMapModeState();

  const markerIcon = icon({
    iconUrl: isSelected ? MARKER_SELECT_COLOR.img.src : marker.img.src,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -40],
  });

  function selectEditMarker() {
    if (mode !== "edit") return;

    setName(marker.name);
    setCoordinates(marker.coordinates);
    setImg(marker.img);
  }

  return (
    <Marker position={marker.coordinates} icon={markerIcon}>
      <Popup className={styles.popup}>
        <a
          className={styles.link}
          href={`/castle/${marker.id}`}
          target="_blank"
          rel="noreferrer"
        >
          {marker.name}
        </a>
        {mode === "edit" && (
          <Edit className={styles.edit} onClick={selectEditMarker} />
        )}
      </Popup>
    </Marker>
  );
}
