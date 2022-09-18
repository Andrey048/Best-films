export function renderItems(arrowFilmsData) {
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