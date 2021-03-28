let city ={
    fetchCity:function(name){
        fetch(
            `https://nominatim.openstreetmap.org/?addressdetails=1&city=${name}&format=json&limit=1`
        )
        .then((response)=>response.json())
        .then((data)=>this.displayCity(data));//.then((dataCity)=>console.log(dataCity));//console.log(data));//
        document.querySelector(".content-3").innerText = name+",";
    },
    displayCity:function(data){
        document.querySelector(".product-2").innerText = data[0].lat;
        document.querySelector(".product-3").innerText = data[0].lon;
        document.querySelector(".searchLat").value = data[0].lat; 
        document.querySelector(".searchLon").value = data[0].lon;
        document.querySelector(".content-5").innerText = data[0].address.country;
        console.log(data[0].lat,data[0].lon)
    },
    search:function() {
        this.fetchCity(document.querySelector(".searchBar-2").value);
    }
}

let weather = {
    fetchWeather: function(productweather, outputType,lon,lat){
        fetch(
            `http://www.7timer.info/bin/api.pl?lon=${lon}&lat=${lat}&product=${productweather}&output=${outputType}`
        )
        .then((response)=>response.json())
        .then((data)=>this.displayWeather(data));
    },
    displayWeather:function(data){
        const {cloudcover,transparency,rh2m,temp2m} = data.dataseries[0];
        const {speed} = data.dataseries[0].wind10m;
        //const {transparency} = data.dataseries[0];
        console.log(cloudcover)
        console.log(data)
        document.querySelector(".content-1").innerText = "Cloudcover : "+ cloudcover;
        document.querySelector(".content-2").innerText = "Transparency : "+transparency;
        document.querySelector(".content-4").innerText =  ""+rh2m+"% Humidity";
        document.querySelector(".content-6").innerText =  "Wind Speed : "+speed +" m/s";
        document.querySelector(".content-7").innerText = "";
        document.querySelector(".content-9").innerText = "dengan temperature :";
        document.querySelector(".content-8").innerText = temp2m+" Celcius";
        //document.querySelector(".icon").src = 'http://www.7timer.info/bin/civil.php?lon=111.084&lat=-7.654&lang=en&ac=0&unit=metric&output=internal&tzshift=0'
    },
    search: function(){
        this.fetchWeather("astro","json",document.querySelector(".searchLon").value,document.querySelector(".searchLat").value);
    }
};
document.querySelector(".searchButton-2").addEventListener("click",function(){
    city.search();
});
document.querySelector(".searchButton").addEventListener("click",function(){
    weather.search();
});
