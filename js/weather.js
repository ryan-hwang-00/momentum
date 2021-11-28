const API_KEY = '7cbd6392bf0e853f537925b6e16439ea'

function onGeoOk(position){
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    console.log("You live in ", lat, lon)
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText = data.name
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
        }
    )
    console.log(url);

}

function onGeoError(){
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)