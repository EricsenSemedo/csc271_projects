import { gameList } from './game_data.js';
import { userManager } from './user_manager.js';

var loggedInUser = localStorage.getItem('LoggedInUser');


// Algorithm to show recommended games

// This function shows the history of the recent games the user had looked at
function showRecentGames() {
    const recentGamesList = userManager.findUser(loggedInUser).recentGames;
    const recentGamesGridElement = document.querySelector('.grid-container');

    // Iterates through the recent games list and creates a game card for each game
    for (var i = recentGamesList.length - 1; i >= 0; i--) {
        // Iterates through the game list to find the game that matches the game in 
        // the recent games list
        for (var j = 0; j < gameList.length; j++) {
            if (recentGamesList[i] == gameList[j].title) {
                let currentGameIndex = j;
                var gameCard = document.createElement('a'); // creates a new anchor element
                gameCard.href = "./game_view.html"; // sets the href attribute of the anchor element
                // sets the inner HTML of the anchor element to the game card
                gameCard.innerHTML = `
                    <a class="card-link">
                        <div class="game-card">
                            <img src="./images/game.png" alt="The Witcher 3">
                            <h3>${gameList[j].title}</h3>
                            <p>${gameList[j].platforms}</p>
                        </div>
                    </a>
                `;
                // adds a click event listener to the anchor element that stores the game name in local storage
                const link = gameCard.querySelector('a');
                link.addEventListener('click', function(){gameList[currentGameIndex].storeGameName();});
                
                // puts the game card in the recent games grid element
                // this will display the game card on the profile page
                recentGamesGridElement.appendChild(gameCard);
                
                break;
            }
        }
    }
}

// This function shows the games the user owns

function main () {
    if (loggedInUser != '') {
        var loginElement = document.querySelector('#login');

        loginElement.innerHTML = 'Logout';
    }

    // Calls the showRecentGames function to display the recent games by default
    showRecentGames();
}

main();