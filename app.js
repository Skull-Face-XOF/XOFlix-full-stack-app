async function loadMovies() {
    const file = await fetch("data/movies.json");
    const movies_list = await file.json();
    return movies_list;
}

function clusterMovies(movies) {
    return movies.map(movie => {
        const score = movie.action_level + movie.complexity;

        let cluster;
        if (score > 140) cluster = "High-Intensity Cluster";
        else if (score > 80) cluster = "Medium-Intensity Cluster";
        else cluster = "Low-Intensity Cluster";

        return { ...movie, cluster };
    });
}

function predictPopularity(movie) {
    return Math.round(movie.rating * 10 + movie.complexity * 0.5);
}

document.getElementById("recommendBtn").addEventListener("click", async () => {
    const movies = await loadMovies();
    const genre = document.getElementById("genre").value;
    const selected_movies = movies.filter(movie => movie.genre === genre);
    const results = document.getElementById("results");

    results.innerHTML = "";

    const clustered = clusterMovies(selected_movies);

    clustered.slice(0, 5).forEach(movie => {

        const predicted = predictPopularity(movie);

        const item = document.createElement("div");                

        item.className = "movie";
        item.innerHTML = `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Title: ${movie.title}</h5>
                    <p class="card-text">Genre: ${movie.genre}</p>
                    <p class="card-text">${movie.description}</p>
                    <p class="card-text">${movie.year}</p>
                    <p class="card-text">${movie.rating}/5</p>
                    <p class="card-text">Duration: ${movie.duration_minutes}</p>
                </div>
            </div>
        `;
        results.appendChild(item);
    });
});