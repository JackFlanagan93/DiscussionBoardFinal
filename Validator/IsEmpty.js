//Validator
const isEmpty = (checkedUser) =>
    checkedUser === undefined ||
    checkedUser === null ||
    checkedUser.length === 0 ||
    (typeof value === "object" && Object.keys(checkedUser).length === 0);
module.exports = isEmpty;