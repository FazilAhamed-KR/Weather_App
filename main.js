const API_KEY = '7d00338e198aa371acbbeafbeca319de'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/'

var lon,lat;

let city = document.getElementById('city')
let temp = document.getElementById('temp')
let Cname = document.getElementById('name')
let wind = document.getElementById('wind')
let pres = document.getElementById('pres')
let hum = document.getElementById('hum')
let img = document.getElementById('icon')

function getCurrent() {
    navigator.geolocation.getCurrentPosition(async (result) =>{
        // console.log(result);
        const l = result.coords
        lon = l.longitude
        lat = l.latitude
        console.log({lon,lat});
        const data = await fetch(`${BASE_URL}weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
        console.log(data);
        if (data.status == 200) {
            // console.log(await data.json());
            const info = await data.json();
            console.log(info);
            Cname.innerHTML = info.name
            temp.innerHTML = info.main.temp
            wind.innerHTML = info.wind.speed
            pres.innerHTML = info.main.pressure
            hum.innerHTML = info.main.humidity
        }
    })
}

async function search() {

        const data = await fetch(`${BASE_URL}weather?q=${city.value}&appid=${API_KEY}`)
        console.log(data);
        if (data.status == 200)

{
    const info = await data.json();
            console.log(info);
            Cname.innerHTML = info.name
            temp.innerHTML = info.main.temp
            wind.innerHTML = info.wind.speed
            img.src = `https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`
            pres.innerHTML = info.main.pressure
            hum.innerHTML = info.main.humidity
}
}
getCurrent()

// Define an async function to use the search function
// async function displayWeather() {
//     const data = await fetch(`${BASE_URL}weather?q=${city.value}&appid=${API_KEY}`)
//     console.log(data);
//     if (data.status == 200)
//     try {
//         const info = await data.json();
//         console.log(info);
//         Cname.innerHTML = info.name
//         temp.innerHTML = info.main.temp
//         wind.innerHTML = info.wind.speed
//         pres.innerHTML = info.main.pressure
//         hum.innerHTML = info.main.humidity
//       await search();
//     } catch (error) {
//       // Handle any errors that might occur during the fetch or data processing
//       console.error('An error occurred:', error);
//     }
//   }
  
  // Call the displayWeather function to start fetching and displaying weather data
//   displayWeather();
  

