const windows=document.querySelectorAll(".window")
windows.forEach(window => {
    let isDragging = false;
    let offset = { x: 0, y: 0 };

    const winBar = window.querySelector('.win-bar');

    winBar.addEventListener('mousedown', (e) => {
        isDragging = true;

        // Calculate the offset from the click point to the top-left corner of the window
        offset.x = e.clientX - window.getBoundingClientRect().left;
        offset.y = e.clientY - window.getBoundingClientRect().top;
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            // Update the window position based on the mouse movement
            window.style.left = e.clientX - offset.x + 'px';
            window.style.top = e.clientY - offset.y + 'px';
        }
    });

    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
        }
    });
});


function createWindow(){

}

function closeWindow(){

}

var mouse={
    x:undefined,
    y:undefined,
    down:false,
    dragged:false,
}

window.onmousedown=()=>{
    mouse.down=true;
}

window.onmouseup=()=>{
    mouse.down=false;
}

window.onmousemove=(e)=>{
    mouse.x=e.clientX;
    mouse.y=e.clientY;
    //console.log(mouse.x+" vs."+mouse.y)
    if(mouse.down){
        mouse.dragged=true;
        //console.log(mouse.dragged);
    }
}

var win={
    win:document.getElementsByClassName("window"),
    bar:document.getElementsByClassName("win-bar"),
    min:document.getElementsByClassName("win-min"),
    max:document.getElementsByClassName("win-max"),
    close:document.getElementsByClassName("win-close"),
    content:document.getElementsByClassName("win-content"),
}

for(let i=0;i<win.win.length;i++){
    win.win.minimized=false;
    win.win[i].mini=function(){
        win.win[i].style.backdropFilter="blur(16px)";
        win.win[i].animate(
            {
                opacity:0.4,
                backdropFilter:"blur(16px)"
            },
            {
                duration:500,
                fill:"forwards",
                easing:"cubic-bezier(0.165, 0.84, 0.44, 1)"
            }
        )
    }
    win.min[i].onclick=()=>{
        win.win[i].mini();
    }

    win.max[i].onclick=()=>{
        win.win[i].maxi();
    }
}
var windowIsDragged=false;