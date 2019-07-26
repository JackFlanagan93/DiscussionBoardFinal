const Validator = require('validator');

//Alphanumeric
const isAlphanumeric = (checkedUser) => {
    if (!Validator.isAlphanumeric(checkedUser, 'en-GB')) {
        return false;
    } else {
        return true;
    }
}
module.exports = isAlphanumeric;