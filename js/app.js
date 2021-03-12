function initMap() {
    const myLatlng = { lat: 30.71426069701072, lng: 76.80759787164841 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: myLatlng,
    });
    // Adding the marker.
    var marker = new google.maps.Marker({
        position: myLatlng,
        map,
        title: "Click the map to get Lat/Lng!",
    });
    // Configure the click listener.
    map.addListener("click", (mapsMouseEvent) => {
        // Close the current Marker.
        marker=marker.setMap(null);
        // Add New Marker.
        marker = new google.maps.Marker({
            position: mapsMouseEvent.latLng,
            map,
            title: "I am here!",
        });
        // Updating the current lat and lng to form.
        document.getElementById('lat').value = mapsMouseEvent.latLng.lat();
        document.getElementById('lng').value = mapsMouseEvent.latLng.lng();
    });

    // POP UP WINDOW.
    var parent = document.querySelector(".m-p");
    var X = document.querySelector(".x");
    function appear() {
        parent.style.display = "block";
    }
    X.addEventListener("click", disappearx);
    function disappearx() {
        parent.style.display = "none";
    }
    parent.addEventListener("click", disappearout);
    function disappearout(e) {
        if (e.target.className == "m-p") {
            parent.style.display = "none";
        }
    }
    map.addListener("click", appear); 
}
    
