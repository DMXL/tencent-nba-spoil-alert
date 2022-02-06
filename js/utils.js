const addShowResultButton = (container, onClick, tag = 'span') => {
	if (container[0] && !container.find('.spoil-alert-show').length) {
		container.append(`<${tag} class="spoil-alert-show">显示比分</${tag}>`);

		const showResultButton = container.find('.spoil-alert-show');
		showResultButton.on('click', e => {
			e.stopPropagation();
			onClick(showResultButton);
		});
	}
};

module.exports = {addShowResultButton};
