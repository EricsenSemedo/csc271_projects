class UserManager {
    // singleton instance that is private to the class so it can't be accessed from outside
    // only 1 copy of this property will exist in memory and will be shared by all instances of the class
    static #instance = null;

    // private constructor
    constructor() {
        // UserManager is used instead of this because
        // this refers to the instance of the class
        // UserManager refers to the class itself
        if (UserManager.#instance) {
            return UserManager.#instance;
        }

        // Initializes the users list in local storage if it doesn't exist
        this._initializeUsers();

        // The first time the constructor is called, this will set
        // the #instance property to the first instance (this)
        UserManager.#instance = this;
    }

    // Static method to get the singleton instance
    static getInstance() {
        // this.#instance is used here because this is a static method
        // and can't access instance properties
        // this will return the first instance of the class
        if (!this.#instance) {
            this.#instance = new UserManager();
        }

        return this.#instance;
    }

    // Initializes the users list in local storage if it doesn't exist
    _initializeUsers() {
        if (!localStorage.getItem('Users')) {
            localStorage.setItem('Users', JSON.stringify({}));
        }
    }
    
    // returns the users list from local storage
    getUsers() {
        return JSON.parse(localStorage.getItem('Users'));
    }

    // Returns the user object with the given username
    findUser(username) {
        const users = this.getUsers();
        
        return users[username];
    }

    // Adds a user to the users list in local storage
    // returns false if the user already exists
    // returns true if the user was successfully added
    addUser(username, password) {
        if (this.findUser(username)) {
            throw new Error('User already exists');
        }

        const users = this.getUsers();
        users[username] = {
            password: password,
            ownedGames: [],
            recentGames: [],
        };
        
        localStorage.setItem('Users', JSON.stringify(users));
    }

    // Login the user with the given username and password
    // returns true if the user was successfully logged in
    // returns false if the user doesn't exist or the password is incorrect
    login(username, password) {
        const user = this.findUser(username);

        if (!(user && user.password == password)) {
            throw new Error('Invalid username or password, please try again');
        }

        localStorage.setItem('LoggedInUser', username);
    }

    // Logout the current user
    logout() {
        localStorage.setItem('LoggedInUser', '');
    }

    // adds a game to the recent games list of the logged in user
    addRecentGame(gameTitle) {
        const username = localStorage.getItem('LoggedInUser');
        const user = this.findUser(username);
        const users = this.getUsers();

        if (!user) {
            throw new Error('User not found');
        }

        // Removes the game from the recent games list if it already exists
        for (var i = 0; i < user.recentGames.length; i++) {
            var recentGame = user.recentGames[i]

            if (recentGame == gameTitle) {
                user.recentGames.splice(i, 1);
                break;
            }
        }

        user.recentGames.push(gameTitle);

        users[username] = user;
        localStorage.setItem('Users', JSON.stringify(users));
    }
}

// export makes userManager available for other files to import and use
// const userManager makes sure userManager cannot be changed after being set
// this line ensures that only 1 instance of UserManager is created
export const userManager = UserManager.getInstance();