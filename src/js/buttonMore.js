export function setClickBtnMore(cb) {
	const buttonMore = document.querySelector(".main-box__btn");

	buttonMore.addEventListener('click', evt => {
		evt.preventDefault();

		cb();
	})

	buttonMore.onclick = function(evt) {
		evt.preventDefault();

		cb();
	}
}