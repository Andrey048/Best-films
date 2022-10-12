import {getFilms} from './api.js';
import {renderItems} from './itemsFilms.js';
import { setClickBtnMore } from './buttonMore.js';



showFilms();

setClickBtnMore(showFilms);

function showFilms() {
	return getFilms(renderItems);
}