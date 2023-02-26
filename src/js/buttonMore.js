function setClickBtnMore(cb) {
	const buttonMore = document.querySelector(".main-box__btn");
	let clickCount = 0;

	buttonMore.onclick = function(evt) {
		evt.preventDefault();

		clickCount ++;
		cb(clickCount + 1);
	}
}

export { setClickBtnMore };