function check_loop(){
	var songs_playing = false
	var audios = document.getElementsByTagName('audio');
   	for(var i = 0, len = audios.length; i < len;i++){
		if(audios[i].currentTime > 0 || audios[i].paused == false){
			songs_playing = true;
		}
	}
	if(songs_playing == false){
		document.getElementById("loop_button").style.visibility = "hidden"; 
	}
	else{
		document.getElementById("loop_button").style.visibility = "visible"; 

	}
}
// check loop every 0.5 second
setInterval(check_loop, 500); 