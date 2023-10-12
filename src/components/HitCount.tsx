import { readFile, writeFile } from "../app/helpers/file-helpers";
const DATA_BASE_PATH = "/src/database.json";

export default function HitCount() {
  let { hits } = JSON.parse(readFile(DATA_BASE_PATH));
  hits += 1;
  writeFile(DATA_BASE_PATH, JSON.stringify({ hits }));
  return hits;
}
