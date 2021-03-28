let cityDetail ={
    fetchCity:function(name){
        fetch(
            `https://nominatim.openstreetmap.org/?addressdetails=1&city=${name}&format=json&limit=1`
        )
        .then((response)=>response.json())
        .then((data)=>this.displayCity(data));//.then((dataCity)=>console.log(dataCity));//console.log(data));//
        document.querySelector(".content-17").innerText = name+",";
    },
    displayCity:function(data){
        document.querySelector(".content-18").innerText = data[0].address.country;
        document.querySelector(".content-11").innerText = data[0].display_name;
        document.querySelector(".content-12").innerText = 'Country : '+data[0].address.country;
        document.querySelector(".content-13").innerText = 'State   : '+data[0].address.state;
        document.querySelector(".content-14").innerText = 'State disctrict : '+data[0].address.state_district;
        document.querySelector(".content-15").innerText = 'City    : '+data[0].address.city;
        document.querySelector(".content-16").src = data[0].icon;
        document.querySelector(".content-20").innerText = 'Longitude '+data[0].lon; 
        document.querySelector(".content-21").innerText = 'Latitude '+data[0].lat; 
        console.log(data[0].lat,data[0].lon)
    },
    search:function() {
        this.fetchCity(document.querySelector(".searchBar-2").value);
    }
}
let cityDetailLatLon ={
    fetchCity:function(lat,lon){
        fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=18&addressdetails=1`
        )
        .then((response)=>response.json())
        .then((data)=>this.displayCity(data));//.then((dataCity)=>console.log(dataCity));//console.log(data));//
    },
    displayCity:function(data){
        const {county,state,state_district} = data.address;
        document.querySelector(".content-17").innerText = data.address.city;
        document.querySelector(".content-18").innerText = data.address.country;
        document.querySelector(".content-11").innerText = data.display_name;
        document.querySelector(".content-12").innerText = 'Country : '+data.address.country;
        document.querySelector(".content-13").innerText = 'State   : '+data.address.state;
        document.querySelector(".content-14").innerText = 'State disctrict : '+data.address.state_district;
        document.querySelector(".content-15").innerText = 'City    : '+data.address.city; 
        document.querySelector(".content-20").innerText = 'Longitude '+data.lon; 
        document.querySelector(".content-21").innerText = 'Latitude '+data.lat; 
        console.log(data[0].lat,data[0].lon)
    },
    search:function() {
        this.fetchCity(document.querySelector(".searchLat-2").value,document.querySelector(".searchLon-2").value);
    }
}
document.querySelector(".searchButton-3").addEventListener("click",function(){
    cityDetail.search();
});
document.querySelector(".searchButton-4").addEventListener("click",function(){
    cityDetailLatLon.search();
});
document.querySelector(".resetButton-4").addEventListener("click",function(){
    window.location.reload();
});
