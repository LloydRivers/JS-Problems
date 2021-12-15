// Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
let countries = [
    {country: 'China'},
    {country: 'India'},
    {country: 'United States of America'},
    {country: 'Indonesia'},
    {country: 'Brazil'},
    {country: 'Pakistan'},
    {country: 'Nigeria'},
    {country: 'Bangladesh'},
    {country: 'Russian Federation'},
    {country: 'Japan'}
    ]

    function categorizeCountries(arr){
       
    const newArr = arr.filter(element=>{
        if(element.country.includes('land') || element.country.includes('ia') || element.country.includes('island') || element.country.includes('stan')){
            return element.country
        } 
    })
    return newArr
  
}
    console.log(categorizeCountries(countries));