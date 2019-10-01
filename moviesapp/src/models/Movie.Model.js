class Movie {
    constructor(res) {
        this.title = res.title;
        this.body = res.body;
        this.releaseYear = res.releaseYear;
        this.moviesPoster = res.moviesPoster;
        this.ticketPrice = res.ticketPrice;
    }
}

export default Movie;
