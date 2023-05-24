function openLink(e){
    e.stopPropagation();
    window.open(e.currentTarget.getAttribute('data-link'),'_blank');
}

function discard(item){
    
    if(item.getAttribute('class').split(" ").length == 1){
        desktopIcons.push(item);
    }
}

var desktopIcons = [];

document.querySelectorAll('[class^="desktop-icon-"]').forEach(discard);

desktopIcons.forEach( (item) => {
    item.addEventListener('dblclick',openLink,false);
});