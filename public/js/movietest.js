const theMovieDb = require("../../library/themoviedb");

async function testme() {
  const trying = await theMovieDb.search.getMovie(
    { query: "Fight%20Club" },
    successCB,
    errorCB
  );
  console.log(data);
}
function successCB(data) {
  console.log("Success callback: " + data);
}

function errorCB(data) {
  console.log("Error callback: " + data);
}

testme();
