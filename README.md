# empty-fields

A Node.js package that checks whether a given fields array null or empty.
## Usage

First, install the package using npm:

    npm install empty-fields --save

Then, require the package and use it like so:

    var emptyFields = require('empty-fields');

    var params = req.body;
    var first_name = params.first_name,  
        last_name = params.last_name,
        email = params.email,
        password = params.password;

    var fieldsToCheck = [first_name, last_name, email, password];
    console.log(emptyFields(fieldsToCheck)); // false  

## License

MIT