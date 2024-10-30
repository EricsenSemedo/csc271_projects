/* TO DO:

	- Create an array to hold the titles of your favorite movie *and* your partners' favorite movies.

	- Create an array with URLs for each movie poster. 
	  Note: Search Google Images for the movie title with "wiki" (i.e., "Mean Girls wiki") to find the official poster on Wikipedia.
	
	- Create an array with links to the HTML files for each movie page.
	  Note: Name each HTML file after the movie title (e.g., mean-girls.html). 
            Make sure your partners’ movie pages are live before adding links to their favorites.

	- Create an array to store each movie's rating (1 to 5). Try a different rating for each movie!

*/
var movieTitles = ['The Martian', 'The Room', 'Pirates of the Caribbean: The Curse of the Black Pearl'];
var moviePosterURLs = ['https://upload.wikimedia.org/wikipedia/en/c/cd/The_Martian_film_poster.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScEUtTuZpI0UG_CFHMEqZt16M-HwAjqbggLw&s', 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/The_Curse_of_the_Black_Pearl_Soundtrack.jpg/220px-The_Curse_of_the_Black_Pearl_Soundtrack.jpg'];
var movieHTMLs = ['theMartian.html', 'theRoom.html', 'piratesOfTheCaribbean'];
var movieRatings = [5, 1, 4];

/* TO DO:
	
	- Select ALL movie card elements in the index.html file and store in a variable.

	- Loop through each card to update its content with movie information:
	  - Select the current movie image element. 
	  - Set its link to the movie poster link from the array. 
	  - Set its alt text to the movie title from the array. 

	  - Select the current movie link element.
	  - Set its link to the HTML page for that movie from the array. 
	  - Set its text to the movie title from the array.

	  - Select the current movie rating element.
	  - Create a variable that will hold the filled and empty stars. 
	  - Loop to generate star symbols based on the rating:
	    - If current counter is less than the rating, then add "★".
	    - Otherwise, add "☆".
	  - Set the movie rating element's text to display the generated stars. 

*/
var movieCards = document.querySelectorAll('.movie-card');

for (var i = 0; i < movieCards.length; i++) {
	var movieImage = movieCards[i].querySelector('.movie-image');
	movieImage.src = moviePosterURLs[i];
	movieImage.alt = movieTitles[i];

	var movieLink = movieCards[i].querySelector('a');
	movieLink.href = movieHTMLs[i];
	movieLink.textContent = movieTitles[i];

	var movieRating = movieCards[i].querySelector('.rating');
	var emptyStar = '☆';
	var filledStar = '★';
	for (j = 0; j < 5; j++) {
		if (j < movieRatings[i]) {
			movieRating.textContent += filledStar;
		}
		else {
			movieRating.textContent += emptyStar;
		}
	}
}