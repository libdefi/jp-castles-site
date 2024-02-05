'use client';

import { MARKER_EDIT } from '@/const/marker';
import { useEditMarkerMutators } from '@/state/editMarkerState';
import { EditMarker as EditMarkerT } from '@/types/map';
import { LeafletEventHandlerFnMap, icon } from 'leaflet';
import { Marker, Popup } from 'react-leaflet';
import styles from './Markers.module.scss';

type Props = {
  marker: EditMarkerT;
};

export default function EditMarker(props: Props) {
  const { marker } = props;

  const { setCoordinates } = useEditMarkerMutators();
  const markerIcon = icon({
    iconUrl: MARKER_EDIT.img.src,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -40],
  });

  const eventHandlers: LeafletEventHandlerFnMap = {
    dragend: (e) => setCoordinates(e.target.getLatLng()),
  };

  return (
    <Marker
      position={marker.coordinates}
      icon={markerIcon}
      eventHandlers={eventHandlers}
      draggable
    >
      <Popup className={styles.popup}>
        <p className={styles.link}>{marker.name}</p>
      </Popup>
    </Marker>
  );
}
