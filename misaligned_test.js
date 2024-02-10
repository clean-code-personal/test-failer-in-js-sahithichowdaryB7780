const { print_color_map, majorColors, minorColors } = require('./misaligned.js');
import('chai').then(chai => {
    const { expect } = chai;


    const { print_color_map, majorColors, minorColors } = require('./misaligned.js');
    
    // The size of misaligned table is compared with actual table.When table is misaligned,it fails at this test case
    function testColorMapLength() {
        const result = print_color_map();
        const colorMapLength = result.length;
        //This fails
        expect(colorMapLength).to.equal(majorColors * minorColors);
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

});
