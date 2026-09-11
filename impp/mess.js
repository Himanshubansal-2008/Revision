const express = require("express");
const users = require("/users")

const app = express();

app.use('/users', users)


app.get("/movies", (req, res) => {
  res.send("List of movies");
});

app.get("/movies/:movieId", (req, res) => {
  res.send(`Movie with id ${req.params.movieId}`);
});

app.post("/movies", (req, res) => {
  res.send("Creating movies");
});

app.delete("/movies/:movieId", (req, res) => {
  res.send(`Deleting movies with id ${movieId}`);
});



app.get("/reviews", (req, res) => {
  res.send("List of reviews");
});

app.get("/reviews/:reviewId", (req, res) => {
  res.send(`Review with id ${req.params.reviewId}`);
});

app.post("/reviews", (req, res) => {
  res.send("Creating reviews");
});

app.delete("/reviews/:reviewId", (req, res) => {
  res.send(`Deleting reviews with id ${reviewId}`);
});

app.listen(3000);

