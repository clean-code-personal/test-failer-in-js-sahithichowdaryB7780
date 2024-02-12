const { print_color_map } = require('./misaligned.js');
const { expect } = require("chai");
const returned_contents_print_color_map = print_color_map();
const colorMap = returned_contents_print_color_map.color_map ; 
const majorColors = returned_contents_print_color_map.majorColors ; 
const minorColors = returned_contents_print_color_map.minorColors; 
 //The misalignment is identified by the column width occupied,when output is not aligned it has different column width at each row
function testColumnAlignment() {
    const rows = colorMap.trim().split('\n');
    const columns = rows.map(row => row.split('|'));

    // Check alignment of each column
    columns.forEach((column, columnIndex) => {
        const columnWidth = Math.max(...column.map(cell => cell.length));
        const misalignedCells = column.filter(cell => cell.length !== columnWidth);

        if (misalignedCells.length > 0) {
            console.log(`Misalignment detected in column ${columnIndex + 1}:`);
            misalignedCells.forEach((cell, rowIndex) => {
                console.log(`  Row ${rowIndex + 1}: "${cell.trim()}"`);
            });

            // Fail the test if misalignment is detected
            expect(misalignedCells.length).to.equal(0);
        }
    });
}
 


//The misalignment is identified by the column width occupied,when output is not aligned it has different column width at each row
 function testColorMapLength() {
    //colorMap split at \n character and we filter to delete empty rows
    const colorMapLines = colorMap.split("\n").filter(Boolean);
    const maxSizeOfColorPair = (majorColors.length * minorColors.length);
    expect(colorMapLines.length).equals(maxSizeOfColorPair);
}
   

    // Run the tests
testColorMapLength();
testColumnAlignment();


