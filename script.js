function toggleLoader() {
    const loader = document.querySelector(".wrapper-items__loader");

    loader.classList.toggle("hidden");
}

let currentNumberPage = 0;

function getFilms() {
    toggleLoader();

    const URL = `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?page=${currentNumberPage + 1}`;
    const requestHeaders = new Headers({
        "accept": "application/json",
        "X-API-KEY": "07a46248-65ff-49d8-a29a-357fc89d387e",
    });

    return fetch(URL, {
        headers: requestHeaders,
    });

}

const request = getFilms();

function requestProcessor(requestPromise) {
    requestPromise
    .then(result => result.json())
    .then(data => {
        currentNumberPage ++;

        renderItems(data.films);
    })
    .catch(error => {
        alert(error);
    })
    .finally(() => {
        toggleLoader();
    })
}

function renderItems(arrowFilmsData) {
    const templateFilmItem = document.querySelector("#template-film-item").content;
    const filmItemsWrapper = document.querySelector(".wrapper-items__body");

    const fragment = new DocumentFragment();

    arrowFilmsData.forEach(itemFilmData => {
        const currentFilmElement = templateFilmItem.cloneNode(true);

        currentFilmElement.querySelector(".item-film__img").src = itemFilmData.posterUrlPreview;
        currentFilmElement.querySelector(".item-film__title").textContent = itemFilmData.nameRu;

        fragment.append(currentFilmElement);
    })

    filmItemsWrapper.append(fragment)
}

requestProcessor(request);

const buttonMore = document.querySelector(".main-box__btn");

buttonMore.addEventListener("click", () => {
    const newRequest = getFilms();

    requestProcessor(newRequest);
})
