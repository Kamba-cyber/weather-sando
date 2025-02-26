const api_key = '3e199a94cec7db6b294fa6b38afcff94';
const city_name = document.getElementById('city-input');
const get_weather_btn = document.getElementById('get-weather-btn');
const weather_data_div = document.getElementById('weather-data');

get_weather_btn.addEventListener('click', () =>
    {
        const city_name = city_input.value.trim();
        if (city_name){
            fetch('https://api.openweathermap.org/data/2.5/weather?q={city_name}&appid={API_key}')
                .then(response => response.json())
                .then(data =>{
                    const weather_description = data.weather[0].description;
                    const temperature = data.main.temp;
                    const humidity = data.main.humidity;
                    weather_data_div.innerHTML = '' +
                        '<h2>Weather in ${city_name}</h2>' +
                        '<p>Description: ${weather_description}</p>' +
                        '<p>Temperature: ${temperature}  °C</p>' +
                        '<p>Humidity: ${humidity}%</p>';
                })
                .catch(error => console.error(error));
        } else {
            alert('Please enter a city name');
        }
    }
)