function size(cms) {
    //The fault has been fixed at the line  as we dont't miss the value 38
    if (cms <= 38) {
        return 'S';
    } else if (cms > 38 && cms < 42) {
        return 'M';
    } else {
        return 'L';
    }
}
module.exports={size};
