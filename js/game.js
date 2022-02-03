import "../less/game.less";

const header = $("#head-box > .inner.nba > .info > .inner");
const datetime = header.children(".vip-datetime-wrap");

if (!datetime.find(".spoil-alert-show").length) {
  datetime.append('<div class="spoil-alert-show">显示比分</div>');

  const showResultButton = datetime.children(".spoil-alert-show");
  showResultButton.on("click", (e) => {
    e.stopPropagation();
    header.addClass("show");
  });
}
