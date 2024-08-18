require('dotenv').config();

let temperatura = document.getElementById('tempo');

navigator.geolocation.getCurrentPosition(function (userPosition) {
    const latitude = userPosition.coords.latitude;
    const longitude = userPosition.coords.longitude;
    
    showTemperature(latitude, longitude);
}, function (error) {
    temperatura.innerText = 'Tempo indisponível!';
})

async function showTemperature(lat, lon) {
    const api = process.env.API_KEY_WEATHER;

    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}&units=metric&lang=pt_br`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();

        const {weather, name} = data;
        const description = weather[0].description.toUpperCase();
        const temperature = parseInt(data.main.temp);

        const iconTemp = document.createElement('img');
        iconTemp.setAttribute('src', `http://openweathermap.org/img/wn/${weather[0].icon}.png`);
        
        temperatura.innerText = `${name}\n${temperature}ºC - ${description}`;

        temperatura.appendChild(iconTemp);
    } catch (error) {
        console.log(error);
    }
}