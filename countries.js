let searchBtn = document.getElementById("search-btn");
let countryInput = document.getElementById("country-input");
let resultBox = document.getElementById("result");
searchBtn.addEventListener("click", () => {
  let countryName = countryInput.value;
  let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  fetch(finalUrl).then((res) => res.json())
  .then((data) => {
    resultBox.innerHTML = `
      <img src='${data[0].flags.png}' class='country-flag'/>
      <h3 class='country-name'>${data[0].name.official}</h3>
      <h5 class='country-capital'>Capital: <span>${data[0].capital[0]}</span></h5>
      <h5 class='country-continents'>Continent: <span>${data[0].continents[0]}</span></h5>
      <h5 class='country-population'>Population: <span>${data[0].population}</span></h5>
      <h5 class='country-population'>Languages: <span>${Object.values(data[0].languages).toString().split(",").join(", ")}</span></h5>
    `
  }).catch(() => {
    if(countryName.length === 0){
      resultBox.innerHTML = `<h3 class='error'>The Input Field Cannot Be Empty!</h3>`
    }else{
      resultBox.innerHTML = `<h3 class='error'>Please Enter A Valid Country Name!</h3>`
    }
  })
})