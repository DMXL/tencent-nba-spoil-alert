import '../less/schedule.less';

const observer = new MutationObserver(() => {
	$(
		'.stream > .item > .list-time > .row.left-win > .goal, .stream > .item > .list-time > .row.right-win > .goal',
	).each(function () {
		if (!$(this).find('.spoil-alert-show').length) {
			$(this).append('<span class="spoil-alert-show">显示比分</span>');

			const showResultButton = $(this).find('.spoil-alert-show');
			showResultButton.on('click', e => {
				e.stopPropagation();
				$(this).addClass('show');
			});
		}
	});
});

const target = $('.stream')[0];

observer.observe(target, {
	attributes: true,
	childList: true,
	characterData: true,
});
