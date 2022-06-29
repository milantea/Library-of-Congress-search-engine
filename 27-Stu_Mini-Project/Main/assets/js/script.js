// format handles the input from the dropdown menu 
//

document.getElementById("clickMe").addEventListener("click", search);

function search (event) {
    event.preventDefault();
    searchInput = document.getElementById("search-input").value;
    formatInput = document.getElementById("format-input").value;

    // localStorage.setItem('search', searchInput);
    // localStorage.setItem('format', formatInput);
    location.href = './search-results.html?search=' + searchInput + '&format=' + formatInput;


}

//After fetching with the above and adding &, ?, etc
//We'll populate elements fo the search-results html with
//whatever the heck the JSON gives us
