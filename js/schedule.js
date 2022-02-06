import '../less/schedule.less';
const {addShowResultButton} = require('./utils');

const observer = new MutationObserver(() => {
	const rows = $('.stream > .item > .list-time')
		.find('.left-win > .goal, .right-win > .goal');

	$(rows).each(function () {
		addShowResultButton($(this), () => $(this).addClass('show'));
	});
});

const target = $('.stream')[0];

observer.observe(target, {
	attributes: true,
	childList: true,
	characterData: true,
});
