import {getFilms} from './api.js';
import {renderItems} from './itemsFilms.js';
import { setClickBtnMore } from './buttonMore.js';



showFilms(1);

setClickBtnMore(showFilms);

function showFilms(downloadPage) {
	const promiseFilms = getFilms(downloadPage);
	
	promiseFilms
		.then((films) =>{
			renderItems(films);
		});
}