const apiKey = 'b15ac41c1f79d81512a698dd7464ed34';
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".Humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".Wind").innerHTML = data.wind.speed + "Km/hr";
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

    }
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

