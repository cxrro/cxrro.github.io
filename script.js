/*var subtitle = Array();

function randomSub() {
  var randomSub = subtitle[Math.floor(Math.random() * subtitle.length)];
  document.getElementById('randomSubtitle').innerHTML = randomSub;
  console.log("randomSub: " + randomSub);
} */

window.onload = () => {
	const l1 = document.querySelector("#l1");
	l1.setAttribute("data-content", "<h1>about</h1>hi! i'm carolyn and i'm a junior at northwestern studying communication and computer science. <br><br>i'm also pursuing the certificate in human-computer interaction</a> and the media arts and game design module.</a> <br><br>i'm interested in educational games, data visualization, and continental philosophy.<br><br>in my free time, i enjoy making and solving crossword puzzles and playing strategy games. i'm ranked top 0.2% in teamfight tactics.");

	const l2 = document.querySelector("#l2");
	l2.setAttribute("data-content", "<h1>resume</h1>last updated dec 2022<br><a href='https://drive.google.com/file/d/14GFlCptTqRZT8a1rikGfvZTIgrqbaSa-/preview'>view</a>");

	const l3 = document.querySelector("#l3");
	l3.setAttribute("data-content", "<h1>recent fun stuff</h1>visited christkindlmarket<br><br>learned to bake brioche over thanksgiving break<br><br>spent ~4 months learning about gamecube controller modding and made a custom gcc for my partner<br><br>spent ~6 hours teaching myself advanced tableau");

	const l4 = document.querySelector("#l4");
	l4.setAttribute("data-content", "<h1>bun</h1><img src='https://i.imgur.com/G0f9JFF.gif' alt='animated image of the drawing tool in use. the user selects the brushes and draws the body, ears, and face of a cartoon bunny'><a href='https://bun.carro.dev'><br>view</a><br>a project for cs396: generative methods which uses p5js to make brushes for people to easily create bunnies (or other creatures). the project uses different techniques, including beginShape and endShape, delayed stacked shapes, randomly generated faces, and color / brush size pickers.");

	const l5 = document.querySelector("#l5");
	l5.setAttribute("data-content", "<h1>site</h1>the site you're on right now, created from scratch as an assignment for cs330: human-computer interaction without the use of any external frameworks / libraries<br><br>when you expand a content square, it'll move to the center of the grid and swap places with the square that was previously in the center. you can also click outside of the squares to see them all<br><br>you can also navigate this site without a mouse<br><br>shoutout to openai chat for debugging my code lol<br><br><a href='https://github.com/cxrro/cxrro.github.io'>github repo</a>");

	const l6 = document.querySelector("#l6");
	l6.setAttribute("data-content", "<h1>work</h1>i am in my productivity era<br><br><a href='https://arch.library.northwestern.edu/collections/707957731'>comm studies honors thesis<a><br><a href='https://advising.soc.northwestern.edu/academic_modules/media-arts-and-game-design/'>media arts and game design capstone<a><br><a href='https://wiki.communitydata.science/Ecology_of_Online_Communities/Community_rules_study'>cdsc rules study<a><br><a href='https://studio.knightlab.com/projects/live-streaming/'>knight lab livestreaming<a><br><a href='https://magic.gg/news/magic-30-tickets-and-events-details#Program'>wotc project management intern<a><br><a href='https://discord.gg/forensics'>competitive debate discord<a>");

	const l7 = document.querySelector("#l7");
	l7.setAttribute("data-content", "<h1>social</h1>haha content<br><br><a href='https://twitch.tv.carroh'>twitch<a><a href='https://are.na/carro'>are.na<a><a href='https://www.linkedin.com/in/czou/'>linkedin<a><a href='https://twitter.com/carrohno'>twitter<a><a href='https://carro.substack.com'>substack<a>");

	const l8 = document.querySelector("#l8");
	l8.setAttribute("data-content", "<h1>stuff i like</h1><br><br><a href='https://www.sunsama.com'>sunsama<a><a href='https://reboothq.substack.com'>reboot<a><a href='https://teamfighttactics.leagueoflegends.com'>tft<a><a href='https://www.twitch.tv/moonlimes'>moonlimes<a>");

	const l9 = document.querySelector("#l9");
	l9.setAttribute("data-content", "<h1>contact</h1>email: cqz@u.northwestern.edu<br>discord: carro#0001");

	// Select all of the squares on the page
	const squares = document.querySelectorAll('.square');
	// Add a click event listener to each square
	squares.forEach(square => {
		square.addEventListener('click', event => {
		const oldActiveSquare = document.querySelector(".active");
		if (oldActiveSquare !== null) {
			const newActiveSquare = square;
			const oldActiveSquareComputedStyle = window.getComputedStyle(oldActiveSquare);
			const newActiveSquareComputedStyle = window.getComputedStyle(newActiveSquare);
			const oldActiveSquareOrder = oldActiveSquareComputedStyle.getPropertyValue("order");
			const newActiveSquareOrder = newActiveSquareComputedStyle.getPropertyValue("order");
			oldActiveSquare.style.order = newActiveSquareOrder;
			newActiveSquare.style.order = oldActiveSquareOrder;
		}
		else {
			const allSquares = document.querySelectorAll(".square");
			// Filter the list of squares based on their order value
			const squareWithOrder5 = Array.prototype.filter.call(allSquares, (square) => {
			// Get the computed style for the square
			const squareComputedStyle = window.getComputedStyle(square);
			const squareOrder = squareComputedStyle.getPropertyValue("order");
			// Return true if the square has an order value of 5, otherwise return false
			return squareOrder === "5";
			});
			// Find the first element in the filtered list of squares
			const elementWithOrder5 = Array.prototype.find.call(squareWithOrder5, (square) => {
				// Return true if the square is an element, otherwise return false
				return square instanceof Element;
			});
			const middle = elementWithOrder5
			const middleComputedStyle = window.getComputedStyle(middle);
			const middleOrder = middleComputedStyle.getPropertyValue("order");
			const newActiveSquare = square;
			const newActiveSquareComputedStyle = window.getComputedStyle(newActiveSquare);
			const newActiveSquareOrder = newActiveSquareComputedStyle.getPropertyValue("order");
			middle.style.order = newActiveSquareOrder;
			newActiveSquare.style.order = middleOrder;
		}
		// When the square is clicked, remove the active class from all squares and add it to the clicked square
		squares.forEach(otherSquare => {
			otherSquare.classList.remove('active');
		});

		square.classList.toggle('active');

		// If the square has the active class, show the new content
		if (square.classList.contains('active')) {
		// Get the content for the square from the data attribute
		const content = square.dataset.content;

		// Replace the content of the square with the new content
		square.innerHTML = content;

		// Add the hidden class to all squares except the active square
		squares.forEach(otherSquare => {
			if (otherSquare !== square) {
			otherSquare.classList.add('hidden');
			}
		});
		} else {
		// If the square does not have the active class, restore the original content and remove the hidden class from all squares
		square.innerHTML = square.dataset.originalContent;
		squares.forEach(otherSquare => {
			otherSquare.classList.remove('hidden');
		});}});
	// Add a transition event listener to each square
	square.addEventListener('transitionstart', event => {
		// When the transition ends, check if the square no longer has the active class
		if (!square.classList.contains('active')) {
		// If the active class is removed, restore the original content and remove the hidden class from all squares
		square.innerHTML = square.dataset.originalContent;
		squares.forEach(otherSquare => {
			otherSquare.classList.remove('hidden');
		});}});});

	// Clicking outside of the square should remove the active class
	document.addEventListener('click', event => {
		// If the clicked element is not a square, close all of the squares
		if (!event.target.matches('.square')) {
		squares.forEach(square => {
			square.classList.remove('active');
			square.innerHTML = square.dataset.originalContent;
		});}});};

document.addEventListener('keydown', function(event) {
	if (event.key === 'Enter') {
		console.log('enter pressed');
		// The enter key was pressed, so simulate a click on the focused element.
		const active = document.querySelector(".active");
		console.log(active);
		if (active == null) {
		var clickEvent = new MouseEvent('click', {
			bubbles: true,
			cancelable: true
		});
		document.activeElement.dispatchEvent(clickEvent);
		} else {
		const squares = document.querySelectorAll('.square');
		squares.forEach(square => {
			square.classList.remove('active');
			square.innerHTML = square.dataset.originalContent;
		});
		}
	}
	});
		  