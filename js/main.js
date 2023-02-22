// api de mapa 

function iniciarMap(){
	var coord = { lat:-34.603747 ,lng:-58.3816794};
	var Map = new google.maps.Map(document.getElementById('map'),{
		zoom :10,
		center: coord
	}); 
}



// buscador 

  