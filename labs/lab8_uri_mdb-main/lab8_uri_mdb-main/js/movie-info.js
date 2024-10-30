/* TO DO:

    - Create an array to hold the title of your favorite movie, URL for movie poster, your rating, and synopsis.

    - Select the movie image element.
    - Set its link to the movie poster link from the array. 
    - Set its alt text to the movie title from the array.

    - Select the movie name element.
    - Set its text to the movie title from the array.

    - Select the movie description element.
    - Set its text to the movie synopsis from the array.

    - Select the movie rating element.
    - Create a variable that will hold the filled and empty stars. 
    - Loop to generate star symbols based on the rating:
        - If current counter is less than your rating, then add "★".
        - Otherwise, add "☆".
    - Set the movie rating element's text to display the generated stars. 

*/

var movieInfo = ['The Martian', 'https://upload.wikimedia.org/wikipedia/en/c/cd/The_Martian_film_poster.jpg', '5', 'Waking up alone on the hostile Martian landscape, Watney faces the daunting challenge of survival with limited supplies. He quickly assesses his situation and begins to document his experiences through video logs. As a botanist and mechanical engineer, he utilizes his skills to create a sustainable food source by growing potatoes using Martian soil enriched with human waste and water he produces from leftover rocket fuel.'];
var movieImage = document.querySelector('.movie-image');
var header = document.querySelector('h1');

header.textContent = movieInfo[0];

movieImage.src = movieInfo[1]
movieImage.alt = movieInfo[0]

var movieName = document.querySelector('.movie-name');
movieName.textContent = movieInfo[0];

var movieDescription = document.querySelector('.description');
movieDescription.textContent = movieInfo[3];

var movieRating = document.querySelector('.rating');
var emptyStar = '☆';
var filledStar = '★';

for (var i = 0; i < 5; i++) {
	var emptyStar = '☆';
	var filledStar = '★';
	for (i = 0; i < 5; i++) {
		if (i < movieInfo[2]) {
			movieRating.textContent += filledStar;
		}
		else {
			movieRating.textContent += emptyStar;
		}
	}
}