const apikey="56061f3090bcdbff496a8aea064c9e3f"
const value = "Moscow"
axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=${apikey}`).then((res)=>{
console.log(res.data);
$(".weather_name h1").html(res.data.name)
$(".icon img").attr("src",`http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`)
$(".weather_name p").html(res.data.weather[0].description)
$(".weather_temp h1").html(`${res.data.main.temp} ℃`)
$(".weather_temp div").html(`${res.data.main.feels_like} ℃`)
$(".humidity h2").html(`${res.data.main.humidity} %`)
$(".windspeed h2").html(`${res.data.wind.speed} m/s`)
$(".pressure h2").html(res.data.main.pressure)
})
