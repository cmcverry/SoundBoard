var playing = {
	'watch-alarm':false,
	'fire-truck':false,
	'desk-bell':false,
	'slot-machine':false
};

var player = {
	'watch-alarm':null,
	'fire-truck':null,
	'desk-bell':null,
	'slot-machine':null
};


var soundArray = [0,0,0,0]

var soundNames =['','watch-alarm','fire-truck','desk-bell','slot-machine']


function playPause(sound){
	if(playing[sound]){
		playing[sound]=false;
        player[sound].pause();
	}else{
		playing[sound]=true;
        player[sound] = new Audio("sounds/"+ sound + ".mp3");
        player[sound].play();
    }
	}

function changeSound(id, index){
	 soundArray[index] = (soundArray[index] + 1) % 5;
	 document.getElementById(id).innerHTML = soundArray[index]; 

}

var soundInterval = setInterval(playSound, 1000);

// function playSound(index) {
//  	if(soundArray[index] == 1){
//  		soundName[index].play();
//  	} else if (soundArray[index] == 2){
//  		player[sound].play();
//  	}else if (soundArray[index] == 3){
//  		player[sound].play();
//  	}else if (soundArray[index] == 4){
//  		player[sound].play();
//  	} else{

//  	}
var currentIndex = 0;
function playSound(){
	var soundNumber = soundArray[currentIndex]; 
	if(soundNumber > 0){
		var soundName = soundNames[soundNumber];
		playOnce(soundName);
	}
	updateView();
	currentIndex = (currentIndex + 1) % 4;
}

function playOnce(name){
	 var player = new Audio("sounds/"+ name + ".mp3");
       player.play();
       var stopPlayback = function(){
       		player.pause();
       }
    setTimeout(stopPlayback, 1000);
}

var elements = [document.getElementById('cell1'),
				document.getElementById('cell2'),
				document.getElementById('cell3'),
				document.getElementById('cell4')];
function updateView(){
	for (var i = 0; i < 4; i++){
		if (i == currentIndex){
			elements[i].className = "active";
		} else{
			elements[i].className = "";
		}
	}
}






