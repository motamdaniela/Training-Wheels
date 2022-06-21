let reviews;

export function init() {
    reviews = localStorage.reviews ? JSON.parse(localStorage.reviews) : [];
  }

  export function add(username, txtReview, rating) {
    reviews.push(new Review(username, txtReview, rating));
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }

export function getReviews() {
    return reviews;
}

export default class Review{
    username =""
    txtReview =""
    rating = 0

    constructor (username, txtReview, rating) {
        this.username = username;
        this.txtReview = txtReview;
        this.rating = rating;
    }

 
}