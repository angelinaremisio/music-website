function next_song(){
	var audios = document.getElementsByTagName('audio');
	var shuffled_status = document.getElementById("shuffle_button").style.backgroundColor;
   	for(var i = 0, len = audios.length; i < len;i++){
		if(audios[i].currentTime == audios[i].duration && audios[i].loop == false){
			if (shuffled_status != "rgb(29, 51, 102)" && i != audios.length){
				audios[i+1].play();
			}

			else{
				shuffle();
			}
			
		}
	}
}

// check if song is over every 0.5 second
setInterval(next_song, 500); 