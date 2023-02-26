function setClickBtnMore(cb) {
  const buttonMore = document.querySelector('.main-box__btn');
  let clickCount = 0;

  buttonMore.addEventListener('click', (evt) => {
    evt.preventDefault();

    clickCount += 1;
    cb(clickCount + 1);
  });
}

export default setClickBtnMore;
