const { print_color_map } = require('./misaligned.js');
const { expect } = require("chai");
const returned_contents_print_color_map = print_color_map();
const colorMap = returned_contents_print_color_map.color_map ; 
const majorColors = returned_contents_print_color_map.majorColors ; 
const minorColors = returned_contents_print_color_map.minorColors; 
console.log(colorMap);
 //The misalignment is identified by the column width occupied,when output is not aligned it has different column width at each row
function testColumnAlignment() {
    const rows = print_color_map().trim().split('\n');
    const columns = rows.map(row => row.split('|').map(cell => cell.trim()));

    columns.forEach(column => {
        let columnWidth;
        if (column[0] === "1") {
            columnWidth = column[0].length; // Length of index, no padding for index of 1
        } else {
            columnWidth = column[0].length + 1; // Length of index with padding
        }
        columnWidth = Math.max(columnWidth, ...column.slice(1).map(cell => cell.length)); // Maximum width of the column
        expect(column.every(cell => cell.length === columnWidth)).to.be.true;
    });
}

//The misalignment is identified by the column width occupied,when output is not aligned it has different column width at each row
 function testColorMapLength() {
    //colorMap split at \n character and we filter to delete empty rows
    const colorMapLines = colorMap.split("\n").filter(Boolean);
    const maxSizeOfColorPair = (majorColors.length * minorColors.length);
    console.log(colorMapLines.length);
    console.log(maxSizeOfColorPair);
    expect(colorMapLines.length).equals(maxSizeOfColorPair);
}
   

    // Run the tests
testColorMapLength();
testColumnAlignment();


