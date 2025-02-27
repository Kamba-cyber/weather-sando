const api_key = '3e199a94cec7db6b294fa6b38afcff94';
const city_input = document.getElementById('city-input');
const get_weather_btn = document.getElementById('get-weather-btn');
const current_weather_description = document.getElementById('current-weather-description');
const current_temperature = document.getElementById('current-temperature');
const current_humidity = document.getElementById('current-humidity');
const current_wind_speed = document.getElementById('current-wind-speed');
const forecast_table_body = document.getElementById('forecast-table-body');
const hourly_forecast_chart = document.getElementById('hourly-forecast-chart');
const weather_alerts_list = document.getElementById('weather-alerts-list');

get_weather_btn.addEventListener('click', () => {
    const city_name = city_input.value.trim();

    if (city_name) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}`)
            .then(response => response.json())
            .then(data => {
                const current_weather = data.weather[0];
                const current_temp = data.main.temp;
                const current_humidity = data.main.humidity;
                const current_wind_speed = data.wind.speed;

                current_weather_description.innerText = current_weather.description;
                current_temperature.innerText = `${current_temp}°C`;
                current_humidity.innerText = `${current_humidity}%`;
                current_wind_speed.innerText = `${current_wind_speed} m/s`;

                fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city_name}&appid=${api_key}`)
                    .then(response => response.json())
                    .then(data => {
                        const forecast_data = data.list;

                        forecast_table_body.innerHTML = '';

                        forecast_data.forEach((forecast, index) => {
                            if (index % 8 === 0) {
                                const forecast_date = new Date(forecast.dt * 1000);
                                const forecast_temp = forecast.main.temp;
                                const forecast_weather = forecast.weather[0].description;

                                const row = document.createElement('tr');
                                row.innerHTML = `
                                    <td>${forecast_date.toLocaleDateString()}</td>
                                    <td>${forecast_temp}°C</td>
                                    <td>${forecast_weather}</td>
                                `;

                                forecast_table_body.appendChild(row);
                            }
                        });
                    })
                    .catch(error => console.error(error));

                fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${api_key}`)
                    .then(response => response.json())
                    .then(data => {
                        const hourly_forecast_data = data.hourly;

                        const ctx = hourly_forecast_chart.getContext('2d');
                        const chart = new Chart(ctx, {
                            type: 'line',
                            data: {
                                labels: hourly_forecast_data.map((forecast, index) => `${index}h`),
                                datasets: [{
                                    label: 'Temperature',
                                    data: hourly_forecast_data.map(forecast => forecast.temp),
                                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                                    borderColor: 'rgba(255, 99, 132, 1)',
                                    borderWidth: 1
                                }]
                            },
                            options: {
                                scales: {
                                    yAxes: [{
                                        ticks: {
                                            beginAtZero: true
                                        }
                                    }]
                                }
                            }
                        });
                    })
                    .catch(error => console.error(error));

                fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${api_key}`)
                    .then(response => response.json())
                    .then(data => {
                        const weather_alerts_data = data.alerts;

                        weather_alerts_list.innerHTML = '';

                        weather_alerts_data.forEach(alert => {
                            const alert_element = document.createElement('li');
                            alert_element.innerText = alert.description;

                            weather_alerts_list.appendChild(alert_element);
                        });
                    })
                    .catch(error => console.error(error));
            })
            .catch(error => console.error(error));
    } else {
        alert('Please enter a city name');
    }
});