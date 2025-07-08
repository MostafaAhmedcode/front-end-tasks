const apiKey = '051430c037f8e4c580d8a3c4e64c1c17';
const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

const movieContainer = document.getElementById('movie-container');
const searchInput = document.getElementById('searchInput');

let allMovies = [];


fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        allMovies = data.results.slice(0, 6);
        displayMovies(allMovies);
    })
    .catch(error => console.error('Error:', error));


function displayMovies(movies) {
    movieContainer.innerHTML = '';
    movies.forEach(movie => {
        const movieCard = `
      <div class="col-md-4 mb-4">
        <div class="card shadow">
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="card-img-top" alt="${movie.title}">
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">Release Date: ${movie.release_date}</p>
          </div>
        </div>
      </div>
    `;
        movieContainer.innerHTML += movieCard;
    });
}


searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const filteredMovies = allMovies.filter(movie =>
        movie.title.toLowerCase().includes(query)
    );
    displayMovies(filteredMovies);
});