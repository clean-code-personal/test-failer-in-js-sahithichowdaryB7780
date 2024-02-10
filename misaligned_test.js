const { print_color_map } = require('./misaligned.js');
const { expect } = require("chai");


    // The size of misaligned table is compared with actual table.When table is misaligned,it fails at this test case
 function testColorMapLength() {
    const returned_contents_print_color_map = print_color_map();
    const colorMap = returned_contents_print_color_map.colorMap || result[0]; // Handle direct return or return via object
    const majorColors = returned_contents_print_color_map.majorColors || result[1]; // Handle direct return or return via object
    const minorColors = returned_contents_print_color_map.minorColors || result[2]; // Handle direct return or return via object

    const colorMapLines = colorMap.split("\n").filter(Boolean);
    const majorColorArray = [...majorColors];
    const minorColorArray = [...minorColors];
    const maxSizeOfColorPair = majorColorArray.length * minorColorArray.length;
    expect(colorMapLines.length).equals(maxSizeOfColorPair);
}


    //The misalignment is identified by the column width occupied,when output is not aligned it has different column width at each row
    function testColumnAlignment() {
        
            const result = print_color_map();
            const rows = result.trim().split('\n');
            const columns = rows.map(row => row.split('|').map(cell => cell.trim()));

            // Check alignment of each column
            columns.forEach(column => {
                const columnWidth = Math.max(...column.map(cell => cell.length));
                //This fails
                expect(column.every(cell => cell.length === columnWidth)).to.be.true;
            });
        } 
    

    // Run the tests
testColorMapLength();
testColumnAlignment();


