/*var subtitle = Array();

function randomSub() {
  var randomSub = subtitle[Math.floor(Math.random() * subtitle.length)];
  document.getElementById('randomSubtitle').innerHTML = randomSub;
  console.log("randomSub: " + randomSub);
} */

window.onload = () => {
	const l1 = document.querySelector("#l1");
	l1.setAttribute("data-content", "<h1>about</h1>hi i'm carolyn");
	const l2 = document.querySelector("#l2");
	l2.setAttribute("data-content", "<h1>resume</h1>last updated dec 2022<br><a href='https://drive.google.com/file/d/14GFlCptTqRZT8a1rikGfvZTIgrqbaSa-/preview'>view</a>");
	const l3 = document.querySelector("#l3");
	l3.setAttribute("data-content", "<h1>idk</h1>i dont know what to put here hehe");
	const l4 = document.querySelector("#l4");
	l4.setAttribute("data-content", "<h1>bun</h1><a href='bun.carro.dev'>view</a><br>this project was for cs396: generative methods<br>it's a drawing tool that uses p5js to make brushes for people to easily create bunnies<br>have fun with it :)");
	const l5 = document.querySelector("#l5");
	l5.setAttribute("data-content", "<h1>site</h1>the site you're on right now<br><a href='github.com/cxrro'>github repo</a>");
	const l6 = document.querySelector("#l6");
	l6.setAttribute("data-content", "<h1>work</h1><iframe src='https://www.youtube.com/watch?v=dQw4w9WgXcQ'></iframe>");
	const l7 = document.querySelector("#l7");
	l7.setAttribute("data-content", "<h1>social</h1><iframe src='https://www.youtube.com/watch?v=dQw4w9WgXcQ'></iframe>");
	const l8 = document.querySelector("#l8");
	l8.setAttribute("data-content", "<h1>links</h1><iframe src='https://www.youtube.com/watch?v=dQw4w9WgXcQ'></iframe>");
	const l9 = document.querySelector("#l9");
	l9.setAttribute("data-content", "<h1>contact</h1><iframe src='https://www.youtube.com/watch?v=dQw4w9WgXcQ'></iframe>");




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