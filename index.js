// Main package function
function emptyFields(fields) {
    // Returns true if the input is either undefined, null, or empty, false otherwise
    temp = false;
    fields.forEach(function(slug) {
        if (slug == undefined || slug == '' || slug == null) {
            temp = true;
            return false;
        }
    });
    return temp;
}

// Make the main function available to other packages that require us
module.exports = emptyFields;