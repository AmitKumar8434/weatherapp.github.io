var inputVal=document.querySelector(".inputtext");
var button=document.querySelector(".search-button");
var cityName=document.querySelector(".location");
var temp=document.querySelector(".temp-value");
var desc=document.querySelector(".climate");
var img = document.querySelector(".temp-icon");


window.addEventListener("load",()=>{
    var long;
    var lat;
    navigator.geolocation.getCurrentPosition((position)=>{
        long=position.coords.longitude;
        lat=position.coords.latitude;

        const api=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=408c29a5868f31d539097c662762c8ca`;

        fetch(api).then(res=> res.json())
        .then( data=>{
             //console.log(data);
             cityName.innerHTML='<i class="fas fa-map-marked-alt"></i> '+data.name+" ,"+data.sys.country;
                temp.innerHTML=Math.round(data.main.temp-273)+" °c";
                desc.innerHTML=data.weather[0].main;

                let id=data.weather[0].id;

                if(id<300 && id>200){
                    img.src="006-storm.svg"
                }
                if(id<400 && id>300){
                    img.src="003-rain.svg"
                }
                if(id<600 && id>500){
                    img.src="007-thunder.svg"
                }

                if(id<700 && id>600){
                    img.src="008-snow.svg"
                }
                if(id<800 && id>700){
                    img.src="049-cold.svg"
                }
                if(id==800){
                    img.src="001-sunny.svg"
                }
                if(id>800){
                    img.src="002-cloudy.svg"
                }
            
            })
        .catch(console.error());
    })
});
button.addEventListener('click',()=>{
    var search=inputVal.value;
    inputVal.value="";
    const api=`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=408c29a5868f31d539097c662762c8ca`;
    fetch(api).then(res=> res.json())
        .then( data=>{
                console.log(data);
                cityName.innerHTML='<i class="fas fa-map-marked-alt"></i> '+data.name+" ,"+data.sys.country;
                temp.innerHTML=Math.round(data.main.temp-273)+" °c";
                desc.innerHTML=data.weather[0].main;

                let id=data.weather[0].id;

                if(id<300 && id>200){
                    img.src="006-storm.svg"
                }
                if(id<400 && id>300){
                    img.src="003-rain.svg"
                }
                if(id<600 && id>500){
                    img.src="007-thunder.svg"
                }

                if(id<700 && id>600){
                    img.src="008-snow.svg"
                }
                if(id<800 && id>700){
                    img.src="049-cold.svg"
                }
                if(id==800){
                    img.src="001-sunny.svg"
                }
                if(id>800){
                    img.src="002-cloudy.svg"
                }
            
        })
    .catch(console.log(error));
})



button.addEventListener('click',()=>{
    var search=inputVal.value;
    inputVal.value="";
    const api=`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=408c29a5868f31d539097c662762c8ca`;
    fetch(api).then(res=> res.json())
        .then( data=>{
                console.log(data);
                cityName.innerHTML='<i class="fas fa-map-marked-alt"></i> '+data.name+" ,"+data.sys.country;
                temp.innerHTML=Math.round(data.main.temp-273)+" °c";
                desc.innerHTML=data.weather[0].main;

                let id=data.weather[0].id;

                if(id<300 && id>200){
                    img.src="013-storm-2.svg"
                }
                if(id<400 && id>300){
                    img.src="003-rainy.svg"
                }
                if(id<600 && id>500){
                    img.src="004-rainy-1.svg"
                }

                if(id<700 && id>600){
                    img.src="006-snowy.svg"
                }
                if(id<800 && id>700){
                    img.src="017-foog.svg"
                }
                if(id==800){
                    img.src="039-sun.svg"
                }
                if(id>800){
                    img.src="011-cloudy.svg"
                }
            
            
        })
    .catch(console.log(error));
})