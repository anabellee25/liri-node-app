# liri-node-app

## What is it?

This app is a LIRI BOT, kinda like Apple's Siri but instead of Speech we are using Language/Text. LIRI is run in your command line using node.js. It will take in user input and parameters and return data to the user.

In this app, we are searching for Song Information, Concert Information and Movie Information depending on what the user inputs.

## How to use?
 
* Clone this repository onto your computer.
* Run 'npm install' in GitBash/Terminal/Command Line in order to install all npm API calls needed.
* Acquire a Spotify ID and Secret in order to access the Spotify API and store in a .env file in your .gitignore folder.
* Run the commands below:
  * node liri.js spotify-this-song <'song name'>
  * node liri.js concert-this <'band or artist name'>
  * node liri.js movie-this <'name of movie'>
  * node liri.js do-what-it says

## What does each command do?

### node liri.js spotify-this-song

This displays the following information below about the song that you inputted:
  * Artist Name
  * Song Title
  * A link to a preview of the song
  * The song's Album

![snippet of concert](/images/song.png)


### node liri.js concert-this 

This displays the following information below about the artist that you inputted:
  * The Venue
  * The City
  * The State (if applicable)
  * The Country
  * The Date of the concert

![snippet of concert](/images/concert.png)
 
 ### node liri.js movie-this 

This displays the following information below about the movie that you inputted:
  * The title of the movie
  * The year it was released
  * The IMDb Rating
  * The Rotten Tomatoes Rating
  * The country of origin
  * The language
  * A short plot of the movie
  * The Actors 

![snippet of concert](/images/movie.png)

 ### node liri.js do-what-it-says

This reads the text that is in random.txt and displays the below information based on what's written in that text document:
  * Artist Name
  * Song Title
  * A link to a preview of the song
  * The song's Album

![snippet of concert](/images/dowhat.png)

## Languages/Technologies Used

* JavaScript
* npm
* Node.js

## APIs and npm Packages Used

* Node-Spotify-API
* fs
* request
* dotenv
* Bandsintown API
* OMDb API
* Spotify API Personal ID & Secret

## Author

### Ana Lee