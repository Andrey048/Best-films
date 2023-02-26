import {toggleLoader} from './util.js';

async function getFilms(numberPage) {
    toggleLoader();
    
    const URL = `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?page=${numberPage}`;
    const requestHeaders = new Headers({
        "accept": "application/json",
        "X-API-KEY": "07a46248-65ff-49d8-a29a-357fc89d387e",
    });

    try {
        const request = await fetch(URL, { headers: requestHeaders });
        const result = await request.json();

        toggleLoader();

        return result.films;
    } catch(err) {
        alert(err);
    }
}

export { getFilms };
