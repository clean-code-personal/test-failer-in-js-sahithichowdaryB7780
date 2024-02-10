const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];

function print_color_map() {
    let color_map = "";
    for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {
            color_map += `${i * 5 + j} | ${majorColors[i]} | ${minorColors[j]}\n`;
        }
    }
    return { colorMap, majorColors, minorColors }; // Returning color map ,majorColors and minorColors
}

module.exports = { print_color_map };





