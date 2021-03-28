const c = document.getElementById("canvas")
function scale(){
    c.width = window.innerWidth;
    c.height = window.innerHeight;
}

window.addEventListener('resize', scale, false);

scale();