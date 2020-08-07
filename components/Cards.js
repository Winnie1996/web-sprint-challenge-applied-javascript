// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.


// Location
const cardHolder = document.querySelector('.cards-container')

// Create Elements

const cardMaker = function(data){
const parentCard = document.createElement('div')
const headline = document.createElement('div')
const author = document.createElement('div')
const imgContainer = document.createElement('div')
const image = document.createElement('img')
const name = document.createElement('span')

// Add Classes
parentCard.classList.add('card')
headline.classList.add('headline')
author.classList.add('author')
imgContainer.classList.add('img-container')
image.src = data.authorPhoto


// Text Content
  headline.textContent = data.headline;
  name.textContent = data.authorName;


//Append
parentCard.appendChild(headline)
parentCard.appendChild(author)
author.appendChild(imgContainer)
imgContainer.appendChild(image)
author.appendChild(name)

return parentCard

};

axios.get('https://lambda-times-api.herokuapp.com/articles')
.then(function(response){
    const newArticles = Object.values(response.data.articles)

    newArticles.forEach(function(item){
        item.forEach(function(extraItems){
            const newArticles = cardMaker(extraItems)
            cardHolder.appendChild(newArticles)
        })
    })
})

.catch(function(error){
    console.log(`WOOPS CARD ERROR BUD: ${error}`)
})