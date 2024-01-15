import { CastleMarker } from "@/types/map";
import About from "./_components/sections/about/About";
import Genre from "./_components/sections/genre/Genre";
import Preflinks from "./_components/sections/preflinks/Preflinks";
import Ranking from "./_components/sections/ranking/Ranking";
import styles from "./page.module.scss";
import Map from "@/components/map/Map";

const sample_data: CastleMarker[] = [
  {
    id: 1,
    name: "名古屋城",
    coordinates: {
      lat: 35.1855,
      lng: 136.89939,
    },
    color: "red",
  },
  {
    id: 2,
    name: "大阪城",
    coordinates: {
      lat: 34.687315,
      lng: 135.526201,
    },
  },
  {
    id: 3,
    name: "姫路城",
    coordinates: {
      lat: 34.839722,
      lng: 134.693889,
    },
  },
  {
    id: 4,
    name: "松本城",
    coordinates: {
      lat: 36.238056,
      lng: 137.968056,
    },
  },
  {
    id: 5,
    name: "熊本城",
    coordinates: {
      lat: 32.808056,
      lng: 130.7075,
    },
  },
];

export default function Page() {
  return (
    <main className={styles.main}>
      <About />
      <Preflinks />
      <Ranking />
      <Genre />
      <Map className={styles.map} markers={sample_data} />
    </main>
  );
}
