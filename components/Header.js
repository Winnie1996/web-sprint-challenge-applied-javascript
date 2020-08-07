// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function coolHeader(){
    //Creating my elements
    const header = document.createElement('div')
    const date = document.createElement('span')
    const h1 = document.createElement('h1')
    const temp = document.createElement('span')

    //Adding Classes
    header.classList.add('header')
    date.classList.add('date')
    temp.classList.add('temp')

    //Text Contents
    date.textContent = "July 7, 2020"
    h1.textContent = 'Pacific NorthWest Times'
    temp.textContent = 'It\s SummerTime Boys'

    // date.textContent = 'MARCH 28, 2019';
    // h1.textContent = 'Lambda Times';
    // temp.textContent = '98 degrees';
    

    //Append
    header.appendChild(date)
    header.appendChild(h1)
    header.appendChild(temp)

    return header;

}


const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(coolHeader())