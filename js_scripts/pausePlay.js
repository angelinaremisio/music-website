//When another song is started while another is playing, pause previous song
document.addEventListener('play', function(e){  
    var track_number = 0;
    var audios = document.getElementsByTagName('audio');
    var shuffle_status = document.getElementById("shuffle_button").style.backgroundColor;
    for(var i = 0, len = audios.length; i < len;i++){  
        if(audios[i] != e.target){  
            audios[i].pause();
	//makes loop button visible
	    document.getElementById("loop_button").style.visibility = "visible"; 
	//restarts previous song -->
            audios[i].currentTime = 0; 
	}
	else{
	    track_number = i;
	}
    }  
}, true);