var inputval = document.querySelector("#cityinput");
var btn = document.querySelector("#add");
var city = document.querySelector("#cityoutput");
var descrip = document.querySelector("#description");
var temp = document.querySelector("#temp");
var wind = document.querySelector("#wind")
console.log(city.value)

apik = "d4f531be8e2fb8b34fb4978e6af0d5eb"

// Kelvin to celcious
function convertion(val) {
    return (val - 273).toFixed(2)
}

// when you click on the button
btn.addEventListener('click', function () {

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=` + inputval.value + '&appid=' + apik)

        .then(res => res.json())

        .then(data => {
            

            var nameval = data['name']
            var descrip = data['weather'][0]['description']
            var temperature = data['main']['temp']
            var wndspd = data['wind']['speed']

            city.innerHTML = `Weather of <span> ${nameval} </span>`
            temp.innerHTML = `Temperature: <span>${convertion(temperature)}C</span>`
            description.innerHTML = `Sky Condition: <span>${descrip}</span>`
            wind.innerHTML = `Wind Speed: <span>${wndspd} km/h</span>`
            console.log("Hello")
            console.log(data)

        })
        .catch(err => alert('Please enter city name'))
})
