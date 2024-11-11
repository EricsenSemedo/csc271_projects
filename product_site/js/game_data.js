// This class stores the information of each game in the form of a GameCard object
class GameCard {

    constructor(title = "Unknown Title",
        img = "images/game.png",
        description = "No description available", 
        trailerLink = "",
        rating = "N/A",
        genre = "Unknown Genre",
        personalScore = "N/A",
        releaseDate = "N/A",
        platforms = "N/A") {
        this.title = title;
        this.img = img;
        this.description = description;
        this.trailerLink = trailerLink;
        this.rating = rating;
        this.genre = genre;
        this.personalScore = personalScore;
        this.releaseDate = releaseDate;
        this.platforms = platforms;
    }
}

// creates a list of GameCard objects that store the information of each game
var gameList = [
    new GameCard("The Witcher 3: Wild Hunt", "img/witcher3.jpg", "The Witcher 3: Wild Hunt is a story-driven, next-generation open world role-playing game...", "https://www.youtube.com/watch?v=xt_65k-gv1U", "9.3", "RPG", "9.5", "2015-05-19", "PC, PS4, Xbox One, Switch"),
    new GameCard("Red Dead Redemption 2", "img/rdr2.jpg", "Red Dead Redemption 2 is an epic tale of life in America’s unforgiving heartland...", "https://www.youtube.com/watch?v=eaW0tYpxyp0", "9.7", "Action-Adventure", "9.8", "2018-10-26", "PC, PS4, Xbox One"),
    new GameCard("God of War", "img/godofwar.jpg", "Kratos must adapt to unfamiliar lands, unexpected threats...", "https://www.youtube.com/watch?v=K0u_kAWLJOA", "9.6", "Action", "9.7", "2018-04-20", "PS4"),
    new GameCard("The Legend of Zelda: Breath of the Wild", "img/zelda.jpg", "Step into a world of discovery, exploration, and adventure...", "https://www.youtube.com/watch?v=zw47_q9wbBE", "10", "Adventure", "9.8", "2017-03-03", "Switch, Wii U"),
    new GameCard("Cyberpunk 2077", "img/cyberpunk.jpg", "Cyberpunk 2077 is an open-world, action-adventure story set in Night City...", "https://www.youtube.com/watch?v=8X2kIfS6fb8", "7.8", "RPG", "8.0", "2020-12-10", "PC, PS4, PS5, Xbox One, Xbox Series X/S"),
    new GameCard("Hades", "img/hades.jpg", "Hades is a roguelike dungeon crawler where you defy the god of the dead...", "https://www.youtube.com/watch?v=EC3eYQyzrjE", "9.5", "Roguelike", "9.2", "2020-09-17", "PC, Switch"),
    new GameCard("Resident Evil Village", "img/re8.jpg", "Resident Evil Village continues Ethan Winters' story in a remote village...", "https://www.youtube.com/watch?v=QJvqr3Zm2_o", "8.4", "Horror", "8.8", "2021-05-07", "PC, PS4, PS5, Xbox One, Xbox Series X/S"),
    new GameCard("Dark Souls III", "img/darksouls3.jpg", "Dark Souls III is a challenging action RPG set in a world of grim fantasy...", "https://www.youtube.com/watch?v=ymIByYN6UL4", "9.0", "RPG", "9.1", "2016-03-24", "PC, PS4, Xbox One"),
    new GameCard("Final Fantasy XV", "img/ffxv.jpg", "Join Prince Noctis and his closest friends on the road to reclaim their homeland...", "https://www.youtube.com/watch?v=JxWfvtnHtS0", "8.2", "RPG", "8.5", "2016-11-29", "PC, PS4, Xbox One"),
    new GameCard("Persona 5", "img/persona5.jpg", "Persona 5 is a game about the internal and external conflicts of a group of troubled high school students...", "https://www.youtube.com/watch?v=5LJHgVAEwCk", "9.7", "JRPG", "9.6", "2016-09-15", "PS3, PS4"),
    new GameCard("Bloodborne", "img/bloodborne.jpg", "Bloodborne is an action RPG in which players take on the role of a Hunter...", "https://www.youtube.com/watch?v=G203e1HhixY", "9.1", "Action", "9.2", "2015-03-24", "PS4"),
    new GameCard("Super Mario Odyssey", "img/mario_odyssey.jpg", "Super Mario Odyssey lets you travel across different worlds with Mario’s hat, Cappy...", "https://www.youtube.com/watch?v=wGQHQc_3ycE", "9.5", "Platformer", "9.7", "2017-10-27", "Switch"),
    new GameCard("Hollow Knight", "img/hollow_knight.jpg", "Forge your own path in Hollow Knight, an epic action adventure...", "https://www.youtube.com/watch?v=UAO2urG23S4", "9.0", "Metroidvania", "9.3", "2017-02-24", "PC, Switch"),
    new GameCard("Sekiro: Shadows Die Twice", "img/sekiro.jpg", "In Sekiro: Shadows Die Twice, players become a lone shinobi...", "https://www.youtube.com/watch?v=ON4bVZ-PY78", "9.2", "Action", "9.0", "2019-03-22", "PC, PS4, Xbox One"),
    new GameCard("Doom Eternal", "img/doom_eternal.jpg", "Doom Eternal is a fast-paced first-person shooter where players rip and tear...", "https://www.youtube.com/watch?v=_UuktemkCFI", "8.8", "Shooter", "9.0", "2020-03-20", "PC, PS4, PS5, Xbox One, Xbox Series X/S"),
    new GameCard("The Last of Us Part II", "img/last_of_us2.jpg", "Five years after their dangerous journey, Ellie and Joel live in peace...", "https://www.youtube.com/watch?v=vK0esA1y2Zw", "9.5", "Action-Adventure", "9.3", "2020-06-19", "PS4"),
    new GameCard("Spider-Man: Miles Morales", "img/spiderman_miles.jpg", "Experience the rise of Miles Morales as he masters his new powers...", "https://www.youtube.com/watch?v=NTunTURbyUU", "8.5", "Action", "8.9", "2020-11-12", "PS4, PS5"),
    new GameCard("Animal Crossing: New Horizons", "img/animal_crossing.jpg", "Create your own paradise on a deserted island in Animal Crossing...", "https://www.youtube.com/watch?v=5LAKjL3QKVo", "9.2", "Simulation", "9.4", "2020-03-20", "Switch"),
    new GameCard("Assassin's Creed Valhalla", "img/ac_valhalla.jpg", "Become Eivor, a fierce Viking warrior...", "https://www.youtube.com/watch?v=L0Fr3cS3MtY", "8.2", "Action RPG", "8.4", "2020-11-10", "PC, PS4, PS5, Xbox One, Xbox Series X/S"),
    new GameCard("Ghost of Tsushima", "img/ghost_tsushima.jpg", "Ghost of Tsushima is an open-world samurai adventure...", "https://www.youtube.com/watch?v=Zbq7BnsQhrw", "9.2", "Action-Adventure", "9.4", "2020-07-17", "PS4")
];

