//fetch('https://www.loc.gov/' + formatInput + '/?q=' + searchInput + '&fo=json')


var queryString = document.location.search;
var searchName = queryString.split('=')[1];
searchName = searchName.split('&')[0];
var formatName = queryString.split('=')[2];
//need to parse url to get inputs
//split string w/ &s for instance. location.search api


var request = 'https://www.loc.gov/' + formatName + '/?q=' + searchName + '&fo=json';

var searchReturn

fetch(request)
    .then(response => response.json())
    .then(data => {console.log(data);
    searchReturn = data;
    searchReturn = JSON.parse(searchReturn);
    searchReturn = searchReturn.results;
    return searchReturn;
    })

function displayData(data) {
    console.log(data.results);
}


    
//probably relevant returned fields :
// - id
// - title
// - mime_type
// - description
