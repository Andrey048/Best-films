import {getFilms} from './api.js';
import {renderItems} from './itemsFilms.js';
import { setClickBtnMore } from './buttonMore.js';

showFilms();
setClickBtnMore(showFilms);

function showFilms(numberPage = 1) {
	const filmsRequest = getFilms(numberPage);

	filmsRequest.then(films => renderItems(films));
}