const path = window.location.pathname; // gets the path of the current file
const currentFile = path.substring(path.lastIndexOf('/') + 1); // gets the current file name

// get the 10 latest games in the list and return them as an array of indices
function getLatestGamesIndicies() {
    // loop through the list and get the latest 10 games and display them for the new releases
    // this is O(n) but can be optimized to O(1) by storing the latest games in a separate list
    var latestGamesIndex = [0,1,2,3,4,5,6,7,8,9];

    for (var i = 10; i < gameList.length; i++) {
        for (var j = 0; j < latestGamesIndex.length; j++) {
            var listedGameDate = new Date(gameList[latestGamesIndex[j]].releaseDate);
            var selectedGameDate = new Date(gameList[i].releaseDate);

            // if the selected game is newer than the game in the latestGamesIndex list, then replace it
            if (selectedGameDate < listedGameDate) {
                latestGamesIndex[j] = i;
                break;
            }
        }
    }

    return latestGamesIndex;
}

// This function displays the games on the home page
function displayGamesOnHome() {
    var gameSuggestionsCarousel = document.querySelectorAll(".game-list")[0]; // gets the first carousel on the home page
    var popularGamesCarousel = document.querySelectorAll(".game-list")[1]; // gets the second carousel on the home page
    var newReleasesCarousel = document.querySelectorAll(".game-list")[2]; // gets the third carousel on the home page

    // loop through the first 10 games and displays them for now for suggestions
    for (var i = 0; i < 10; i++) {
        var gameCard = document.createElement('a'); // creates a new anchor element
        gameCard.ClassName = "card-link"; // sets the class name of the anchor element
        gameCard.href = "./game_view.html"; // sets the href attribute of the anchor element
        // sets the inner HTML of the anchor element to the game card
        gameCard.innerHTML = `
            <a href="./game_view.html" class="card-link">
                <div class="game-card">
                    <img src="./images/game.png" alt="The Witcher 3">
                    <h3>${gameList[i].title}</h3>
                    <p>${gameList[i].platforms}</p>
                </div>
            </a>
        `;
        gameSuggestionsCarousel.appendChild(gameCard);
    }

    var latestGamesIndex = getLatestGamesIndicies(); // gets the latest games in the list

    // loop through the last 10 games in the list and display them for the popular games for now
    for (var i = gameList.length - 10; i < gameList.length; i++) {
        var gameCard = document.createElement('a'); // creates a new anchor element
        gameCard.ClassName = "card-link"; // sets the class name of the anchor element
        gameCard.href = "./game_view.html"; // sets the href attribute of the anchor element
        // sets the inner HTML of the anchor element to the game card
        gameCard.innerHTML = `
            <a href="./game_view.html" class="card-link">
                <div class="game-card">
                    <img src="./images/game.png" alt="The Witcher 3">
                    <h3>${gameList[i].title}</h3>
                    <p>${gameList[i].platforms}</p>
                </div>
            </a>
        `;
        popularGamesCarousel.appendChild(gameCard);
    }


    // display the latest games in the new releases carousel
    for (var i = 0; i < latestGamesIndex.length; i++) {
        var chosenIndex = latestGamesIndex[i];
        var gameCard = document.createElement('a'); // creates a new anchor element gameCard.ClassName = "card-link"; // sets the class name of the anchor element
        gameCard.href = "./game_view.html"; // sets the href attribute of the anchor element
        // sets the inner HTML of the anchor element to the game card
        gameCard.innerHTML = `
            <a href="./game_view.html" class="card-link">
                <div class="game-card">
                    <img src="./images/game.png" alt="The Witcher 3">
                    <h3>${gameList[chosenIndex].title}</h3>
                    <p>${gameList[chosenIndex].platforms}</p>
                </div>
            </a>
        `;
        newReleasesCarousel.appendChild(gameCard);
    }
}

if (currentFile == "index.html") {
    displayGamesOnHome();
}
