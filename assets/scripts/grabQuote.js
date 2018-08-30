const url = 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

const fetchQuote = async () => 
  await (await fetch(url)).json();

fetchQuote()
  .then(
    data => { 
      let quoteContent = data[0].content.replace(/\<p>|<\/p>/g, '');
      author.innerHTML = `- ${data[0].title}`;
      quote.innerHTML = quoteContent;
    })
  .catch(reason => console.log(reason.message));