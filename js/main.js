function openGitHub(e){
    e.stopPropagation();
    window.open("https://github.com/HarmOnGitHub",'_blank');
}

function openYouTube(e){
    e.stopPropagation();
    window.open("https://youtube.com/@harm2382",'_blank');
}

var github = document.getElementsByClassName("desktop-github")[0];
var yt = document.getElementsByClassName("desktop-youtube")[0];
github.addEventListener("dblclick", openGitHub);
yt.addEventListener("dblclick", openYouTube);
