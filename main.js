// Define your API key and base URL for the OpenWeatherMap API
const API_KEY = '7d00338e198aa371acbbeafbeca319de'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/'

// Initialize variables to store longitude and latitude
var lon,lat;


// Get references to HTML elements
let city = document.getElementById('city')
let temp = document.getElementById('temp')
let Cname = document.getElementById('name')
let wind = document.getElementById('wind')
let pres = document.getElementById('perc')
let hum = document.getElementById('hum')
let img = document.getElementById('icon')


// Function to get current weather based on user's location
function getCurrent() {
    navigator.geolocation.getCurrentPosition(async (result) =>{
        console.log(result);
        // Retrieve latitude and longitude from the geolocation result
        const l = result.coords
        lon = l.longitude
        lat = l.latitude
                                                                                // console.log({lon,lat});

        // Construct the API URL to fetch weather data based on latitude and longitude
        const data = await fetch(`${BASE_URL}weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
        console.log(data);
        if (data.status == 200) {
                                                                                // console.log(await data.json());
            const info = await data.json();
                                                                                console.log(info);

            // Update HTML elements with weather information
            Cname.innerHTML = info.name
            temp.innerHTML = info.main.temp
            wind.innerHTML = info.wind.speed
            pres.innerHTML = info.main.pressure
            hum.innerHTML = info.main.humidity
        }
    })
}


// Async function to search for weather data based on a city name
async function search() {

        const data = await fetch(`${BASE_URL}weather?q=${city.value}&appid=${API_KEY}`)
                                                                                                // console.log(data);
        if (data.status == 200){ 
        const info = await data.json();
                                                                                                // console.log(info);
    
    
        // Update HTML elements with weather information
        Cname.innerHTML = info.name
        temp.innerHTML = info.main.temp
        wind.innerHTML = info.wind.speed
        img.src = `https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`
        pres.innerHTML = info.main.pressure
        hum.innerHTML = info.main.humidity
}
}

// Call the getCurrent function to fetch weather data based on the user's location
getCurrent()

