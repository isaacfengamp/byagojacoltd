const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});
(function(){
	$('.flex-container-mission').waitForImages(function() {
		$('.spinner-mission').fadeOut();
	}, $.noop, true);
	
	$(".flex-slide-mission").each(function(){
		$(this).hover(function(){
			$(this).find('.flex-title-mission').css({
				transform: 'rotate(0deg)',
				top: '10%'
			});
			$(this).find('.flex-about-mission').css({
				opacity: '1'
			});
		}, function(){
			$(this).find('.flex-title-mission').css({
				transform: 'rotate(90deg)',
				top: '15%'
			});
			$(this).find('.flex-about-mission').css({
				opacity: '0'
			});
		})
	});
})();