export function setClickBtnMore(cb) {
	const buttonMore = document.querySelector(".main-box__btn");
	let downloadPage = 1;

	buttonMore.onclick = function(evt) {
		evt.preventDefault();

		downloadPage ++;
		cb(downloadPage);
	}
}