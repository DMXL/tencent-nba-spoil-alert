import '../less/game.less';
const {addShowResultButton} = require('./utils');

const header = $('#head-box > .inner');
const datetime = header.find('.info > .inner > .vip-datetime-wrap');

addShowResultButton(datetime, () => header.find('.info > .inner').addClass('show'), 'div');

const observer = new MutationObserver(() => {
	const inner = $('#head-box > .inner > .info > .inner');
	const wrap = header.children('.vip-datetime-wrap');

	addShowResultButton(wrap, () => inner.addClass('show'), 'div');
});

const target = header[0];

observer.observe(target, {
	subtree: true,
	attributes: true,
	childList: true,
	characterData: true,
});
