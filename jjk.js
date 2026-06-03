// =====================
// KEYBOARD CONTROLS
// =====================

var KA = false;
var KD = false;
var KW = false;
var KS = false;

document.onkeydown = function(e) {
    if(e.keyCode === 65) KA = true; // A
    if(e.keyCode === 68) KD = true; // D
    if(e.keyCode === 87) KW = true; // W
    if(e.keyCode === 83) KS = true; // S
};

document.onkeyup = function(e) {
    if(e.keyCode === 65) KA = false;
    if(e.keyCode === 68) KD = false;
    if(e.keyCode === 87) KW = false;
    if(e.keyCode === 83) KS = false;
};

// =====================
// INFINITY SHIELD
// =====================

elements.infinity_shield = {
    color: "rgba(0,0,0,0)",
    hidden: true,
    category: "special",
    state: "solid",
    hardness: 999999,
    density: 999999,
    tick: function(pixel) {
        pixel.temp = 20;
    }
};

// =====================
// GOJO
// =====================

elements.gojo = {
    name: "Gojo",
    color: "#66ccff",
    category: "special",
    state: "solid",
    density: 1000,

    tick: function(pixel) {

        // WASD movement
        if(KA) tryMove(pixel,pixel.x-1,pixel.y);
        if(KD) tryMove(pixel,pixel.x+1,pixel.y);
        if(KW) tryMove(pixel,pixel.x,pixel.y-1);
        if(KS) tryMove(pixel,pixel.x,pixel.y+1);

        // Self movement when idle
        if(!KA && !KD && !KW && !KS) {
            if(Math.random() < 0.25) {
                tryMove(pixel,pixel.x+(Math.random()<0.5?-1:1),pixel.y);
            }
        }

        // Infinity Barrier

        for(var dx=-1; dx<=1; dx++) {
            for(var dy=-1; dy<=1; dy++) {

                if(dx === 0 && dy === 0) continue;

                var x = pixel.x + dx;
                var y = pixel.y + dy;

                if(isEmpty(x,y)) {
                    createPixel("infinity_shield",x,y);
                }
            }
        }
    }
};

console.log("GOJO MOD LOADED");
