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

        const pairNumberLength = cellLengths[0];
        const majorColorLength = cellLengths[1];
        const minorColorLength = cellLengths[2];

        if (pairNumberLength !== 2 || majorColorLength !== 6 || minorColorLength !== 6) {
            console.log(`Misalignment detected in column ${columnIndex + 1}:`);
            console.log(`  Pair Number Length: ${pairNumberLength}`);
            console.log(`  Major Color Length: ${majorColorLength}`);
            console.log(`  Minor Color Length: ${minorColorLength}`);

            // Fail the test if misalignment is detected
            expect(pairNumberLength).to.be.oneOf([1, 2]);

            expect(majorColorLength).to.equal(6);
            expect(minorColorLength).to.equal(6);
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


