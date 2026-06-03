elements.gojo = {
    name: "Gojo",
    color: "#66ccff",
    category: "special",
    state: "solid",
    behavior: behaviors.WALL,
    density: 1000,
    desc: "The strongest sorcerer."
};

// Register the element
if (typeof finalizeElement === "function") {
    finalizeElement("gojo", elements.gojo);
}

// Create the button in the menu
if (typeof createElementButton === "function") {
    createElementButton("gojo");
}

console.log("Gojo loaded successfully!");
