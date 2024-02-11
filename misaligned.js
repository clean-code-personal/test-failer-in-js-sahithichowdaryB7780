const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];

function print_color_map() {
    let color_map = "";
    for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {
            const index = i * 5 + j + 1; // Adjust index to start from 1
            const paddedIndex = String(index).padEnd(2); // Padding index to ensure consistent width
            color_map += `${paddedIndex} | ${majorColors[i].padEnd(6)} | ${minorColors[j]}\n`; // Padding major colors for consistent width
        }
    }
    return { color_map, majorColors, minorColors }; // Returning color map ,majorColors and minorColors
}

module.exports = { print_color_map };





