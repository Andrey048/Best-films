import {toggleLoader} from '../js/util.js';

export function getFilms(onSucces, currentNumberPage) {
    toggleLoader();

    const URL = `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?page=${currentNumberPage + 1}`;
    const requestHeaders = new Headers({
        "accept": "application/json",
        "X-API-KEY": "07a46248-65ff-49d8-a29a-357fc89d387e",
    });

    const request = fetch(URL, {
        headers: requestHeaders,
    });

    request
    .then(result => result.json())
    .then(dataFilms => {
      onSucces(dataFilms.films);
    })
    .catch(error => {
      alert(error);
    })
    .finally(() => {
      toggleLoader();
    })
}