//async function newFormHandler(event) {
//   event.preventDefault();
//   const rating = document.querySelector('# add me later ').value;
//   const review = document.querySelector('# add me later ').value;
//   const movieID = document.querySelector('# add me later ').value;
//   const userID = document.querySelector('# add me later ').value;

// Send fetch request to add a new review
//   const response = await fetch(`/api/review`, {
//     method: 'POST',
//     body: JSON.stringify({
//        rating,
//        review,
//        movieID,
//        userID
//      }),
//      headers: {
//        'Content-Type': 'application/json',
//      },
//    });
//if the review is added, the 'all' template will be rerendered
//    if (response.ok) {
//      document.location.replace('/');
//    } else {
//     alert('Failed to add review');
//    }
//  }

//  document.querySelector('. add me later ').addEventListener('submit', newFormHandler);
