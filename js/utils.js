const addShowResultButton = ({
	container,
	onClick,
	tag = 'span',
	buttonText = '显示比分',
}) => {
	if (!container[0]) {
		return false;
	}

	if (!container.find('.spoil-alert-show').length) {
		container.append(`<${tag} class="spoil-alert-show">${buttonText}</${tag}>`);

		const showResultButton = container.find('.spoil-alert-show');
		showResultButton.on('click', e => {
			e.stopPropagation();
			onClick(showResultButton);
		});
	}

	return true;
};

module.exports = {addShowResultButton};
