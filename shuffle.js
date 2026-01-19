function shuffle() {
    
    var audios = document.getElementsByTagName('audio');
    var chosen_audio = Math.floor(Math.random() * audios.length); //0 to audios.length-1
    audios[chosen_audio].play();	
}

document.getElementById("shuffle_button").style.backgroundColor = "red";

function press_shuffle(){
	var status = document.getElementById("shuffle_button").style.backgroundColor;
	if(status == "green"){
		document.getElementById("shuffle_button").style.backgroundColor = "red";
	}
	else{
    		var songs_playing = false
		var audios = document.getElementsByTagName('audio');
   		for(var i = 0, len = audios.length; i < len;i++){
			if(audios[i].currentTime > 0 || audios[i].paused == false){
				songs_playing = true;
			}	
		}
		if(songs_playing == false){
			shuffle(); 
		}

		document.getElementById("shuffle_button").style.backgroundColor = "green";
	}
}