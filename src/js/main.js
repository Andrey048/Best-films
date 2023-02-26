import {getFilms} from './api.js';
import {renderItems} from './itemsFilms.js';
import { setClickBtnMore } from './buttonMore.js';
import {toggleLoader} from './util.js';

showFilms();
setClickBtnMore(showFilms);

function showFilms(numberPage = 1) {
	toggleLoader();
	const filmsRequest = getFilms(numberPage);

	filmsRequest.then(films => {
		renderItems(films)
		toggleLoader();
	});
}