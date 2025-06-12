const input = document.querySelector(".inputt");
const currentWeather = document.querySelector(".current-weather");
const currentLocation = document.getElementById("current-location");
const list = document.querySelector(".list");
input.addEventListener("keyup", (event) => {
     if(event.key === "Enter"){
          const cityName = event.target.value.trim();
          getWeatherDetails(cityName);
          // console.log(cityName)
          input.value = input.ariaPlaceholder;
     }
})
const button = document.querySelector(".location");
button.addEventListener("click", (hodisa) => {
    let y =  prompt("Shaxringiz yoki davlatingiz nomini kiriting ...");
     getWeatherDetails(y);
     // console.log(y)
})
const API_KEY = `00632439e6fb46f0806111812250403`;
const API_URL = `http://api.weatherapi.com/v1/forecast.json`;
const getWeatherDetails = async (cityName) => {
     const response = await fetch(`${API_URL}?key=${API_KEY}&q=${cityName}`);
     const data = await response.json();
     console.log(data);
     const imageIcon = data.current.condition.icon;
     const description = data.current.condition.text;
     const temperature = data.current.temp_c;
     currentWeather.innerHTML = `
     <img src=${imageIcon} alt="" class="current-icon">
     <h1 class="current-degree">${temperature} &deg;C</h1>
     <p class="current-description">${description}</p>`
     // console.log(imageIcon)
          // const name = data.location.name;
          const region = data.location.region;
          const country = data.location.country;
          const mintaqa = data.location.tz_id;
          const localTime = data.location.localtime;
     currentLocation.innerHTML = `               
                         <h2 class="namecountry">${country}</h2><br>
                         <h3 class="nameregion">${region}</h3><br>
                         <p class="nametdz">${mintaqa}</p><br>
                         <p class="localtime">${localTime}</p><br>`
     console.log(region);
     const hour = data.forecast.forecastday[0].hour[0].time;
     const degree = data.forecast.forecastday[0].hour[0].temp_c;
     const condition = data.forecast.forecastday[0].hour[0].condition.icon;
     const text = data.forecast.forecastday[0].hour[0].condition.text;
     const hour1 = data.forecast.forecastday[0].hour[4].time;
     const degree1 = data.forecast.forecastday[0].hour[4].temp_c;
     const condition1 = data.forecast.forecastday[0].hour[4].condition.icon;
     const text1 = data.forecast.forecastday[0].hour[4].condition.text;

     const hour2 = data.forecast.forecastday[0].hour[8].time;
     const degree2 = data.forecast.forecastday[0].hour[8].temp_c;
     const condition2 = data.forecast.forecastday[0].hour[8].condition.icon;
     const text2 = data.forecast.forecastday[0].hour[8].condition.text;

     const hour3 = data.forecast.forecastday[0].hour[12].time;
     const degree3 = data.forecast.forecastday[0].hour[12].temp_c;
     const condition3 = data.forecast.forecastday[0].hour[12].condition.icon;
     const text3 = data.forecast.forecastday[0].hour[12].condition.text;

     const hour4 = data.forecast.forecastday[0].hour[16].time;
     const degree4 = data.forecast.forecastday[0].hour[16].temp_c;
     const condition4 = data.forecast.forecastday[0].hour[16].condition.icon;
     const text4 = data.forecast.forecastday[0].hour[16].condition.text;

     const hour5 = data.forecast.forecastday[0].hour[20].time;
     const degree5 = data.forecast.forecastday[0].hour[20].temp_c;
     const condition5 = data.forecast.forecastday[0].hour[20].condition.icon;
     const text5 = data.forecast.forecastday[0].hour[20].condition.text;

     
     // console.log(condition);
     list.innerHTML = `<li class="list-hour">
     <p style="margin: 10px;">${hour} </p>
     <img src=${condition} style="width: 80px;height: 100px;" alt="">
     <h1 style="font-size: 18px;margin: 10px;">${degree} &deg;C</h1>
     <p>${text} </p></li>
<li class="list-hour">
     <p style="margin: 10px;">${hour1}</p>
     <img src=${condition1} style="width: 80px;height: 100px;" alt="">
     <h1 style="font-size: 18px;margin: 10px;">${degree1} &deg;C</h1>
     <p>${text1} </p></li>
<li class="list-hour">
     <p style="margin: 10px;">${hour2}</p>
     <img src=${condition2} style="width: 80px;height: 100px;" alt="">
     <h1 style="font-size: 18px;margin: 10px;">${degree2} &deg;C</h1>
     <p>${text2} </p></li>
<li class="list-hour">
     <p style="margin: 10px;">${hour3} </p>
     <img src=${condition3} style="width: 80px;height: 100px;" alt="">
     <h1 style="font-size: 18px;margin: 10px;">${degree3} &deg;C</h1>
     <p>${text3} </p></li>
<li class="list-hour">
     <p style="margin: 10px;">${hour4}</p>
     <img src=${condition4} style="width: 80px;height: 100px;" alt="">
     <h1 style="font-size: 18px;margin: 10px;">${degree4} &deg;C</h1>
     <p>${text4} </p></li>
<li class="list-hour">
     <p style="margin: 10px;">${hour5}</p>
     <img src=${condition5} style="width: 80px;height: 100px;" alt="">
     <h1 style="font-size: 18px;margin: 10px;">${degree5} &deg;C</h1>
     <p>${text5} </p></li>`
}



