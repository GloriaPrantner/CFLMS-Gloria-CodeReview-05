
var movies = JSON.parse(movies);

$(document).ready(function(){

	// Creating movie boxes in html and a random number of likes
	for(let i = 0; i < movies.length; i++) {
		var name = movies[i].name;
		var img = movies[i].img;
		var text = movies[i].text;
		let rnd = Math.floor(Math.random()*100)+1;

		$("#filmlist").append(`
			<div class="filmcontainer" id="film${i}"> 
				<img src="${img}">
				<div class="description">
					<h2>${name}</h2>
					<p>${text}</p>
					<a href="javascript:void(0)" class="like-button bouncy">
						<i class="material-icons not-liked bouncy">favorite_border</i>
						<i class="material-icons is-liked bouncy">favorite</i>
	    			<span class="like-overlay"></span>
	    			</a>
	    			<div class="counter bouncy">
	    				<p class="countNum">${rnd}</p>
	    			</div>
				</div
			</div>
		`);
	};


	// onclick like event 
	$(".like-button").click(function(){
			console.log("bruh")
			$(this).toggleClass("is-active");

			var sibling = $(this).siblings(".counter").children("p");
			if ($(this).hasClass("is-active")) {
				var counter = parseInt($(sibling).html()) + 1;
			}
			else {
				var counter = parseInt($(sibling).html()) - 1;
			};

			$(sibling).text(counter);
		});

	// onclick sort event
	$("#sorting").click(function () {
		let likeSort = $(".filmcontainer").sort(function compare(a, b){

			return $(b).find(".countNum").text() - $(a).find(".countNum").text()
		});
		$("#filmlist").html(likeSort);
	});

})