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

