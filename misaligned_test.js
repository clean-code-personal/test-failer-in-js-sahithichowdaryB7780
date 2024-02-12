const { print_color_map } = require('./misaligned.js');
const { expect } = require("chai");
const returned_contents_print_color_map = print_color_map();
const colorMap = returned_contents_print_color_map.color_map ; 
const majorColors = returned_contents_print_color_map.majorColors ; 
const minorColors = returned_contents_print_color_map.minorColors; 
console.log(colorMap);
 //The misalignment is identified by the column width occupied,when output is not aligned it has different column width at each row
function testColumnAlignment() {

            //an array is formed with each row as an element in array
            const rows = colorMap.trim().split('\n');
            //multi-array is formed with each cell acts as elements inside inner array
            const columns = rows.map(row => row.split('|'));

            // Check alignment of each column
            columns.forEach(column => {
                 //We calculate the maximum cell length
                const columnWidth = Math.max(...column.map(cell => cell.length));
                //This fails
                //This fails as we compare all cell lengths are equal or not
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


