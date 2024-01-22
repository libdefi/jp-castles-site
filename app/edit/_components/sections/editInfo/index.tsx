import {
  fetchCreateCastleMarker,
  fetchDeleteCastleMarker,
  fetchUpdateCastleMarker,
} from '@/components/api/marker';
import Button from '@/components/share/button/Button';
import Input from '@/components/share/input/Input';
import { SCALE_MAP } from '@/const/scale';
import useMarker from '@/hooks/useMarker';
import {
  useEditMarkerMutators,
  useEditMarkerState,
} from '@/state/editMarkerState';
import { Coordinates } from '@/types/map';
import { CastleMarkerRes, CastleMarkersRes } from '@/types/response';
import styles from './index.module.scss';

export default function EditInfo() {
  const { setName, setScale, setCoordinates, reset } = useEditMarkerMutators();
  const [_, { reload }] = useMarker();
  const editMarker = useEditMarkerState();

  const isNew = editMarker.id?.startsWith('new');

  function handlerScaleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setScale(Number(e.target.value));
  }

  function toLatLng(lat: number, lng: number): Coordinates {
    return { lat, lng };
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
    reset();
    reload();
  }

  async function remove() {
    if (editMarker.id === null) {
      alert('id が指定されていません。');
      return;
    }
    if (isNew) {
      alert('新規作成されたマーカーは削除できません。');
      return;
    }

    const res = confirm('削除します。');
    if (!res) return;

    const idRes = await fetchDeleteCastleMarker(editMarker.id);
    if (idRes === undefined) {
      alert('削除に失敗しました。');
      return;
    }

    alert('削除しました。');
    reset();
  }

  function cancel(isNew = false) {
    const res = isNew
      ? confirm('追加を取り消します')
      : confirm('選択を解除します');
    if (res) reset();
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
              placeholder="城名"
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
                placeholder="緯度"
                onChange={(e) => {
                  const lat = parseFloat(e.currentTarget.value);
                  const latlng = toLatLng(lat, editMarker.coordinates.lng);
                  if (latlng) setCoordinates(latlng);
                }}
              />
            </p>
            <p>
              <span>経度:</span>
              <Input
                type="number"
                value={editMarker.coordinates.lng}
                placeholder="経度"
                onChange={(e) => {
                  const lng = parseFloat(e.currentTarget.value);
                  const latlng = toLatLng(editMarker.coordinates.lat, lng);
                  if (latlng) setCoordinates(latlng);
                }}
              />
            </p>
            <p className={styles.desc}>マーカーを移動させても変更できます。</p>
          </div>

          <div className={styles.button_box}>
            <Button outline onClick={() => cancel(isNew)}>
              {isNew ? '取り消し' : '選択解除'}
            </Button>
            {isNew || (
              <Button danger onClick={remove}>
                削除
              </Button>
            )}
            <Button onClick={submit} className={styles.submit}>
              送信
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
