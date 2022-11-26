console.log("Hello World")

let message = document.querySelector('message')

const addMovie =(event) => {
    event.preventDefault()


let inputField= document.querySelector("input")


let movie = document.createElement("li")


let movieTitle = document.createElement("span");
movieTitle.textContent=inputField.value;
addEventListener('click', crossOffMovie);
movie.appendChild(movieTitle);

let deleteBtn = document.createElement("button");
deleteBtn.textContent= 'x'; 
deleteBtn.addEventListener('submit', deleteMovie);
movie.appendChild(deleteBtn);

let movieList = document.querySelector('ul')
movieList.appendChild(movie);

inputField.value = ''
}

document.querySelector('form').addEventListener('submit', addMovie);


const deleteMovie = (event) => {
message.textContent = `Movie deleted!`  
event.target.parentNode.remove();
}

const crossOffMovie = (event) => {
event.target.classList.toggle('checked')
if(event.target.classList.contains('checked')=== true){
 return 'Movie watched!'  
} else {
 return 'Movie added back!'
}
}





