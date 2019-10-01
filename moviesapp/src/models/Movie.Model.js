class Movie {
    constructor(res) {
        this.title = res.title;
        this.body = res.body;
        this.release = res.release;
        this.poster = res.poster;
        this.price = res.price;
    }
}

export default Movie;
