// Get the timeline scrollbar element
const timelineScrollbar = document.querySelector('.timeline-scrollbar');

// Add event listener to each hourly forecast card
const hourlyForecastCards = document.querySelectorAll('.hourly-forecast-card');
hourlyForecastCards.forEach((card, index) => {
    card.addEventListener('click', () => {
        // Show the details of the selected hourly forecast
        const details = card.querySelectorAll('p');
        details.forEach((detail) => {
            console.log(detail.textContent);
        });
    });
});

// Add scroll event listener to the timeline scrollbar
timelineScrollbar.addEventListener('scroll', () => {
    // Get the current scroll position
    const scrollPosition = timelineScrollbar.scrollLeft;
    // Update the scroll position as needed
});
// Get the weather container element
const weatherContainer = document.querySelector('.weather-container');

// Generate weather elements dynamically
for (let i = 0; i < 5; i++) {
    const weatherElement = document.createElement('div');
    weatherElement.classList.add('weather-element');
    weatherElement.innerHTML = `
        <h2>Weather Element ${i + 1}</h2>
        <p>Temperature: 75°F</p>
        <p>Humidity: 60%</p>
        <p>Wind Speed: 10mph</p>
    `;
    weatherContainer.appendChild(weatherElement);
}

// API Key (replace with your own API key)
const apiKey = '3e199a94cec7db6b294fa6b38afcff94';

// Get the city input element
const cityInput = document.querySelector('#city-input');

// Get the cards container element
const cardsContainer = document.querySelector('.cards-container');

// Function to update the cards with new weather data
function updateCards(data) {
    // Clear the existing cards
    cardsContainer.innerHTML = '';

    // Loop through the weather data and create new cards
    data.list.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');

        cardElement.innerHTML = `
            <h2>${new Date(card.dt * 1000).toLocaleTimeString()}</h2>
            <p>Temperature: ${card.main.temp}°C</p>
            <p>Humidity: ${card.main.humidity}%</p>
            <p>Wind Speed: ${card.wind.speed} m/s</p>
        `;

        cardsContainer.appendChild(cardElement);
    });
}

// Event listener for city input changes
cityInput.addEventListener('input', (e) => {
    const newCity = e.target.value;

    // Make API call to fetch new weather data
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${newCity}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => updateCards(data));
});

// Get the API key and location
const apiKey = '3e199a94cec7db6b294fa6b38afcff94';
const location = 'Lusaka'; // or use geolocation

// Fetch weather data from OpenWeatherMap API
fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    // Update the HTML with the fetched weather data
    const weatherConditions = data.list.map(item => item.weather[0].description);
    const days = data.list.map(item => item.dt_txt);
    const temperatures = data.list.map(item => item.main.temp);

    // Update the HTML elements with the fetched data
    document.getElementById('weather-conditions').innerHTML = weatherConditions.join('<br>');
    document.getElementById('days').innerHTML = days.join('<br>');
    document.getElementById('temperatures').innerHTML = temperatures.join('<br>');
  })
  .catch(error => console.error(error));
