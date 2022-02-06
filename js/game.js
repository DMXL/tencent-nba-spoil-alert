import '../less/game.less';
const {addShowResultButton} = require('./utils');

const header = $('#head-box > .inner');
const datetime = header.find('.info > .inner > .vip-datetime-wrap');

addShowResultButton({
	container: datetime,
	onClick: () => header.find('.info > .inner').addClass('show'),
	tag: 'div',
});

const headerObserver = new MutationObserver((mutations, observer) => {
	const inner = $('#head-box > .inner > .info > .inner');
	const wrap = header.children('.vip-datetime-wrap');

	if (addShowResultButton({
		container: wrap,
		onClick: () => inner.addClass('show'),
		tag: 'div',
	})) {
		observer.disconnect();
	}
});

headerObserver.observe(header[0], {
	subtree: true,
	attributes: true,
	childList: true,
	characterData: true,
});

let i = 1;

const dataObserver = new MutationObserver((mutations, observer) => {
	console.log(`called ${i} time${i > 1 ? 's' : ''}`);
	i += 1;
	const container = $('#data-box .left-data-tabs');

	if (addShowResultButton({
		container,
		onClick: () => container.addClass('show'),
		tag: 'div',
		buttonText: '显示数据',
	})) {
		observer.disconnect();
	}
});

dataObserver.observe($('#container')[0], {
	subtree: true,
	attributes: true,
	childList: true,
	characterData: true,
});

