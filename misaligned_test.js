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
        const cellLengths = column.map(cell => cell.length);
        //In cellLengths array index 0 contains index length
        //In cellLengths array index 1 contains majorColor
         //In cellLengths array index 2 contains minorColor
        const pairNumberLength = cellLengths[0];
        const majorColorLength = cellLengths[1];
        const minorColorLength = cellLengths[2];


            expect(pairNumberLength).to.be.oneOf([1, 2]);

            expect(majorColorLength).to.equal(6);
            expect(minorColorLength).to.be.oneOf([5,6]);
        
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
console.log("All is well (maybe)!!");


