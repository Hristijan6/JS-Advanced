let movies = ["The Dark Knight ", "The Godfather", "Lord Of The Rings", "Forrest Gumo", "Moonlight", "The Matrix", "Interstellar", "Avatar", "Oppenheimer", "Spider-Man"]

let findMovieButton = document.getElementById("btn");
let entryField = document.getElementById("movie");
let result = document.getElementById("result");


function movieAvailability(userInput) {
    let movieExists = false;
    for (let i = 0; i < movies.length; i++) {
        if (userInput.toLowerCase() === movies[i].toLowerCase()) {
            movieExists = true;
        }
    }

    result.innerHTML = "";

    if (movieExists) {
        result.innerHTML += `<h1 style="color: green;">The movie can be rented</h1> `
    } else{
         result.innerHTML += `<h1 style="color: red;">The movie cannot be rented</h1> `
    }
      
}

findMovieButton.addEventListener("click", function () {
    let userInput = entryField.value;
    movieAvailability(userInput);
})





