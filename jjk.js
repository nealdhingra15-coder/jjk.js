// ========== SAFE GLOBAL INPUT ==========
window.KA = false;
window.KD = false;
window.KW = false;
window.KS = false;
window.KH = false;

document.onkeydown = (e) => {
    if (e.key === "a") KA = true;
    if (e.key === "d") KD = true;
    if (e.key === "w") KW = true;
    if (e.key === "s") KS = true;
    if (e.key === "h") KH = true;
};

document.onkeyup = (e) => {
    if (e.key === "a") KA = false;
    if (e.key === "d") KD = false;
    if (e.key === "w") KW = false;
    if (e.key === "s") KS = false;
    if (e.key === "h") KH = false;
};

// ========== ELEMENTS ==========

// Infinity barrier (safe)
elements.gojo_infinity = {
    color: "#ffffff",
    state: "solid",
    behavior: behaviors.WALL,
    hardness: 999999,
    density: 999999
};

// Purple energy (safe)
elements.hollow_purple = {
    color: "#aa00ff",
    state: "gas",
    behavior: [
        "EX:20>plasma|EX:20>plasma|EX:20>plasma",
        "M1|XX|M1",
        "EX:20>plasma|EX:20>plasma|EX:20>plasma"
    ]
};

// Gojo player
elements.gojo = {
    color: "#66ccff",
    state: "solid",

    tick(pixel) {

        if (KA) tryMove(pixel, pixel.x - 1, pixel.y);
        if (KD) tryMove(pixel, pixel.x + 1, pixel.y);
        if (KW) tryMove(pixel, pixel.x, pixel.y - 1);
        if (KS) tryMove(pixel, pixel.x, pixel.y + 1);

        const ring = [
            [-1,-1],[0,-1],[1,-1],
            [-1,0],[1,0],
            [-1,1],[0,1],[1,1]
        ];

        for (let i = 0; i < ring.length; i++) {
            let dx = ring[i][0];
            let dy = ring[i][1];

            if (isEmpty(pixel.x + dx, pixel.y + dy)) {
                createPixel("gojo_infinity", pixel.x + dx, pixel.y + dy);
            }
        }

        if (KH) {
            for (let i = 1; i < 15; i++) {
                if (isEmpty(pixel.x + i, pixel.y)) {
                    createPixel("hollow_purple", pixel.x + i, pixel.y);
                }
            }
        }
    }
};
