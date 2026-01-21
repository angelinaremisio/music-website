//Hides/shows song when album name is pressed
function show_songs(elementId){
    var display = document.getElementById(elementId).style.display;
    if(display == "inline-block"){
        document.getElementById(elementId).style.display = "none";
    }
    else {
        document.getElementById(elementId).style.display = "inline-block";
    }
}