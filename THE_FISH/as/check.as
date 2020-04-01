/*

second frame
forward playhead to appropriate state
"menu_unlocked_story"
"unlockFish"
"menu_default"
"fish"

*/

//define state on first run and send to that frame
if(so_fish.data.unlocked == undefined){
	so_fish.data.unlocked = "firstrun";
	so_fish.flush();
	//trace("firstrun has been set");
}

gotoAndStop(so_fish.data.unlocked);