'use client';

import { MARKER_SELECT } from '@/const/marker';
import {
  useEditMarkerMutators,
  useEditMarkerState,
} from '@/state/editMarkerState';
import { useMapModeState } from '@/state/mapModeState';
import { useSelectMarkerIdState } from '@/state/selectMarkerIdState';
import { CastleMarker } from '@/types/map';
import { icon } from 'leaflet';
import { Marker, Popup } from 'react-leaflet';
import { Edit } from '../icons/Icons';
import styles from './Markers.module.scss';

type Props = {
  marker: CastleMarker;
  isEdited: boolean;
};

export default function Markers(props: Props) {
  const { marker } = props;

  const { setMarker } = useEditMarkerMutators();
  const selectMarkerId = useSelectMarkerIdState();
  const editMarker = useEditMarkerState();
  const mode = useMapModeState();

  const isSelected = marker.id === selectMarkerId;
  const markerIcon = icon({
    iconUrl: isSelected ? MARKER_SELECT.img.src : marker.img.src,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -40],
  });

  function selectEditMarker() {
    if (mode === 'edit') setMarker(marker);
  }

  return (
    <>
      {marker.id === editMarker.id ? (
        <></>
      ) : (
        <Marker position={marker.coordinates} icon={markerIcon}>
          <Popup className={styles.popup}>
            <p className={styles.link}>{marker.name}</p>
            {mode === 'edit' && (
              <Edit className={styles.edit} onClick={selectEditMarker} />
            )}
          </Popup>
        </Marker>
      )}
    </>
  );
}
