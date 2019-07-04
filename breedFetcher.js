const request = require('request');
request('https://api.thecatapi.com/v1/breeds/search?q=sib', (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  const data = JSON.parse(body);
  console.log(data);
  console.log(typeof data);
});


const breedName = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(url, (error, resp, body) => {
  // console.log(body);
  // console.log(typeof body);

  if (error) {
    return console.log('Failed to request details: ', error);
  }

  const data = JSON.parse(body);
  // console.log(data);

  const breed = data[0];
  if (breed) {
    console.log(breed.description);
  } else {
    console.log(`Failed to find breed ${breedName}`);
  }
});