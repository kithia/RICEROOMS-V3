
var div = document.querySelector("#listingDetail");

var address = "26 Watermint Quay";
var image = "https://lid.zoocdn.com/1024/768/c25e42fda9a1f7cc1cc78ed5607cf70e1db751bb.jpg";
var description = "a jewish neighborhood";
var reviews = "nice place";

div.innerHTML += address + "<br>" + "<img src = " + image + " ><br>" + description + "<br>" + reviews + "<br>";
