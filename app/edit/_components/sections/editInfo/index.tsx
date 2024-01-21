import {
  fetchCreateCastleMarker,
  fetchUpdateCastleMarker,
} from '@/components/api/marker';
import Button from '@/components/share/button/Button';
import Input from '@/components/share/input/Input';
import {
  useEditMarkerMutators,
  useEditMarkerState,
} from '@/state/editMarkerState';
import { CastleMarkerRes, CastleMarkersRes } from '@/types/response';
import { LatLng } from 'leaflet';
import styles from './index.module.scss';

const SCALE_MAP = [
  {
    scale: 6,
    label: '百名城',
  },
  {
    scale: 5,
    label: '続百名城',
  },
  {
    scale: 4,
    label: '特別史跡・国指定史跡',
  },
  {
    scale: 3,
    label: '村指定史跡',
  },
  {
    scale: 2,
    label: '遺構あり',
  },
  {
    scale: 1,
    label: 'その他',
  },
];

export default function EditInfo() {
  const { setId, setName, setScale, setCoordinates } = useEditMarkerMutators();
  const editMarker = useEditMarkerState();

  function handlerScaleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setScale(Number(e.target.value));
  }

  async function submit() {
    const res = confirm('送信します。');
    if (!res) return;

    let markerRes: CastleMarkerRes | CastleMarkersRes | undefined;
    const isNew = editMarker.id?.startsWith('new');
    if (isNew) markerRes = await fetchCreateCastleMarker(editMarker);
    else markerRes = await fetchUpdateCastleMarker(editMarker);

    if (markerRes === undefined) {
      alert('送信に失敗しました。');
      return;
    }

    alert('送信しました。');
    setId(null);
  }

  function cancel() {
    const res = confirm('選択を解除します');
    if (res) setId(null);
  }

  return (
    <div className={styles.edit_info}>
      {editMarker.id === null ? (
        <div className={styles.container}>選択してください</div>
      ) : (
        <div className={styles.container}>
          <div className={styles.box}>
            <h3>城名</h3>
            <Input
              type="text"
              value={editMarker.name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
          </div>

          <div className={styles.box}>
            <h3>スケール</h3>
            <select
              className={styles.select}
              onChange={handlerScaleChange}
              defaultValue={editMarker.scale}
            >
              {SCALE_MAP.map((item) => (
                <option value={item.scale} key={item.scale}>
                  {item.label}
                </option>
              ))}
            </select>

            <div className={styles.icon_box}>
              <img src={editMarker.img.src} alt="城アイコン" />
            </div>
          </div>

          <div className={styles.box}>
            <h3>位置</h3>
            <p>
              <span>緯度:</span>
              <Input
                type="number"
                value={editMarker.coordinates.lat}
                onChange={(e) => {
                  const lat = parseFloat(e.currentTarget.value);
                  const latlng = new LatLng(lat, editMarker.coordinates.lng);
                  setCoordinates(latlng);
                }}
              />
            </p>
            <p>
              <span>経度:</span>
              <Input
                type="number"
                value={editMarker.coordinates.lng}
                onChange={(e) => {
                  const lng = parseFloat(e.currentTarget.value);
                  const latlng = new LatLng(editMarker.coordinates.lat, lng);
                  setCoordinates(latlng);
                }}
              />
            </p>
            <p className={styles.desc}>マーカーを移動させても変更できます。</p>
          </div>

          <div className={styles.button_box}>
            <Button outline onClick={cancel}>
              選択解除
            </Button>
            <Button onClick={submit} className={styles.submit}>
              送信
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
