const axios = require('axios');

const url = 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

axios.get(url)
  .then(function (response) {
    let quoteContent = response.data[0].content.replace(/\<p>|<\/p>/g, '');
    quote.innerHTML = quoteContent;
    author.innerHTML = `- ${response.data[0].title}`;
  })
  .catch(function (error) {
    console.log(error);
  });