// Wait for the page to load completely
window.addEventListener('load', function() {
	// Hide the preloader and display the content after 3 seconds
	setTimeout(function() {
	  var preloader = document.getElementById('preloader');
	  var content = document.getElementById('content');
	  preloader.style.display = 'none';
	  content.style.display = 'block';
	}, 2000); // 3000 milliseconds = 3 seconds
  });
  


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


// Function to scroll to the top of the page
function backToTop() {
	window.scrollTo({
	  top: 0,
	  behavior: 'smooth' // Smooth scrolling
	});
  }
  
  // Show the "back to top" button when scrolling down
  window.addEventListener('scroll', function() {
	var button = document.getElementById('back-to-top');
	if (window.scrollY > 100) {
	  button.style.display = 'block';
	} else {
	  button.style.display = 'none';
	}
  });
  
  