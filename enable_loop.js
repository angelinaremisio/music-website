function enable_loop(){
   var audios = document.getElementsByTagName('audio');
   for(var i = 0, len = audios.length; i < len;i++){
	if(audios[i].currentTime > 0){
		if(audios[i].loop == true){
		     audios[i].loop = false;
		     document.getElementById("loop_button").style.backgroundColor = "red";
		}
		else{
		     audios[i].loop = true;
		     document.getElementById("loop_button").style.backgroundColor = "green";
		}
   	   
        }
   }
}
