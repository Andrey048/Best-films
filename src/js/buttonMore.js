import {getFilms} from '../js/api.js';
import {renderItems} from '../js/itemsFilms.js';
import {toggleLoader} from '../js/util.js';

const buttonMore = document.querySelector(".main-box__btn");

let numberDownload = 0;

buttonMore.addEventListener("click", () => {
	numberDownload++;

	getFilms(cbOnSuccesMore, numberDownload);

	function cbOnSuccesMore(films) {
		renderItems(films);
	}
})