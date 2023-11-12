const value_ = document.querySelector("input")
const submit = document.querySelector("#submit")
const key = "&appid=6351029f1ceba5d6baa83c880e57b7ee"
const url = "https://api.openweathermap.org/data/2.5/weather?q="
const city = document.querySelector("#city")
const temperature = document.querySelector("#temperature")
const status_ = document.querySelector("#status")
const highest = document.querySelector("#highest")
const lowest = document.querySelector("#lowest")
const photo1_1 = document.querySelector("img")
const click1_1 = document.querySelector("#click1_1")
const click2_1 = document.querySelector("#click2_1")
const click3_1 = document.querySelector("#click3_1")
const click4_1 = document.querySelector("#click4_1")

click1_1.addEventListener('click',function (e) {
    weather("hyderabad")
})

click2_1.addEventListener('click',function (e) {
    weather("london")
})
click3_1.addEventListener('click',function (e) {
    weather("Sydney")
})
click4_1.addEventListener('click',function (e) {
    weather("Chicago")
})
submit.addEventListener('click',function (e) {
    let data = value_.value;
    value_.value = '';
    weather(data)

})

async function weather(input) {
    try {
        console.log(input);
        const response = await fetch(`${url+input+key}`)
        const data_ = await response.json()    
        console.log(data_);
        city.innerHTML = `${data_.name}`;
        temperature.innerHTML = `${(Math.round(data_.main.temp)/10).toPrecision(2)}`
        status_.innerHTML = `${data_.weather[0].main}`
        highest.innerHTML = `${(Math.round(data_.main.temp_max)/10).toPrecision(2)}<sup>0</sup>`;
        lowest.innerHTML=`${(Math.round(data_.main.temp_min)/10).toPrecision(2)}<sup>0</sup>`;
        if (data_.weather[0].main == "Clouds") {
            photo1_1.src = "clouds.png"
        } else if(data_.weather[0].main == "Clear") {
            photo1_1.src = "clear.png"
        }
        else if(data_.weather[0].main == "Rain") {
            photo1_1.src = "rain.png";
        }
        else if(data_.weather[0].main == "Drizzle") {
            photo1_1.src = "drizzle.png";
        }
            else if(data_.weather[0].main == "Mist") {
            photo1_1.src = "mist.png";
        }


    } catch (error) {
        console.log(error);
    }
}