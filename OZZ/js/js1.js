function fun1() {
	var str = document.getElementById("inputText").value;
	alert("Value inside the box is: "+str);
}
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 10000); // Change image every 10 seconds
}

<!-- <script >
		function initMap() {
			var location = {lat: 55.15612939, lng: 61.37640148};
			var map = new google.maps.Map(document.getElementById("map"), {
				zoom: 4, 
				center: location
			});
			var marker = new google.maps.Marker ({
				position: location, 
				map: map
			});
		}

AIzaSyA99JLeWBguH5wYyjqQ1dQvKboNN2nqGT8
	</script> --!>
	
	<script async defer src="https://maps.googleapis.com/map/api/js?key=AIzaSyA99JLeWBguH5wYyjqQ1dQvKboNN2nqGT8callback=initMap"></script>