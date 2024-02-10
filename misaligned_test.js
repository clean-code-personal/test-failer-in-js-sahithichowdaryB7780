const { print_color_map } = require('./misaligned.js');
const { expect } = require("chai");
const returned_contents_print_color_map = print_color_map();
const colorMap = returned_contents_print_color_map.color_map ; // Handle direct return or return via object
const majorColors = returned_contents_print_color_map.majorColors ; // Handle direct return or return via object
const minorColors = returned_contents_print_color_map.minorColors; // Handle direct return or return via object
console.log(colorMap);
 //The misalignment is identified by the column width occupied,when output is not aligned it has different column width at each row
function testColumnAlignment() {
        
            const rows = colorMap.trim().split('\n');
            const columns = rows.map(row => row.split('|').map(cell => cell.trim()));

            // Check alignment of each column
            columns.forEach(column => {
                const columnWidth = Math.max(...column.map(cell => cell.length));
                //This fails
                expect(column.every(cell => cell.length === columnWidth)).to.be.true;
            });
        } 
//The misalignment is identified by the column width occupied,when output is not aligned it has different column width at each row
 function testColorMapLength() {
    const colorMapLines = colorMap.split("\n").filter(Boolean);
    const maxSizeOfColorPair = (majorColors.length * minorColors.length);
    console.log(colorMapLines.length);
    console.log(maxSizeOfColorPair);
    expect(colorMapLines.length).equals(maxSizeOfColorPair);
}
   

    // Run the tests
testColorMapLength();
testColumnAlignment();


