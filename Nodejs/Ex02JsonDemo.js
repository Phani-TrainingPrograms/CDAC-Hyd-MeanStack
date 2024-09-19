const data = require("./movies.json");
//console.log(data);
//mockaroo
for(const movie of data)
    console.log(`${movie.Title} directed by ${movie.Director}`)