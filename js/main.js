// api de mapa 

function iniciarMap(){
	var coord = { lat:-34.603747 ,lng:-58.3816794};
	var Map = new google.maps.Map(document.getElementById('map'),{
		zoom :10,
		center: coord
	}); 
}



// buscador 

const input = document.getElementById("buscador");
const items = document.querySelectorAll(".item");

input.addEventListener("keyup", function() {
  const query = this.value.toLowerCase();

  items.forEach(function(item) {
    const title = item.querySelector("h2").innerText.toLowerCase();
    if (title.indexOf(query) !== -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});




// parte del carrito 


