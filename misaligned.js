const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];

function print_color_map() {
  let color_map = "";
  //max length of index is calculated
  const maxIndexWidth = String(majorColors.length * minorColors.length).length;
  //max length of majorcolor is calculated
  const maxMajorColorsWidth = Math.max(...majorColors.map(color => color.length));
  //max length of minorcolor is calculated
  const maxMinorColorsWidth = Math.max(...minorColors.map(color => color.length));

  for (let i = 0; i < majorColors.length; i++) {
    for (let j = 0; j < minorColors.length; j++) {
      const index = i * minorColors.length + j + 1;
      // we are fitting the element in max widths possible
      const paddedIndex = String(index).padStart(maxIndexWidth);
      const paddedMajorColor = String(majorColors[i]).padEnd(maxMajorColorsWidth, " "); // Use spaces for padding
      const paddedMinorColor = String(minorColors[j]).padEnd(maxMinorColorsWidth, " "); // Use spaces for padding
      // formatting the string
      color_map += `${paddedIndex}|${paddedMajorColor}|${paddedMinorColor}\n`;
    }
  }

  console.log(color_map);
  return { color_map, majorColors, minorColors };
}

module.exports = { print_color_map };





