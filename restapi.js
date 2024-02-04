// this is an arrow function
const  loadCountryAPI = () => {
//fetch url of rest coutries from website
fetch('https://restcountries.com/v3.1/all')
.then(res => res.json())
.then(data => displayCountries(data))

}
//displaying all countries
const displayCountries = countries => {
      // console.log(countries);
       const countriesHTML = countries.map(country => getcountry(country));
    //displaying div to html
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');
}
//get data and set it to html

const getcountry = (country) =>{
    console.log(country)
    return `
        <div class="country-div">
        <img src="${country.flags.png}">
            <h2>${country.name.common}</h2>
            <hr>
            <h4>Population: ${country.population}</h4>
            <h4>Rgion: ${country.region}</h4>
            <h4>Capital: ${country.capital}</h4>
        </div>
     `   
}
//call the function to get output in console

loadCountryAPI()