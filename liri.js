
require("dotenv").config();

var keys = require("./keys");
// console.log(keys.spotify.id);
// console.log(keys.spotify.secret);

var fs = require('fs');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var handler = process.argv[2];
var userSearch = process.argv.slice(3).join(" ");

function spotifyThis(userSearch) {
    if (!userSearch){
        userSearch = 'The Sign';
    }
spotify.search({ type: 'track', query: userSearch, limit: '1' },function(err, data){
    if (err) {
        return console.log(`Oops! Seems like your song doesn't exist but here's a good one for ya!\n Name: Ace of Base\n Song: The Sign\n Preview: https://p.scdn.co/mp3-preview/4c463359f67dd3546db7294d236dd0ae991882ff?cid=84d065b1c7f54acea2604ba03dffbfdb\n Album: The Sign (US Album) [Remastered]`);
    }
   
    var artist = data.tracks.items[0].album.artists[0].name;
    var song = data.tracks.items[0].name;
    var preview = data.tracks.items[0].preview_url;
    var album = data.tracks.items[0].album.name;

        console.log(
        `\n----------------------------------------\n
        \nName: ${artist}
        \nSong: ${song}
        \nPreview: ${preview}
        \nAlbum: ${album}
        \n----------------------------------------\n`);
   
});
};

var queryURL = "https://rest.bandsintown.com/artists/"+userSearch+"/events?app_id=codingbootcamp&limit=10";

var request = require('request');

function bands (userSearch){
request(queryURL, function (err, response, body) {
    if (err) {
        return console.log("Error: " + err);
    }
    var response = JSON.parse(body);
    for (i = 0; i < response.length; i++)
    {
        //grabbing the date from the response and adding it into a string because moment.js is stupid
        var date = response[i].datetime;
        var month = date.substring(5,7);
        var year = date.substring(0,4);
        var day = date.substring(8,10);
        var format = month + "/" + day + "/" + year;

        console.log("\n---------------------------------------\n");
        console.log("Name: " + response[i].venue.name);
        console.log("City: " + response[i].venue.city);
        if (response[i].venue.region !== "")
        {
          console.log("State: " + response[i].venue.region);
        };
        console.log("Country: " + response[i].venue.country);
        console.log("Date: " + format);
        console.log("\n----------------------------------------\n");
    };
});
}

var omdbQueryURL = "http://www.omdbapi.com/?t="+userSearch+"&plot=short&apikey=b9cc076b";

function movieThis(userSearch) {
request(omdbQueryURL, function(err, response, body) {
    var defaultMovie;
    if (userSearch === undefined){
        userSearch = defaultMovie;
    } else {
        defaultMovie = userSearch 
    };

    if (err) {
        return console.log("Oops! Looks like this movie doesn't exist!");
    }
    var response = JSON.parse(body);

    var title = response.Title;
    var year = response.Year;
    var imdbRating = response.imdbRating;
    var rottenT = response.Ratings[1].Value;
    var country = response.Country;
    var language = response.Language;
    var plot = JSON.stringify(response.Plot);
    var actors = response.Actors;

    console.log(
    `\n-------------------------------\n
    \nTitle: ${title} 
    \nYear it was released: ${year} 
    \nIMDB Rating: ${imdbRating}
    \nRotten Tomatoes Rating: ${rottenT}
    \nCountry of origin: ${country}
    \nLanguage: ${language}
    \nPlot: ${plot}
    \nActors: ${actors}
    \n-------------------------------\n`)
});
};

function getFile(){
    fs.readFile('./random.txt', 'utf8', (err, data) => {
        var dataArr = data.split(",");
      if (err) {
        return console.log(error);
      };
      if (dataArr[0] === "spotify-this-song") {
        var songLookup = dataArr[1].slice(1, -1);
        userSearch = songLookup;
        spotifyThis(userSearch);
      }
      //remove // from each line below to run a different command
    //   else if (dataArr[0] === "concert-this") {
    //     var bandLookup = dataArr[1].slice(1, -1);
    //     bands(bandLookup);
    //   }  else if (dataArr[0] === "movie-this") {
    //     var movieLookup = dataArr[1].slice(1, -1);
    //     movieThis(movieLookup);
    //   };
    });
   };

if (handler === "spotify-this-song"){
    spotifyThis(userSearch);
} else if (handler === "concert-this") {
    bands(userSearch);
}else if (handler === "movie-this"){
    movieThis(userSearch);
}else if (handler === "do-what-it-says"){
    getFile();
}