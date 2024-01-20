"use client";

import { MARKER_EDIT } from "@/const/marker";
import { useEditMarkerMutators } from "@/state/editMarkerState";
import { useMapModeState } from "@/state/mapModeState";
import { CastleMarker } from "@/types/map";
import { LeafletEventHandlerFnMap, icon } from "leaflet";
import { Marker, Popup } from "react-leaflet";
import styles from "./Markers.module.scss";

type Props = {
  marker: CastleMarker;
};

export default function EditMarker(props: Props) {
  const { marker } = props;

  const { setCoordinates } = useEditMarkerMutators();
  const mode = useMapModeState();
  const markerIcon = icon({
    iconUrl: MARKER_EDIT.img.src,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -40],
  });

  const eventHandlers: LeafletEventHandlerFnMap = {
    dragend: (e) => {
      const res = confirm("城の位置情報を変更します。");
      if (res) setCoordinates(e.target.getLatLng());
    },
  };

  return (
    <Marker
      position={marker.coordinates}
      icon={markerIcon}
      eventHandlers={eventHandlers}
      draggable
    >
      <Popup className={styles.popup}>
        <a
          className={styles.link}
          href={`/castle/${marker.id}`}
          target="_blank"
          rel="noreferrer"
        >
          {marker.name}
        </a>
      </Popup>
    </Marker>
  );
}
