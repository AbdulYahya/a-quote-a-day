const url = 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';

const fetchQuote = async () => 
  await (await fetch(url)).json();

fetchQuote()
  .then(
    data => { 
      let wrapper = document.querySelector('.wrapper');
      let quoteContent = data[0].content.replace(/\<p>|<\/p>/g, '');
      wrapper.innerHTML = `<h1 class="quote">${quoteContent}</h1>` +
                          `<p class="author">- ${data[0].title}</p>`;
    })
  .catch(reason => console.log(reason.message));