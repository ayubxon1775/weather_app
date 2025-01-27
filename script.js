const searchInput = document.querySelector('.search-input');

const API_KEY = '63d2691872c9423a9d840102252701';

const getWeatherDetails = (cityName) => {
  const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityName}`;
}

// Handle user input in the search box
searchInput.addEventListener('keyup', (e) => {
  const cityName = searchInput.value.trim();

  if(e.key == 'Enter' && cityName) {
    getWeatherDetails(cityName);
  }
})