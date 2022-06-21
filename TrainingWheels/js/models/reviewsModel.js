let reviews;

export function init() {
    reviews = localStorage.reviews ? JSON.parse(localStorage.reviews) : [];
  }

  export function add(username, txtReview, rating , photo) {
    reviews.push(new Review(username, txtReview, rating , photo));
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }

export function getReviews() {
    return reviews;
}

export default class Review{
    username =""
    txtReview =""
    rating = 0
    photo=""

    constructor (username, txtReview, rating, photo) {
        this.username = username;
        this.txtReview = txtReview;
        this.rating = rating;
        this.photo = photo;
    }

 
}