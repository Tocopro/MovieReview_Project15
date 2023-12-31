async function newFormHandler(event) {
  event.preventDefault();
  const rating = document.querySelector("#ratinginput").value;
  const review = document.querySelector("#reviewinput").value;
  const movie_id = document.querySelector("#movieinput").value;
  // Send fetch request to add a new review
  const response = await fetch(`/api/review`, {
    method: "POST",
    body: JSON.stringify({
      rating,
      review,
      movie_id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  //if the review is added, the 'all' template will be rerendered
  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to add review");
  }
}

document
  .querySelector(".add-review-form")
  .addEventListener("submit", newFormHandler);
