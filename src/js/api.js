import {toggleLoader} from './util.js';



let downloadPage = 1;

export async function getFilms(onSucces) {
    toggleLoader();
    
    const URL = `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?page=${downloadPage}`;
    const requestHeaders = new Headers({
        "accept": "application/json",
        "X-API-KEY": "07a46248-65ff-49d8-a29a-357fc89d387e",
    });

    try {
        const request = await fetch(URL, {
            headers: requestHeaders,
        });

        const dataFilms = await request.json();

        onSucces(dataFilms.films);
        downloadPage++;
    } catch(err) {
        alert(err);
    }

    toggleLoader();
}
