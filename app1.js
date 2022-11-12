
const API_KEY ='api_key=9d7cbf5d30a77efb663dc035654e4f27';
const BASE_URL = 'https://api.themoviedb.org/3';

  var Second_URL='/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&';

  // var Second_URL='/discover/movie?primary_release_year=2010&sort_by=vote_average.desc&';
  // var Second_URL='/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&';
  // var Second_URL='/discover/movie?sort_by=popularity.desc&';
  // var Second_URL='/discover/movie?sort_by=popularity.desc&';

  const API_URL = BASE_URL+ Second_URL +API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500/';
const kid = document.getElementById('kid');
const popular = document.getElementById('popular');
const best = document.getElementById('best');
const rated = document.getElementById('rated');
getMovies(API_URL);
const main = document.getElementById('main');


function getMovies(url){
  fetch(url).then(res => res.json()).then(data => {
    showMovies(data.results);
  })
}

function showMovies(data){
  main.innerHTML= '';
  data.forEach(movie => {
    const{title,poster_path,vote_average,overview} = movie;
    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');
    movieEl.innerHTML = `
    <img src="${IMG_URL+poster_path}" alt="${title}">

    <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getColor(vote_average)}">${vote_average}</span>
    </div>
    <div class="overview">
      ${overview}
    </div>`;
    main.appendChild(movieEl);
  });
}

function getColor(vote){
  if(vote>=8){
    return 'green';
  }else if(vote>=5){
    return 'orange';
  }else{
    return 'red';
  }
}
best.addEventListener('click', function handleClick() {
  var bestStatus=true;
  best.textContent = 'Button clicked';
});

kid.addEventListener('click', function handleClick() {
  const Second_URL='/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&';

});



// const http = require('http');

// const hostname = '10.255.252.14';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
