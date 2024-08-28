let weatherApi = fetch('https://goweather.herokuapp.com/weather/karachi');

console.log(weatherApi);
weatherApi.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error)=>{
    console.log(`wetherApi is rejected ${error}`);
})


let Promise = new Promise(function(resolve,rejected){

})

let Pro = new Promise((resolve, reject) => {
    console.log('Promise is pending...');
    setTimeout(()=>{
        console.log('I am a Promise and I am a Resolve...');
        resolve(true);
        // reject(new Error("Promise is Rejected...."));
    },3000)  
})
Pro.then((data) => {
    console.log(`Promise is Resolve...${data}`);
},(error)=>{
    console.log(`Error ${error}`);
})












const form = document.querySelector('form');
const search = document.querySelector('#search');
const weather = document.querySelector('#weather');


async function  getWeather (city){
    const url = `https://goweather.herokuapp.com/weather/${city}`
    const response = await fetch(url);  
    const data = await response.json();
    console.log(data);
    return showWeather(data);
}

function showWeather(data){
    weather.innerHTML = `
    <div>
    <img src="https://openweathermap.org/img/wn/04n@2x.png" alt="">
    </div>
    <div>
    <h2>${data.temperature}</h2>
    <h3>${data.description}</h3>
    <h3>wind : ${data.wind}</h3>
    </div>
    `
}

form.addEventListener('submit',function(event){
    getWeather(search.value)
    event.preventDefault();
})







