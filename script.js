const apiKey = '58eb5bd5cbf4ca541ef7bb1a8dbf93f5'; 
const button = document.getElementById('getWeather');
const output = document.getElementById('weatherOutput');

button.addEventListener('click', () => {
    const city = document.getElementById('city').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Check the JSON structure
            output.innerHTML = `
                <h2>Weather in ${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>

            `;
        })
        .catch(error => {
            console.error('Error:', error);
            output.innerHTML = `<p>Unable to fetch data. Please check the city name.</p>`;
        });
});
