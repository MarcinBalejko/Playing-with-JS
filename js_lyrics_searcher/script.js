const form = document.getElementById("form");
const search = document.getElementById("search");
const result = document.getElementById("result");
const more = document.getElementById("more");

const apiURL = "https://api.lyrics.ovh";

// Search by song or artist

//THEN. method----------------------------------------

// function searchSongs(term) {
//   fetch(`${apiURL}/suggest/${term}`)
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// }
//------------------------------------------

// ASYNC AWAIT method
async function searchSongs(term) {
  const res = await fetch(`${apiURL}/suggest/${term}`);

  const data = await res.json();

  console.log(data);
}

// Event listeners
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value.trim();

  if (!searchTerm) {
    alert("Please type in a search term");
  } else {
    searchSongs(searchTerm);
  }
});
