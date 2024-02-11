const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];

function print_color_map() {
    let color_map = "";
    const maxIndex = majorColors.length * minorColors.length;
    const maxIndexWidth = String(maxIndex).length;

    for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {
            const index = i * minorColors.length + j + 1;
            const paddedIndex = String(index).padStart(maxIndexWidth); // Padding index to ensure consistent width
            const paddedMajorColor = majorColors[i].padEnd(6); // Padding major colors for consistent width
            const paddedMinorColor = minorColors[j].padEnd(7); // Padding minor colors for consistent width
            color_map += `${paddedIndex} | ${paddedMajorColor} | ${paddedMinorColor}\n`;
        }
    }

    return { color_map, majorColors, minorColors }; // Returning color map ,majorColors and minorColors
}

module.exports = { print_color_map };





