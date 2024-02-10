const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];

function print_color_map() {
    let color_map = "";
    color_map += "Index | Major Color | Minor Color\n"; // Adding header
    color_map += "--------------------------------\n"; // Adding separator
    for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {
            color_map += `${i * 5 + j} | ${majorColors[i]} | ${minorColors[j]}\n`;
        }
    }
    return color_map; // Returning only the string representation
}

module.exports = { print_color_map, majorColorsLength: majorColors.length, minorColorsLength: minorColors.length };





