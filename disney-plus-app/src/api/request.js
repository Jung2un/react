const requests = {
    fetchNowPlaying: "movie/now_playing",
    fetchTrending: "/trending/all/week", 
    fetchTopRated: "/movie/top/rated",
    fetchActionMovies: "/discover/movie?with_genres=28",
    fetchComedyMovies: "/discover/movie?with_genres=35",
    fetchHorrorMovies: "/discover/movie?with_genres=27",
    fetchRomanceMovies: "/discover/movie?with_genres=10749",
    fetchDocumenttaries: "/discover/movie?with_genres=99",
}

export default requests;