const { print_color_map } = require('./misaligned.js');
const { expect } = require("chai");
const returned_contents_print_color_map = print_color_map();
const colorMap = returned_contents_print_color_map.color_map || returned_contents_print_color_map[0]; // Handle direct return or return via object
const majorColors = returned_contents_print_color_map.majorColors || returned_contents_print_color_map[1]; // Handle direct return or return via object
const minorColors = returned_contents_print_color_map.minorColors || returned_contents_print_color_map[2]; // Handle direct return or return via object
console.log(colorMap);
 //The misalignment is identified by the column width occupied,when output is not aligned it has different column width at each row
 function testColorMapLength() {
    const colorMapLines = colorMap.split("\n").filter(Boolean);
    const maxSizeOfColorPair = (majorColors.length * minorColors.length);
    expect(colorMapLines.length).equals(maxSizeOfColorPair);
}
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
    // The size of misaligned table is compared with actual table.When table is misaligned,it fails at this test case
    // Run the tests
testColorMapLength();
testColumnAlignment();


