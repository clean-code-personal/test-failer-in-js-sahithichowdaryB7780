const { print_color_map, majorColors, minorColors } = require('./misaligned.js');
import('chai').then(chai => {
    const { expect } = chai;


    const { print_color_map, majorColors, minorColors } = require('./misaligned.js');

    function testColorMapLength() {
        const result = print_color_map();
        const colorMapLength = result.length;
        expect(colorMapLength).to.equal(majorColors * minorColors);
    }

    function testColumnAlignment() {
        const result = print_color_map();
        const rows = result.trim().split('\n');
        const columns = rows.map(row => row.split('|').map(cell => cell.trim()));

        // Check alignment of each column
        columns.forEach(column => {
            const columnWidth = Math.max(...column.map(cell => cell.length));
            expect(column.every(cell => cell.length === columnWidth)).to.be.true;
        });
    }

    // Run the tests
    testColorMapLength();
    testColumnAlignment();

});
