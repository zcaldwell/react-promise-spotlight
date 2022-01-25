/**
 * TODO: Get data from https://ponball.herokuapp.com/api/v1/machines
 */
export async function getPinballMachines() {
  const resp = await fetch(`https://ponball.herokuapp.com/api/v1/machines`);
  const data = await resp.json();
  return console.log(data);
}

/**
 * TODO:
 */

export const getMachines = () => {
  const response = fetch('https://ponball.herokuapp.com/api/v1/machines').then(
    (data) => data.json().then((machines) => console.log(machines))
  );
  return response;
};
/**
 * TODO:
 */
export async function getAnime() {
  const resp = await fetch(
    'https://api.jikan.moe/v4/anime?q=yu yu hakusho&sfw'
  );
  const data = await resp.json();
  return console.log(data);
}

/**
 * TODO:
 */
export const getAnimeInfo = () => {
  const response = fetch(
    'https://api.jikan.moe/v4/anime?q=yu yu hakusho&sfw'
  ).then((data) => data.json().then((anime) => console.log(anime)));
  return response;
};
/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */
