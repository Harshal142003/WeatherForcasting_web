const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'da9d40a4e5msh15e518d94c8f962p13aca0jsn92ec48943b48',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather=(city)=>{

    cityName.innerHTML=city;

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then((response) => {
        
        
        console.log(response)

        temp .innerHTML=response.temp
        feels_like .innerHTML=response.feels_like
        humidity .innerHTML=response.humidity
        min_temp.innerHTML=response.min_temp
        max_temp .innerHTML=response.max_temp
        wind_speed .innerHTML=response.wind_speed
        wind_degrees .innerHTML=response.wind_degrees
        sunrise .innerHTML=response.sunrise
        sunset .innerHTML=response.sunset
    })
	.catch(err => console.error(err));
}
const submit=document.getElementById('submit');

submit.addEventListener("click",(e)=>{

    e.preventDefault();
    getWeather(city.value);
})

const getWe=(city,i)=>{

    // cityName.innerHTML=city;

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then((response) => {
        
        
        console.log(response)

        document.getElementById("tableOther").rows[i].cells[7].innerHTML=response.temp
        document.getElementById("tableOther").rows[i].cells[1].innerHTML=response.feels_like
        document.getElementById("tableOther").rows[i].cells[2].innerHTML=response.humidity
        document.getElementById("tableOther").rows[i].cells[4].innerHTML=response.min_temp
        document.getElementById("tableOther").rows[i].cells[3].innerHTML=response.max_temp
        document.getElementById("tableOther").rows[i].cells[9].innerHTML=response.wind_speed
         document.getElementById("tableOther").rows[i].cells[8].innerHTML=response.wind_degrees
        document.getElementById("tableOther").rows[i].cells[5].innerHTML=response.sunrise
        document.getElementById("tableOther").rows[i].cells[6].innerHTML=response.sunset
         document.getElementById("tableOther").rows[i].cells[8].innerHTML=response.wind_speed
    })
	.catch(err => console.error(err));
}

var map1=new Map([
       [1,"Mumbai"],
       [2, "boston"],
       [3,"lucknow"],
       [4,"kolkata"],
       [5,"gujarat"],
       [6,"mumbai"],
])

// console.log(map1.get(2));

for(let i=1;i<=6;i++){
    // for(let j=1;j<=9;j++){
    //     let rownum=i;
    //     let colnum=j;

    //     let x=document.getElementById("tableOther").rows[i].cells[j].innerHTML="hello";

    // }
    getWe(map1.get(i),i);
   
}


// document.getElementById("humidity").innerHTML="hello";
// let x=document.getElementById("tableOther").rows[1].cells[2].innerHTML="hello";
// console.log(x);