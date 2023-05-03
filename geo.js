const button = document.getElementById("btn");
if(button){
    console.log("aaaa");
button.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(position => {
        const {latitude, longitude} = position.coords;
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
        fetch(url).then(res => res.json()).then(data => {
            console.table(data.address);
            console.table(data);
        }).catch(() => {
            console.log("Error fetching data from API");
        });
    });
});
};