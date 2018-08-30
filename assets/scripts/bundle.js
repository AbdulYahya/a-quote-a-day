(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{}]},{},[1]);
