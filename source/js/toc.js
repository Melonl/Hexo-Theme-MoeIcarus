//check media query
function setUpTocCard() {
	var mq_mobile = window.matchMedia('(min-width: 560px) and (max-width: 799px)');
	var mq_mini = window.matchMedia('(max-width: 559px)');
	var mq_tablet = window.matchMedia('(min-width: 800px) and (max-width: 1199px)');
	if (mq_mini.matches || mq_mobile.matches || mq_tablet.matches) return;

	const toc_card = $(".toc-card");

	toc_card.html($("#toc").html());
	$("#toc").remove();
	toc_card.css("display", "block");

	var art = $(".article-entry");
	var titles = art.children(":header");
	const toc_items = toc_card.find(".toc-item");
	const toc = toc_card.children(".toc");

	var io = new IntersectionObserver(function(entry) {
		//print(entry[0].intersectionRatio);
		var v = $(entry[0].target);

		if (entry[0].intersectionRatio == 1) {
			//print(v.text());
			var flag = false;
			toc.find(".toc-item").each(function(i, e) {
				e = $(e);
				//print(e.children("a").text());
				if (!flag) e.children("a").removeClass("toc-link").addClass("toc-link-visited");
				else e.children("a").removeClass("toc-link-visited").addClass("toc-link");
				if (e.children("a").text().indexOf(v.text()) != -1) flag = true;
			});
		}
	}, {
		threshold: [1]
	});
	for (var i = 0; i < titles.length; ++i)
		io.observe(titles[i]);

	//console.log(titles);

};

$(window).on("load",function(){
	setUpTocCard();
});

function print(s) {
	console.log(s);
}
