import {getFilms} from '../js/api.js';
import {renderItems} from '../js/itemsFilms.js';
import '../js/buttonMore.js';

getFilms(cbOnSuccesMainDownload, 0)

function cbOnSuccesMainDownload(films) {
	renderItems(films);
}
