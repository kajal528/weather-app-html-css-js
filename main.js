const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = config.API_KEY;

const getCurrentWeather = async(city)=>{
    const result = await fetch(`${apiURL}${city}&appid=${apiKey}`)
    const data = await result.json();
    if(result.status==200){
        document.querySelector('.error').style.display = 'none';
        document.querySelector('.weather-icon').style.display = 'block';
        document.querySelector('.humidity-windspeed-container').style.display = 'flex';
        document.querySelector('.temp-container').style.display = 'flex';
        document.querySelector('.weather-icon').src =  `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        document.querySelector('.weather-description').innerHTML = data.weather[0].main;
        document.querySelector('.temperature').innerHTML = Math.round(data.main.temp)+'°C';
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.humidity-value').innerHTML = data.main.humidity+'%';
        document.querySelector('.wind-value').innerHTML = data.wind.speed+'km/h';
    }
    else if(result.status==404){
        document.querySelector('.weather-icon').style.display = 'none';
        document.querySelector('.humidity-windspeed-container').style.display = 'none';
        document.querySelector('.temp-container').style.display = 'none';
        document.querySelector('.error').style.display = 'block';
    }      
}

const searchInput = document.querySelector('.search-container input');
const search = document.querySelector('.search-icon');
search.addEventListener('click',()=>{
    getCurrentWeather(searchInput.value)
})