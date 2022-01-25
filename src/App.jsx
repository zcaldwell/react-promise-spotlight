import { useEffect } from 'react';
import {
  getMachines,
  getPinballMachines,
  getAnime,
  getAnimeInfo,
} from './services/promise-me';

export default function App() {
  useEffect(() => {
    getMachines();
  });

  useEffect(() => {
    getAnime();
  });
  return <h1>Hello World</h1>;
}
console.log(getPinballMachines());
console.log(getAnimeInfo);
