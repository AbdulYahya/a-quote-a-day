const axios = require('axios');
const url = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';

axios.get(url)
  .then(function (response) {
    console.log('QuoteOfTheDay_' + response.data[0].ID);
    console.log(response.data[0].title);
    console.log(response.data[0].content);
  })
  .catch(function (error) {
    console.log(error);
  });