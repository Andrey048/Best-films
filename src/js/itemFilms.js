function renderItems(items) {
    const itemTemplate = document.querySelector("#template-film-item").content;
    const itemsWrapper = document.querySelector(".wrapper-items__body");

    const wrapperFragment = new DocumentFragment();

    items.forEach(item => {
        const currentItem = itemTemplate.cloneNode(true);

        currentItem.querySelector(".item-film__img").src = item.posterUrlPreview;
        currentItem.querySelector(".item-film__title").textContent = item.nameRu;

        wrapperFragment.append(currentItem);
    })

    itemsWrapper.append(wrapperFragment)
}

export { renderItems };