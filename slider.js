let left=document.getElementById("left");
let right=document.getElementById("right");
let song=document.getElementById("song");
console.log("hello");
console.log(left);
let itr=3;
song.childNodes[itr].querySelectorAll("audio")[0].play();
song.childNodes[itr].querySelectorAll("audio")[0].onended=rightSong;
left.addEventListener("click",(event)=>{
    song.childNodes[itr].hidden=true;
    song.childNodes[itr].querySelectorAll("audio")[0].pause();
    song.childNodes[itr].querySelectorAll("audio")[0].currentTime=0;
    if (itr==3){
        itr=13;
    }
    else {
        itr=itr-2;
    }
    song.childNodes[itr].querySelectorAll("audio")[0].play();
    song.childNodes[itr].hidden=false;
    song.childNodes[itr].querySelectorAll("audio")[0].onended=rightSong;
});
right.addEventListener("click",(event)=>{
    song.childNodes[itr].hidden=true;
    song.childNodes[itr].querySelectorAll("audio")[0].pause();
    song.childNodes[itr].querySelectorAll("audio")[0].currentTime=0;
    if (itr==13){
        itr=3;
    }
    else {
        itr=itr+2;
    }
    song.childNodes[itr].querySelectorAll("audio")[0].play();
    song.childNodes[itr].hidden=false;
    song.childNodes[itr].querySelectorAll("audio")[0].onended=rightSong;
});

function rightSong(){
    song.childNodes[itr].hidden=true;
    song.childNodes[itr].querySelectorAll("audio")[0].pause();
    song.childNodes[itr].querySelectorAll("audio")[0].currentTime=0;
    if (itr==13){
        itr=3;
    }
    else {
        itr=itr+2;
    }
    song.childNodes[itr].querySelectorAll("audio")[0].play();
    song.childNodes[itr].hidden=false;
    song.childNodes[itr].querySelectorAll("audio")[0].onended=rightSong;
}