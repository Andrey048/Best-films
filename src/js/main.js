import getFilms from './api';
import renderItems from './itemFilms.js';
import setClickBtnMore from './buttonMore.js';
import toggleLoader from './util.js';

function showFilms(numberPage = 1) {
  toggleLoader();
  const filmsRequest = getFilms(numberPage);

  filmsRequest.then((films) => {
    renderItems(films);
    toggleLoader();
  });
}

showFilms();
setClickBtnMore(showFilms);
