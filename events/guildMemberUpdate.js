const salvodiff = require('return-deep-diff');
module.exports = (oMember, nMember) => {
  console.log(salvodiff(oMember, nMember));
};
